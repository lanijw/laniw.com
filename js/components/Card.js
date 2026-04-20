import { article, div } from "../domManip.js";

/**
 * Creates a card component.
 * @param {HTMLELement[]} children 
 * @param {Object}        [options={}]
 * @param {boolean}       [options.usesArticleTag=false] - Whether the card should be constructed with the div or article tag.
 * @returns {HTMLElement|HTMLDivElement}
 */
const Card = (children, { usesArticleTag = false } = {}) => {
    return (usesArticleTag ? article : div)(children, { classes: ["card"]});
}

export default Card;
