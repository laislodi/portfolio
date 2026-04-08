import { createContext, useContext, useState } from "react";

export const FilterContext = createContext({
  category: ["frontend", "backend", "api", "devops", "collaboration", "testing", "linux", "database"],
  filterSelector: ["frontend", "backend", "api", "devops", "collaboration", "testing", "linux", "database"],
  onAdd: () => {},
  onRemove: () => {},
  onAddAll: () => {},
  onRemoveAll: () => {}
});

export default function FilterContextProvider({ children }) {
  const context = useContext(FilterContext);
  
  const [ filterSelector, setFilterSelector ] = useState(context.filterSelector);

  function addFilter(newFilterSelector) {
    setFilterSelector([...filterSelector, newFilterSelector]);
  }

  function removeFilter(oldFilterSelector) {
    const newFilters = filterSelector.filter(selector => selector != oldFilterSelector);
    setFilterSelector([...newFilters]);
  }

  function addAll() {
    setFilterSelector([...context.category]);
  }

  function removeAll() {
    setFilterSelector([]);
  }

  const filterContext = {
    category: context.category,
    filterSelector: filterSelector,
    onAdd: addFilter,
    onRemove: removeFilter,
    onAddAll: addAll,
    onRemoveAll: removeAll
  }

  return (
    <FilterContext.Provider value={filterContext}>
      {children}
    </FilterContext.Provider>
  );
};