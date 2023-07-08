import java.util.Scanner;

public class Solution {
    static int[][] matrix;
    static int N;

    public static int[][] getRotatedMatrix(int[][] matrix) {
        int[][] rotatedMatrix = new int[N][N];

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                rotatedMatrix[i][j] = matrix[N - 1 - j][i];
            }
        }

        return rotatedMatrix;
    }

    public static void printMatrix(int[][] matrix) {
        int[][] onceRotatedMatrix = getRotatedMatrix(matrix);
        matrix = onceRotatedMatrix;

        int[][] twiceRotatedMatrix = getRotatedMatrix(matrix);
        matrix = twiceRotatedMatrix;

        int[][] thirdTimesRotatedMatrix = getRotatedMatrix(matrix);
        matrix = thirdTimesRotatedMatrix;

        for (int i = 0; i < N; i++) {
            for (int j = 0; j < N; j++) {
                System.out.print(onceRotatedMatrix[i][j]);
            }
            System.out.print(" ");

            for (int j = 0; j < N; j++) {
                System.out.print(twiceRotatedMatrix[i][j]);
            }
            System.out.print(" ");

            for (int j = 0; j < N; j++) {
                System.out.print(thirdTimesRotatedMatrix[i][j]);
            }
            System.out.println();
        }
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int testCase = 1; testCase <= T; testCase++) {
            N = sc.nextInt();
            matrix = new int[N][N];

            for (int i = 0; i < N; i++) {
                for (int j = 0; j < N; j++) {
                    matrix[i][j] = sc.nextInt();
                }
            }

            System.out.println("#" + testCase);
            printMatrix(matrix);
        }
    }
}
