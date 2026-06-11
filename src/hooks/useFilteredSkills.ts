import { useContext } from "react";
import { FilterContext } from "../components/Skills/store/filter-context";

// Intlayer wraps string values in proxy objects at runtime,
// so the actual shape of types is Array<{ value: string }>, not string[].
// TypeScript would error on type.value if you used TechSkillType directly
// as the constraint.
interface SkillWithTypes {
  types: Array<{ value: string }>;
}

export const useFilteredSkills = <T extends SkillWithTypes>(skills: T[] = []): T[] => {
  const { filterSelector } = useContext(FilterContext);
  return skills.filter(skill =>
    skill.types.every(type => filterSelector.includes(type.value))
  );
};
