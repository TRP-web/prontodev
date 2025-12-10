export function allowOrigin(request: Request, allowed = ['https://prontodev.dev']) {
  const origin = request.headers.get('origin');

  if (origin && !allowed.includes(origin)) {
    return new Response('Forbidden', { status: 403 });
  }

  return origin;
}