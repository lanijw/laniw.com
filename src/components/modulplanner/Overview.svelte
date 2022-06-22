<script>
  import {modules} from "./informatik/modules";
  import ModuleGroupContainer from "./ModuleGroupContainer.svelte";
  import ModuleChipCollection from "./ModuleChipCollection.svelte";
  import ModuleGroup from "./ModuleGroup.svelte";
  import {ModuleGroupSource} from "./constants";

  export let userDataVal;
  export let majorVal;
  // TODO(#21): Implement use of major.
</script>

<div class="container mx-auto mt-5">
  <div class="grid grid-cols-7">
    <div class="col-span-7 lg:col-span-1 order-2 lg:order-1">
      <ModuleGroup
        title="Projekte"
        modules={modules.projects.modules}
        {userDataVal}
        source={ModuleGroupSource.PROJECTS}
        borderColor="border-2 border-cyan-600" />
    </div>
    <div class="col-span-7 lg:col-span-5 order-1">
      <ModuleGroupContainer borderColor="border-2 border-blue-700">
        <span class="text-l font-semibold">Fachausbildung</span>
        <div class="grid grid-cols-2">
          <div class="col-span-2 lg:grid lg:grid-cols-2">
            <ModuleGroupContainer borderColor="border-2 border-blue-700">
              <span class="text-l font-semibold">Fachvertiefung</span>
              <div class="grid grid-cols-2 lg:grid-cols-4">
                <div>
                  <ModuleGroupContainer>
                    <span class="lg:hidden break-words" style="hyphens: manual"
                      >ICT</span>
                    <ModuleChipCollection
                      modules={modules.mainModules.advancedModules.ict.modules}
                      {userDataVal} />
                  </ModuleGroupContainer>
                </div>
                <div>
                  <ModuleGroupContainer>
                    <span class="lg:hidden break-words" style="hyphens: manual"
                      >Da&shy;ta Sci&shy;ence</span>
                    <ModuleChipCollection
                      modules={modules.mainModules.advancedModules.dataSci
                        .modules}
                      {userDataVal} />
                  </ModuleGroupContainer>
                </div>
                <div>
                  <ModuleGroupContainer>
                    <span class="lg:hidden break-words" style="hyphens: manual"
                      >Spa&shy;tial Com&shy;pu&shy;ting</span>
                    <ModuleChipCollection
                      modules={modules.mainModules.advancedModules.spatialComp
                        .modules}
                      {userDataVal} />
                  </ModuleGroupContainer>
                </div>
                <div>
                  <ModuleGroupContainer>
                    <span class="lg:hidden break-words" style="hyphens: manual"
                      >Web</span>
                    <ModuleChipCollection
                      modules={modules.mainModules.advancedModules.web.modules}
                      {userDataVal} />
                  </ModuleGroupContainer>
                </div>
              </div>
            </ModuleGroupContainer>
            <div class="grid grid-cols-2 lg:grid-cols-4">
              <div>
                <ModuleGroup
                  title="Pro&shy;gram&shy;mier&shy;ung"
                  modules={modules.mainModules.baseModules.prog.modules}
                  {userDataVal}
                  borderColor="border-2 border-blue-700" />
              </div>
              <div>
                <ModuleGroup
                  title="ICT Sys&shy;te&shy;me"
                  modules={modules.mainModules.baseModules.ict.modules}
                  {userDataVal}
                  borderColor="border-2 border-blue-700" />
              </div>
              <div>
                <ModuleGroup
                  title="Ma&shy;the&shy;ma&shy;tik"
                  modules={modules.mainModules.baseModules.math.modules}
                  {userDataVal}
                  borderColor="border-2 border-blue-700" />
              </div>
              <div>
                <ModuleGroup
                  title="Soft&shy;ware En&shy;gi&shy;neer&shy;ing"
                  modules={modules.mainModules.baseModules.swe.modules}
                  {userDataVal}
                  borderColor="border-2 border-blue-700" />
              </div>
            </div>
          </div>
          <div class="col-span-5">
            <ModuleGroup
              title="Facherg&auml;nzung"
              modules={modules.mainModules.additionalModules.modules}
              source={ModuleGroupSource.ADDITIONAL_MODULES}
              {userDataVal}
              borderColor="border-2 border-blue-700" />
          </div>
        </div>
      </ModuleGroupContainer>
    </div>
    <div class="col-span-7 lg:col-span-1 grid content-between order-2">
      <ModuleGroup
        title="Betriebswirtschaftslehre"
        modules={modules.bwl.modules}
        {userDataVal}
        source={ModuleGroupSource.CONTEXT}
        borderColor="border-2 border-fuchsia-600" />
      <ModuleGroup
        title="Kommunikation"
        modules={modules.comm.modules}
        {userDataVal}
        source={ModuleGroupSource.CONTEXT}
        borderColor="border-2 border-fuchsia-600" />
      <ModuleGroup
        title="Englisch"
        modules={modules.engl.modules}
        {userDataVal}
        source={ModuleGroupSource.CONTEXT}
        borderColor="border-2 border-fuchsia-600" />
      <ModuleGroup
        title="GSW"
        modules={modules.gsw.modules}
        {userDataVal}
        source={ModuleGroupSource.CONTEXT}
        borderColor="border-2 border-fuchsia-600" />
    </div>
  </div>
</div>
