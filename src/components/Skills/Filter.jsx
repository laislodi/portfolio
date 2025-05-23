import { useContext, useMemo, useState } from "react";
import { FilterContext } from "./store/filter-context.jsx";
import FilterOption from "./FilterOption.jsx";

export default function Filter() {

  const filterCtx = useContext(FilterContext);
  const skills = filterCtx.category;
  const [ selected, setSelected ] = useState(filterCtx.filterSelector);

  const allIsSelected = useMemo(() => {
    return selected.length === filterCtx.category.length;
  }, [selected.length, filterCtx.category.length]);

  function handleSelect(checked, option) {
    if (checked) {
      filterCtx.onAdd(option);
      setSelected([...selected, option]);
    } else {
      filterCtx.onRemove(option);
      setSelected(selected.filter((item) => item !== option))
    }
  }

  function selectAll(option) {
    if (option) {
      filterCtx.onAddAll();
      setSelected(filterCtx.category);
    } else {
      filterCtx.onRemoveAll();
      setSelected([]);
    }
  }

  return (
    <div className="filter">
      <FilterOption option={"Select All"} checked={allIsSelected} onChange={selectAll} />
      {
        skills.map((skill) => {
          return <FilterOption key={skill} option={skill} checked={selected.includes(skill)} onChange={handleSelect} />
        })
      }
    </div>
  );
}