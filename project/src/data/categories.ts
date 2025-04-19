import { CategoryInfo } from '../types';

export const categories: CategoryInfo[] = [
  { id: 'national', name: 'National', hindiName: 'राष्ट्रीय' },
  { id: 'international', name: 'International', hindiName: 'अंतरराष्ट्रीय' },
  { id: 'politics', name: 'Politics', hindiName: 'राजनीति' },
  { id: 'business', name: 'Business', hindiName: 'व्यापार' },
  { id: 'technology', name: 'Technology', hindiName: 'प्रौद्योगिकी' },
  { id: 'sports', name: 'Sports', hindiName: 'खेल' },
  { id: 'entertainment', name: 'Entertainment', hindiName: 'मनोरंजन' },
  { id: 'health', name: 'Health', hindiName: 'स्वास्थ्य' },
];

export const getCategoryName = (categoryId: string): string => {
  const category = categories.find(cat => cat.id === categoryId);
  return category ? category.hindiName : 'अन्य';
};