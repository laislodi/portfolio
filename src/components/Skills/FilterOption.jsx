import { useContext } from "react";
import { FilterContext } from "./store/filter-context";

export default function FilterOption({ 
  option = "selectAll",
  label = "Select All",
  checked = true,
  onChange = () => {}
}) {

  const context = useContext(FilterContext);

  function handleChange() {
    if (checked) {
      context.onAdd(option);
    } else {
      context.onRemove(option);
    }
    onChange(option, !checked);
  };

  return (
    <div className="filter-option" key={"option" + option}>
      <label id={"label-".concat(option)} htmlFor={"filter-".concat(option)}>
        <input
          type="checkbox"
          id={"filter-".concat(option)}
          onChange={handleChange}
          checked={checked}
        />
        {label}
      </label>
    </div>
  )
};
