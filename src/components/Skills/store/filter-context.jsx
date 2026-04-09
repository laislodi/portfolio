import { createContext, useContext, useState } from "react";

const SKILL_TYPE = {
  FRONTEND: "frontend",
  BACKEND: "backend",
  API: "api",
  DEVOPS: "devops",
  COLLABORATION: "collaboration",
  TESTING: "testing",
  LINUX: "linux",
  DATABASE: "database"
}

export const FilterContext = createContext({
  category: [
    SKILL_TYPE.FRONTEND,
    SKILL_TYPE.BACKEND,
    SKILL_TYPE.API,
    SKILL_TYPE.DEVOPS,
    SKILL_TYPE.COLLABORATION,
    SKILL_TYPE.TESTING,
    SKILL_TYPE.LINUX,
    SKILL_TYPE.DATABASE
  ],
  filterSelector: [
    SKILL_TYPE.FRONTEND,
    SKILL_TYPE.BACKEND,
    SKILL_TYPE.API,
    SKILL_TYPE.DEVOPS,
    SKILL_TYPE.COLLABORATION,
    SKILL_TYPE.TESTING,
    SKILL_TYPE.LINUX,
    SKILL_TYPE.DATABASE
  ],
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