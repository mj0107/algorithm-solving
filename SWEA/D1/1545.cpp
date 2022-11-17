/* 거꾸로 출력해 보아요 */
#include <iostream>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int N;
	cin >> N;
	
	for(int i=N; i>=0; i--) {
		cout << i << " ";
	}
	
	return 0;
}
