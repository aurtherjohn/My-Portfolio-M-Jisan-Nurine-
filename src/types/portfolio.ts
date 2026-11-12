export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl: string;
  demoUrl?: string;
  accentColor: 'cyan' | 'purple' | 'green';
  metrics: { label: string; value: string }[];
  details: {
    overview: string;
    architecture: string[];
    technicalHighlights: string[];
    codeSnippet: {
      filename: string;
      language: string;
      code: string;
    };
  };
}

export interface TechItem {
  id: string;
  name: string;
  category: 'languages' | 'ai-compute' | 'systems';
  icon: string;
  accent: 'cyan' | 'purple' | 'green';
  experience: string;
  proficiency: number;
  highlight: string;
  description: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  accent: 'cyan' | 'purple' | 'green';
  topics: string[];
  description: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: 'GPU & Hardware' | 'Robotics & Physics' | 'Autonomous Agents' | 'Distributed Systems';
  tags: string[];
  accent: 'cyan' | 'purple' | 'green';
  content: {
    introduction: string;
    keyTakeaways: string[];
    sections: {
      heading: string;
      body: string;
      codeBlock?: {
        language: string;
        code: string;
      };
    }[];
    conclusion: string;
  };
}

export interface EngineeringUpdate {
  id: string;
  date: string;
  title: string;
  tag: 'Release' | 'Benchmark' | 'Certification' | 'Research';
  accent: 'cyan' | 'purple' | 'green';
  summary: string;
  metrics?: { label: string; value: string };
  link?: { text: string; url: string };
}

