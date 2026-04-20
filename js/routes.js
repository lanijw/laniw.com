import Home from "./routes/index.js";
import Expenses from "./routes/expenses/index.js";

/**
 * Enum for all routes.
 * @readonly
 * @enum {number}
 */
export const routes = {
    HOME: 0,
    EXPENSES: 10,
}

export const routeList = [routes.HOME, routes.EXPENSES];

export const routePaths = new Map([
    [routes.HOME, "/"],
    [routes.EXPENSES, "/expenses/"],
]);

export const routeComponents = new Map([
    [routes.HOME, Home],
    [routes.EXPENSES, Expenses],
]);
