package BOJ.Graph;

import java.io.*;
import java.util.*;

public class _24479 {
  private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  private static StringTokenizer st = null;
  private static StringBuilder sb = null;

  /** 정점의 개수 */
  private static int N;
  /** 간선의 수 */
  private static int M;
  /** 시작 정점 */
  private static int R;

  private static LinkedList<Integer>[] adjList;
  private static boolean[] isVisited;

  private static int[] orderList;
  private static int order;

  public static void main(String[] args) throws Exception {
    input();
    solve();
    print();
  } 
  
  private static void input() throws Exception {
    st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());
    R = Integer.parseInt(st.nextToken());

    adjList = new LinkedList[N+1];
    for(int i=1; i<=N; i++) {
      adjList[i] = new LinkedList<>();
    }

    for(int i=0; i<M; i++) {
      st = new StringTokenizer(br.readLine());
      int v1 = Integer.parseInt(st.nextToken());
      int v2 = Integer.parseInt(st.nextToken());

      adjList[v1].add(v2);
      adjList[v2].add(v1);
    }

    br.close();
  }

  private static void solve() {
    orderList = new int[N+1];
    isVisited = new boolean[N+1];

    for(int i=1; i<=N; i++) {
      Collections.sort(adjList[i]);
    }

    dfs(R);
  }

  private static void dfs(int start) {
    orderList[start] = ++order;
    isVisited[start] = true;

    for(int next : adjList[start]) {
      if(isVisited[next] == true) {
        continue;
      }
      dfs(next);
    }
  }

  private static void print() throws Exception {
    sb = new StringBuilder();

    for(int i=1; i<=N; i++) {
      sb.append(orderList[i]).append("\n");
    }

    bw.write(sb.toString());
    bw.flush();
    bw.close();
  }
}
