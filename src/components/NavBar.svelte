<script>
	import DownloadIcon from "./icons/DownloadIcon.svelte";
	import {userData} from "./modulplanner/stores";
	import {onDestroy} from "svelte";
	import {downloadableFileName} from "../util";
	import UploadIcon from "./icons/UploadIcon.svelte";
	import LaniwIcon from "./icons/LaniwIcon.svelte";
	import ChevronDownIcon from "./icons/ChevronDownIcon.svelte";
	import GitHubIcon from "./icons/GitHubIcon.svelte";
	import {Page} from "../constants.js";
	import MenuIcon from "./icons/MenuIcon.svelte";
	import ChevronRightIcon from "./icons/ChevronRightIcon.svelte";

	export let currPageVal;

	let userDataDownload;
	const unsubUserData = userData.subscribe(v => userDataDownload =
			"data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(v)))
	onDestroy(() => unsubUserData())

	let files = [];
	$: uploadFile(files)

	function downloadFileName() {
		return downloadableFileName("", "Studenthub-Benutzerdaten", new Date())
	}

	function uploadFile(files) {
		if (!files.length) {
			return;
		}

		let fileContent = "";
		const reader = new FileReader();
		reader.addEventListener("load", () => {
			files = [];
			fileContent = reader.result;
			const importedUserData = JSON.parse(fileContent);
			if ("v" in importedUserData) {
				userData.update(_ => importedUserData)
			} else {
				alert(
						"Your data was exported too early in this product's development. Please reenter your data by hand.")
			}
		}, false)
		reader.readAsText(files[0])
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
			<label tabindex="0" class="d-btn d-btn-ghost lg:hidden">
				<MenuIcon/>
			</label>
			<ul tabindex="0"
			    class="d-menu d-menu-compact d-dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
				<li><a href="/">Home</a></li>
				<li tabindex="0">
					<a class="justify-between">
						<span class:font-semibold={currPageVal === Page.MODULE_PLANNER}>
							FHNW
						</span>
						<ChevronRightIcon/>
					</a>
					<ul class="p-2 shadow bg-base-100 rounded-box">
						<li>
							<a href="/fhnw/modulplanner"
							   class:font-semibold={currPageVal === Page.MODULE_PLANNER}>
								Modulplanner
							</a>
						</li>
					</ul>
				</li>

				{#if currPageVal === Page.MODULE_PLANNER}
					<li class="mt-10">
						<label for="moduleplanner_file-input" class="d-btn d-btn-ghost">
							Daten importieren
						</label>
					</li>
					<li>
						<a href={userDataDownload}
						   download={downloadFileName()}
						   class="d-btn d-btn-ghost">
							Daten exportieren
						</a>
					</li>
				{/if}
			</ul>
		</div>
		<a href="/" class="h-12 rounded-lg hover:bg-base-200 p-1">
			<LaniwIcon/>
		</a>
	</div>
	<div class="d-navbar-center hidden lg:flex">
		<ul class="d-menu d-menu-horizontal p-0">
			<li><a href="/" class="rounded-lg">Home</a></li>
			<li tabindex="0">
				<a class="rounded-lg">
					<span class:font-semibold={currPageVal === Page.MODULE_PLANNER}>FHNW</span>
					<ChevronDownIcon/>
				</a>
				<ul class="p-2 bg-base-100 rounded-lg">
					<li><a href="/fhnw/modulplanner"
					       class="rounded-lg"
					       class:font-semibold={currPageVal === Page.MODULE_PLANNER}>Modulplanner</a>
					</li>
				</ul>
			</li>
		</ul>
	</div>
	<div class="d-navbar-end">
		{#if currPageVal === Page.MODULE_PLANNER}
			<div class="hidden lg:flex">
				<label for="moduleplanner_file-input" class="d-btn d-btn-ghost">
					Daten importieren
					<UploadIcon/>
				</label>
				<input type="file"
				       accept=".json"
				       id="moduleplanner_file-input"
				       class="hidden"
				       bind:files>
				<a href={userDataDownload}
				   download={downloadFileName()}
				   class="d-btn d-btn-ghost">
					Daten exportieren
					<DownloadIcon/>
				</a>
			</div>
		{/if}

		<a class="h-12 rounded-lg hover:bg-base-200 p-1"
		   href="https://github.com/lanijw/laniw.com"
		   title="GitHub repository of this website">
			<GitHubIcon/>
		</a>
	</div>
</div>