import { createContext, useContext, useState } from "react";

export const FilterContext = createContext({
  category: ["Frontend", "Backend", "API", "DevOps", "Collaboration", "Testing", "Linux", "Database"],
  filterSelector: ["Frontend", "Backend", "API", "DevOps", "Collaboration", "Testing", "Linux", "Database"],
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
    const newFilters = filterSelector.filter(selector => selector !== oldFilterSelector);
    setFilterSelector([...newFilters]);
  }

  function addAll() {
    setFilterSelector([...context.category])
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