<script>
  import Graphic from './Graphic.svelte';
  import Poem from './Poem.svelte';
</script>

<main>
  <Poem />
  <Graphic />
</main>

<style>
  main {
    width: 100%;
    height: 100%;
  }

  :global(body) {
    padding: 0;
  }
</style>
