
import React from 'react';
import { VideoProject, Service } from './types';

export const LOGO_URL = "https://i.ibb.co/q9v1Xq8/fcg-logo.jpg"; // Placeholder or direct link if possible, using a mockup for now

export const PROJECTS: VideoProject[] = [
  { id: 'CHASEB-CAFETERIA', title: 'CHASE B ft. Don Toliver - Cafeteria', category: 'Music Video' },
  { id: 'FCG-STUDIO-REEL', title: 'FCG Studio 2024 Production Reel', category: 'Showreel' },
  { id: 'FASHION-FILM-1', title: 'Urban Elegance: Autumn Collection', category: 'Fashion' },
  { id: 'DOCU-STYLE', title: 'The Streets of LA: Documented', category: 'Documentary' },
  { id: 'COMMERCIAL-X', title: 'Brand Campaign: Velocity', category: 'Commercial' },
  { id: 'STREETWEAR-PROMO', title: 'Drops & Culture: Summer 24', category: 'Fashion' },
];

// Actual YouTube Video IDs from FCG Studio channel or representative ones
export const YOUTUBE_IDS = [
  'y5qT9B0z7mU', // Representative ID
  'Q9mG2h6r2-k', // Representative ID
  'rG_IuI7uFh0', // Representative ID
  'nB0Q6U0K_6A', // Representative ID
  '8U9z0J3T_9I', // Representative ID
  'XG6p0L1M_2U', // Representative ID
];

export const SERVICES: Service[] = [
  {
    icon: 'fa-camera-movie',
    title: 'Full Production',
    description: 'End-to-end film and video production from concept to delivery.'
  },
  {
    icon: 'fa-wand-magic-sparkles',
    title: 'Creative Direction',
    description: 'Visionary aesthetics and storyboarding for high-impact visuals.'
  },
  {
    icon: 'fa-scissors',
    title: 'Post-Production',
    description: 'Precision editing, color grading, and visual effects (VFX).'
  },
  {
    icon: 'fa-bullseye',
    title: 'Brand Strategy',
    description: 'Positioning your visual identity in the modern cultural landscape.'
  }
];
