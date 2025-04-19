import React from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { NewsArticle } from '../../types';
import { getCategoryName } from '../../data/categories';

interface NewsCardProps {
  article: NewsArticle;
  variant?: 'default' | 'featured' | 'compact';
}

const NewsCard: React.FC<NewsCardProps> = ({ article, variant = 'default' }) => {
  const formattedDate = format(new Date(article.publishedAt), 'dd MMM yyyy, HH:mm');
  
  if (variant === 'featured') {
    return (
      <div className="news-card h-full flex flex-col overflow-hidden group">
        <div className="relative overflow-hidden h-64 md:h-96">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-0 left-0 p-2">
            <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-md">
              {getCategoryName(article.category)}
            </span>
          </div>
        </div>
        <div className="flex-1 p-4 flex flex-col">
          <h2 className="text-2xl font-bold mb-2">
            <Link to={`/news/${article.id}`} className="hover:text-primary-600 transition-colors">
              {article.title}
            </Link>
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{article.description}</p>
          <div className="mt-auto flex items-center justify-between text-sm">
            <span className="text-gray-500 dark:text-gray-400">{formattedDate}</span>
            <span className="text-gray-600 dark:text-gray-400">{article.source}</span>
          </div>
        </div>
      </div>
    );
  }
  
  if (variant === 'compact') {
    return (
      <div className="news-card flex overflow-hidden group">
        <div className="relative overflow-hidden w-24 h-24 sm:w-36 sm:h-24">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="flex-1 p-3">
          <div className="mb-1">
            <span className="text-xs font-medium text-primary-600 dark:text-primary-400">
              {getCategoryName(article.category)}
            </span>
          </div>
          <h3 className="text-base font-semibold mb-1 line-clamp-2">
            <Link to={`/news/${article.id}`} className="hover:text-primary-600 transition-colors">
              {article.title}
            </Link>
          </h3>
          <div className="text-xs text-gray-500 dark:text-gray-400">{formattedDate}</div>
        </div>
      </div>
    );
  }
  
  // Default card
  return (
    <div className="news-card h-full flex flex-col overflow-hidden group">
      <div className="relative overflow-hidden h-48">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-0 left-0 p-2">
          <span className="inline-block px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-md">
            {getCategoryName(article.category)}
          </span>
        </div>
      </div>
      <div className="flex-1 p-4 flex flex-col">
        <h2 className="card-title">
          <Link to={`/news/${article.id}`} className="hover:text-primary-600 transition-colors">
            {article.title}
          </Link>
        </h2>
        <p className="card-description">{article.description}</p>
        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="text-gray-500 dark:text-gray-400">{formattedDate}</span>
          <span className="text-gray-600 dark:text-gray-400">{article.source}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;