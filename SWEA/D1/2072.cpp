/* 홀수만 더하기 */
#include <iostream>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int test_case = 0;
	int T = 0;
	
	cin >> T;
	
	for(test_case=1; test_case<=T; test_case++) {
		int result = 0;
		for(int i=0; i<10; i++) {
			int n;
			cin >> n;
			
			if(n % 2 == 1) result += n;
		}
		
		printf("#%d %d\n", test_case, result);
	}
	
	return 0;
}
