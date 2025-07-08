import { createRequestHandler } from 'react-router';

declare module 'react-router' {
  interface AppLoadContext {
    VALUE_FROM_SERVER: string;
  }
}

const requestHandler = createRequestHandler(() => import('virtual:react-router/server-build'), import.meta.env.MODE);

export default async (request: Request) => {
  return requestHandler(request, {
    VALUE_FROM_SERVER: 'Hello from server Jonathan',
  });
};
