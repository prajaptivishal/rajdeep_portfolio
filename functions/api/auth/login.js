export async function onRequestPost(context) {
  const { request, env } = context;
  
  try {
    const { password } = await request.json();
    const adminPassword = env.ADMIN_PASSWORD;

    if (!adminPassword) {
      return new Response(JSON.stringify({ error: "Server misconfiguration" }), { status: 500 });
    }

    if (password === adminPassword) {
      // In a real app, sign a JWT. Here we'll just return a simple token or set a cookie.
      // For simplicity, we'll return a dummy token that the client stores.
      // Real security would use a signed JWT with a secret.
      
      // Let's generate a simple session token (in a real app, use crypto.subtle to sign)
      const token = btoa(`admin:${Date.now()}`); // weak token for demo
      
      return new Response(JSON.stringify({ token, success: true }), {
        headers: { "Content-Type": "application/json" },
      });
    } else {
      return new Response(JSON.stringify({ error: "Invalid password" }), { status: 401 });
    }
  } catch (err) {
    return new Response(JSON.stringify({ error: "Invalid request" }), { status: 400 });
  }
}
