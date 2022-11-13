/* 평균값 구하기 */
#include <iostream>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int test_case = 0;
	int T = 0;
	int num = 0;
	
	cin >> T;
	for(test_case=1; test_case<=T; test_case++) {
		double sum = 0;
		for(int i=0; i<10; i++) {
			cin >> num;
			sum += num;
		}
		
		printf("#%d %.0lf\n", test_case, sum / 10.0);
	}
	
	return 0;
}
