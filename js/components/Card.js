import { article, div } from "../domManip.js";

/**
 * Creates a card component.
 * @param {HTMLELement[]} children 
 * @param {Object}        [options={}]
 * @param {boolean}       [options.usesArticleTag=false] - Whether the card should be constructed with the div or article tag.
 * @returns {HTMLElement|HTMLDivElement}
 */
const Card = (children, { usesArticleTag = false } = {}) => {
    const el = (usesArticleTag ? article : div)({classes: ["card"]});
    children.forEach(c => el.appendChild(c));
    return el;
}

export default Card;
