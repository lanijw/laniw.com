<script>
	import StatusForm from "./status-form/StatusForm.svelte";
	import {getModuleStatusById, userData} from "../stores";
	import {onDestroy} from "svelte";
	import {Status} from "../constants";
	import {allModules} from "../modules";

	export let module;

	export let userDataVal;
	let moduleStatus
	$: moduleStatus = getModuleStatusById(userDataVal, module.name);

	let depsMissing;
	let missingDeps;
	$: {
		depsMissing =
				!hasPlannedDepModules(userDataVal, module.name) &&
				depsMatter(userDataVal, module.name)
		let deps = depModules(module.name)
		missingDeps =
				depsMissing ?
						depModules(module.name)
								.filter(d => !plannedDeps(userDataVal, deps).includes(d)) :
						[]
	}

	function depsMatter(userDataVal, id) {
		const currModuleStatus = userDataVal.find(s => s.id === id)
		return currModuleStatus ? currModuleStatus.status === Status.MARKED : false
	}

	function hasPlannedDepModules(userDataVal, id) {
		const deps = depModules(id)
		return deps.length === plannedDeps(userDataVal, deps).length
		// TODO(laniw): Add check for right order of dependencies in semesters.
	}

	function plannedDeps(userDataVal, deps) {
		if (!userDataVal.length) {
			return []
		}
		return deps.filter(d => {
			const depStatus = userDataVal.find(s => s.id === d).status;
			return depStatus ===
					Status.CURRENT ||
					depStatus ===
					Status.MARKED ||
					depStatus ===
					Status.COMPLETED1 ||
					depStatus ===
					Status.COMPLETED2
		})
	}

	function depModules(id) {
		let finalDeps = []
		let currentDeps = [id];
		for (let i = 0; i < 5; i++) {
			currentDeps = currentDeps.flatMap(d => {
				const currentModule = allModules.find(m => m.name === d)
				// TODO(laniw): Deal with soft and hard deps separately for more precise user message
				return [...currentModule.hardDeps, ...currentModule.softDeps]
			});
			finalDeps = [...finalDeps, ...currentDeps]
		}
		return [...new Set(finalDeps.filter(d => d !== id))];
	}
</script>

<label class="d-card d-card-compact bg-slate-50 shadow-md mt-3 mb-3 cursor-pointer w-full rounded hover:shadow-lg"
       class:h-8={module.credits === 2}
       class:h-12={module.credits === 3}
       class:h-24={module.credits === 6}
       class:h-48={module.credits === 12}
       class:bg-amber-400={moduleStatus.status === Status.MARKED}
       class:bg-indigo-300={moduleStatus.status === Status.CURRENT}
       class:bg-green-400={moduleStatus.status === Status.COMPLETED1}
       class:bg-lime-400={moduleStatus.status === Status.COMPLETED2}
       class:bg-red-400={moduleStatus.status === Status.FAILED}
       class:d-card-bordered={depsMissing}
       class:border-2={depsMissing}
       class:border-red-500={depsMissing}
       for="edit-modal-{module.name}">
	<div class="align-text-middle center-everywhere"
	     class:h-8={module.credits === 2}
	     class:h-12={module.credits === 3}
	     class:h-24={module.credits === 6}
	     class:h-48={module.credits === 12}>
		{module.name}
	</div>
</label>

<StatusForm {module} {...moduleStatus} {missingDeps}/>