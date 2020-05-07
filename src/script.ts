import {
  User,
  Address,
  Profession,
  Dog,
  GenericFunction,
  OnClick,
  OnBlur,
} from './interfaces';

import './classes';

/**
 * Если нет четкой структуры данных, возвращаемых с сервера
 * id, name, salary
 * itemId, additionalName, partialSalary, position
 */

// const getUser: Promise<User> = Promise.resolve({
//   id: 1,
//   address: {
//     street: 'Glushko',
//     building: 23,
//     appartment: 3,
//   },
//   profession: {
//     id: 1,
//     name: 'Programmer',
//     salary: 10000,
//     position: {
//       name: 'Java',
//       avarageSalary: 1000,
//     },
//   },
//   name: 'Vasya',
// });

// const fnc: GenericFunction<string> = (a) => a;

// class University<T> {
//   constructor(public students: T[]) {}

//   public addUser(student: T) {
//     this.students.push(student);
//   }
// }

// const universityOfDogs = new University<Dog>([]);

// const universityOfUsers = new University<User>([]);

// getUser
//   .then((user) => universityOfUsers.addUser(user))
//   .then(() => {
//     console.log(universityOfUsers);
//   });

// class A implements OnClick, OnBlur {
//   onClick(e: Event) {
//     console.log('Clicked');
//   }
//   onBlur(e: Event) {
//     console.log('Blured');
//   }
// }

// const listenTo = (el: Element, handler: A) => {
//   el.addEventListener('click', handler.onClick);
// };
