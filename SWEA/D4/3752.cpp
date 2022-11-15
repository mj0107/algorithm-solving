/* 가능한 시험 점수 */
#include <iostream>
#include <vector>
using namespace std;

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int test_case = 0;
	int T = 0;
	
	cin >> T;
	
	for(test_case=1; test_case<=T; test_case++) {
		int N;
		cin >> N;
		
		// 가능한 점수들을 저장할 vector 
		vector<int> score_list;
		// 이미 나온 점수는 아닌지 확인하는 vector 
		vector<bool> check(1e4 + 1, false);
		int score = 0;
		
		// 기본적으로 0점은 가능하니까 넣어줌 
		score_list.push_back(0);
		
		for(int i=0; i<N; i++) {
			cin >> score;
			
			int size = score_list.size();
			for(int j=0; j<size; j++) {
				int new_score = score + score_list[j];
				
				// 계산한 새로운 점수가 이미 있는 점수였을 경우 continue 
				if(check[new_score]) continue;
				
				score_list.push_back(new_score);
				check[new_score] = true;
			}
		}
		
		printf("#%d %d\n", test_case, score_list.size());
	}
	
	return 0;
}
