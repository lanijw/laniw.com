/**
 * Creates an HTML element.
 * @param {string}   el - Tag of the element
 * @param {Object}   [options={}]
 * @param {string[]} [options.classes=[]]
 * @param {Object}   [options.attributes={}]
 * @returns {HTMLElement}
 */
const create = (el, { classes = [], attributes = {} } = {}) => {
    const e = document.createElement(el);
    classes.forEach(c => e.classList.add(c));
    Object.entries(attributes).forEach(([k, v]) => e.setAttribute(k, v));
    return e;
}

/**
 * Creates a title element. 
 * @param {string} text - Title text
 * @returns {HTMLTitleElement}
 */
export const title = (text) => {
    const t = create("title");
    t.innerText = text;
    return t;
}

/**
 * Creates a link element.
 * @param {string} href - path to resource
 * @param {string} rel - type of the relationship
 * @returns {HTMLLinkElement}
 */
export const link = (href, rel) => {
    return create("link", {attributes: {href, rel}});
}

/**
 * Creates a main element.
 * @param {Object}   [options={}]
 * @param {string[]} [options.classes=[]]
 * @param {Object}   [options.attributes={}]
 * @returns {HTMLElement}
 */
export const main = (options) => {
    return create("main", options);
}

const h = n => (text, options) => {
    const h = create(`h${n}`, options);
    h.innerText = text;
    return h;
}
/**
 * Creates an h1 element.
 * @param {string} text - Heading text
 * @returns {HTMLHeadingElement}
 */
export const h1 = h(1);
/**
 * Creates an h2 element.
 * @param {string} text - Heading text
 * @returns {HTMLHeadingElement}
 */
export const h2 = h(2);

/**
 * Creates a p element. 
 * @param {string} text - Paragraph text
 * @returns {HTMLParagraphElement}
 */
export const p = (text) => {
    const p = create("p");
    p.innerHTML = text;
    return p;
}

/**
 * Creates an anchor element.
 * @param {string} text - Displayed text
 * @param {string} href - Link to redirect to
 * @returns {HTMLAnchorElement}
 */
export const a = (text, href) => {
    const a = create("a", {attributes: {href}})
    a.innerText = text;
    return a;
}

/**
 * Creates a div element. 
 * @param {HTMLElement[]} children
 * @param {Object}   [options={}]
 * @param {string[]} [options.classes=[]]
 * @param {Object}   [options.attributes={}]
 * @returns {HTMLDivElement}
 */
export const div = (children, options) => {
    const d = create("div", options);
    d.append(...children);
    return d;
}

/**
 * Creates an article element.
 * @param {HTMLElement[]} children
 * @param {Object}   [options={}]
 * @param {string[]} [options.classes=[]]
 * @param {Object}   [options.attributes={}]
 * @returns {HTMLElement}
 */
export const article = (children, options) => {
    const a = create("article", options);
    a.append(...children);
    return a;
}

// Claude - footer helper mirroring the div/article helpers so components can build semantic <footer> elements.
/**
 * Creates a footer element.
 * @param {HTMLElement[]} children
 * @param {Object}   [options={}]
 * @param {string[]} [options.classes=[]]
 * @param {Object}   [options.attributes={}]
 * @returns {HTMLElement}
 */
export const footer = (children, options) => {
    const f = create("footer", options);
    f.append(...children);
    return f;
}
