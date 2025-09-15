package BOJ.Greedy;

import java.io.*;
import java.util.*;

public class _1744 {
  private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));

  /** 수열의 길이 */
  private static int N;
  /** 양수만 담은 리스트 */
  private static List<Integer> positiveNumberList;
  /** 음수만 담은 리스트 */
  private static List<Integer> negativeNumberList;
  /** 0의 개수 */
  private static int zeroCount;

  private static long result;

  public static void main(String[] args) throws Exception {
    input();
    solve();
    print();
  } 
  
  private static void input() throws Exception {
    N = Integer.parseInt(br.readLine());
    
    positiveNumberList = new ArrayList<>();
    negativeNumberList = new ArrayList<>();
    zeroCount = 0;

    for(int i=0; i<N; i++) {
      int num = Integer.parseInt(br.readLine());

      if(num > 0) {
        positiveNumberList.add(num);
      }
      else if(num < 0) {
        negativeNumberList.add(num);
      }
      else {
        zeroCount++;
      }
    }

    br.close();
  }

  private static void solve() {
    result = 0;

    // 양수는 내림차순 정렬한다.
    Collections.sort(positiveNumberList, Collections.reverseOrder());
    // 음수는 오름차순 정렬한다.
    Collections.sort(negativeNumberList);

    // 페어를 맺어서 연산해야 하기 때문에 짝수의 개수까지만 반복해준다.
    for(int i=0; i<positiveNumberList.size()/2*2; i+=2) {
      int num1 = positiveNumberList.get(i);
      int num2 = positiveNumberList.get(i + 1);

      // 한쪽의 수가 1일경우 곱하는것보다 더하는것이 더 큰 값을 가진다.
      if(num1 == 1 || num2 == 1) {
        result += (num1 + num2);
      }
      // 그 외의 것은 곱해준다.
      else {
        result += (num1 * num2);
      }
    }
    // 양수의 개수가 홀수여서 페어를 맺지 못하는 수는 더해준다.
    if(positiveNumberList.size() % 2 == 1) {
      result += positiveNumberList.get(positiveNumberList.size() - 1);
    }

    // 페어를 맺어서 연산해야 하기 때문에 짝수의 개수까지만 반복해준다.
    for(int i=0; i<negativeNumberList.size()/2*2; i+=2) {
      int num1 = negativeNumberList.get(i);
      int num2 = negativeNumberList.get(i + 1);

      // 음수끼리 곱해서 최댓값을 만들어준다.
      result += (num1 * num2);
    }
    // 음수의 개수가 홀수여서 페이를 맺지 못하는 수는,
    if(negativeNumberList.size() % 2 == 1) {
      // 0이 존재하지 않을 경우는 그냥 더해준다.
      if(zeroCount == 0) {
        result += negativeNumberList.get(negativeNumberList.size() - 1);
      }
      // 0이 존재할 경우는 음수와 곱해서 0을만들어서 더해주므로 아무것도 안하는것과 같다.
    }
  }

  private static void print() throws Exception {
    bw.write(result + "");
    bw.flush();
    bw.close();
  }
}