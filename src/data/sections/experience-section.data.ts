import type { ExperienceSection } from '@/types/sections/experience-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';
import { vmware, python, cpanel, mariadb, hp, docker, mikrotik, c, linux, qt, ansible } from '../helpers/skills';

const experienceSectionData = {
  config: {
    title: 'Work experience',
    slug: 'experience',
    icon: 'fa6-solid:suitcase',
    visible: true,
  },
  jobs: [
    {
      role: 'DevOps Engineer',
      company: 'Iranicard',
      image: import('@/assets/logos/iranicard.jpg'),
      dates: [new Date('2024-10'), null],
      description: `
        - Automate installation and configuration of Etherium Core full nodes using Ansible playbooks, ensuring idempotent deployment.
        - Monitor node health, blockchain sync status, and disk usage; implement alerting on sync failures or high latency.
        - Collaborate with security teams to harden node servers and secure RPC interfaces.
        - Design, develop, and maintain Ansible playbooks and roles to automate provisioning and configuration of Linux servers.
        - Apply Dockerfile best practices: minimize layers, avoid unnecessary packages, and use official slim or Alpine base images to reduce image size and build times.
        - Implement multi-stage builds and leverage Docker BuildKit to parallelize stages for faster builds.
        - Develop and maintain CI/CD pipelines.
        - Implement resource partitioning strategies to maximize GPU utilization and minimize fragmentation in multi-tenant environments.
      `,
      tagsList: {
        title: 'Technologies',
        tags: [python(), docker(), linux(), mikrotik(), ansible()],
      },
      links: [website({ url: 'https://iranicard.com/' })],
    },
    {
      role: 'Infrastructure Specialist',
      company: 'Fanavaran Payesh Barzin Pasargad',
      image: import('@/assets/logos/barzin.png'),
      dates: [new Date('2023-06'), new Date('2024-10')],
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
