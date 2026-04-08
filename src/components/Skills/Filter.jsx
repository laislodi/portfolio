import { useContext, useMemo, useState } from "react";
import { FilterContext } from "./store/filter-context.jsx";
import FilterOption from "./FilterOption.jsx";
import { useIntlayer } from "react-intlayer";

export default function Filter() {

  const content = useIntlayer("tech_skills_content");
  const filterCtx = useContext(FilterContext);
  const [ selected, setSelected ] = useState(filterCtx.filterSelector);

  const allIsSelected = useMemo(() => {
    return selected.length === filterCtx.category.length;
  }, [selected.length]);

  function handleSelect(option, checked) {
    if (checked) {
      filterCtx.onAdd(option);
      setSelected([...selected, option]);
    } else {
      filterCtx.onRemove(option);
      setSelected(selected.filter((item) => item != option))
    }
  }

  function selectAll(_, checked) {
    if (checked) {
      filterCtx.onAddAll();
      setSelected(filterCtx.category);
    } else {
      filterCtx.onRemoveAll();
      setSelected([]);
    }
  }

  return (
    <div className="filter">
      <FilterOption
        option={content.filter.selectAll.option.value}
        label={content.filter.selectAll.description.value}
        checked={allIsSelected}
        onChange={selectAll}
      />
      {
        content.filter.options.map((skill) => {
          return <FilterOption 
            key={"option" + skill.option.value}
            option={skill.option.value}
            label={skill.description.value}
            checked={selected.includes(skill.option.value)}
            onChange={handleSelect}
          />
        })
      }
    </div>
  );
}