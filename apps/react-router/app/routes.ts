import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [index('routes/home.tsx'), route(':slug', 'routes/work-experience.tsx')] satisfies RouteConfig;
