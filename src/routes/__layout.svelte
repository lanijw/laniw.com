<script>
  import "../app.css";
  import NavBar from "../components/NavBar.svelte";
  import {onDestroy} from "svelte";
  import {currPage} from "../stores";
  import {Page} from "../constants.js";
  import HelpOverlay from "../components/HelpOverlay.svelte";

  let currPageVal;
  const unsubCurrPage = currPage.subscribe(v => (currPageVal = v));
  onDestroy(() => unsubCurrPage());
</script>

<svelte:head>
  <title>laniw.com</title>
</svelte:head>

{#if currPageVal === Page.HOME}
  <div class="pt-12">
    <slot />
  </div>
{:else}
  <HelpOverlay>
    <NavBar {currPageVal} />

    <div class="pt-12">
      <slot />
    </div>
  </HelpOverlay>
{/if}
