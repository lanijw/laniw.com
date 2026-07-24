import { a, div, h1, h2, p } from "../domManip.js";
import _route from "./_route.js";
import Card from "../components/Card.js";
import { routePaths, routes } from "../routes.js";

/**
 * Displays the Home page content.
 * @param {HTMLBodyElement} rootEl
 */
const Home = rootEl => {
    const outlet = _route("laniw.com", rootEl, false, true);

    outlet.append(
        h1("laniw.com", { classes: ["page-title"] }),
        p(`Welcome to my homepage. As I'm still setting up the rest of the
            webpage, this is more of a sandbox to play around in, but this
            should become my portfolio soon.`),
        div([
            Card([
                h2("GitHub"),
                p(`Find all of my repos, including the repo for this website on my
                GitHub page.`),
                a("GitHub", {
                    attributes: { href: "https://github.com/lanijw/laniw.com" },
                }),
            ], { usesArticleTag: true }),
        ], { classes: ["project-overview"]})
    );
}

export default Home;
