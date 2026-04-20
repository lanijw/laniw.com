import ToBeImplemented from "../../components/ToBeImplemented.js";
import _route from "../_route.js";

const Expenses = (rootEl, context) => {
    const outlet = _route("Expense Conscience - laniw.com", rootEl);
    outlet.append(ToBeImplemented());
}

export default Expenses;
