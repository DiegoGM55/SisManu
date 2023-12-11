export { default } from 'next-auth/middleware';

// protect all pages in user and maintenance folder
export const config = {
  matcher: ['/user/:path*', '/maintenance/:path*']
};
