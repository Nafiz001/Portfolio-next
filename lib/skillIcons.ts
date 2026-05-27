// Maps a raw skill string to a display name + devicon URL.
// Shared by the 3D About panel and the normal AboutSection so both render skills identically.

export interface SkillIcon {
  name: string;
  icon: string;
  invert?: boolean;
}

export function getIconForSkill(skillStr: string): SkillIcon {
  const mapping: Record<string, SkillIcon> = {
    'c': { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
    'c++': { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    'cplusplus': { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
    'nextjs': { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invert: true },
    'threejs': { name: 'Three.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threejs/threejs-original.svg', invert: true },
    'dotnet': { name: 'ASP.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg' },
    'kubernetes': { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg' },
    'firebase': { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain.svg' },
    'express': { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invert: true },
    'github': { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg', invert: true },
    'tailwindcss': { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  };

  const clean = skillStr.toLowerCase().trim();
  if (mapping[clean]) return mapping[clean];

  return {
    name: skillStr.toUpperCase(),
    icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${clean}/${clean}-original.svg`,
  };
}
