"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

function getValue(object) {
  for (const key in object) {
    if (typeof object[key] === 'number' || typeof object[key] === 'string') {
      if (key === 'author') {
        console.log(object[key]);
      }
      if (key === 'dislikes' && object[key] === 2) {
        console.log(object[key]);
      }
      if (key === 'userId' && object[key] === 5) {
        console.log(object[key]);
      }
      if (key === 'text' && object[key] === 'lorem ipsum 2') {
        console.log(object[key]);
      }
    } else {
      getValue(object[key]);
    }
  }
}

console.log(getValue(post));

// 2. Второй способ получить значения
console.log(post.comments[0].rating.dislikes);
