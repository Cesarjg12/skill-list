import NewSkillListItem from "./NewSkillListItem";

export default function SkillList({ skills }) {
  const SkillListItems = skills.map((s, idx) => (
    <NewSkillListItem skill={s} index= {idx} key={idx} />
  ));
  return <ul className="SkillList">{ SkillListItems }</ul>;
}
