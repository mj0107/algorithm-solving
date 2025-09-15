package BOJ.Graph;

import java.io.*;
import java.util.*;
import java.util.stream.Stream;

public class _2178 {
  private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  private static StringTokenizer st = null;

  /** 행의 개수 */
  private static int N;
  /** 열의 개수 */
  private static int M;

  private static final int POSSIBLE = 1;
  private static final int IMPOSSIBLE = 0;
  
  /** 미로 */
  private static int[][] maze;
  /** 현재 위치까지 오기까지의 움직인 칸 수를 저장하는 배열 */
  private static int[][] moveCount;

  /** 상, 하, 좌, 우 */
  private static int[] dr = { -1, 1, 0, 0 };
  private static int[] dc = { 0, 0, -1, 1};

  /** 움직인 최소 거리 */
  private static int minCount;

  /**
   * 현재 위치의 행과 열 정보를 저장하는 클래스
   */
  private static class Pos {
    int row;
    int col;

    public Pos(int row, int col) {
      this.row = row;
      this.col = col;
    }
  }
  public static void main(String[] args) throws Exception {
    input();
    solve();
    print();
  } 
  
  private static void input() throws Exception {
    st = new StringTokenizer(br.readLine());
    N = Integer.parseInt(st.nextToken());
    M = Integer.parseInt(st.nextToken());

    maze = new int[N][M];
    for(int i=0; i<N; i++) {
      maze[i] = Stream.of(br.readLine().split(""))
                      .mapToInt(Integer::parseInt)
                      .toArray();
    }

    br.close();
  }

  private static void solve() {   
    moveCount = new int[N][M];
    // 칸을 셀 때에는 시작 위치도 포함한다.
    moveCount[0][0] = 1;

    getMinCount();
  }

  private static void getMinCount() {
    Deque<Pos> queue = new ArrayDeque<>();
    boolean[][] isVisited = new boolean[N][M];

    queue.offer(new Pos(0, 0));
    isVisited[0][0] = true;

    while(!queue.isEmpty()) {
      Pos curPos = queue.poll();
      int row = curPos.row;
      int col = curPos.col;

      for(int d=0; d<4; d++) {
        int nr = row + dr[d];
        int nc = col + dc[d];

        if(isValidIndex(nr, nc) == false) {
          continue;
        }
        if(isVisited[nr][nc] == true) {
          continue;
        }
        if(maze[nr][nc] == IMPOSSIBLE) {
          continue;
        }

        queue.offer(new Pos(nr, nc));
        isVisited[nr][nc] = true;
        moveCount[nr][nc] = moveCount[row][col] + 1;
      }
    }
  }

  private static boolean isValidIndex(int row, int col) {
    if(row < 0 || row >= N) {
      return false;
    }
    if(col < 0 || col >= M) {
      return false;
    }

    return true;
  }

  private static void print() throws Exception {
    minCount = moveCount[N-1][M-1];

    for(int i=0; i<N; i++) {
      for(int j=0; j<M; j++) {
        System.out.print(moveCount[i][j] + " ");
      }
      System.out.println();
    }

    bw.write(minCount + "");
    bw.flush();
    bw.close();
  }
}
