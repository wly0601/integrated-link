const data = [
  {
    id: 0,
    link: "oioi",
    name: "Lorem ipsum"
  },
  {
    id: 1,
    link: "youtube.com",
    name: "dolor"
  }
];

const key = "lorem ";
let result = data.filter(n => n.name.match(new RegExp(`.*${key}.*`, "i")));
console.log(result);
