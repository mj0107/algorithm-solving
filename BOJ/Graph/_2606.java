package BOJ.Graph;

import java.io.*;
import java.util.*;

public class _2606 {
  private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  private static StringTokenizer st = null;

  private static int computerCount;
  private static int pairCount;
  private static LinkedList<Integer>[] adjList;

  private static final int START = 1;

  private static int result;

  public static void main(String[] args) throws Exception {
    input();
    solve();
    print();
  } 
  
  private static void input() throws Exception {
    computerCount = Integer.parseInt(br.readLine());
    pairCount = Integer.parseInt(br.readLine());

    adjList = new LinkedList[computerCount+1];
    for(int i=1; i<=computerCount; i++) {
      adjList[i] = new LinkedList<>();
    }

    for(int i=0; i<pairCount; i++) {
      st = new StringTokenizer(br.readLine());
      int computer1 = Integer.parseInt(st.nextToken());
      int computer2 = Integer.parseInt(st.nextToken());

      adjList[computer1].add(computer2);
      adjList[computer2].add(computer1);
    }

    br.close();
  }

  private static void solve() {
    bfs();
  }

  private static void bfs() {
    Deque<Integer> queue = new ArrayDeque<>();
    boolean[] isVisited = new boolean[computerCount+1];

    queue.offer(START);
    isVisited[START] = true;

    while(!queue.isEmpty()) {
      int cur = queue.poll();

      for(int next : adjList[cur]) {
        if(isVisited[next] == true) {
          continue;
        }

        isVisited[next] = true;
        queue.offer(next);

        result++;
      }
    }
  }

  private static void print() throws Exception {
    bw.write(result + "");
    bw.flush();
    bw.close();
  }
}
