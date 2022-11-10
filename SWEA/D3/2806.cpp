/* N-Queen */
#include <iostream>
#include <vector>
#include <cmath>
using namespace std;

int N = 0; // (N * N) board
int result = 0; 

bool IsValid(vector<int> &board, int row) {
	// 이 전의 행에서 
	for(int i=1; i<row; i++) {
		// 같은 열에 있을 때
		if(board[row] == board[i]) return false;
		// 같은 대각선상에 있을 때
		if(abs(board[row] - board[i]) == abs(row - i)) return false;
	}
	
	return true;
}

void DFS(vector<int> &board, int row) {
	if(row == N) {
		result++;
		return;	
	}
		
	for(int i=1; i<=N; i++) {
		board[row + 1] = i;
		if(IsValid(board, row + 1)) DFS(board, row + 1);
	}
}

int main() {
	ios_base::sync_with_stdio(false);
	cin.tie(nullptr);
	
	int test_case = 0;
	int T;
	
	cin >> T;
	
	for(int test_case=1; test_case<=T; test_case++) {
		cin >> N;
		
		result = 0;
		
		// index = row, value = column
		vector<int> board(N + 1, 0);
		for(int col=1; col<=N; col++) {
			board[1] = col; // 1행 1열에 있다고 가정하고 시작
			DFS(board, 1);
		}
		
		printf("#%d %d\n", test_case, result);
	}
	
	return 0;
}
