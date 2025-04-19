import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { format } from 'date-fns';
import { getNewsById, getLatestNews } from '../data/mockNews';
import NewsCard from '../components/news/NewsCard';
import { getCategoryName } from '../data/categories';

const NewsDetailPage: React.FC = () => {
  const { newsId } = useParams<{ newsId: string }>();
  const article = getNewsById(newsId || '');
  const relatedNews = getLatestNews(4).filter(news => news.id !== newsId);
  
  if (!article) {
    return (
      <div className="container-custom py-8">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-4">समाचार नहीं मिला</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            आपके द्वारा खोजा गया समाचार मौजूद नहीं है या हटा दिया गया है।
          </p>
          <Link to="/" className="btn-primary">
            होम पेज पर वापस जाएं
          </Link>
        </div>
      </div>
    );
  }
  
  const formattedDate = format(new Date(article.publishedAt), 'dd MMMM yyyy, HH:mm');
  
  return (
    <div className="container-custom py-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8">
          <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-64 sm:h-96 object-cover"
              />
              <div className="absolute top-4 left-4">
                <Link
                  to={`/category/${article.category}`}
                  className="inline-block px-3 py-1 bg-primary-600 text-white text-sm font-medium rounded-md hover:bg-primary-700 transition-colors"
                >
                  {getCategoryName(article.category)}
                </Link>
              </div>
            </div>
            
            <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{article.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-6">
                <div className="flex items-center">
                  <span>{formattedDate}</span>
                </div>
                <div>
                  <span>स्रोत: {article.source}</span>
                </div>
                {article.author && (
                  <div>
                    <span>लेखक: {article.author}</span>
                  </div>
                )}
              </div>
              
              <div className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                <p className="font-bold mb-4">{article.description}</p>
                <p className="whitespace-pre-line">{article.content}</p>
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 pt-4 mt-6">
                <h3 className="text-lg font-bold mb-2">इस खबर को शेयर करें:</h3>
                <div className="flex space-x-4">
                  <button className="btn-secondary">Facebook</button>
                  <button className="btn-secondary">Twitter</button>
                  <button className="btn-secondary">WhatsApp</button>
                </div>
              </div>
            </div>
          </article>
        </div>
        
        <div className="lg:col-span-4">
          <aside>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">
              संबंधित खबरें
            </h3>
            <div className="space-y-4">
              {relatedNews.map((news) => (
                <NewsCard key={news.id} article={news} variant="compact" />
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;