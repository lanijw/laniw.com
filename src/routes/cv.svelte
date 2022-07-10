<script>
  import {currPage} from "../stores.js";
  import {Page} from "../constants.js";
  import {getLaniwAge, getUrlParams} from "../util.js";
  import {onMount} from "svelte";
  import ProgressBar from "../components/ProgressBar.svelte";
  import Icon from "../components/icons/Icon.svelte";
  import {allSkills, experiences, SkillType} from "../components/cv/data";
  import Modal from "../components/Modal.svelte";
  import LgExperiencesTimelineItem from "../components/cv/LgExperiencesTimelineItem.svelte";
  import ModalTrigger from "../components/ModalTrigger.svelte";
  import ExperienceLabel from "../components/cv/ExperienceLabel.svelte";

  currPage.set(Page.CV);

  let lang = "en";
  let age = "20";
  onMount(() => {
    const paramLang = getUrlParams().get("lang");
    lang = paramLang ? paramLang : "en";
    age = getLaniwAge();
  });

  let clipboardIcon = "clipboard";

  function copyEmailToClipboard() {
    navigator.clipboard
      .writeText("lani.julian.wagner+5r6Mq.laniw.com@gmail.com")
      .then(
        function () {
          clipboardIcon = "clipboard-check";
          setTimeout(() => (clipboardIcon = "clipboard"), 1000);
          console.log(clipboardIcon)
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

<div class="container mx-auto my-24">
  {#if lang === "de"}
    <h1>Lebenslauf</h1>
  {:else}
    <div class="mx-2">
      <div class="flex gap-4 flex-col lg:flex-row lg:items-center mb-10">
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

      <div>
        <h2 class="mb-4 lg:text-center">Skills</h2>
        <div class="grid grid-cols-12 lg:grid-cols-12 gap-4">
          {#each allSkills as skills}
            {#each skills.skills as s}
              <div
                class:col-span-3={skills.category ===
                  SkillType.SECONDARY_CODING}
                class:col-span-4={skills.category === SkillType.LANGUAGE}
                class:col-span-6={skills.category === SkillType.MAIN_CODING ||
                  skills.category === SkillType.OTHER}
                class:lg:col-span-1={skills.category ===
                  SkillType.MAIN_CODING ||
                  skills.category === SkillType.SECONDARY_CODING ||
                  s.skill === "French"}
                class:lg:col-span-2={(skills.category === SkillType.LANGUAGE &&
                  s.skill !== "French") ||
                  skills.category === SkillType.OTHER ||
                  s.skill === "Svelte/SvelteKit"}
                class:lg:order-1={skills.category === SkillType.MAIN_CODING}
                class:lg:order-2={skills.category === SkillType.LANGUAGE}
                class:lg:order-3={skills.category ===
                  SkillType.SECONDARY_CODING ||
                  skills.category === SkillType.OTHER}
                class="overflow-hidden whitespace-nowrap text-ellipsis">
                <span class="text-lg">
                  {s.skill}
                </span>
                <ProgressBar
                  completion={s.completion}
                  wrapperClass="h-3"
                  class={mapCategoryToProgressColor(skills.category)} />
              </div>
            {/each}
          {/each}
        </div>

        <h2 class="mb-4 mt-8 lg:text-center">Education and Experience</h2>
        <div class="grid gap-3 lg:hidden">
          {#each experiences as e, i}
            <ModalTrigger id={`experience-${i}`}>
              <ExperienceLabel experience={e} />
            </ModalTrigger>
          {/each}
        </div>
        <div class="hidden lg:grid grid-cols-8">
          <div class="text-center col-span-2"
            ><span
              class="bg-info text-info-content font-bold px-2 pb-0.5 rounded-full"
              >2017</span
            ></div>
          <div class="text-center col-span-2"
            ><span
              class="bg-info text-info-content font-bold px-2 pb-0.5 rounded-full"
              >2018-2020</span
            ></div>
          <div class="text-center col-span-2"
            ><span
              class="bg-info text-info-content font-bold px-2 pb-0.5 rounded-full"
              >2021</span
            ></div>
          <div class="text-center col-span-2"
            ><span
              class="bg-info text-info-content font-bold px-2 pb-0.5 rounded-full"
              >2022</span
            ></div>
          <div class="col-span-8 grid grid-cols-8 gap-2">
            <LgExperiencesTimelineItem
              leadSpan="col-span-6"
              span="col-span-1"
              followSpan="col-span-1"
              experience={experiences[0]}
              modalTriggerId="experience-0" />
            <LgExperiencesTimelineItem
              leadSpan="col-span-5"
              span="col-span-2"
              followSpan="col-span-1"
              experience={experiences[1]}
              modalTriggerId="experience-1" />
            <LgExperiencesTimelineItem
              leadSpan="col-span-5"
              span="col-span-2"
              followSpan="col-span-1"
              experience={experiences[2]}
              modalTriggerId="experience-2" />
            <LgExperiencesTimelineItem
              leadSpan="col-span-1"
              span="col-span-4"
              followSpan="col-span-3"
              experience={experiences[3]}
              modalTriggerId="experience-3" />
            <LgExperiencesTimelineItem
              leadSpan="col-span-1"
              span="col-span-4"
              followSpan="col-span-3"
              experience={experiences[4]}
              modalTriggerId="experience-4" />
          </div>
        </div>

        <p class="text-4xl mb-4 mt-20 text-center">Shoot me a Message!</p>
        <div class="text-center">
          <a
            href="mailto:lani.julian.wagner+5r6Mq.laniw.com@gmail.com"
            class="d-link d-link-primary break-all"
            >lani.julian.wagner+5r6Mq.laniw.com[at]gmail.com</a>
          <div
            class="cursor-pointer flex justify-center mt-4"
            on:click={copyEmailToClipboard}>
            <Icon
              icon={clipboardIcon}
              class="h-12 w-12 transition-all duration-200 lg:hover:scale-125 active:scale-75" />
          </div>
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
  {/if}
</div>
