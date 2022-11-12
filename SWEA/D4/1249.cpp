/* [S/W 문제해결 응용] 4일차 - 보급로 */
#include <iostream>
#include <queue>
using namespace std;

const int MAX = 100;
const int MAX_DEPTH = 1e5 - 1;
const int dx[4] = {-1, 1, 0, 0}; // 상, 하, 좌, 우
const int dy[4] = {0, 0, -1, 1}; // 상, 하, 좌, 우
int N = 0;

bool IsValidIndex(int row, int col) {
  if((0 <= row && row < N) && (0 <= col && col < N)) return true;
  return false;
}

void BFS(int map[MAX][MAX], int depth_sum[MAX][MAX]) {
  queue< pair<int, int> > q;
  q.push(make_pair(0, 0));

  while(!q.empty()) {
    int cur_x = q.front().first;
    int cur_y = q.front().second;
    q.pop();

    for(int i=0; i<4; i++) {
      int next_x = cur_x + dx[i];
      int next_y = cur_y + dy[i];

      if(IsValidIndex(next_x, next_y) == false) continue;

      // 만약 현재 위치까지의 복구시간 + 다음칸의 복구시간보다
      // 이미 저장되어 있는 다음칸까지 가는데 걸리는 복구시간이 더 크다면
      // 최소 시간을 구해야하므로 값을 바꿔줌
      if(depth_sum[next_x][next_y] > depth_sum[cur_x][cur_y] + map[next_x][next_y]) {
        depth_sum[next_x][next_y] = depth_sum[cur_x][cur_y] + map[next_x][next_y];
        q.push(make_pair(next_x, next_y));
      }
    }
  }
}

int main() {
  int test_case = 0;
  int T;

  cin >> T;

  for(test_case=1; test_case<=T; test_case++) {
    cin >> N;

    int map[MAX][MAX];
    int depth_sum[MAX][MAX]; // 지나온 깊이들을 합한 값
    for(int i=0; i<N; i++) {
      for(int j=0; j<N; j++) {
        scanf("%1d", &map[i][j]); // 한줄에 있는것을 하나씩 입력받음
        depth_sum[i][j] = MAX_DEPTH;
      }
    }
    depth_sum[0][0] = 0;

    BFS(map, depth_sum);

    printf("#%d %d\n", test_case, depth_sum[N - 1][N - 1]);
  }

  return 0;
}