package BOJ.DP;

import java.io.*;
import java.util.*;

public class _2565 {
  private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  private static StringTokenizer st = null;

  private static final int MAX = 500;

  private static int lineCount;
  private static Connect[] connectList;

  private static int[] dp;
  
  private static int possibleCount;
  private static int result;

  private static class Connect implements Comparable<Connect> {
    private int start;
    private int end;

    public Connect(int start, int end) {
      this.start = start;
      this.end = end;
    }

    @Override
    public int compareTo(Connect connect) {
      return this.start - connect.start;
    }

    @Override
    public String toString() {
      return "{start: " + start + ", end: " + end + "}";
    }
  }

  public static void main(String[] args) throws Exception {
    input();
    solve();
    print();
  } 
  
  private static void input() throws Exception {
     lineCount = Integer.parseInt(br.readLine());

     connectList = new Connect[lineCount];
     for(int i=0; i<lineCount; i++) {
      st = new StringTokenizer(br.readLine());
      int start = Integer.parseInt(st.nextToken());
      int end = Integer.parseInt(st.nextToken());

      Connect con = new Connect(start, end);
      connectList[i] = con;
     }

     br.close();
  }

  private static void solve() {
    Arrays.sort(connectList);

    // index = 정렬했을 때의 순서
    // value = i번째 end까지 연결 가능한 선의 개수
    dp = new int[MAX + 1];
    
    for(int i=0; i<lineCount; i++) {
      int curEnd = connectList[i].end;
      int tmp = 0;
      for(int j=0; j<i; j++) {
        int prevEnd = connectList[j].end;

        if(curEnd > prevEnd) {
          tmp = Math.max(tmp, dp[j]);
        }
      }
      dp[i] = tmp + 1;
      possibleCount = Math.max(possibleCount, dp[i]);
    }

    result = lineCount - possibleCount;
  }

  private static void print() throws Exception {
    bw.write(result + "");
    bw.flush();
    bw.close();
  }
}
