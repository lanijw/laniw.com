import { routeList, routeComponents, routePaths } from "./routes.js";
import Index from "./routes/Index.js";

const bodyEl = document.getElementsByTagName("body")[0];

const routes = Object.fromEntries(routeList.map(r => [routePaths.get(r), routeComponents.get(r)]));

// Claude - normalize the pathname to always include a trailing slash so routes like "/expenses" match "/expenses/".
const normalizedPath = location.pathname.endsWith("/") ? location.pathname : location.pathname + "/";

// Claude - update the visible URL so the address bar matches the canonical (trailing-slash) form without reloading.
if (normalizedPath !== location.pathname) {
    history.replaceState(null, "", normalizedPath + location.search + location.hash);
}

routes[normalizedPath](bodyEl);
