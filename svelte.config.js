import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-node";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: {
      default: true,
    },
    trailingSlash: "always",
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
};

export default config;
