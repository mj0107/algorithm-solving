public import java.util.Scanner;

public class Solution {
    static int [][] arr;
    static int N; // 배열의 행(열)의 개수
    static int M; // 스프레이의 분사 세기

    public static boolean isValidIndex(int index) {
        return index >= 0 && index < N;
    }

    public static int getCrossKilledFlyCount(int row, int col) {
        int count = 0;

        // 해당 열에 분사 세기만큼의 범위의 파리 개수 구하기
        for(int i=row-M+1; i<row+M; i++) {
            if(isValidIndex(i) == false) {
                continue;
            }
            count += arr[i][col];
        }

        // 해당 행에 분사 세기만큼의 범위의 파리 개수 구하기
        for(int j=col-M+1; j<col+M; j++) {
            if(isValidIndex(j) == false){
                continue;
            }
            count += arr[row][j];
        }

        // 중복된 중간값 한번 빼주기
        count -= arr[row][col];

        return count;
    }

    public static int getDiagonalKilledFlyCount(int row, int col) {
        int count = 0;

        for(int i=row-M+1; i<row+M; i++) {
            if(isValidIndex(i) == false) {
                continue;
            }
            for(int j=col-M+1; j<col+M; j++) {
                if(isValidIndex(j) == false) {
                    continue;
                }

                // 왼쪽 위에서 오른쪽 아래로 가는 대각선의 파리 개수 더하기
                if((row - col) == (i - j)) {
                    count += arr[i][j];
                }
                // 오른쪽 위에서 왼쪽 아래로 가는 대각선의 파리 개수 구하기
                if((row + col) == (i + j)) {
                    count += arr[i][j];
                }
            }
        }

        count -= arr[row][col];

        return count;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T;
        T = sc.nextInt();

        for(int test_case = 1; test_case <= T; test_case++) {
            N = sc.nextInt();
            M = sc.nextInt();

            arr = new int[N][N];
            for(int i=0; i<N; i++) {
                for(int j=0; j<N; j++) {
                    arr[i][j] = sc.nextInt();
                }
            }
            int maxCount = 0;
            for(int i=0; i<N; i++) {
                int biggerCount = 0;
                for(int j=0; j<N; j++) {
                    int crossKilledFlyCount = getCrossKilledFlyCount(i, j);
                    int diagonalKilledFlyCount = getDiagonalKilledFlyCount(i, j);

                    biggerCount = Math.max(crossKilledFlyCount, diagonalKilledFlyCount);
                    maxCount = Math.max(maxCount, biggerCount);
                }
            }

            System.out.println("#" + test_case + " " + maxCount);
        }
    }
}
 {
  
}
