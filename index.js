/*
написати рекурсивну функцію, яка приймає число і повертає рядок з вкладених пар круглих дужок.
кількість пар дорівнює прийнятому аргументу.
якщо число(аргумет) менше 1 - повертаємо лише одну пару круглих дужок
!!!pairBrickets(4) => '(((())))'
!!pairBrickets(-4) => '()'
!!pairBrickets('qwe') => throw
 */

/**
 * 
 * @param {number} num 
 * @param  {...string} str 
 * @returns {string}
 */
// debugger
const getPairBrickets = (num, ...str) => {
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
const getDivider = (num1, num2) => {
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
