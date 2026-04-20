import { routeList, routeComponents, routePaths } from "./routes.js";
import Index from "./routes/Index.js";

const bodyEl = document.getElementsByTagName("body")[0];

const routes = Object.fromEntries(routeList.map(r => [routePaths.get(r), routeComponents.get(r)]));

routes[location.pathname](bodyEl);
