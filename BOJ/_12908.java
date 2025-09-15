package BOJ.BackTracking;

import java.io.*;
import java.util.*;
import java.awt.*;

public class _12908 {
  private static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
  private static BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
  private static StringTokenizer st = null;

  /** 처음 위치 */
  private static int xs, ys;
  /** 집이 위치한 위치 */
  private static int xe, ye;

  private static Point[] pointList;
  private static long[][] distance;

  public static void main(String[] args) throws Exception {
    input();
    solve();
    print();
  } 
  
  private static void input() throws Exception {
    st = new StringTokenizer(br.readLine());
    xs = Integer.parseInt(st.nextToken());
    ys = Integer.parseInt(st.nextToken());

    st = new StringTokenizer(br.readLine());
    xe = Integer.parseInt(st.nextToken());
    ye = Integer.parseInt(st.nextToken());
    
    pointList = new Point[8];
    pointList[0] = new Point(xs, ys);
    pointList[7] = new Point(xe, ye);

    for(int i=1; i<=5; i+=2) {
      st = new StringTokenizer(br.readLine());

      int x1 = Integer.parseInt(st.nextToken());
      int y1 = Integer.parseInt(st.nextToken());
      int x2 = Integer.parseInt(st.nextToken());
      int y2 = Integer.parseInt(st.nextToken());

      pointList[i] = new Point(x1, y1);
      pointList[i+1] = new Point(x2, y2);
    }

    br.close();
  }

  private static void solve() {
    distance = new long[8][8];

    // 점프로만 이동했을 때의 거리로 초기값을 저장한다.
    for(int i=0; i<8; i++) {
      Point from = pointList[i];
      for(int j=0; j<8; j++) {
        Point to = pointList[j];
        distance[i][j] = distance[j][i] = getDistance(from, to);
      }
    }

    // 텔레포트로 이동했을 때와 점프로 이동했을 때 중 더 작은 값으로 할당한다.
    for(int i=1; i<=5; i+=2) {
      Point from = pointList[i];
      Point to = pointList[i+1];

      distance[i][i+1] = distance[i+1][i] = Math.min(getDistance(from, to), 10);
    }

    // Floyd-Warshall
    for(int k=0; k<8; k++) {
      for(int i=0; i<8; i++) {
        for(int j=0; j<8; j++) {
          distance[i][j] = Math.min(distance[i][j], distance[i][k] + distance[k][j]);
        }
      }
    }
  }

  /**
   * 좌표 두개를 인자로 받아 두 점 사이의 거리를 구하는 함수
   * 
   * @param p1 좌표
   * @param p2 좌표
   * @return 두 점 사이의 거리
   */
  private static long getDistance(Point p1, Point p2) {
    return Math.abs(p1.x - p2.x) + Math.abs(p1.y - p2.y);
  }

  private static void print() throws Exception {
    bw.write(distance[0][7] + "");
    bw.flush();
    bw.close();
  }
}
