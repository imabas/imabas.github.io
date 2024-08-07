import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import { vmware, python, cpanel, mariadb, hp, docker, mikrotik, c, linux, qt } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'Infrastructure Specialist',
      company: 'Fanavaran Payesh Barzin Pasargad',
      image: import('@/assets/logos/barzin.png'),
      dates: [new Date('2023-06'), null],
      description: `
        - Network Design.
        - Develop and deploy shovel positioning system.
        - Develop and deploy e-maintenance system for dump trucks.
        in sarcheshmeh copper mine
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), qt(), docker(), linux(), mikrotik(), c()],
      },
      links: [website({ url: 'https://barzintechno.com/' })],
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
