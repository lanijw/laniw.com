import Home from "./routes/index.js";
import Expenses from "./routes/expenses/index.js";
// Claude - import the new Impressum route component.
import Impressum from "./routes/impressum/index.js";

/**
 * Enum for all routes.
 * @readonly
 * @enum {number}
 */
export const routes = {
    HOME: 0,
    EXPENSES: 10,
    // Claude - added IMPRESSUM route key.
    IMPRESSUM: 20,
}

// Claude - register IMPRESSUM in the route list so it is included in the routes map.
export const routeList = [routes.HOME, routes.EXPENSES, routes.IMPRESSUM];

export const routePaths = new Map([
    [routes.HOME, "/"],
    [routes.EXPENSES, "/expenses/"],
    // Claude - map IMPRESSUM to its URL path.
    [routes.IMPRESSUM, "/impressum/"],
]);

export const routeComponents = new Map([
    [routes.HOME, Home],
    [routes.EXPENSES, Expenses],
    // Claude - bind IMPRESSUM to its component.
    [routes.IMPRESSUM, Impressum],
]);
