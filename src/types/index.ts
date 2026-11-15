export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  iconName: string;
  image: string;
  keyPoints: string[];
  features: { title: string; desc: string }[];
  ctaLabel: string;
  /** Optional path to a downloadable/viewable PDF syllabus in /public/Syllabus/ */
  syllabusPath?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}
