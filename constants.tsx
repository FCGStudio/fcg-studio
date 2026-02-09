
import { VideoProject, Service } from './types';

export const PROJECTS: VideoProject[] = [
  { id: 'FmnfixpA9Cs', title: 'Breaking Rust - Walk My Walk', category: 'Music Video' },
  { id: 'VSaSkQHggew', title: 'HAVEN. - I RUN', category: 'Music Video' },
  { id: '5y1LeAib_Ks', title: 'Fire to Ice - B3N&J8CUB', category: 'Music Video' },
  { id: 'ajrVZQiWVcs', title: 'ALOK+ILLENIUM - To The Moon', category: 'Music Video' },
  { id: 'S5rWR7VESFs', title: 'Red Sea Bounty Short Film', category: 'Short Film' },
  { id: 'kO0S9zHICHc', title: 'SadBois - In My Head', category: 'Music Video' },
];

export const YOUTUBE_IDS = PROJECTS.map(p => p.id);

export const SERVICES: Service[] = [
  {
    icon: 'fa-film',
    title: 'Full Production',
    description: 'A creative production house based in Los Angeles, providing end-to-end cinematography and management.'
  },
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Creative Direction',
    description: 'Developing high-end visual identities and cultural aesthetics for global artists and brands.'
  },
  {
    icon: 'fa-scissors',
    title: 'Post-Production',
    description: 'Precision editing, signature color grading, and VFX that define the modern FCG look.'
  },
  {
    icon: 'fa-bullseye',
    title: 'Brand Strategy',
    description: 'Strategically positioning visual content within the streetwear and music landscape.'
  }
];
