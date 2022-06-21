<script>
  import StatusForm from "./status-form/StatusForm.svelte";
  import {allModules} from "./informatik/modules";
  import {getModuleStatusById} from "./stores";
  import {Status} from "./constants";

  export let module;
  export let userDataVal;
  export let fromPlan = false;

  let moduleStatus;
  $: moduleStatus = getModuleStatusById(userDataVal, module.id);

  let depsMissing;
  let missingDeps;
  $: {
    depsMissing =
      !hasPlannedDepModules(userDataVal, module.id) &&
      depsMatter(userDataVal, module.id);
    let deps = depModules(module.id);
    missingDeps = depsMissing
      ? depModules(module.id).filter(
          d => !plannedDeps(userDataVal, deps).includes(d)
        )
      : [];
  }

  function depsMatter(userDataVal, id) {
    const currModuleStatus = userDataVal.s.find(s => s.id === id);
    return currModuleStatus ? currModuleStatus.status === Status.MARKED : false;
  }

  function hasPlannedDepModules(userDataVal, id) {
    const deps = depModules(id);
    return deps.length === plannedDeps(userDataVal, deps).length;
  }

  function plannedDeps(userDataVal, deps) {
    if (!userDataVal.s.length) {
      return [];
    }
    return deps.filter(d => {
      const depStatus = userDataVal.s.find(s => s.id === d).status;
      return (
        depStatus === Status.CURRENT ||
        depStatus === Status.MARKED ||
        depStatus === Status.COMPLETED
      );
    });
  }

  function depModules(id) {
    let finalDeps = [];
    let currentDeps = [id];
    for (let i = 0; i < 5; i++) {
      currentDeps = currentDeps.flatMap(d => {
        const currentModule = allModules.find(m => m.id === d);
        return [...currentModule.hardDeps, ...currentModule.softDeps];
      });
      finalDeps = [...finalDeps, ...currentDeps];
    }
    return [...new Set(finalDeps.filter(d => d !== id))];
  }
</script>

<label
  class="d-card d-card-compact bg-slate-50 shadow-md mt-3 mb-3 cursor-pointer w-full rounded hover:shadow-lg"
  class:h-8={module.credits === 2}
  class:h-12={module.credits === 3}
  class:h-24={module.credits === 6}
  class:h-48={module.credits === 12}
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

<StatusForm {module} {...moduleStatus} {missingDeps} {fromPlan} />
