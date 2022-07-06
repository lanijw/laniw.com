<script>
  import OpenInNewIcon from "../icons/OpenInNewIcon.svelte";

  export let title;
  export let desc;
  export let links;
</script>

<div class="d-card w-full bg-base-100 shadow-lg hover:shadow-xl rounded-lg">
  <div class="d-card-body">
    <h2 class="d-card-title">{title}</h2>
    <p>{desc}</p>
    <div class="d-card-actions">
      <ul class="list-none">
        {#each links as link}
          <li>
            <a href={link.href}>
              <span class="d-link d-link-primary">{link.text}</span>
              {#if link.external}
                <div class="inline-block w-6 h-6 -mb-1">
                  <OpenInNewIcon />
                </div>
              {/if}
            </a>
          </li>
        {/each}
      </ul>
    </div>
  </div>
</div>
