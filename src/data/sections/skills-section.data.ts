import type { SkillsSection } from '@/types/sections/skills-section.types';
import type { ReadonlyDeep } from 'type-fest';
import {
  postgreSql,
  openshift,
  openstack,
  linux,
  python,
  go,
  c,
  docker,
  git,
  kubernetes,
  redis,
  graphql,
  posthog,
  mqtt,
  qt,
  ansible,
  terraform,
} from '../helpers/skills';

const skillsSectionData = {
  config: {
    title: 'Skills',
    slug: 'skills',
    icon: 'fa6-solid:bars-progress',
    visible: true,
  },
  skillSets: [
    {
      title: 'I already know',
      skills: [
        linux({
          level: 5,
          description: 'Mostly RPM',
        }),
        ansible({ level: 4 }),
        postgreSql({ level: 4 }),
        python({ level: 5 }),
        docker({ level: 4 }),
        kubernetes({ level: 3 }),
        redis({ level: 2 }),
        go({
          level: 4,
          description: 'Newbie but using a lot in my recent projects',
        }),
        git({ level: 4 }),
        terraform({ level: 2 }),
        graphql({ level: 1 }),
        c({ level: 3 }),
      ],
    },
    {
      title: 'I want to learn',
      skills: [openstack(), openshift(), posthog(), mqtt(), qt()],
    },
    {
      title: 'I speak',
      skills: [
        { icon: 'circle-flags:ir', name: 'Persian - native' },
        { icon: 'circle-flags:us', name: 'English - B2' },
      ],
    },
  ],
} as const satisfies ReadonlyDeep<SkillsSection>;

export default skillsSectionData;
