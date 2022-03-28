const accel = 10;
const time = 1;
const VX = 2;
const VY = 3;
const maxs = 10;
const bbf = 1 / 5; // bounce back factor
const heartVertOffset = -40;

const distance = (p1, p2) => Math.sqrt(
  Math.pow(p1[0] - p2[0], 2) + Math.pow(p1[1] - p2[1], 2)
);

const clamp = (n, minn, maxn) => Math.max(minn, Math.min(maxn, n));

// generate initial particles by parametric function
const genGenInitialParticles = (xfn, yfn) => (radius, particles) => Array(particles)
  .fill(2 * Math.PI)
  .map((total, i) => total * i / particles)
  .map(theta => [xfn(radius, theta), yfn(radius, theta), 0, 0]);

export const genCircleInitialParticles = genGenInitialParticles(
  (r, t) => r * Math.cos(t),
  (r, t) => r * Math.sin(t),
);

export const genHeartInitialParticles = genGenInitialParticles(
  (r, t) => (r / 16) * 16 * Math.pow(Math.sin(t), 3),
  (r, t) => (r / 16) * -(13 * Math.cos(t) - 5 * Math.cos(2 * t) - 2 * Math.cos(3 * t) - Math.cos(4 * t)) + heartVertOffset,
);

export const genInitialParticles = genHeartInitialParticles;

export const genNextParticles = (particles, maxx, maxy) => particles.map((p1, i) => {
  const [ ax, ay ] = particles
    .filter((_, j) => i != j)
    .map(p2 => {
      const dist = distance(p1, p2);
      const totalForce = Math.max(0, accel / Math.pow(dist, 2));
      const cos = (p2[0] - p1[0]) / dist;
      const sin = (p2[1] - p1[1]) / dist;
      const res = [totalForce * cos, totalForce * sin];
      return res;
    })
    .reduce(([fx, fy], [fx_, fy_]) => [fx + fx_, fy + fy_], [0, 0]);
  const vx = clamp(p1[VX] + ax * time, -maxs, maxs);
  const vy = clamp(p1[VY] + ay * time, -maxs, maxs);
  const x = p1[0] + vx * time;
  const y = p1[1] + vy * time;
  const res = -maxx <= x && x <= maxx && -maxy <= y && y <= maxy
    ? [x, y, vx, vy, ax, ay]
    : [clamp(x, -maxx, maxx), clamp(y, -maxy, maxy), -bbf * vx, -bbf * vy, 0, 0];
  return res.map((r, i) => isNaN(r) ? [0, 1].includes(i) ? p1[i] : 0 : r);
});
