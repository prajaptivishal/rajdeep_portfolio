export async function onRequestGet(context) {
  const { env } = context;
  const bucket = env.R2_BUCKET;

  if (!bucket) {
    return new Response(JSON.stringify({ error: "R2 bucket not configured" }), { status: 500 });
  }

  try {
    const list = await bucket.list();
    // Map to a friendlier format
    const images = list.objects.map(obj => ({
      key: obj.key,
      uploadedAt: obj.uploaded,
      size: obj.size,
      // Assuming the R2 bucket is public or connected to a custom domain
      // If not public, we'd need to generate signed URLs or serve through a worker
      // For this demo, we assume a public domain or just serving via /images/
      // But actually, we need to serve the content.
      // Let's assume we also have a function to serve the image or the bucket is public at a domain.
      // We will return the key, and the frontend can construct the URL.
      url: `/api/images/${obj.key}` 
    }));

    return new Response(JSON.stringify(images), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function onRequestPost(context) {
  const { request, env } = context;
  const bucket = env.R2_BUCKET;

  // Basic auth check
  const authHeader = request.headers.get("Authorization");
  if (!authHeader) {
    return new Response("Unauthorized", { status: 401 });
  }

  if (!bucket) {
    return new Response(JSON.stringify({ error: "R2 bucket not configured" }), { status: 500 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response("No file uploaded", { status: 400 });
    }

    const key = `${Date.now()}-${file.name}`;
    await bucket.put(key, file);

    return new Response(JSON.stringify({ key, success: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
