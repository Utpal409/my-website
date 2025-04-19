import React from 'react';
import FeaturedNews from '../components/home/FeaturedNews';
import LatestNews from '../components/home/LatestNews';
import CategorySection from '../components/home/CategorySection';
import { getFeaturedNews, getLatestNews, getNewsByCategory } from '../data/mockNews';

const HomePage: React.FC = () => {
  const featuredNews = getFeaturedNews();
  const latestNews = getLatestNews();
  
  const nationalNews = getNewsByCategory('national');
  const sportsNews = getNewsByCategory('sports');
  const entertainmentNews = getNewsByCategory('entertainment');
  
  return (
    <div className="container-custom py-6">
      {/* Featured News Carousel */}
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4 border-b border-gray-200 dark:border-gray-700 pb-2">प्रमुख समाचार</h2>
        <FeaturedNews articles={featuredNews} />
      </section>
      
      {/* Latest News Section */}
      <LatestNews articles={latestNews} title="ताज़ा खबरें" />
      
      {/* Category Sections */}
      <div className="mt-10 space-y-10">
        <CategorySection categoryId="national" articles={nationalNews} />
        <CategorySection categoryId="sports" articles={sportsNews} />
        <CategorySection categoryId="entertainment" articles={entertainmentNews} />
      </div>
    </div>
  );
};

export default HomePage;