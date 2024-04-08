import setupLaniwIcon from "../components/laniw-icon.js";
import pageTemplate from "./root.html.js";
import pageCss from "./root.css.js";

const components = [setupLaniwIcon];
components.forEach(setupComponent => setupComponent());

const template = document.createElement("template");
template.innerHTML = pageTemplate + pageCss;

export class Root extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: "open"});
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define("p-root", Root);
