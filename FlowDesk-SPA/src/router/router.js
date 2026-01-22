import { render } from '../core/render.js';
import { Dashboard ,ListProyects, ProjectDetail} from '../views/index.js';

export async function router() {
  const hash = location.hash || '#/dashboard';
  const [, route, param] = hash.split('/');
  let view = '<p>Cargando...</p>';

  switch (route) {
    case 'dashboard':
      render(Dashboard());
      break;

    case 'projects':
      if (param) {
        render(ProjectDetail(param));
      } else {
        view = await ListProyects();
        render(view)
      }
      break;

    default:
      render(Dashboard());
  }
}