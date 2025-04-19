import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../../data/categories';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 pt-10 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <span className="text-2xl font-bold text-white">हिंदी समाचार</span>
            </Link>
            <p className="mb-4">
              ताज़ा खबरें, विश्लेषण और व्यापक कवरेज के साथ हिंदी का सबसे भरोसेमंद समाचार पोर्टल।
            </p>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-white">समाचार श्रेणियां</h4>
            <ul className="space-y-2">
              {categories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <Link
                    to={`/category/${category.id}`}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {category.hindiName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-white">उपयोगी लिंक</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-primary-400 transition-colors">
                  हमारे बारे में
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary-400 transition-colors">
                  संपर्क करें
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-primary-400 transition-colors">
                  गोपनीयता नीति
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-primary-400 transition-colors">
                  नियम और शर्तें
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h4 className="text-lg font-bold mb-4 text-white">हमसे जुड़ें</h4>
            <p className="mb-4">
              समाचार अपडेट के लिए हमारी ईमेल सूची में शामिल हों
            </p>
            <form className="mb-4">
              <div className="flex">
                <input
                  type="email"
                  placeholder="आपका ईमेल"
                  className="flex-1 px-3 py-2 rounded-l-md text-gray-900 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-primary-600 hover:bg-primary-700 px-4 py-2 rounded-r-md transition-colors"
                >
                  जुड़ें
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm">
          <p>&copy; {year} हिंदी समाचार। सर्वाधिकार सुरक्षित।</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;