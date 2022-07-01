<script>
  import StatusForm from "../status-form/StatusForm.svelte";
  import {Status} from "../constants";
  import {depModules, depsMatter, hasPlannedDepModules, plannedDeps} from "./util";

  export let module;
  export let moduleStatus;
  export let fromPlan = false;

  let depsMissing;
  let missingDeps;
  $: {
    depsMissing =
      !hasPlannedDepModules(module.id) &&
      depsMatter(module.id);
    let deps = depModules(module.id);
    missingDeps = depsMissing
      ? deps.filter(d => !plannedDeps(deps).includes(d))
      : [];
  }
</script>

{@debug module, moduleStatus}
<label
  class="d-card d-card-compact bg-slate-50 shadow-md cursor-pointer w-full rounded hover:shadow-lg lg:col-span-1"
  class:h-8={module.credits === 2}
  class:h-12={module.credits === 3}
  class:h-24={module.credits === 6 || module.credits === 12}
  class:lg:h-48={module.credits === 12}
  class:col-span-2={module.credits === 12}
  class:bg-amber-400={moduleStatus.status === Status.MARKED}
  class:bg-indigo-300={moduleStatus.status === Status.CURRENT}
  class:bg-green-400={moduleStatus.status === Status.COMPLETED}
  class:bg-red-400={moduleStatus.status === Status.FAILED}
  class:d-card-bordered={depsMissing}
  class:border-2={depsMissing}
  class:border-red-500={depsMissing}
  for="edit-modal-{module.id}">
  <div
    class="align-text-middle center-everywhere"
    class:h-8={module.credits === 2}
    class:h-12={module.credits === 3}
    class:h-24={module.credits === 6}
    class:h-48={module.credits === 12}>
    {module.id}
  </div>
</label>

<StatusForm {module} {moduleStatus} {missingDeps} {fromPlan} />
