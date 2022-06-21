<script>
  import {currPage} from "../../../stores.js";
  import {onDestroy} from "svelte";
  import {Page} from "../../../constants";
  import {userData} from "../../../components/modulplanner/stores";
  import Statistics from "../../../components/modulplanner/Statistics.svelte";
  import Plan from "../../../components/modulplanner/Plan.svelte";
  import {Status} from "../../../components/modulplanner/constants";
  import Loader from "../../../components/Loader.svelte";
  import {Jellyfish} from "svelte-loading-spinners";

  currPage.set(Page.MODULE_PLANNER);

  let userDataVal;
  let unsubUserData = userData.subscribe(v => (userDataVal = v));
  onDestroy(() => unsubUserData());

  const Section = {
    OVERVIEW: 0,
    STATISTICS: 1,
    PLAN: 2
  };

  let currentSection = Section.OVERVIEW;

  function importOverview() {
    return import("../../../components/modulplanner/Overview.svelte");
  }
</script>

<div class="d-tabs flex justify-center mt-10">
  <button
    class="d-tab d-tab-lg d-tab-lifted font-bold"
    class:d-tab-active={currentSection === Section.OVERVIEW}
    on:click={() => (currentSection = Section.OVERVIEW)}
  >
    &Uuml;bersicht
  </button>
  <button
    class="d-tab d-tab-lg d-tab-lifted font-bold"
    class:d-tab-active={currentSection === Section.STATISTICS}
    on:click={() => (currentSection = Section.STATISTICS)}
  >
    Statistiken
  </button>
  {#if userDataVal.s.filter(s => s.status !== Status.NOT_TAKEN && !(s.sem === undefined || s.sem === null)).length}
    <button
      class="d-tab d-tab-lg d-tab-lifted font-bold"
      class:d-tab-active={currentSection === Section.PLAN}
      on:click={() => (currentSection = Section.PLAN)}
    >
      Planung
    </button>
  {/if}
</div>

{#if currentSection === Section.OVERVIEW}
  <Loader this={importOverview} {userDataVal}>
    <div slot="fallback" class="h-96 center-everywhere">
      <Jellyfish size="200" color="#41D6A9" unit="px" duration="1.5s" />
    </div>
  </Loader>
{:else if currentSection === Section.STATISTICS}
  <Statistics />
{:else if currentSection === Section.PLAN}
  <Plan />
{/if}
