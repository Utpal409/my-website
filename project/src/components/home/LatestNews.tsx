import React from 'react';
import { NewsArticle } from '../../types';
import NewsCard from '../news/NewsCard';

interface LatestNewsProps {
  articles: NewsArticle[];
  title: string;
}

const LatestNews: React.FC<LatestNewsProps> = ({ articles, title }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
        {title}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
};

export default LatestNews;