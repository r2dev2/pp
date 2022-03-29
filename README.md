# PP

My cringey promposal.

## What

A poem with animated particle art. The animation simulates what would happen if particles exerted gravity on each other and could go through each other. The effects of acceleration are delayed, which results in an interesting animation. Frames are generated starting from a heart shape (generated through a parametric function) and are looped in reverse. For performance, frames are generated at 24 fps. Since I wanted it to run at 60fps, I used css transitions on the particles' positions to effectively animate the in-between of each frame.

The name of the person in the poem can be changed using query parameters. For example, https://r2dev2.github.io/pp/?mn=Pvmgl will put `Kento` as the name. The value after `mn` is the name of the person encoded with the self-inverting [atbash cipher](https://en.wikipedia.org/wiki/Atbash) which I happen to be fluent in :).

This uses [svelte](https://github.com/sveltejs/svelte/) and is an experiment at using the DOM instead of the canvas to render art.

## Why

GuapoLuke ([@lukezhao0](https://github.com/lukezhao0)) convinced me to go to the prom with his effective persuasion.

![guapoluke's persuasion](https://user-images.githubusercontent.com/50760816/160712450-83acaba2-00d5-40b4-88d7-9f054740b42f.png)

I also enjoy making art, writing cringey poems, and using [spaper](https://oli8.github.io/spaper/). Because I act on impulse and one day I just felt like it, I ended up making this.

## For Who

ur mom

## Results

It worked with GuapoLuke. Submit a pr if you find success with this.

![GuapoLuke](https://user-images.githubusercontent.com/50760816/160713816-bbe58e8d-2332-4a17-b8d6-f726122fa8f8.png)

