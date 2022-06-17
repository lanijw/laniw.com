<script>
	import {Status} from "../constants";
	import StatusRadioButton from "./StatusRadioButtonContainer.svelte";
	import {onMount} from "svelte";
	import {ModuleStatus, updateModuleStatus} from "../stores";

	export let module;
	export let id;
	export let status;
	export let grade;
	export let fulfilled;
	export let sem;
	export let missingDeps

	let mounted = false;

	onMount(() => mounted = true)

	$: {
		if (mounted) {
			updateModuleStatus(new ModuleStatus(id, status, grade, sem, fulfilled))
		}
	}
</script>

<input type="checkbox" id="edit-modal-{module.name}" class="d-modal-toggle"/>
<label for="edit-modal-{module.name}" class="d-modal">
	<label class="d-modal-box relative" for="">
		<label for="edit-modal-{module.name}"
		       class="d-btn d-btn-sm d-btn-circle absolute right-2 top-2">✕</label>
		<h3 class="text-xl font-bold">{module.name}</h3>
		<div class="overflow-x-auto mt-2">
			<table class="d-table d-table-compact w-full divide-y">
				<tr>
					<td>ECTS</td>
					<td>{@html module.credits}</td>
				</tr>
				<tr>
					<td>Abh&auml;ngigkeiten</td>
					<td>{@html module.hardDeps}</td>
				</tr>
				<tr>
					<td>Abh&auml;ngigkeiten (gleiches Sem.)</td>
					<td>{@html module.softDeps}</td>
				</tr>
				<tr>
					<td>Assessmentmodul</td>
					<td>{@html module.assessment}</td>
				</tr>
				<tr>
					<td>Assessmentphase erlaubt</td>
					<td>{@html module.assessmentSpecial}</td>
				</tr>
				<tr>
					<td>Fehlende Abh&auml;ngigkeitsmodule</td>
					<td>{@html missingDeps}</td>
				</tr>
			</table>
		</div>

		<h4 class="text-lg font-bold mt-4 mb-2">Modulstatus</h4>
		<div class="grid grid-cols-2 gap-1">
			<StatusRadioButton label="Nicht belegt">
				<input type="radio"
				       bind:group={status}
				       value={Status.NOT_TAKEN}
				       class="d-radio checked:bg-slate-700 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label="Laufend">
				<input type="radio"
				       bind:group={status}
				       value={Status.CURRENT}
				       class="d-radio checked:bg-indigo-700 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label="Vorgemerkt">
				<input type="radio"
				       bind:group={status}
				       value={Status.MARKED}
				       class="d-radio checked:bg-amber-400 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label="Bestanden">
				<input type="radio"
				       bind:group={status}
				       value={Status.COMPLETED}
				       class="d-radio checked:bg-green-700 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label="Nicht bestanden">
				<input type="radio"
				       bind:group={status}
				       value={Status.FAILED}
				       class="d-radio checked:bg-red-700 ml-3"/>
			</StatusRadioButton>
		</div>
		
		{#if status === Status.COMPLETED}
			<div class="flex flex-row">
				<div class="d-form-control w-full max-w-xs inline-block flex-none">
					<label for="grade-range" class="d-label d-label-text">
						Note
					</label>
					<input type="range"
					       min="4"
					       max="6"
					       bind:value={grade}
					       class="d-range d-range-sm"
					       step=".5"
					       id="grade-range"
					       disabled={fulfilled}/>
					<div class="w-full flex justify-between text-xs px-2">
						{#each Array.from(Array(5).keys()).map(v => 4 + v * .5) as grade}
							<span>{grade}</span>
						{/each}
					</div>
				</div>
				<div class="d-form-control flex-none ml-5">
					<label class="d-label d-label-text cursor-pointer"
					       for="fulfilled-toggle">
						Erf&uuml;llt
					</label>
					<input type="checkbox"
					       bind:checked={fulfilled}
					       class="d-toggle"
					       id="fulfilled-toggle"/>
				</div>
			</div>
		{/if}
		{#if status ===
		Status.COMPLETED ||
		status ===
		Status.MARKED ||
		status ===
		Status.CURRENT}
			<div class="d-form-control w-full max-w-xs">
				<label for="sem-range" class="d-label d-label-text">
					Semester
				</label>
				<input type="range"
				       min="1"
				       max="12"
				       bind:value={sem}
				       class="d-range d-range-sm"
				       step="1"
				       id="sem-range"/>
				<div class="w-full flex justify-between text-xs px-2">
					{#each Array.from(Array(12).keys()).map(v => 1 + v) as semester}
						<span>{semester}</span>
					{/each}
				</div>
			</div>
		{/if}
	</label>
</label>