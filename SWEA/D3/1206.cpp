/* [S/W 문제해결 기본] 1일차 - View */
#include <iostream>
#include <vector>
using namespace std;

int main(int argc, char** argv) {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int test_case;
	int T = 10;
	
	for(test_case=1; test_case<=T; test_case++) {
		int building_cnt; // 건물의 개수 
		cin >> building_cnt;
		
		vector<int> height_list; // 건물의 높이 
		int height = 0;
		for(int i=0; i<building_cnt; i++) {
			cin >> height;
			height_list.push_back(height);
		}
		
		int result = 0;
		for(int i=2; i<building_cnt-2; i++) {
			int max = -1;
			for(int j=i-2; j<=i+2; j++) {
				if(j == i) continue;
        // 앞 2개, 뒤 2개에서 최댓값 구하기
				max = height_list[j] >= max ? height_list[j] : max;
			}
      // 위에서 구한 최댓값이 현재 건물높이 이하라면,
      // 조망권이 확보된 것이므로 뺀 만큼 결과값에 더하기
			if(max <= height_list[i]) {
				result += (height_list[i] - max);
			}
		}
		
		cout << "#" << test_case << " " << result << '\n';	
	}
	
	return 0;
}
