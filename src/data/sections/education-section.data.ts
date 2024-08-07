import type { EducationSection } from '@/types/sections/education-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { website } from '../helpers/links';

const educationSectionData = {
  config: {
    title: 'Education',
    slug: 'education',
    icon: 'fa6-solid:graduation-cap',
    visible: true,
  },
  diplomas: [
    {
      title: 'Electrical engineering',
      institution: 'Isfahan University of Technology',
      image: import('@/assets/logos/Isfahan_University_of_Technology.png'),
      dates: [new Date('2024.02'), new Date()],
      description: "Bachelor's degree.",
      links: [website({ url: 'https://iut.ac.ir/' })],
    },
    {
      title: 'Electrical engineering',
      institution: 'Sharif University of Technology',
      image: import('@/assets/logos/Sharif-University-of-Technology.png'),
      dates: [new Date('2019.09'), new Date('2022.09')],
      description: "Bachelor's degree senior student. Specialization in digital signal processing.",
      links: [website({ url: 'https://www.sharif.ir/' })],
    },
  ],
} as const satisfies ReadonlyDeep<EducationSection>;

export default educationSectionData;
