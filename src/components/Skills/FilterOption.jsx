import { useContext } from "react";
import { FilterContext } from "./store/filter-context";

export default function FilterOption({ option, checked = true, onChange = () => {} }) {

  const context = useContext(FilterContext);

  function handleChange() {
    if (checked) {
      context.onAdd(option);
    } else {
      context.onRemove(option);
    }
    onChange(!checked, option);
  };

  const checkId = option.toLowerCase().replace(" ","-");

  return (
    <div className="filter-option" key={option}>
      <label id={"label-".concat(checkId)} htmlFor={"filter-".concat(checkId)}>
        <input
          type="checkbox"
          id={"filter-".concat(checkId)}
          onChange={handleChange}
          checked={checked}
        />
        {option}
      </label>
    </div>
  )
};
