export interface Article {
  id: string;
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  datePublished: string;
  readTime: string;
  content: ArticleSection[];
  author: {
    name: string;
    title: string;
  };
}

export interface ArticleSection {
  type: 'heading' | 'paragraph' | 'list' | 'code' | 'callout';
  content: string | string[];
  level?: number; // for headings (h2, h3, etc)
  language?: string; // for code blocks
  calloutType?: 'info' | 'warning' | 'success' | 'tip';
}
