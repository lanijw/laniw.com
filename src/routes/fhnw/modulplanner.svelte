<script>
  import {currPage} from "../../stores.js";
  import {onDestroy, onMount} from "svelte";
  import {Page} from "../../constants.js";
  import {major, userData} from "../../components/modulplanner/stores.js";
  import Statistics from "../../components/modulplanner/statistics/Statistics.svelte";
  import Plan from "../../components/modulplanner/Plan.svelte";
  import {Status} from "../../components/modulplanner/constants.js";
  import Loader from "../../components/Loader.svelte";
  import {Jellyfish} from "svelte-loading-spinners";
  import ShareIcon from "../../components/icons/ShareIcon.svelte";

  currPage.set(Page.MODULE_PLANNER);

  let userDataVal;
  const unsubUserData = userData.subscribe(v => (userDataVal = v));

  let majorVal;
  const unsubMajor = major.subscribe(v => (majorVal = v));

  let mounted = false;
  onMount(() => {
    mounted = true;
  });

  onDestroy(() => {
    unsubUserData();
    unsubMajor();
  });

  const Section = {
    OVERVIEW: 0,
    STATISTICS: 1,
    PLAN: 2
  };

  let currentSection = Section.OVERVIEW;

  function importOverview() {
    return import("../../components/modulplanner/overview/Overview.svelte");
  }

  function shareModulplanner() {
    if (navigator.share) {
      navigator.share({
        title: "laniw.com Modulplanner",
        url: "https://laniw.com/fhnw/modulplanner/"
      });
    } else {
      // Fallback not needed, share only displayed if supported
    }
  }
</script>

{#if mounted && navigator.share}
  <button
    on:click={shareModulplanner}
    class="drawer-button btn btn-primary fixed bottom-4 lg:bottom-auto lg:top-28 lg:right-28 right-16 w-10 z-50 bg-slate-200 hover:bg-slate-400 shadow-md rounded-full cursor-pointer">
    <ShareIcon />
  </button>
{/if}

<div class="d-tabs flex justify-center mt-10">
  <button
    class="d-tab d-tab-lg d-tab-lifted font-bold"
    class:d-tab-active={currentSection === Section.OVERVIEW}
    on:click={() => (currentSection = Section.OVERVIEW)}>
    &Uuml;bersicht
  </button>
  <button
    class="d-tab d-tab-lg d-tab-lifted font-bold"
    class:d-tab-active={currentSection === Section.STATISTICS}
    on:click={() => (currentSection = Section.STATISTICS)}>
    Statistiken
  </button>
  {#if userDataVal.s.filter(s => s.status !== Status.NOT_TAKEN && !(s.sem === undefined || s.sem === null)).length}
    <button
      class="d-tab d-tab-lg d-tab-lifted font-bold"
      class:d-tab-active={currentSection === Section.PLAN}
      on:click={() => (currentSection = Section.PLAN)}>
      Planung
    </button>
  {/if}
</div>

{#if currentSection === Section.OVERVIEW}
  <Loader this={importOverview} {userDataVal} {majorVal}>
    <div slot="fallback" class="h-96 center-everywhere">
      <Jellyfish size="200" color="#41D6A9" unit="px" duration="1.5s" />
    </div>
  </Loader>
{:else if currentSection === Section.STATISTICS}
  <Statistics {userDataVal} {majorVal} />
{:else if currentSection === Section.PLAN}
  <Plan />
{/if}
