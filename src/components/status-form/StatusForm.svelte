<script>
	import {
		MODAL_ASSESSMENT_LABEL,
		MODAL_ASSESSMENT_SPECIAL_LABEL,
		MODAL_CREDITS_LABEL,
		MODAL_DEP_LABEL,
		MODAL_FORM_FULFILLED_LABEL,
		MODAL_FORM_GRADE_LABEL,
		MODAL_FORM_MARKED_SEMESTER_LABEL,
		MODAL_FORM_STATUS_COMPLETED1_LABEL,
		MODAL_FORM_STATUS_COMPLETED2_LABEL,
		MODAL_FORM_STATUS_CURRENT_LABEL,
		MODAL_FORM_STATUS_FAILED_LABEL,
		MODAL_FORM_STATUS_MARKED_LABEL,
		MODAL_FORM_STATUS_NOT_TAKEN_LABEL,
		MODAL_FORM_TITLE, MODAL_MISSING_DEPS_LABEL,
		MODAL_SOFT_DEP_LABEL,
		Status
	} from "../../constants";
	import StatusRadioButton from "../status-form/StatusRadioButtonContainer.svelte";
	import {ModuleStatus, updateModuleStatus} from "../../stores";
	import {onMount} from "svelte";

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
		<label for="edit-modal-{module.name}" class="d-btn d-btn-sm d-btn-circle absolute right-2 top-2">✕</label>
		<h3 class="text-xl font-bold">{module.name}</h3>
		<div class="grid grid-cols-1 gap-y-1 divide-y mt-1">
			<div class="grid grid-cols-4">
				<div class="col-span-3">{@html MODAL_CREDITS_LABEL}</div>
				<div class="col-span-1">{@html module.credits}</div>
			</div>
			<div class="grid grid-cols-4">
				<div class="col-span-3">{@html MODAL_DEP_LABEL}</div>
				<div class="col-span-1">{@html module.hardDeps}</div>
			</div>
			<div class="grid grid-cols-4">
				<div class="col-span-3">{@html MODAL_SOFT_DEP_LABEL}</div>
				<div class="col-span-1">{@html module.softDeps}</div>
			</div>
			<div class="grid grid-cols-4">
				<div class="col-span-3">{@html MODAL_ASSESSMENT_LABEL}</div>
				<div class="col-span-1">{@html module.assessment}</div>
			</div>
			<div class="grid grid-cols-4">
				<div class="col-span-3">{@html MODAL_ASSESSMENT_SPECIAL_LABEL}</div>
				<div class="col-span-1">{@html module.assessmentSpecial}</div>
			</div>
			<div class="grid grid-cols-4">
				<div class="col-span-3">{@html MODAL_MISSING_DEPS_LABEL}</div>
				<div class="col-span-1">{@html missingDeps}</div>
			</div>
		</div>
		<h4 class="text-lg font-bold mt-4">{MODAL_FORM_TITLE}</h4>

		<div class="grid grid-cols-2 gap-1">
			<StatusRadioButton label={MODAL_FORM_STATUS_NOT_TAKEN_LABEL}>
				<input type="radio"
				       bind:group={status}
				       value={Status.NOT_TAKEN}
				       class="d-radio checked:bg-slate-700 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label={MODAL_FORM_STATUS_CURRENT_LABEL}>
				<input type="radio"
				       bind:group={status}
				       value={Status.CURRENT}
				       class="d-radio checked:bg-indigo-700 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label={MODAL_FORM_STATUS_MARKED_LABEL}>
				<input type="radio"
				       bind:group={status}
				       value={Status.MARKED}
				       class="d-radio checked:bg-amber-400 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label={MODAL_FORM_STATUS_COMPLETED1_LABEL}>
				<input type="radio"
				       bind:group={status}
				       value={Status.COMPLETED1}
				       class="d-radio checked:bg-green-700 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label={MODAL_FORM_STATUS_COMPLETED2_LABEL}>
				<input type="radio"
				       bind:group={status}
				       value={Status.COMPLETED2}
				       class="d-radio checked:bg-lime-700 ml-3"/>
			</StatusRadioButton>
			<StatusRadioButton label={MODAL_FORM_STATUS_FAILED_LABEL}>
				<input type="radio"
				       bind:group={status}
				       value={Status.FAILED}
				       class="d-radio checked:bg-red-700 ml-3"/>
			</StatusRadioButton>
		</div>

		{#if status === Status.COMPLETED1 || status === Status.COMPLETED2}
			<div class="flex flex-row">
				<div class="d-form-control w-full max-w-xs inline-block flex-none">
					<label for="grade-range" class="d-label d-label-text">
						{MODAL_FORM_GRADE_LABEL}
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
					<label class="d-label d-label-text cursor-pointer" for="fulfilled-toggle">
						{@html MODAL_FORM_FULFILLED_LABEL}
					</label>
					<input type="checkbox" bind:checked={fulfilled} class="d-toggle" id="fulfilled-toggle"/>
				</div>
			</div>
			{/if}
		{#if status === Status.COMPLETED1 || status === Status.COMPLETED2 || status === Status.MARKED || status === Status.CURRENT}
			<div class="d-form-control w-full max-w-xs">
				<label for="sem-range" class="d-label d-label-text">
					{MODAL_FORM_MARKED_SEMESTER_LABEL}
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