// Claude - top navbar: site logo sits on the left and links back to the home page.
import { a, img, nav, button, span, div } from "../domManip.js";
import { routePaths, routes } from "../routes.js";

const Header = () => {
    const logo = img({
        attributes: {
            src: "/assets/img/logo/laniw_logo-tight.svg",
            alt: "laniw.com logo"
        }, classes: ["navbar__logo-img"]
    });

    return nav([
        a(logo, {
            classes: ["navbar__logo"],
            attributes: { href: routePaths.get(routes.HOME) },
        }),
        authContainer,
    ], { classes: ["navbar"], });
}

export default Header;
