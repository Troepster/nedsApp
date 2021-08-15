import * as React from 'react';
import { useState } from 'react';

type ToggleCategory = (category: string) => void;
interface Value {
  selectedCategory: string | undefined;
  toggleCategory: ToggleCategory;
}
const CategoryContext = React.createContext<Value>({} as Value);

export const CategoryProvider: React.FC = ({ children }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>();
  const toggleCategory: ToggleCategory = (category) => {
    setSelectedCategory((v) => (v === category ? undefined : category));
  };
  return <CategoryContext.Provider value={{ selectedCategory, toggleCategory }}>{children}</CategoryContext.Provider>;
};

export default CategoryContext;
