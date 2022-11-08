/* [S/W 문제해결 응용] 2일차 - 최대 상금 */
#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;
 
int change_cnt;
string num;
int answer = 0;
 
void dfs(int idx, int cnt) {
    if(cnt == change_cnt) {
        answer = max(answer, stoi(num));
        return;     
    }
     
    for(int i=idx; i<num.length()-1; i++) {
        for(int j=i+1; j<num.length(); j++) {
            swap(num[i], num[j]);
            dfs(i, cnt + 1);
            swap(num[i], num[j]);   
        }
    }
}
 
int main() {
    int test_case;
    int T;
     
    cin >> T;
     
    for(int i=1; i<=T; i++) {
        cin >> num >> change_cnt;
         
        answer = 0;
        // 최대 숫자의 길이만큼만 교환을 해도 모든 경우의 수를 얻을 수 있음
        if(change_cnt > num.length()) {
            change_cnt = num.length();
        }
         
        dfs(0, 0);
         
        cout << "#" << i << " " << answer << '\n';
    }
}