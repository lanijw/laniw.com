// Claude - footer containing copyright info and an Impressum link.
import { a, footer, p } from "../domManip.js";
import { routePaths, routes } from "../routes.js";

const Footer = () => {
    return footer([
        p(`© ${new Date().getFullYear()} laniw.com`),
        a("Impressum", { attributes: { href: routePaths.get(routes.IMPRESSUM) }}),
    ], { classes: ["footer"] });
}

export default Footer;
