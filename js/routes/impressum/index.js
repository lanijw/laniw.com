// Claude - new route module for the Impressum page.
import { h1, h2, p } from "../../domManip.js";
import _route from "../_route.js";

/**
 * Displays the Impressum page content.
 * Minimum contact disclosure for a non-commercial Swiss website.
 * @param {HTMLBodyElement} rootEl
 */
const Impressum = (rootEl, context) => {
    // Claude - reuse the shared route scaffolding to set the tab title and mount header/footer.
    const outlet = _route("Impressum - laniw.com", rootEl);

    outlet.append(
        h1("Impressum", { classes: ["impressum__title"] }),
        h2("Responsible for content", { classes: ["impressum__heading"] }),
        p(`Lani Wagner`),
        h2("Contact", { classes: ["impressum__heading"] }),
        p(`Email: laniw.comcontact.plod150@passmail.net`),
        h2("Disclaimer", { classes: ["impressum__heading"] }),
        p(`This website is a private, non-commercial project. Content is provided
            without warranty of any kind. External links are provided for convenience;
            responsibility for their content lies solely with their respective operators.`),
    );
}

export default Impressum;
