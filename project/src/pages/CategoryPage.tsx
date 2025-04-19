import React from 'react';
import { useParams } from 'react-router-dom';
import { getNewsByCategory } from '../data/mockNews';
import NewsCard from '../components/news/NewsCard';
import { getCategoryName } from '../data/categories';

const CategoryPage: React.FC = () => {
  const { categoryId } = useParams<{ categoryId: string }>();
  const articles = getNewsByCategory(categoryId || '');
  const categoryName = getCategoryName(categoryId || '');
  
  if (!articles.length) {
    return (
      <div className="container-custom py-8">
        <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
        <p className="text-gray-700 dark:text-gray-300">इस श्रेणी में कोई समाचार नहीं है।</p>
      </div>
    );
  }
  
  return (
    <div className="container-custom py-8">
      <h1 className="text-3xl font-bold mb-6">{categoryName}</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <NewsCard key={article.id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default CategoryPage;