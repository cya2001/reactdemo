export const links = [
  {
    name: "Todolist",
    hash: "#todolist",
  },
  {
    name: "Countdown",
    hash: "#countdown",
  },
  {
    name: "a",
    hash: "#a",
  },
  {
    name: "b",
    hash: "#b",
  },


] as const;

export const sectionName = [
  links.map((link,index)=>(link.name))
] as const;