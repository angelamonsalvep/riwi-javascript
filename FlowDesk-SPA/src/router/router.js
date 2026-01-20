import { render } from '../core/render.js';
import { Dashboard } from '../views/index.js';

export function router() {
  const hash = location.hash || '#/dashboard';
  const [, route, param] = hash.split('/');

  switch (route) {
    case 'dashboard':
      render(Dashboard());
      break;

    case 'projects':
      if (param) {
        render(ProjectDetail(param));
      } else {
        render(Projects());
      }
      break;

    default:
      render(Dashboard());
  }
}