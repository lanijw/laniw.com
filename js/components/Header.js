// Claude - top navbar: site logo sits on the left and links back to the home page.
import { a, img, nav } from "../domManip.js";
import { routePaths, routes } from "../routes.js";

const Header = () => {
    const logo = img(
        "/assets/img/logo/laniw_logo-tight.svg",
        "laniw.com logo",
        { classes: ["navbar__logo-img"] },
    );

    return nav([
        a(logo, routePaths.get(routes.HOME), { classes: ["navbar__logo"] }),
    ], { classes: ["navbar"] });
}

export default Header;
