/* 격자판의 숫자 이어 붙이기 */
#include <iostream>
#include <set>
using namespace std;

const int dx[4] = {-1, 1, 0, 0}; // 상, 하, 좌, 우 
const int dy[4] = {0, 0, -1, 1}; // 상, 하, 좌, 우 
char board[4][4];
set<string> s;

bool IsValidIndex(int row, int col) {
	if((0 <= row && row < 4) && (0 <= col && col < 4)) return true;
	return false;
}

void DFS(int row, int col, string str) {
	if(str.length() == 7) {
		s.insert(str);
		return;
	}
	
	for(int i=0; i<4; i++) {
		int next_row = row + dx[i];
		int next_col = col + dy[i];
		
		if(IsValidIndex(next_row, next_col)) {
			DFS(next_row, next_col, str + board[next_row][next_col]); 	
		}
	}
} 

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int test_case = 0;
	int T = 0;
	
	cin >> T;
	
	for(test_case=1; test_case<=T; test_case++) {
		for(int i=0; i<4; i++) {
			for(int j=0; j<4; j++) {
				cin >> board[i][j];
			}
		}
		
		s.clear();
		for(int i=0; i<4; i++) {
			for(int j=0; j<4; j++) {
				DFS(i, j, "");
			}
		}
		
		printf("#%d %d\n", test_case, s.size());
	}
	
	return 0;
}
