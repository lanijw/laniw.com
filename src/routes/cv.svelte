<script>
  import {scale} from "svelte/transition";
  import {currPage} from "../stores.js";
  import {Page} from "../constants.js";
  import {getLaniwAge, getUrlParams} from "../util.js";
  import {onMount} from "svelte";
  import ProgressBar from "../components/ProgressBar.svelte";
  import Icon from "../components/icons/Icon.svelte";
  import {
    allSkills,
    experiences,
    ExperienceType,
    ExperienceTypeMap,
    SkillType
  } from "../components/cv/data";
  import Modal from "../components/Modal.svelte";
  import LgExperiencesTimelineItem from "../components/cv/LgExperiencesTimelineItem.svelte";
  import ModalTrigger from "../components/ModalTrigger.svelte";
  import ExperienceLabel from "../components/cv/ExperienceLabel.svelte";

  currPage.set(Page.CV);

  let lang = "en";
  let age = "Loading...";
  onMount(() => {
    const paramLang = getUrlParams().get("lang");
    lang = paramLang ? paramLang : "en";
    age = getLaniwAge();
  });

  let extraContentShown = true;

  function copyEmailToClipboard() {
    navigator.clipboard
      .writeText("lani.julian.wagner+5r6Mq.laniw.com@gmail.com")
      .then(
        function () {
          /* clipboard successfully set */
        },
        function () {
          /* clipboard write failed */
        }
      );
  }

  function mapCategoryToProgressColor(skillType) {
    const SkillTypeMap = new Map([
      [SkillType.LANGUAGE, "bg-sky-600"],
      [SkillType.MAIN_CODING, "bg-amber-500"],
      [SkillType.SECONDARY_CODING, "bg-red-500"],
      [SkillType.OTHER, "bg-teal-500"]
    ]);
    return SkillTypeMap.get(skillType);
  }
</script>

<div class="container mx-auto">
  {#if lang === "de"}
    <h1>Lebenslauf</h1>
  {:else}
    <div class="h-screen pt-24">
      <div class="flex gap-4 flex-col lg:flex-row lg:items-center">
        <div class="flex justify-center">
          <img
            src="/img/laniw.png"
            alt="Lani Wagner"
            class="w-5/6 lg:w-auto h-auto object-cover" />
        </div>
        <p
          class="text-4xl lg:text-7xl text-center lg:text-left mx-4 lg:mx-auto">
          Hi, I'm <b>Lani</b> (<span
            data-tooltip="{age} years old"
            class="after:text-2xl">{age}<span class="lg:hidden">y</span></span
          >), an up-and-coming software engineer based in Switzerland.
        </p>
      </div>

      <div class="d-collapse w-full mt-10">
        <input
          type="checkbox"
          class="peer"
          bind:checked={extraContentShown}
          disabled={extraContentShown}
          class:hidden={extraContentShown} />
        {#if !extraContentShown}
          <div class="d-collapse-title">
            <div class="w-full flex justify-center" transition:scale>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-12 w-12"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>
        {/if}
        <div class="d-collapse-content">
          <div>
            <h2 class="mb-4 lg:text-center">Skills</h2>
            <div class="grid grid-cols-12 lg:grid-cols-6 gap-4">
              {#each allSkills as skills}
                {#each skills.skills as s}
                  <div
                    class:col-span-3={skills.category ===
                      SkillType.SECONDARY_CODING}
                    class:col-span-4={skills.category === SkillType.LANGUAGE}
                    class:col-span-6={skills.category ===
                      SkillType.MAIN_CODING ||
                      skills.category === SkillType.OTHER}
                    class="lg:col-span-1">
                    <p class="text-lg">{s.skill}</p>
                    <ProgressBar
                      completion={s.completion}
                      wrapperClass="h-3"
                      class={mapCategoryToProgressColor(skills.category)} />
                  </div>
                {/each}
              {/each}
            </div>

            <h2 class="mb-4 mt-8 lg:text-center">Education and Experience</h2>
            <div class="flex flex-wrap gap-3 lg:hidden">
              {#each experiences as e, i}
                <ModalTrigger id={`experience-${i}`}>
                  <ExperienceLabel experience={e} />
                </ModalTrigger>
              {/each}
            </div>
            <div class="hidden lg:grid grid-cols-8">
              <div class="text-center col-span-2">2017</div>
              <div class="text-center col-span-2">2018-2017</div>
              <div class="text-center col-span-2">2021</div>
              <div class="text-center col-span-2">2022</div>
              <div class="grid col-span-8 grid-cols-8 gap-2">
                <LgExperiencesTimelineItem
                  leadSpan="6"
                  span="1"
                  followSpan="1"
                  experience={experiences[0]}
                  modalTriggerId="experience-0" />
                <LgExperiencesTimelineItem
                  leadSpan="5"
                  span="2"
                  followSpan="1"
                  experience={experiences[1]}
                  modalTriggerId="experience-1" />
                <LgExperiencesTimelineItem
                  leadSpan="5"
                  span="2"
                  followSpan="1"
                  experience={experiences[2]}
                  modalTriggerId="experience-2" />
                <LgExperiencesTimelineItem
                  leadSpan="1"
                  span="4"
                  followSpan="3"
                  experience={experiences[3]}
                  modalTriggerId="experience-3" />
                <LgExperiencesTimelineItem
                  leadSpan="1"
                  span="4"
                  followSpan="3"
                  experience={experiences[4]}
                  modalTriggerId="experience-4" />
              </div>
            </div>

            <h2 class="mb-4 mt-8 text-center">Contact Me</h2>
            <a
              href="mailto:lani.julian.wagner+5r6Mq.laniw.com@gmail.com"
              class="d-link d-link-primary break-all"
              >lani.julian.wagner+5r6Mq.laniw.com[at]gmail.com</a>
            <div class="inline cursor-pointer" on:click={copyEmailToClipboard}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 inline transition-all duration-200 hover:scale-125 active:scale-75"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
            </div>
          </div>
          <!-- Modals with empty triggers to trigger from mobile and desktop view with separate labels. -->
          {#each experiences as e, i}
            <Modal id={`experience-${i}`}>
              <svelte:fragment slot="trigger" />
              <svelte:fragment slot="content">
                <h3 class="mb-4">{@html e.title}</h3>
                <p>{@html e.desc}</p>
              </svelte:fragment>
            </Modal>
          {/each}
        </div>
      </div>
    </div>
  {/if}
</div>
