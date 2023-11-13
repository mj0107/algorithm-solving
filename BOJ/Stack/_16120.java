package BOJ.Stack;

import java.io.*;

public class _16120 {
  private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

  /** PPAP 문자열일때 출력할 문자열 */
  private static final String YES = "PPAP";
  /** PPAP 문자열이 아닐 때 출력할 문자열 */
  private static final String NO = "NP";

  /** 입력 값 */
  private static String str;

  /** 결과 값 */
  private static String result;

  public static void main(String[] args) throws Exception {
    input();
    solve();
  } 
  
  private static void input() throws Exception {
    str = br.readLine();

    br.close();
  }

  private static void solve() {
    // 'P'의 개수
    int pCnt = 0;
    for(int i=0; i<str.length(); i++) {
      char c = str.charAt(i);

      if(c == 'P') {
        pCnt++;
        continue;
      }
      // 앞에 이미 'P'가 2번 이상 나왔고, (i + 1) 번째가 'P'이고 범위를 넘지 않을경우,
      else if(pCnt >= 2 && i < str.length() - 1 && str.charAt(i + 1) == 'P') {
        // PPAP를 이루는데, 현재 A이므로 전까지 P의 개수 2개를 세줬기 때문에,
        // PPAP -> P 변환 과정에서 P의 개수가 1개로 변하므로 하나를 줄여준다.
        pCnt--;
        // 다음 인덱스의 요소까지 검사했으므로 인덱스를 하나 더해준다.
        i++;
      }
      // 위의 조건에 모두 걸리지 않으면, 현재 요소가 'A'인데도 PPAP를 만들 수 없으므로,
      else {
        // NP를 출력해준다.
        System.out.println(NO);
        return;
      }
    }

    // PPAP를 이뤘다면 마지막의 'P'를 하나 세줘서 전체 'P'의 개수가 1이므로,
    // 개수가 1일경우는 PPAP, 아니면 NP를 출력해준다.
    result = pCnt == 1 ? YES : NO;

    System.out.println(result);
  }
}
