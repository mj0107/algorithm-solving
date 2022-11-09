/* [S/W 문제해결 기본] 1일차 - Flatten */
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

const int width = 100;

int main() {
	int test_case = 0;
	int T = 10;
	
	for(test_case=1; test_case<=T; test_case++) {
		int dump_cnt = 0;
		cin >> dump_cnt;
		
		vector<int> box_height_list;
		for(int i=0; i<width; i++) {
			int height;
			cin >> height;
			box_height_list.push_back(height);
		}
		
		int distance = 0;
    // 마지막에 dump를 수행하기 때문에
    // 입력받은 dump_cnt 번째에 dump를 수행하면 수행하고 난 뒤가 최소거리 일 수 있음
    // 따라서 dump_cnt + 1 까지 수행
		for(int i=0; i<dump_cnt+1; i++) {
			int max_idx = max_element(box_height_list.begin(), box_height_list.end()) - box_height_list.begin();
			int min_idx = min_element(box_height_list.begin(), box_height_list.end()) - box_height_list.begin();
			
			int max = box_height_list[max_idx];
			int min = box_height_list[min_idx];
			
			distance = max - min;
			if(distance <= 1) {
				printf("#%d %d\n", test_case, distance);
				break;
			}
			
			box_height_list[max_idx]--;
			box_height_list[min_idx]++;
		}
		
		if(distance > 1) printf("#%d %d\n", test_case, distance);
	}
	
	return 0;
}