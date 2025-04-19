import React from 'react';
import { Link } from 'react-router-dom';
import { NewsArticle } from '../../types';
import NewsCard from '../news/NewsCard';
import { getCategoryName } from '../../data/categories';

interface CategorySectionProps {
  categoryId: string;
  articles: NewsArticle[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categoryId, articles }) => {
  const categoryName = getCategoryName(categoryId);
  
  if (!articles.length) {
    return null;
  }

  const mainArticle = articles[0];
  const otherArticles = articles.slice(1, 5);

  return (
    <section className="mb-8">
      <div className="flex items-center justify-between border-b border-gray-200 dark:border-gray-700 pb-2 mb-4">
        <h2 className="text-2xl font-bold">{categoryName}</h2>
        <Link
          to={`/category/${categoryId}`}
          className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
        >
          और देखें
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <NewsCard article={mainArticle} variant="featured" />
        </div>
        <div className="lg:col-span-1 space-y-4">
          {otherArticles.map((article) => (
            <NewsCard key={article.id} article={article} variant="compact" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;