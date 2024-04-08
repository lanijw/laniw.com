import setupLaniwIcon from '../components/laniw-icon.js';

const components = [setupLaniwIcon];
components.forEach(setupComponent => setupComponent());

const template = document.createElement('template');
template.innerHTML = `
<c-laniw-icon></c-laniw-icon>
`;

export class Root extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({mode: 'open'});
    shadow.append(template.content.cloneNode(true));
  }
}

customElements.define('p-root', Root);
