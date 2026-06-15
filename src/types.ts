/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  icon: string; // Lucide icon name
  description: string;
  expandableDetails: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Residential' | 'Commercial' | 'Infrastructure';
  location: string;
  image: string;
  client: string;
  year: string;
  highlights: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  quote: string;
  avatar: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}
