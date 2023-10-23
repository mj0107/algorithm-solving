import java.io.*;
import java.util.*;

public class _9663 {
  private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  private static StringTokenizer st = null;
  private static StringBuilder sb = null;

  private static int N;
  private static int[] numberList;
  private static int[] opCountList;

  private static final int PLUS = 0;
  private static final int MINUS = 1;
  private static final int MULTIPLY = 2;
  private static final int DIVIDE = 3;

  private static int minResult;
  private static int maxResult;

  public static void main(String[] args) throws Exception {
    input();
    solve();
    print();
  }

  private static void input() throws Exception {
    N = Integer.parseInt(br.readLine());

    numberList = new int[N];
    st = new StringTokenizer(br.readLine());
    for(int i=0; i<N; i++) {
      numberList[i] = Integer.parseInt(st.nextToken());
    }

    opCountList = new int[4];
    st = new StringTokenizer(br.readLine());
    for(int i=0; i<4; i++) {
      opCountList[i] = Integer.parseInt(st.nextToken());
    }

    br.close();
  }

  private static void solve() {
    minResult = Integer.MAX_VALUE;
    maxResult = Integer.MIN_VALUE;

    backTraking(1, numberList[0]);
  }

  private static void backTraking(int index, int result) {
    if(index == N) {
      minResult = Math.min(minResult, result);
      maxResult = Math.max(maxResult, result);
      return;
    }

    int cur = numberList[index];
    for(int op=0; op<4; op++) {
      if(opCountList[op] > 0) {
        opCountList[op]--;

        if(op == PLUS) backTraking(index + 1, result + cur);
        if(op == MINUS) backTraking(index + 1, result - cur);
        if(op == MULTIPLY) backTraking(index + 1, result * cur);
        if(op == DIVIDE) backTraking(index + 1, result / cur);

        opCountList[op]++;
      }
    }
  }

  private static void print() throws Exception {
    sb = new StringBuilder();

    sb.append(maxResult)
      .append("\n")
      .append(minResult);
    
    bw.write(sb.toString());
    bw.flush();
    bw.close();
  }
}