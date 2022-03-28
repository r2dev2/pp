<script>
  import { Article } from 'spaper';

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const urlname = new URLSearchParams(window.location.search)
    .get('mn') ?? 'Blf'; // default to You
  const name = [...urlname]
    .map(c => {
      const nc = alphabet[alphabet.length - 1 - alphabet.indexOf(c.toLowerCase())];
      return c.toLowerCase() != c ? nc.toUpperCase() : nc;
    })
    .join('');
</script>

<div class="poem-container">
  <Article
    title="To {name}"
    border
  >
    <p>I spent too much time coding this</p>
    <p>But there's one thing I cannot miss</p>
    <p>And it's taking you to the prom</p>
    <p>Since idk how to drive, we'll probably go with someone's mom</p>
    <p>Oh god, that poem was cringe</p>
    <p>If you would like to go with me, just a tinge</p>
    <p>Please reply to me in Messenger with a yes</p>
    <p>And if you do, prepare a dress!</p>
    <p>If you would like to say no</p>
    <p>Just tell me so</p>
  </Article>
</div>

<style>
  .poem-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }

  p {
    margin: 0.5rem 0;
  }

  .poem-container :global(h1) {
    font-size: 2rem;
  }
</style>
