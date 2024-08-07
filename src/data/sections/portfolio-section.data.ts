import type { PortfolioSection } from '@/types/sections/portfolio-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { demo, github, website } from '../helpers/links';
import {
  ansible,
  c,
  docker,
  kubernetes,
  linux,
  mikrotik,
  mqtt,
  postgreSql,
  python,
  qt,
  redis,
} from '../helpers/skills';

const portfolioSectionData = {
  config: {
    title: 'Projects',
    slug: 'projects',
    icon: 'fa6-solid:rocket',
    visible: true,
    screenshots: {
      title: 'Screenshots',
      icon: 'fa6-solid:images',
    },
  },
  projects: [
    {
      name: 'HuHu',
      image: import('@/assets/portfolio/huhu-english.png'),
      dates: [new Date('2024-02'), null],
      details: [
        { label: 'Team size', value: '10 people' },
        { label: 'My role', value: ['DevOps Engineer', 'Development Advisor'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Web app'] },
      ],
      pdfDetails: [{ label: 'Demo', value: 'https://huhu.ir', url: 'https://huhu.ir' }],
      description:
        'A game-like education platform where the user encounters brief pieces of information including questions or educational content by preparing specialized courses or participating in short general information courses.',
      tagsList: {
        title: 'Technologies',
        tags: [kubernetes(), docker(), redis(), postgreSql(), ansible()],
      },
      links: [demo({ url: 'https://huhu.ir' })],
    },
    {
      name: 'SmartHome',
      image: import('@/assets/portfolio/smarthome.png'),
      dates: [new Date('2024-01'), null],
      details: [
        { label: 'Team size', value: '2 people' },
        { label: 'My role', value: ['Embedded Developer', 'Backend Developer', 'DevOps Engineer'] },
        { label: 'Company', value: 'None' },
        { label: 'Category', value: ['Open source'] },
      ],
      pdfDetails: [
        {
          label: 'Repository',
          value: 'https://github.com/imabas/esp-adf/tree/esp32-a1s-audio-kit',
          url: 'https://github.com/imabas/esp-adf/tree/esp32-a1s-audio-kit',
        },
      ],
      description:
        'SmartHome is optimized with esp-adf framework for esp a1s audio kit, which provides you with a set of services, a Persian audio assistant to control home appliances and communicate with smartphone apps.',
      tagsList: {
        title: 'Technologies',
        tags: [c(), mqtt(), python(), docker()],
      },
      links: [github({ url: 'https://github.com/imabas/esp-adf/tree/esp32-a1s-audio-kit' })],
    },
    {
      name: 'Shovel deployment Status System',
      image: import('@/assets/logos/barzin.png'),
      dates: [new Date('2023-11'), new Date('2024-08')],
      details: [
        { label: 'Team size', value: '4 people' },
        { label: 'My role', value: ['Desktop Developer', 'Embedded Developer', 'DevOps Engineer'] },
        { label: 'Company', value: 'Fanavaran Barzin' },
        { label: 'Category', value: ['Web app', 'Desktop app'] },
      ],
      description:
        "Shovel deployment status monitoring system is a comprehensive system to reduce damages caused by mining shovels working in improper condition. This system includes a cross-platform desktop software for the shovel operator and a web-based management panel for mine managers and supervisors that can be accessed on the mine's local network.",
      tagsList: {
        title: 'Technologies',
        tags: [python(), qt(), c(), linux(), docker(), mikrotik()],
      },
      screenshots: [
        { src: import('@/assets/portfolio/shovel-1.png'), alt: 'Design' },
        { src: import('@/assets/portfolio/shovel-2.jpeg'), alt: 'Desktop Software' },
        { src: import('@/assets/portfolio/shovel-3.png'), alt: 'Management Panel' },
      ],
      links: [website({ url: 'https://barzintechno.com' })],
    },
  ],
} as const satisfies ReadonlyDeep<PortfolioSection>;

export default portfolioSectionData;
