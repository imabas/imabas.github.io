import createSkillFactory from '@/data/_internals/create-skill-factory';

/*

Place where you can define all your skills.
This way, you can ensure one skill has the same name, icon, and URL among all resume sections.

Where skills are used:
- experience-section.data.ts
- portfolio-section.data.ts
- skills-section.data.ts

Usage examples:
skill() — returns skill object without any customizations.
skill({ level: 3 }) — returns a levelled-skill. It can be used only in skills-section.data.ts.
skill({ name: '...' }) — returns skill object with a custom name.
skill({ description: '...' }) — returns skill with a description displayed when user hovers over it.

*/

export const apolloGraphql = createSkillFactory({
  name: 'Apollo GraphQL',
  icon: 'simple-icons:apollographql',
  iconColor: '#311C87',
  url: 'https://www.apollographql.com/',
});

export const astro = createSkillFactory({
  name: 'Astro',
  icon: 'simple-icons:astro',
  iconColor: '#FF5D01',
  url: 'https://astro.build/',
});

export const chakraUi = createSkillFactory({
  name: 'Chakra UI',
  icon: 'simple-icons:chakraui',
  iconColor: '#319795',
  url: 'https://chakra-ui.com/',
});

export const cypress = createSkillFactory({
  name: 'Cypress',
  icon: 'simple-icons:cypress',
  iconColor: '#17202C',
  url: 'https://www.cypress.io/',
});

export const eslint = createSkillFactory({
  name: 'ESLint',
  icon: 'simple-icons:eslint',
  iconColor: '#4B32C3',
  url: 'https://eslint.org/',
});

export const firebase = createSkillFactory({
  name: 'Firebase',
  icon: 'simple-icons:firebase',
  iconColor: '#FFCA28',
  url: 'https://firebase.google.com/',
});

export const jest = createSkillFactory({
  name: 'Jest',
  icon: 'simple-icons:jest',
  iconColor: '#C21325',
  url: 'https://jestjs.io/',
});

export const mongoDb = createSkillFactory({
  name: 'MongoDB',
  icon: 'simple-icons:mongodb',
  iconColor: '#47A248',
  url: 'https://www.mongodb.com/',
});

export const nestJs = createSkillFactory({
  name: 'NestJS',
  icon: 'simple-icons:nestjs',
  iconColor: '#E0234E',
  url: 'https://nestjs.com/',
});

export const nextJs = createSkillFactory({
  name: 'Next.js',
  icon: 'simple-icons:nextdotjs',
  iconColor: '#000000',
  url: 'https://nextjs.org/',
});

export const nx = createSkillFactory({
  name: 'Nx',
  icon: 'simple-icons:nx',
  iconColor: '#143055',
  url: 'https://nx.dev/',
});

export const pnpm = createSkillFactory({
  name: 'pnpm',
  icon: 'simple-icons:pnpm',
  iconColor: '#F69220',
  url: 'https://pnpm.io/',
});

export const postgreSql = createSkillFactory({
  name: 'PostgreSQL',
  icon: 'simple-icons:postgresql',
  iconColor: '#4169E1',
  url: 'https://www.postgresql.org/',
});

export const prettier = createSkillFactory({
  name: 'Prettier',
  icon: 'simple-icons:prettier',
  iconColor: '#F7B93E',
  url: 'https://prettier.io/',
});

export const react = createSkillFactory({
  name: 'React.js',
  icon: 'simple-icons:react',
  iconColor: '#61DAFB',
  url: 'https://reactjs.org/',
});

export const reactQuery = createSkillFactory({
  name: 'React Query',
  icon: 'simple-icons:reactquery',
  iconColor: '#FF4154',
  url: 'https://tanstack.com/query',
});

export const sass = createSkillFactory({
  name: 'SASS',
  icon: 'simple-icons:sass',
  iconColor: '#CC6699',
  url: 'https://sass-lang.com/',
});

export const supabase = createSkillFactory({
  name: 'Supabase',
  icon: 'simple-icons:supabase',
  iconColor: '#3ECF8E',
  url: 'https://supabase.io/',
});

export const tailwindCss = createSkillFactory({
  name: 'Tailwind CSS',
  icon: 'simple-icons:tailwindcss',
  iconColor: '#06B6D4',
  url: 'https://tailwindcss.com/',
});

