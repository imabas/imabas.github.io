import type { MainSection } from '@/types/sections/main-section.types';
import type { ReadonlyDeep } from 'type-fest';
import { github, linkedin, telegram, instagram } from '../helpers/links';

const mainSectionData = {
  config: {
    icon: 'fa6-solid:user',
    title: 'Profile',
    slug: 'profile',
    visible: true,
  },
  image: import('@/assets/profile.png'),
  fullName: 'Amirabbas Rafieian',
  role: 'DevOps Engineer',
  details: [
    { label: 'Phone', value: '938 102 1612', url: 'tel:+989381021612' },
    { label: 'Email', value: 'hi@amirabbas.info', url: 'mailto:hi@amirabbas.info' },
    { label: 'From', value: 'Isfahan, Iran' },
    { label: 'MBTI', value: 'INTJ' },
  ],
  pdfDetails: [
    { label: 'Phone', value: '+98 938 102 1612' },
    { label: 'Email', value: 'hi@amirabbas.info' },
    { label: 'LinkedIn', value: 'amirabbas-rfn', url: 'https://linkedin.com/in/amirabbas-rfn' },
    { label: 'GitHub', value: 'imabas', url: 'https://github.com/imabas' },
    { label: 'Website', value: 'amirabbas.info', url: 'https://amirabbas.info', fullRow: true },
  ],
  description:
    'DevOps specialist passionate about developing and automating organizational processes. Excellent problem-solving skills and ability to perform well in a team. Looking to get better positions, as well as grow and develop my own skills as a DevOps engineer.',
  tags: [{ name: 'Available for new adventures' }],
  action: {
    label: 'Download CV',
    url: '/cv.pdf',
    downloadedFileName: 'CV_Amirabbas_Rafieian.pdf',
  },
  links: [
    github({ url: 'https://github.com/imabas' }),
    linkedin({ url: 'https://www.linkedin.com/in/amirabbas-rfn' }),
    telegram({ url: 'https://t.me/amirabbasrafieian' }),
    instagram({ url: 'https://www.instagram.com/amirabbasrafieian/' }),
  ],
} as const satisfies ReadonlyDeep<MainSection>;

export default mainSectionData;
