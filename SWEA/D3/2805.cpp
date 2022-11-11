/* 농작물 수확하기 */
#include <iostream>
#include <vector>
#include <algorithm>
#include <cmath>
using namespace std;

// 한줄로 입력받은 정수를 나눠서 vector에 저장하는 함수
void Split(string nums, vector< vector<int> > &farm) {
  vector<int> v;
  while(!nums.empty()) {
    // int형으로 변환하여 저장
    v.push_back(nums.back() - '0');
    // 뒤에서 하나씩 pop
    nums.pop_back();
  }

  // 뒤부터 들어갔으므로 reverse
  reverse(v.begin(), v.end());

  farm.push_back(v);
}

int main() {
  ios_base::sync_with_stdio(false);
  cin.tie(nullptr);

  int test_case = 0;
  int T = 0;

  cin >> T;
  for(test_case=1; test_case<=T; test_case++) {
    int N;
    cin >> N;

    vector< vector<int> > farm;
    for(int i=0; i<N; i++) {
      string nums;
      cin >> nums;
      Split(nums, farm);
    }

    int result = 0;
    for(int i=0; i<N; i++) {
      for(int j=abs(N/2 - i); j<=N - abs(N/2 - i) - 1; j++) {
        result += farm[i][j];
      }
    }

    printf("#%d %d\n", test_case, result);
  }


  return 0;
}
