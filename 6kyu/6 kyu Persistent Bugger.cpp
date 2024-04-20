
//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
//
//For example(Input-- > Output) :
//
//    39 -- > 3 (because 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4 and 4 has only one digit)
//    999 -- > 4 (because 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, and finally 1 * 2 = 2)
//    4 -- > 0 (because 4 is already a one - digit number)



#include <vector>
#include <iostream>
using namespace std;
vector<int> numberToArray(long long number) {
    vector<int> result;

    // Пока число не равно 0
    while (number != 0) {
        // Получаем последнюю цифру числа (остаток от деления на 10)
        long long digit = number % 10;
        // Добавляем цифру в начало массива
        result.insert(result.begin(), digit);
        // Убираем последнюю цифру из числа
        number /= 10;
    }

    return result;
}


int persistence(long long n) {
    cout << n << endl;
    if (n < 10) { return 0; }
    int counter = 0;


    while (n >= 10) {
        vector<int> array = numberToArray(n);
        long long res = 1;
        for (int num : array) {
            res *= num;
        }
        n = res;

        counter++;
    }
    return counter;
}