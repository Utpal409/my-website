export interface NewsArticle {
  id: string;
  title: string;
  description: string;
  content: string;
  category: NewsCategory;
  imageUrl: string;
  publishedAt: string;
  source: string;
  author?: string;
  isFeatured?: boolean;
}

export type NewsCategory = 
  | 'national'
  | 'international'
  | 'politics'
  | 'business'
  | 'technology'
  | 'sports'
  | 'entertainment'
  | 'health';

export interface CategoryInfo {
  id: NewsCategory;
  name: string;
  hindiName: string;
}