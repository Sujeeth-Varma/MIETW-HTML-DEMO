// console.log("Hello world");
// let data = 0;
// // console.log(++data);

// let str1 = "hello";
// let str2 = "hello";

// // console.log(str1 === str2);

// let num1 = 1;
// let num2 = "1";
// // console.log(num1 === num2);

// // Logical Operators
// console.log(!false);

// // for (let i = 0; i <= 10; i++) {
// //   console.log(i);
// // }

// const arr = ["A", "B", "C", "D", "E"];

// // for (let i = 0; i < arr.length; i++) {
// //   console.log(arr[i]);
// // }

// // arr.map((letter) => {
// //   console.log(letter);
// // });

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// nums.map((num) => {
//   console.log(num * num);
// });

// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i] * nums[i]);
// }

// const data = {
//   name: "username",
//   email: "random@gmail.com",
//   phone: [1234, 2453],
//   address: {
//     city: "Hyd",
//     state: "TS",
//   },
// };

// const addr = data.address;

// const { name: username, email: useremail, phone, address } = data;

// console.log(addr);

// console.log(username);
// console.log(useremail);
// console.log(address);

// // console.log(data);
// console.log(data.name);
// console.log(data.address.city);
// const { city, state } = address;
// console.log(city);
// console.log(state);

const users = [
  {
    name: "username",
    email: "random@gmail.com",
    phone: [1234, 2453],
    address: {
      city: "Hyd",
      state: "TS",
    },
  },
  {
    name: "username-2",
    email: "random2@gmail.com",
    phone: [1234, 2453],
    address: {
      city: "Bnglr",
      state: "KA",
    },
  },
];

// console.log(users);

users.map((user) => {
  console.log(user.address.city);
});
