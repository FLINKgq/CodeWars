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
    // ������� ���-������� ��� �������� ���������� ������������� �������� � ������ s1
    unordered_map<char, int> charCount;

    // ��������� ���-������� ��������� �� ������ s1
    for (char c : s1)
        charCount[c]++; // ����������� ������� ������������ �������

    // ���������, �������� �� s1 ���������� �������� ��� s2
    for (char c : s2) {
        // ���� ������ ����������� � ���-������� ��� ��� ���������� � s1 ������, ��� � s2, ���������� false
        if (charCount.find(c) == charCount.end() || --charCount[c] < 0)
            return false; // ���������� false, ���� ������ �� ������ ��� ��� ���������� � s1 ������������
    }
    
    return true; // ���������� true, ���� ��� ������� s2 ������� � s1 � ����������� ����������
}

� ���� ������� ��������� ��� - ������� unordered_map<char, int> charCount, ������� ����� �������������� ��� �������� ���������� ������� ������� � ������ s1.
����� ���������� ���������� ��� - ������� charCount ��������� �� ������ s1.���� for (char c : s1) �������� �� ������� ������� c � ������ s1, � ��� ������� ������� ������������� ������� ������������ ������� � ������� charCount[c]++.
����� ���� ��� charCount ��������, ���� for (char c : s2) �������� �� ������� ������� c � ������ s2 � ��������� ��� ������� � ���������� � s1.
���� ������ c ����������� � charCount(�.�.charCount.find(c) == charCount.end()) ��� ��� ���������� � s1 ������, ��� ���������� � s2(�.�. --charCount[c] < 0), �� ������� ���������� false, ��� ��� ���������� ��������� ������ s2 �� �������� ������ s1.
    ���� ��� ������� ������ s2 ������� � ������ s1 � ����������� ����������, ������� ���������� true.


























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