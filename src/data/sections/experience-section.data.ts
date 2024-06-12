import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { facebook, github, instagram, linkedin, twitter, website } from '../helpers/links';
import {
  chakraUi,
  eslint,
  firebase,
  nextJs,
  nx,
  pnpm,
  react,
  reactQuery,
  tailwindCss,
  typescript,
  vue,
  vmware,
  python,
  cpanel,
  mariadb,
  hp,
} from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Senior front-end developer',
      company: 'Fanavaran Payesh Barzin Pasargad',
      image: import('@/assets/logos/barzin.png'),
      dates: [new Date('2023-06'), null],
      description: `
        - In tristique vulputate augue vel egestas.
        - Quisque ac imperdiet tortor, at lacinia ex.
        - Duis vel ex hendrerit, commodo odio sed, aliquam enim.
        - Ut arcu nulla, tincidunt eget arcu eget, molestie vulputate nisi.
        - Nunc malesuada leo et est iaculis facilisis.
        - Fusce eu urna ut magna malesuada fringilla.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [react(), nextJs(), typescript(), nx(), firebase()],
      },
      links: [facebook({ url: '#' }), linkedin({ url: '#' })],
    },
    {
      role: 'Infrastructure Specialist',
      company: 'Artapardaz L.L.C',
      image: import('@/assets/logos/artapardaz.png'),
      dates: [new Date('2021-07'), new Date('2022-04')],
      description: `
        - Infrastructure and automation solutions for businesses.
        - Setup and develop shared hosting solution for local businesses.
        - System Administrator.
        - Bare metal server configuration.
        - Network Design.
        - Support and troubleshoot local area networks.
        - Setup and develop call centers.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [hp(), vmware(), cpanel(), mariadb(), python()],
      },
      links: [website({ url: 'https://artapardaz.com/' })],
    },
  ],
} as const satisfies ReadonlyDeep<ExperienceSection>;

export default experienceSectionData;