export const typescript = createSkillFactory({
  name: 'TypeScript',
  icon: 'simple-icons:typescript',
  iconColor: '#3178C6',
  url: 'https://www.typescriptlang.org/',
});

export const vue = createSkillFactory({
  name: 'Vue.js',
  icon: 'simple-icons:vuedotjs',
  iconColor: '#4FC08D',
  url: 'https://vuejs.org/',
});

export const redhat = createSkillFactory({
  name: 'Red Hat',
  icon: 'simple-icons:redhat',
  iconColor: '#EE0000',
  url: 'https://redhat.com/',
});

export const openshift = createSkillFactory({
  name: 'Red Hat Open Shift',
  icon: 'simple-icons:redhatopenshift',
  iconColor: '#EE0000',
  url: 'https://www.okd.io/',
});

export const openstack = createSkillFactory({
  name: 'OpenStack',
  icon: 'simple-icons:openstack',
  iconColor: '#ED1944',
  url: 'https://www.openstack.org/',
});

export const vmware = createSkillFactory({
  name: 'VMware',
  icon: 'simple-icons:vmware',
  iconColor: '#607078',
  url: 'https://www.vmware.com/',
});

export const python = createSkillFactory({
  name: 'Python',
  icon: 'simple-icons:python',
  iconColor: '#3776AB',
  url: 'https://www.python.org/',
});

export const cpanel = createSkillFactory({
  name: 'cPanel',
  icon: 'simple-icons:cpanel',
  iconColor: '#FF6C2C',
  url: 'https://www.cpanel.net/',
});

export const mariadb = createSkillFactory({
  name: 'MariaDB',
  icon: 'simple-icons:mariadb',
  iconColor: '#003545',
  url: 'https://mariadb.com/',
});

export const hp = createSkillFactory({
  name: 'HP',
  icon: 'simple-icons:hp',
  iconColor: '#0096D6',
  url: 'https://hp.com/',
});

export const linux = createSkillFactory({
  name: 'Linux',
  icon: 'simple-icons:linux',
  iconColor: '#FCC624',
  url: 'https://www.linux.org/',
});

export const go = createSkillFactory({
  name: 'GO',
  icon: 'simple-icons:go',
  iconColor: '#00ADD8',
  url: 'https://go.dev/',
});

export const c = createSkillFactory({
  name: 'C',
  icon: 'simple-icons:c',
  iconColor: '#A8B9CC',
  url: '#',
});

export const docker = createSkillFactory({
  name: 'Docker',
  icon: 'simple-icons:docker',
  iconColor: '#2496ED',
  url: 'https://www.docker.com/',
});

export const git = createSkillFactory({
  name: 'Git',
  icon: 'simple-icons:git',
  iconColor: '#F05032',
  url: 'https://www.git-scm.com/',
});

export const kubernetes = createSkillFactory({
  name: 'Kubernetes',
  icon: 'simple-icons:kubernetes',
  iconColor: '#326CE5',
  url: 'https://kubernetes.io/',
});

export const mikrotik = createSkillFactory({
  name: 'Mikrotik',
  icon: 'simple-icons:mikrotik',
  iconColor: '#293239',
  url: 'https://mikrotik.com/',
});

export const redis = createSkillFactory({
  name: 'Redis',
  icon: 'simple-icons:redis',
  iconColor: '#FF4438',
  url: 'https://redis.io/',
});

export const graphql = createSkillFactory({
  name: 'GraphQL',
  icon: 'simple-icons:graphql',
  iconColor: '#E10098',
  url: 'https://graphql.org/',
});

export const posthog = createSkillFactory({
  name: 'PostHog',
  icon: 'simple-icons:posthog',
  iconColor: '#000000',
  url: 'https://posthog.com/',
});

export const mqtt = createSkillFactory({
  name: 'MQTT',
  icon: 'simple-icons:mqtt',
  iconColor: '#660066',
  url: 'https://mqtt.org/',
});

export const qt = createSkillFactory({
  name: 'Qt',
  icon: 'simple-icons:qt',
  iconColor: '#41CD52',
  url: 'https://www.qt.io/',
});

export const ansible = createSkillFactory({
  name: 'Ansible',
  icon: 'simple-icons:ansible',
  iconColor: '#EE00002',
  url: 'https://www.ansible.com/',
});

export const terraform = createSkillFactory({
  name: 'Terraform',
  icon: 'simple-icons:terraform',
  iconColor: '#844FBA',
  url: 'https://www.terraform.io/',
});
