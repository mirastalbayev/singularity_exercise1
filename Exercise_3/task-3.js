/* Создайте функцию, которая принимает два массива и
возвращает массив пересечения и массив объединения. 
    a. Массив пересечений: элементы, общие для обоих.
    b. Объединяющий массив: элементы, которые существуют в первом
        или втором массиве, или в обоих (не исключающее ИЛИ).

В то время как входные массивы могут содержать повторяющиеся номера,
возвращаемые массивы пересечений и объединений должны быть установлены,
то есть не содержать дубликатов. Возвращаемые массивы должны быть
отсортированы в порядке возрастания. */

// Array 1: [5, 6, 6, 6, 8, 9]
// Array 2: [3, 3, 4, 4, 5, 5, 8]

Intersection: [5, 8]
// 5 и 8 - это единственные 2 числа, которые существуют в обоих массивах.

Union: [3, 4, 5, 6, 8, 9]
// Каждое число существует по крайней мере в одном массиве.

intersectionUnion([1, 2, 3, 4, 4], [4, 5, 9]) // ➞ [[4], [1, 2, 3, 4, 5, 9]]
intersectionUnion([1, 2, 3], [4, 5, 6]) // ➞ [[], [1, 2, 3, 4, 5, 6]]
intersectionUnion([1, 1], [1, 1, 1, 1]) // ➞ [[1], [1]]
