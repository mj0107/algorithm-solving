/* 24시간 */
#include<iostream>

using namespace std;

int main(int argc, char** argv) {
	int test_case;
	int T;
	
	cin >> T;
	
	int A, B;
	for(test_case = 1; test_case <= T; ++test_case)	{
		cin >> A >> B;
		int result = (A + B) % 24;
		printf("#%d %d\n", test_case, result);
	}
	return 0;
}