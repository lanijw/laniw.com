import ToBeImplemented from "../../components/ToBeImplemented.js";
import _route from "../_route.js";

/**
 * Displays the Expense Conscience page.
 * @param {HTMLBodyElement} rootEl
 */
const Expenses = (rootEl) => {
    const outlet = _route("Expense Conscience - laniw.com", rootEl);
    outlet.append(ToBeImplemented());
}

export default Expenses;
