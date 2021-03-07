const hello = () => {
  return "hello World";
};

const add = (fNumber, sNumber) => fNumber + sNumber;

// console.log(add(1, 2));

let objInfor = {
  name: "Hung",
  age: 20,
  address: "Ha Noi",
};

const { name, age, address } = objInfor; // Có thể làm tương tự với array

let property = [{ name: "Hung" }, { name: "Tran" }, { name: "Khasnh" }];

const [a, b, c] = property;

// console.log(a, b, c);

// console.log(name, age, address);

let person = [
  {
    name: "A",
    color: "yellow",
  },
  {
    name: "B",
    color: "black",
  },
  {
    name: "C",
    color: "orange",
  },
  {
    name: "D",
    color: "red",
  },
];

let convertColor = {
  yellow: "vàng",
  red: "đỏ",
  orange: "xanh",
  black: "đen",
};

person.forEach((X) => {
  X.number = Math.floor(Math.random() * 100);
});
person.sort((a, b) => {
  return a.number - b.number;
});

person.map((item) =>
  // console.log(`${item.name} thích ${convertColor[item.color]}`)
  console.log(`${item.name} thích ${item.number}`)
);

const ans = person.filter((item) => item.number >= 50);

console.log(ans.length);
ans.map((item) => {
  console.log(`${item.name} thích ${item.number}`);
});

// person.forEach(X => {
//   if(X.color === 'orange') console.log(`${X.name} thích màu cam`);
//   else if(X.color === 'black') console.log(`${X.name} thích màu đen`);
//   else if(X.color === 'red') console.log(`${X.name} thích màu đỏ`);
//   else{
//     console.log(`${X.name} thích màu vàng`);
//   }
// });
