<script>
  import HelpIcon from "./icons/HelpIcon.svelte";
</script>

<div class="d-drawer d-drawer-end">
  <input id="help-drawer" type="checkbox" class="d-drawer-toggle" />
  <div class="d-drawer-content">
    <label
      for="help-drawer"
      class="drawer-button btn btn-primary fixed bottom-4 lg:bottom-auto lg:top-28 lg:right-16 right-4 w-10 z-50 bg-slate-200 hover:bg-slate-900 shadow-md rounded-full cursor-pointer">
      <HelpIcon />
    </label>
    <slot />
  </div>
  <div class="d-drawer-side">
    <label for="help-drawer" class="d-drawer-overlay" />
    <div class="d-menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <h3 class="mt-10 text-2xl">Feedback</h3>
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
      <h3 class="mt-4 text-2xl">Support</h3>
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
    </div>
  </div>
</div>
