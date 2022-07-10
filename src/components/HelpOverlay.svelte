<script>
  import {onMount} from "svelte";
  import {Page} from "../constants.js";
  import Icon from "./icons/Icon.svelte";

  export let currPageVal;

  onMount(() => {
    getCollaborators();
  });

  let collaborators = [];

  async function getCollaborators() {
    const apiUrl =
      "https://api.github.com/repos/lanijw/laniw.com/pulls?state=all";
    collaborators = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(data => [
        ...new Set(data.map(r => r.user.login).filter(n => n !== "lanijw"))
      ]);
  }
</script>

<div class="d-drawer d-drawer-end">
  <input id="help-drawer" type="checkbox" class="d-drawer-toggle" />
  <div class="d-drawer-content">
    <label
      for="help-drawer"
      class="drawer-button btn btn-primary fixed bottom-4 lg:bottom-auto lg:top-28 lg:right-16 right-4 w-10 h-10 z-50 bg-primary hover:bg-primary-content shadow-md rounded-full cursor-pointer">
      <Icon
        icon="info"
        class="w-10 h-10 stroke-primary-content hover:stroke-primary" />
    </label>
    <slot />
  </div>
  <div class="d-drawer-side">
    <label for="help-drawer" class="d-drawer-overlay" />
    <div class="d-menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      {#if currPageVal === Page.MODULE_PLANNER}
        <h3 class="mt-10">Modulplanner Anleitung</h3>
        <p>
          Der Modulplanner unterst&uuml;tzt einige praktische, aber nicht
          offensichtliche Funktionalit&auml;ten. F&uuml;r eine Anleitung schau
          doch <a
            class="d-link d-link-primary"
            href="https://github.com/lanijw/laniw.com/blob/main/modulplanner/README.md"
            >hier</a>
          nach. Fehlt dir noch etwas an der Anleitung? Erstelle ein
          <a
            class="d-link d-link-primary"
            href="https://github.com/lanijw/laniw.com/issues/new"
            >GitHub Issue</a>
          oder gleich einen
          <a
            class="d-link d-link-primary"
            href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"
            >pull request</a
          >.
        </p>
        <div class="d-divider">General</div>
      {/if}
      <h3 class="mt-10">Feedback</h3>
      <p>
        I try to create the best applications possible with the smallest amount
        of errors possible, but some bugs still slip through my fingers. If you
        find a bug that you would like me to fix you can either create a pull
        request to <a
          class="d-link d-link-primary"
          href="https://github.com/lanijw/laniw.com">my GitHub</a
        >, or create a
        <a
          class="d-link d-link-primary"
          href="https://github.com/lanijw/laniw.com/issues/new">GitHub issue</a
        >.
      </p>
      <h3 class="mt-4">Support</h3>
      <p>
        If you are interested in helping me improve this website and some of its
        projects I would be happy to hear from you in a
        <a
          class="d-link d-link-primary"
          href="https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request"
          >pull request</a
        >. I tend to list all current features/bugs I'm working on in
        <a href="https://github.com/lanijw/laniw.com/issues">my issues</a>. If
        there aren't any issues just create an issue and I'm sure I can find you
        something to do.
      </p>
      {#if collaborators.length}
        <h3 class="mt-4">Collaborators</h3>
        <p>
          Many thanks to the people who helped me work on my projects on
          <a href="https://laniw.com">laniw.com</a>!
        </p>
        <div class="flex flex-row flex-wrap pt-2">
          {#each collaborators as collaborator}
            <div class="p-1 rounded bg-primary text-primary-content"
              >{collaborator}</div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>
