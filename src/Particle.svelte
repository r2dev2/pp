<script>
  export let x = 0;
  export let y = 0;
  export let size = 24;
</script>

<div class="particle" style="--x: {x}px; --y: {y}px; --size: {size}px;" />

<style>
  .particle {
    --x-pos: calc(var(--x) - 50%);
    --y-pos: calc(var(--y) - 50%);
    --size: 2rem;
    --material-pink: #e91e63;
    --bg-color: var(--material-pink);
    position: absolute;
    top: 50%;
    left: 50%;
    width: var(--size);
    height: var(--size);
    border-radius: 50%;
    transform: translate(var(--x-pos), var(--y-pos));
    background-color: var(--bg-color);
    transition: 200ms ease-out;
  }
</style>
