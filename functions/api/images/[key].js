export async function onRequestGet(context) {
  const { params, env } = context;
  const key = params.key;
  const bucket = env.R2_BUCKET;

  if (!bucket) {
    return new Response("R2 bucket not configured", { status: 500 });
  }

  const object = await bucket.get(key);

  if (!object) {
    return new Response("Object Not Found", { status: 404 });
  }

  const headers = new Headers();
  object.writeHttpMetadata(headers);
  headers.set("etag", object.httpEtag);

  return new Response(object.body, {
    headers,
  });
}

export async function onRequestDelete(context) {
  const { params, request, env } = context;
  const key = params.key;
  const bucket = env.R2_BUCKET;

  // Basic auth check
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!bucket) {
    return new Response("R2 bucket not configured", { status: 500 });
  }

  await bucket.delete(key);

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
