// components/hero/particlesData.ts

export const generateParticles = (count: number): Float32Array => {
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 10;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 6;
    positions[i * 3 + 2] = -Math.random() * 10;
  }

  return positions;
};

export const particlePositions: Float32Array = generateParticles(2000);
