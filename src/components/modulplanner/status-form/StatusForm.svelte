<script>
  import {Status} from "../constants";
  import StatusRadioButton from "./StatusRadioButtonContainer.svelte";
  import {onMount} from "svelte";
  import {ModuleStatus, updateModuleStatus} from "../stores";

  export let module;
  export let moduleStatus;
  export let missingDeps;

  export let fromPlan;

  let semesterIndication = !(moduleStatus.sem === undefined || sem === null);
  function updateSem() {
    if (semesterIndication) {
      moduleStatus.sem = 1;
    } else {
      moduleStatus.sem = undefined;
    }
  }

  $: {
    if (moduleStatus.grade !== undefined && moduleStatus.fulfilled) {
      moduleStatus.grade = undefined;
    } else if (moduleStatus.grade === undefined) {
      moduleStatus.grade = 4;
    }
  }
</script>

<input type="checkbox" id="edit-modal-{module.id}" class="d-modal-toggle" />
<label for="edit-modal-{module.id}" class="d-modal">
  <label class="d-modal-box relative" for="none">
    <label
      for="edit-modal-{module.id}"
      class="d-btn d-btn-sm d-btn-circle absolute right-2 top-2">✕</label>
    <h3 class="text-xl font-bold">{module.id}</h3>
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
    <div class="grid grid-cols-2 gap-1 mb-2">
      <StatusRadioButton
        label="Nicht belegt"
        for="not-taken-toggle-{module.id}">
        <input
          type="radio"
          id="not-taken-toggle-{module.id}"
          bind:group={moduleStatus.status}
          value={Status.NOT_TAKEN}
          class="d-radio checked:bg-slate-700 ml-3" />
      </StatusRadioButton>
      <StatusRadioButton label="Laufend" for="current-toggle-{module.id}">
        <input
          type="radio"
          id="current-toggle-{module.id}"
          bind:group={moduleStatus.status}
          value={Status.CURRENT}
          class="d-radio checked:bg-indigo-700 ml-3" />
      </StatusRadioButton>
      <StatusRadioButton label="Vorgemerkt" for="marked-toggle-{module.id}">
        <input
          type="radio"
          id="marked-toggle-{module.id}"
          bind:group={moduleStatus.status}
          value={Status.MARKED}
          class="d-radio checked:bg-amber-400 ml-3" />
      </StatusRadioButton>
      <StatusRadioButton label="Bestanden" for="completed-toggle-{module.id}">
        <input
          type="radio"
          id="completed-toggle-{module.id}"
          bind:group={moduleStatus.status}
          value={Status.COMPLETED}
          class="d-radio checked:bg-green-700 ml-3" />
      </StatusRadioButton>
      <StatusRadioButton
        label="Nicht bestanden"
        for="failed-toggle-{module.id}">
        <input
          type="radio"
          id="failed-toggle-{module.id}"
          bind:group={moduleStatus.status}
          value={Status.FAILED}
          class="d-radio checked:bg-red-700 ml-3" />
      </StatusRadioButton>
    </div>

    <div class="h-48">
      {#if moduleStatus.status === Status.COMPLETED || moduleStatus.status === Status.FAILED}
        <div class="d-form-control pb-2">
          <label
            class="d-label cursor-pointer inline flex gap-x-2"
            for="second-try-toggle-{module.id}">
            <span class="d-label-text flex-none">1 Versuch</span>
            <input
              type="checkbox"
              id="second-try-toggle-{module.id}"
              class="d-toggle flex-none"
              class:bg-green-700={moduleStatus.status === Status.COMPLETED}
              class:bg-red-700={moduleStatus.status === Status.FAILED}
              bind:checked={moduleStatus.secondTry} />
            <span class="d-label-text flex-none">2 Versuche</span>
            <span class="flex-auto text-right">
              aufgewandte Credits: {module.credits *
                (moduleStatus.secondTry ? 2 : 1)}
            </span>
          </label>
        </div>
      {/if}
      {#if (moduleStatus.status === Status.CURRENT || moduleStatus.status === Status.MARKED || moduleStatus.status === Status.COMPLETED || status === Status.FAILED) && !fromPlan}
        <div class="flex gap-x-2">
          <div class="flex-initial d-form-control pb-3">
            <label
              class="d-label d-label-text cursor-pointer"
              for="sem-indication-toggle-{module.id}">Semesterangabe</label>
            <input
              id="sem-indication-toggle-{module.id}"
              type="checkbox"
              class="d-toggle"
              bind:checked={semesterIndication}
              on:change={updateSem} />
          </div>
          {#if semesterIndication}
            <div class="flex-auto d-form-control w-full max-w-xs">
              <label for="sem-range-{module.id}" class="d-label d-label-text">
                Semester
              </label>
              <input
                type="range"
                min="1"
                max="12"
                bind:value={moduleStatus.sem}
                class="d-range d-range-sm"
                step="1"
                id="sem-range-{module.id}" />
              <div class="w-full grid grid-cols-12 text-xs gap-2 pl-2">
                {#each Array.from(Array(12).keys()).map(v => 1 + v) as semester}
                  <span>{semester}</span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      {/if}
      {#if status === Status.COMPLETED}
        <div class="flex gap-x-2">
          <div class="d-form-control flex-none">
            <label
              class="d-label d-label-text cursor-pointer"
              for="fulfilled-toggle-{module.id}">
              Erf&uuml;llt
            </label>
            <input
              type="checkbox"
              bind:checked={moduleStatus.fulfilled}
              class="d-toggle"
              id="fulfilled-toggle-{module.id}" />
          </div>
          {#if !moduleStatus.fulfilled}
            <div class="d-form-control w-full max-w-xs inline-block flex-none">
              <label for="grade-range-{module.id}" class="d-label d-label-text">
                Note
              </label>
              <input
                type="range"
                min="4"
                max="6"
                bind:value={moduleStatus.grade}
                class="d-range d-range-sm"
                step=".5"
                id="grade-range-{module.id}" />
              <div class="w-full flex justify-between text-xs px-2">
                {#each Array.from(Array(5).keys()).map(v => 4 + v * 0.5) as grade}
                  <span>{grade}</span>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      {/if}
    </div>
  </label>
</label>
