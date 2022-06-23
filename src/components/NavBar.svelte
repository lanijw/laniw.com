<script>
  import DownloadIcon from "./icons/DownloadIcon.svelte";
  import {major, Major, userData} from "./modulplanner/stores";
  import {onDestroy} from "svelte";
  import {downloadableFileName} from "../util";
  import UploadIcon from "./icons/UploadIcon.svelte";
  import LaniwIcon from "./icons/LaniwIcon.svelte";
  import ChevronDownIcon from "./icons/ChevronDownIcon.svelte";
  import GitHubIcon from "./icons/GitHubIcon.svelte";
  import {Page} from "../constants.js";
  import MenuIcon from "./icons/MenuIcon.svelte";
  import ChevronRightIcon from "./icons/ChevronRightIcon.svelte";
  import {EXTRA_MAJORS_PROD} from "../flags";
  import {dev} from "$app/env";

  export let currPageVal;

  let userDataDownload;
  const unsubUserData = userData.subscribe(
    v =>
      (userDataDownload =
        "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(v)))
  );

  let majorVal;
  const unsubMajor = major.subscribe(v => {
    majorVal = v;
    // TODO(#21): Download user data if not equal to default store value.
    // TODO(#21): Replace user data with iCompetence default.
  });

  onDestroy(() => {
    unsubUserData();
    unsubMajor();
  });

  let selectedMajor = Major.INFORMATIK;
  $: major.update(_ => selectedMajor);

  let files = [];
  $: uploadFile(files);

  function downloadFileName() {
    return downloadableFileName("", "Studenthub-Benutzerdaten", new Date());
  }

  function uploadFile(files) {
    if (!files.length) {
      return;
    }

    let fileContent = "";
    const reader = new FileReader();
    reader.addEventListener(
      "load",
      () => {
        files = [];
        fileContent = reader.result;
        const importedUserData = JSON.parse(fileContent);
        if ("v" in importedUserData) {
          userData.update(_ => importedUserData);
        } else {
          alert(
            "Your data was exported too early in this product's development. Please reenter your data by hand."
          );
        }
      },
      false
    );
    reader.readAsText(files[0]);
  }
</script>

<style>
  .sticky {
    position: fixed;
    top: 0;
    width: 100%;
  }
</style>

<div class="d-navbar bg-base-100 shadow-lg sticky z-50">
  <div class="d-navbar-start">
    <div class="d-dropdown">
      <span tabindex="0" class="d-btn d-btn-ghost lg:hidden">
        <MenuIcon />
      </span>
      <ul
        tabindex="0"
        class="d-menu d-menu-compact d-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li><a href="/">Home</a></li>
        <li tabindex="0">
          <span class="justify-between cursor-pointer">
            <span class:font-semibold={currPageVal === Page.MODULE_PLANNER}>
              FHNW
            </span>
            <ChevronRightIcon />
          </span>
          <ul class="p-2 shadow bg-base-100 rounded-box">
            <li>
              <a
                href="/fhnw/modulplanner"
                class:font-semibold={currPageVal === Page.MODULE_PLANNER}>
                Modulplanner
              </a>
            </li>
          </ul>
        </li>

        {#if currPageVal === Page.MODULE_PLANNER}
          {#if EXTRA_MAJORS_PROD || dev}
            <li class="mt-10">
              <select
                bind:value={selectedMajor}
                class="d-select d-select-ghost hover:bg-base-200">
                <option value={Major.INFORMATIK} selected>Informatik</option>
                <option value={Major.ICOMPETENCE}>iCompetence</option>
              </select>
            </li>
          {/if}
          <li class="mt-10">
            <label for="moduleplanner_file-input" class="d-btn d-btn-ghost">
              Daten importieren
            </label>
          </li>
          <li>
            <a
              href={userDataDownload}
              download={downloadFileName()}
              class="d-btn d-btn-ghost">
              Daten exportieren
            </a>
          </li>
        {/if}
      </ul>
    </div>
    <a href="/" class="h-12 rounded-lg hover:bg-base-200 p-1">
      <LaniwIcon />
    </a>
  </div>
  <div class="d-navbar-center hidden lg:flex">
    <ul class="d-menu d-menu-horizontal p-0">
      <li><a href="/" class="rounded-lg">Home</a></li>
      <li tabindex="0">
        <span class="rounded-lg cursor-pointer">
          <span class:font-semibold={currPageVal === Page.MODULE_PLANNER}
            >FHNW</span>
          <ChevronDownIcon />
        </span>
        <ul class="p-2 bg-base-100 rounded-lg">
          <li>
            <a
              href="/fhnw/modulplanner"
              class="rounded-lg"
              class:font-semibold={currPageVal === Page.MODULE_PLANNER}
              >Modulplanner</a>
          </li>
        </ul>
      </li>
    </ul>
  </div>
  <div class="d-navbar-end">
    {#if currPageVal === Page.MODULE_PLANNER}
      <div class="hidden lg:flex">
        {#if EXTRA_MAJORS_PROD || dev}
          <select
            bind:value={selectedMajor}
            class="d-select d-select-ghost hover:bg-base-200">
            <option value={Major.INFORMATIK} selected>Informatik</option>
            <option value={Major.ICOMPETENCE}>iCompetence</option>
          </select>
        {/if}
        <label for="moduleplanner_file-input" class="d-btn d-btn-ghost">
          <UploadIcon />
        </label>
        <input
          type="file"
          accept=".json"
          id="moduleplanner_file-input"
          class="hidden"
          bind:files />
        <a
          href={userDataDownload}
          download={downloadFileName()}
          class="d-btn d-btn-ghost">
          <DownloadIcon />
        </a>
      </div>
    {/if}

    <a
      class="h-12 rounded-lg hover:bg-base-200 p-1"
      href="https://github.com/lanijw/laniw.com"
      title="GitHub repository of this website">
      <GitHubIcon />
    </a>
  </div>
</div>
