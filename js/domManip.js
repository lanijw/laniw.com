/**
 * @typedef {'button'|'checkbox'|'color'|'date'|'datetime-local'|'email'|'file'|'hidden'|'image'|'month'|'number'|'password'|'radio'|'range'|'reset'|'search'|'submit'|'tel'|'text'|'time'|'url'|'week'} ElType
 */

/**
 * @typedef {Object} ElOptions_Attributes
 * @property {string}  [href]        - Hyperlink reference
 * @property {string}  [rel]         - Relationship type
 * @property {ElType}  [type]        - Type declaration for input elements
 * @property {string}  [placeholder] - Placeholder for input elements
 * @property {boolean} [required]    - Required declaration for input elements
 */

/**
 * Supported events to listen to. Listeners for non-supported will be registered
 * anyway, but may not behave as expected.
 * @typedef {Object} ElOptions_Listeners
 * @property {Array<Function(Event): undefined} [change] - Listeners triggered on change event
 */

/**
 * The complete options object that can be set for any HTML element.
 * @typedef {Object} ElOptions
 * @property {Array<string>} [classes]
 * @property {ElOptions_Attributes} [attributes]
 * @property {ElOptions_Listeners} [listeners]
 */

/**
 * Creates an HTML element.
 * @param {string}   el - Tag of the element
 * @param {ElOptions} [options={}]
 * @returns {HTMLElement}
 */
const create = (el, { classes = [], attributes = {}, listeners = {} } = {}) => {
    const e = document.createElement(el);
    classes.forEach(c => e.classList.add(c));
    Object.entries(attributes).forEach(([k, v]) => e.setAttribute(k, v));
    Object.entries(listeners).forEach(
        ([event, ls]) => {
            ls.forEach(l => e.addEventListener(event, l));
        }
    );
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
 * @param {ElOptions} options - type of the relationship
 * @returns {HTMLLinkElement}
 */
export const link = options => {
    return create("link", options);
}

/**
 * Creates a main element.
 * @param {ElOptions} [options={}]
 * @returns {HTMLElement}
 */
export const main = options => {
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
 * @param {ElOptions} options
 * @returns {HTMLHeadingElement}
 */
export const h1 = h(1);
/**
 * Creates an h2 element.
 * @param {string} text - Heading text
 * @param {ElOptions} options
 * @returns {HTMLHeadingElement}
 */
export const h2 = h(2);

/**
 * Creates a p element. 
 * @param {string} text - Paragraph text
 * @returns {HTMLParagraphElement}
 */
export const p = text => {
    const p = create("p");
    p.innerHTML = text;
    return p;
}

/**
 * Creates an anchor element.
 * @param {string|HTMLElement} content - Displayed text or child element(s)
 * @param {ElOptions} options
 * @returns {HTMLAnchorElement}
 */
export const a = (content, options) => {
    const a = create("a", options);
    a.append(content);
    return a;
}

/**
 * Creates a div element. 
 * @param {HTMLElement[]} children
 * @param {ElOptions} options
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
 * @param {ElOptions} options
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
 * @param {ElOptions} options
 * @returns {HTMLElement}
 */
export const footer = (children, options) => {
    const f = create("footer", options);
    f.append(...children);
    return f;
}

// Claude - nav helper for constructing the semantic <nav> landmark used as the top navbar.
/**
 * Creates a nav element.
 * @param {HTMLElement[]} children
 * @param {ElOptions} options
 * @returns {HTMLElement}
 */
export const nav = (children, options) => {
    const n = create("nav", options);
    n.append(...children);
    return n;
}

/**
 * Creates an img element.
 * @param {ElOptions} options
 * @returns {HTMLImageElement}
 */
export const img = options => {
    return create("img", options);
}

/**
 * Creates an input element.
 * @param {ElOptions} options 
 * @returns {InputElement}
 */
export const input = options => {
    return create("input", options);
}

const contentful = el => (content, options = {}) => {
    const e = create(el, options);
    if (typeof content === "string") {
        e.innerText = content;
    } else {
        e.append(content);
    }
    return e;
}

/**
 * Creates a button element.
 * @param {string|HTMLElement} content - Button text or child element(s)
 * @param {ElOptions} [options]
 * @returns {HTMLButtonElement}
 */
export const button = (content, options = {}) => {
    return contentful("button");
}

/**
 * Creates a span element.
 * @param {string|HTMLElement} content - Span text or child element(s)
 * @param {ElOptions} [options]
 * @returns {HTMLSpanElement}
 */
export const span = (content, options = {}) => {
    return contentful("span");
}
