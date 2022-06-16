<script>
	import ModuleGroup from "../../../components/modulplanner/ModuleGroup.svelte";
	import {modules} from "../../../components/modulplanner/modules";
	import ModuleGroupContainer
		from "../../../components/modulplanner/ModuleGroupContainer.svelte";
	import ModuleChipCollection
		from "../../../components/modulplanner/ModuleChipCollection.svelte";
	import {currPage} from "../../../stores.js";
	import {onDestroy} from "svelte";
	import {Page} from "../../../constants";
	import {userData} from "../../../components/modulplanner/stores";
	import Statistics from "../../../components/modulplanner/Statistics.svelte";
	import Plan from "../../../components/modulplanner/Plan.svelte";

	currPage.set(Page.MODULE_PLANNER);

	let userDataVal;
	let unsubUserData = userData.subscribe(v => userDataVal = v)
	onDestroy(() => unsubUserData())

	const Section = {
		OVERVIEW: 0,
		STATISTICS: 1,
		PLAN: 2
	}

	let currentSection = Section.OVERVIEW;
</script>

<div class="flex items-center justify-center mt-10">
	<div class="d-tabs">
		<button class="d-tab d-tab-lg d-tab-lifted font-bold"
		        class:d-tab-active={currentSection === Section.OVERVIEW}
		        on:click={() => currentSection = Section.OVERVIEW}>
			&Uuml;bersicht
		</button>
		<button class="d-tab d-tab-lg d-tab-lifted font-bold"
		        class:d-tab-active={currentSection === Section.STATISTICS}
		        on:click={() => currentSection = Section.STATISTICS}>
			Statistiken
		</button>
		<button class="d-tab d-tab-lg d-tab-lifted font-bold"
		        class:d-tab-active={currentSection === Section.PLAN}
		        on:click={() => currentSection = Section.PLAN}>
			Planung
		</button>
	</div>
</div>


{#if currentSection === Section.OVERVIEW}
	<div class="container mx-auto mt-5">
		<div class="flex flex-row">
			<div class="basis-1/7">
				<ModuleGroup title="Projekte"
				             modules={modules.projects.modules}
				             {userDataVal}
				             borderColor="border-2 border-cyan-600"/>
			</div>
			<div class="basis-5/7">
				<ModuleGroupContainer borderColor="border-2 border-blue-700">
					<span class="text-l font-semibold">Fachausbildung</span>
					<div class="flex flex-row">
						<div class="basis-4/5">
							<ModuleGroupContainer borderColor="border-2 border-blue-700">
								<span class="text-l font-semibold">Fachvertiefung</span>
								<div class="flex flex-row">
									<div class="basis-1/4">
										<ModuleGroupContainer>
											<ModuleChipCollection modules={modules.mainModules.advancedModules.ict}
											                      {userDataVal}/>
										</ModuleGroupContainer>
									</div>
									<div class="basis-1/4">
										<ModuleGroupContainer>
											<ModuleChipCollection modules={modules.mainModules.advancedModules.web}
											                      {userDataVal}/>
										</ModuleGroupContainer>
									</div>
									<div class="basis-1/4">
										<ModuleGroupContainer>
											<ModuleChipCollection modules={modules.mainModules.advancedModules.dataSci}
											                      {userDataVal}/>
										</ModuleGroupContainer>
									</div>
									<div class="basis-1/4">
										<ModuleGroupContainer>
											<ModuleChipCollection modules={modules.mainModules.advancedModules.spatialComp}
											                      {userDataVal}/>
										</ModuleGroupContainer>
									</div>
								</div>
							</ModuleGroupContainer>
							<div class="flex flex-row">
								<div class="basis-1/4">
									<ModuleGroup title="Programmierung"
									             modules={modules.mainModules.baseModules.prog.modules}
									             {userDataVal}
									             borderColor="border-2 border-blue-700"/>
								</div>
								<div class="basis-1/4">
									<ModuleGroup title="Software Engineering"
									             modules={modules.mainModules.baseModules.swe.modules}
									             {userDataVal}
									             borderColor="border-2 border-blue-700"/>
								</div>
								<div class="basis-1/4">
									<ModuleGroup title="ICT Systeme"
									             modules={modules.mainModules.baseModules.ict.modules}
									             {userDataVal}
									             borderColor="border-2 border-blue-700"/>
								</div>
								<div class="basis-1/4">
									<ModuleGroup title="Mathematik"
									             modules={modules.mainModules.baseModules.math.modules}
									             {userDataVal}
									             borderColor="border-2 border-blue-700"/>
								</div>
							</div>
						</div>
						<div class="basis-1/5">
							<ModuleGroup title="Facherg&auml;nzung"
							             modules={modules.mainModules.additionalModules.modules}
							             {userDataVal}
							             borderColor="border-2 border-blue-700"/>
						</div>
					</div>
				</ModuleGroupContainer>
			</div>
			<div class="basis-1/7 grid content-between">
				<ModuleGroup title="Betriebswirtschaftslehre"
				             modules={modules.bwl.modules}
				             {userDataVal}
				             borderColor="border-2 border-fuchsia-600"/>
				<ModuleGroup title="Kommunikation"
				             modules={modules.comm.modules}
				             {userDataVal}
				             borderColor="border-2 border-fuchsia-600"/>
				<ModuleGroup title="Englisch"
				             modules={modules.engl.modules}
				             {userDataVal}
				             borderColor="border-2 border-fuchsia-600"/>
				<ModuleGroup title="GSW"
				             modules={modules.gsw.modules}
				             {userDataVal}
				             borderColor="border-2 border-fuchsia-600"/>
			</div>
		</div>
	</div>
{:else if currentSection === Section.STATISTICS}
	<Statistics/>
{:else if currentSection === Section.PLAN}
	<Plan/>
{/if}