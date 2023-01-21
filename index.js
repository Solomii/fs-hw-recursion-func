/*
написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
кількість пар дорівнює прийнятому аргументу.
якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок
!!!pairBrickets(4) => '(((())))'
!!pairBrickets(-4) => '()'
!!pairBrickets('qwe') => throw
 */

/**
 * get number and return str = "()"
 * @param {number} num
 * @param  {...string} str
 * @returns {string}
 * @throws {TypeError} argument num must be number
 */

const getPairBrickets = (num, ...str) => {
    // debugger;
    if (typeof num !== "number") {
        throw new TypeError("type must be number");
    }

    str += "(";
    if (num > 1) {
        str = getPairBrickets(num - 1, str);
    }
    str += ")";
    return str;
};

try {
    console.log(getPairBrickets(4));
    console.log(getPairBrickets(-4));
    console.log(getPairBrickets(0));
    console.log(getPairBrickets("fdfdsf"));
} catch (error) {
    console.log(error);
}

// debugger
// const getPairBrickets = (num, ...str) => {
//     try {
//         // debugger;
//         if (typeof num !== "number") {
//             throw new TypeError("type must be number");
//         }

//         str += "(";
//         if (num > 1) {
//             str = getPairBrickets(num - 1, str);
//         }
//         str += ")";
//         return str;
//     } catch (error) {
//         console.log(error);
//     }
// };

// console.log(getPairBrickets(4));
// console.log(getPairBrickets(-4));
// console.log(getPairBrickets(0));
// console.log(getPairBrickets("0"));
// console.log(getPairBrickets("fdsfa"));

/*
написати рекурсивну функцію, яка приймає два числа і повертає найбільший спільний дільник цих двох чисел
// getDivider(24, 15) -> 3
// getDivider(3, 3) -> 3
// getDivider(7, 3) -> 1

Алгоритм Евкліда дозволяє знайти НСД двох натуральних чисел.
Суть алгоритму Евкліда – два числа порівнюють і від більшого віднімають менше до тих пір, поки числа не стануть рівними. Число, якому вони стануть рівними, і є їх найбільший спільний дільник.
тобто ми маємо 24 і 15 далі 
24-15=9
15-9=6
9-6=3
6-3=3
3=3
!!!повертаємо 3 
ми маємо 3 і 3
3-3=0
!!!повертаємо 3 
7-3=4
4-3=1
3-1=2
2-1=1
1=1
!!!повертаємо 1
 */

// debugger;
/**
 * get two numbers and return the greatest common divisor of those numbers
 * @param {number} num1
 * @param {number} num2
 * @returns  {number}
 * @throws {TypeError | RangeError} num1 and num2 must be numbers and must be positive
 */
const getDivider = (num1, num2) => {
    if (typeof num1 !== "number" || typeof num2 !== "number") {
        throw new TypeError("type must number");
    }

    if (num1 < 0 || num2 < 0) {
        throw new RangeError("exp must be positive");
    }
    if (num1 === num2) {
        return num1;
    }
    if (num1 > num2) {
        return getDivider(num1 - num2, num2);
    }
    return getDivider(num1, num2 - num1);
};

try {
    console.log(getDivider(24, 15));
    console.log(getDivider(3, 3));
    console.log(getDivider(7, 3));
} catch (error) {
    console.log(error);
}

// const getDivider = (num1, num2) => {
//   try {
//       if (typeof num1 !== "number" || typeof num2 !== "number") {
//           throw new TypeError("type must number");
//       }

//       if (num1 < 0 || num2 < 0) {
//           throw new RangeError("exp must be positive");
//       }
//       if (num1 === num2) {
//           return num1;
//       }
//       if (num1 > num2) {
//           return getDivider(num1 - num2, num2);
//       }
//       return getDivider(num1, num2 - num1);
//   } catch (error) {
//       console.log(error);
//   }
// };

// console.log(getDivider(24, 15));
// console.log(getDivider(3, 3));
// console.log(getDivider(7, 3));
