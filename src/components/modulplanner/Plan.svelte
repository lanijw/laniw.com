<script>
  import {onDestroy} from "svelte";
  import ModuleChip from "./modulechip/ModuleChip.svelte";
  import {allModules} from "./informatik/modules.js";
  import {userData} from "./stores";

  let userDataVal = [];
  let unsubUserData = userData.subscribe(v => (userDataVal = v));
  onDestroy(() => unsubUserData());

  let semesters;
  $: semesters = Array.from(Array(12).keys())
    .map(v => 1 + v)
    .map(n => {
      return {
        n: n,
        modules: userDataVal.s
          .filter(s => s.sem === n)
          .map(s => {
            return {status: s, module: allModules.find(m => m.id === s.id)};
          })
      };
    });
</script>

<div class="container mx-auto p-3">
  <h1>Studiumsplanung</h1>
  {#each semesters as semester}
    {#if semester.modules.length}
      <h2 class="text-3xl font-semibold inline">Semester {semester.n}</h2>
      <span
        >{semester.modules
          .map(m => m.module.credits)
          .reduce((a, b) => a + b, 0)} Credits</span>
      <div class="mb-5 grid grid-cols-5 lg:grid-cols-12 gap-3">
        {#each semester.modules as module}
          <div>
            <ModuleChip module={module.module} {userDataVal} fromPlan={true} />
          </div>
        {/each}
      </div>
    {/if}
  {/each}
</div>
