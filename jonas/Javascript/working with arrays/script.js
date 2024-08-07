// 'use strict';
//
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // BANKIST APP
//
// // Data
// const account1 = {
//   owner: 'Jonas Schmedtmann',
//   movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
//   interestRate: 1.2, // %
//   pin: 1111,
// };
//
// const account2 = {
//   owner: 'Jessica Davis',
//   movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
//   interestRate: 1.5,
//   pin: 2222,
// };
//
// const account3 = {
//   owner: 'Steven Thomas Williams',
//   movements: [200, -200, 340, -300, -20, 50, 400, -460],
//   interestRate: 0.7,
//   pin: 3333,
// };
//
// const account4 = {
//   owner: 'Sarah Smith',
//   movements: [430, 1000, 700, 50, 90],
//   interestRate: 1,
//   pin: 4444,
// };
//
// const accounts = [account1, account2, account3, account4];
//
// // Elements
// const labelWelcome = document.querySelector('.welcome');
// const labelDate = document.querySelector('.date');
// const labelBalance = document.querySelector('.balance__value');
// const labelSumIn = document.querySelector('.summary__value--in');
// const labelSumOut = document.querySelector('.summary__value--out');
// const labelSumInterest = document.querySelector('.summary__value--interest');
// const labelTimer = document.querySelector('.timer');
//
// const containerApp = document.querySelector('.app');
// const containerMovements = document.querySelector('.movements');
//
// const btnLogin = document.querySelector('.login__btn');
// const btnTransfer = document.querySelector('.form__btn--transfer');
// const btnLoan = document.querySelector('.form__btn--loan');
// const btnClose = document.querySelector('.form__btn--close');
// const btnSort = document.querySelector('.btn--sort');
//
// const inputLoginUsername = document.querySelector('.login__input--user');
// const inputLoginPin = document.querySelector('.login__input--pin');
// const inputTransferTo = document.querySelector('.form__input--to');
// const inputTransferAmount = document.querySelector('.form__input--amount');
// const inputLoanAmount = document.querySelector('.form__input--loan-amount');
// const inputCloseUsername = document.querySelector('.form__input--user');
// const inputClosePin = document.querySelector('.form__input--pin');
//
// const displayMovements = (movements, sort = false) => {
//   containerMovements.innerHTML = ``;
//
//   const movs = sort ? movements.slice()
//     .sort((a, b) => a - b) : movements;
//
//   movs.forEach((mov, i) => {
//     const type = mov > 0 ? 'deposit' : 'withdrawal';
//     const html = `
//         <div class="movements__row">
//           <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
//           <div class="movements__value">${mov}  💶</div>
//         </div>
//     `;
//     containerMovements.insertAdjacentHTML('afterbegin', html);
//   });
// };
//
// const calcDisplayBalance = (acc) => {
//   acc.balance = acc.movements.reduce((acc, mov) => {
//     return acc + mov;
//   }, 0);
//   labelBalance.textContent = `${acc.balance} EUR💶`;
// };
//
// const calcDisplaySummary = (acc) => {
//   const incomes = acc.movements.filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}  💶`;
//
//   const out = acc.movements.filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumOut.textContent = `${out} 💶`;
//
//   const interest = acc.movements.filter(mov => mov > 0)
//     .map((mov) => {
//       return mov * acc.interestRate / 100;
//     })
//     .filter((int, i, arr) => {
//       return int >= 1;
//     })
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumInterest.textContent = `${interest}💶`;
// };
//
// const createUsernames = (accs) => {
//   accs.forEach((acc) => {
//     acc.username = acc.owner
//       .toLowerCase()
//       .split(' ')
//       .map((name) => {
//         return name.at(0);
//       })
//       .join('');
//   });
// };
//
// createUsernames(accounts);
// const updateUI = (acc) => {
//   displayMovements(acc.movements);
//   calcDisplayBalance(acc);
//   calcDisplaySummary(acc);
// };
// let currentAccount;
//
// btnLogin.addEventListener('click', (e) => {
//   e.preventDefault();
//   currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
//   if ( currentAccount?.pin === Number(inputLoginPin.value) ) {
//     labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`;
//     containerApp.style.opacity = 100;
//     inputLoginUsername.value = '';
//     inputLoginUsername.value = '';
//     inputLoginPin.blur();
//     updateUI(currentAccount);
//   }
// });
//
// btnTransfer.addEventListener('click', (e) => {
//   e.preventDefault();
//
//   const amount = Number(inputTransferAmount.value);
//   const receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
//   inputTransferAmount.value = inputTransferTo.value = '';
//   if ( amount > 0 && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username ) {
//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);
//     updateUI(currentAccount);
//   }
// });
//
// btnLoan.addEventListener('click', (e) => {
//   e.preventDefault();
//
//   const amount = Number(inputLoanAmount.value);
//
//   if ( amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1) ) {
//     currentAccount.movements.push(amount);
//
//     updateUI(currentAccount);
//   }
//   inputLoanAmount.value = '';
// });
//
// btnClose.addEventListener('click', (e) => {
//   e.preventDefault();
//   if ( inputCloseUsername.value === currentAccount.username && Number(inputClosePin.value) === currentAccount.pin ) {
//     const index = accounts.findIndex(acc => acc.username === currentAccount.username);
//     accounts.splice(index, 1);
//     containerApp.style.opacity = 0;
//   }
//   inputCloseUsername.value = inputClosePin.value = '';
//
// });
//
// let sorted = false;
//
// btnSort.addEventListener('click', (e) => {
//   e.preventDefault();
//   displayMovements(currentAccount.movements, !sorted);
//   sorted = !sorted;
// });
// /////////////////////////////////////////////////
// /////////////////////////////////////////////////
// // LECTURES
//
// const currencies = new Map([
//   ['USD', 'United States dollar'], ['EUR', 'Euro'], ['GBP', 'Pound sterling'],
// ]);
//
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
//
// /////////////////////////////////////////////////
//
// const z = Array.from({length: 100}, (_, i) => Math.floor(Math.random() * 10 + 1));
//
// labelBalance.addEventListener('click', () => {
//   const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
//   console.log(movementsUI.map(el => el.textContent.reduce('💶', '')));
// });
// // 1.
// const bankDepositSum = accounts.flatMap((acc) => acc.movements)
//   .filter(mov => mov > 0)
//   .reduce((acc, cur) => acc + cur, 0);
// console.log(bankDepositSum);
//
// // 2.
//
// const numDeposits1000 = accounts.flatMap((acc) => acc.movements)
//   .filter(mov => mov > 1000)
//   .reduce((_, _1, _2, arr) => arr.length);
//
// console.log(numDeposits1000);
//
// // 3.
//
// const {
//   deposits,
//   withdrawals,
// } = accounts.flatMap((acc) => acc.movements)
//   .reduce((sums, cur) => {
//       cur > 0 ? sums.deposits += cur : sums.withdrawals += cur;
//
//       return sums;
//     },
//     {
//       deposits: 0,
//       withdrawals: 0,
//     });
// console.log(deposits, withdrawals);
//
// // 4.
// // this is a nice title
// const convertTitleCase = (title) => {
//
//
//   const exceptations = ['a', 'an', 'the', 'but', 'or', 'on', 'in', 'with','and'];
//
//   const titleCase = title.toLowerCase()
//     .split(' ')
//     .map(word => exceptations.includes(word) ? word : word[0].toUpperCase() + word.slice(1)).join(' ');
//   return titleCase;
// };
//
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a Long title but too long'));
// console.log(convertTitleCase('this is a title with an Example'));