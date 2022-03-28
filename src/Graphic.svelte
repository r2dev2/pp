<script>
  import { onMount } from 'svelte';
  import { genInitialParticles, genNextParticles } from './lib.js';

  import Particle from './Particle.svelte';

  export let radius = Math.min(window.innerWidth, window.innerHeight) / 2 - 40;
  export let particles = 120;
  export let particleSize = 8;
  export let mspf = 40;

  let clientWidth = window.innerWidth;
  let clientHeight = window.innerHeight;

  const getAllParticlePositions = amount => {
    const positions = [genInitialParticles(radius, particles)];
    for (let i = 1; i < amount; ++i) {
      positions.push(genNextParticles(
        positions[positions.length - 1],
        (clientWidth - particleSize) / 2,
        (clientHeight - particleSize) / 2,
      ));
    };
    return positions;
  };

  console.time('gen positions');
  const allPositions = getAllParticlePositions(200);
  console.timeEnd('gen positions');

  let particlePositions = allPositions[allPositions.length - 1];

  onMount(async () => {
    const sleep = ms => new Promise(res => setTimeout(res, ms));
    let forwards = false;
    let head = allPositions.length - 1;
    while (true) {
      await sleep(mspf);
      head += forwards ? 1 : -1;
      if (head < 0) {
        head = 1;
        forwards = true;
        await sleep(2000);
      }
      if (head >= allPositions.length) {
        head = allPositions.length - 2;
        forwards = false;
      }
      particlePositions = allPositions[head];
    };
  });
</script>

<div class="graphic" bind:clientWidth bind:clientHeight>
  {#each particlePositions as [x, y]}
    <Particle {x} {y} size={particleSize} />
  {/each}
</div>

<style>
  .graphic {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
</style>
