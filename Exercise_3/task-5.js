/* Создайте функцию, которая принимает список функций и
сортирует их в порядке возрастания в зависимости от того,
сколько вызовов необходимо для того, чтобы они вернули нефункциональный результат. */

// f1() ➞ "hello"

// f2()() ➞ "edabit"

// f3()()() ➞ "user"

funcSort([f2, f3, f1])  // ➞ [f1, f2, f3]

funcSort([f1, f2, f3])  // ➞ [f1, f2, f3]

funcSort([f2, "func"])  // ➞ ["func", f2]
