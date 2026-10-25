export default {
  async fetch(request, env) {
    // 1. Fetch static asset from dist/
    const response = await env.ASSETS.fetch(request);

    // 2. If response is 404, ensure custom 404 page is returned
    if (response.status === 404) {
      const url = new URL(request.url);
      url.pathname = '/404.html';
      const notFoundRes = await env.ASSETS.fetch(new Request(url.toString(), request));
      return new Response(notFoundRes.body, {
        status: 404,
        headers: notFoundRes.headers
      });
    }

    // 3. Inject standard security and caching headers
    const headers = new Headers(response.headers);
    headers.set('X-Content-Type-Options', 'nosniff');
    headers.set('X-Frame-Options', 'SAMEORIGIN');
    headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');

    // Cache static assets (images, css, js) aggressively
    const pathname = new URL(request.url).pathname;
    if (pathname.startsWith('/images/') || pathname.endsWith('.webp') || pathname.endsWith('.png') || pathname.endsWith('.svg')) {
      headers.set('Cache-Control', 'public, max-age=31536000, immutable');
    } else if (pathname === '/ads.txt' || pathname === '/robots.txt') {
      headers.set('Cache-Control', 'public, max-age=86400');
    }

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers
    });
  }
};
