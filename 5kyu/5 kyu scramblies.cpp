//Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
//
//Notes:
//
//Only lower case letters will be used(a - z).No punctuation or digits will be included.
//Performance needs to be considered.
//Examples
//scramble('rkqodlw', 'world') ==> True
//scramble('cedewaraaossoqqyt', 'codewars') ==> True
//scramble('katas', 'steak') ==> False






#include <string>
#include <unordered_map>
using namespace std;

bool scramble(const string& s1, const string& s2) {
    // Создаем хэш-таблицу для подсчета количества встречающихся символов в строке s1
    unordered_map<char, int> charCount;

    // Заполняем хэш-таблицу символами из строки s1
    for (char c : s1)
        charCount[c]++; // Увеличиваем счетчик встреченного символа

    // Проверяем, содержит ли s1 достаточно символов для s2
    for (char c : s2) {
        // Если символ отсутствует в хэш-таблице или его количество в s1 меньше, чем в s2, возвращаем false
        if (charCount.find(c) == charCount.end() || --charCount[c] < 0)
            return false; // Возвращаем false, если символ не найден или его количество в s1 недостаточно
    }
    
    return true; // Возвращаем true, если все символы s2 найдены в s1 в достаточном количестве
}

В этой функции создается хэш - таблица unordered_map<char, int> charCount, которая будет использоваться для подсчета количества каждого символа в строке s1.
Затем происходит заполнение хэш - таблицы charCount символами из строки s1.Цикл for (char c : s1) проходит по каждому символу c в строке s1, и для каждого символа увеличивается счетчик встреченного символа с помощью charCount[c]++.
После того как charCount заполнен, цикл for (char c : s2) проходит по каждому символу c в строке s2 и проверяет его наличие и количество в s1.
Если символ c отсутствует в charCount(т.е.charCount.find(c) == charCount.end()) или его количество в s1 меньше, чем количество в s2(т.е. --charCount[c] < 0), то функция возвращает false, так как невозможно составить строку s2 из символов строки s1.
    Если все символы строки s2 найдены в строке s1 в достаточном количестве, функция возвращает true.


























/////////////////////old solution
//#include<string>
//using namespace std;
//
//bool scramble(const string& s1, const string& s2) {
//    string ss1 = s1;
//    size_t result = s2.length();
//
//
//    for (char a : s2) {
//
//        for (size_t i = 0; i <= ss1.length(); i++) {
//
//            if (a == ss1[i]) {
//                result--;
//                ss1.erase(i, 1);
//                break;
//            }
//
//        }
//
//    }
//
//    return result == 0;
//
//}