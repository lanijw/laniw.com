import Header from "../components/Header.js";
import Footer from "../components/Footer.js";
import { link, main, title } from "../domManip.js";

/**
 * Sets values and displays/hides elements that must be set for every route.
 * @param {string}      titleText - Title of the page displayed in the browser tab.
 * @param {HTMLElement} rootEl - The element that should contain all of the website content.
 * @param {boolean}     [displayHeader=true] - Whether the navbar should be displayed.
 * @param {boolean}     [displayFooter=true] - Whether the footer should be displayed.
 * @returns {HTMLElement} Outlet for main page content.
 */
const _route = (titleText, rootEl, displayHeader = true, displayFooter = true) => {
    rootEl.innerText = "";

    const head = document.getElementsByTagName("head")[0]

    head.appendChild(title("laniw.com"));
    head.appendChild(link("style/style.css", "stylesheet"));

    if (displayHeader) rootEl.appendChild(Header());
    const outlet = main({classes: ["content"]});
    rootEl.appendChild(outlet);
    if (displayFooter) rootEl.appendChild(Footer());

    return outlet;
}

export default _route;
