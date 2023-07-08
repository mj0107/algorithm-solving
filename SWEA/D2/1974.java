import java.util.Scanner;

public class Solution {
    static int[][] sudoku;

    public static boolean checkRow(int row) {
        int[] numberCount = new int[10];

        for (int j = 0; j < 9; j++) {
            int num = sudoku[row][j];
            numberCount[num] += 1;
        }

        for (int i = 1; i <= 9; i++) {
            if (numberCount[i] != 1) return false;
        }

        return true;
    }

    public static boolean checkColumn(int col) {
        int[] numberCount = new int[10];

        for (int i = 0; i < 9; i++) {
            int num = sudoku[i][col];
            numberCount[num] += 1;
        }

        for (int i = 1; i <= 9; i++) {
            if (numberCount[i] != 1) return false;
        }

        return true;
    }

    public static boolean checkSquare(int row, int col) {
        int[] numberCount = new int[10];

        int startRow = 3 * (row / 3);
        int endRow = startRow + 2;
        int startCol = 3 * (col / 3);
        int endCol = startCol + 2;

        for (int i = startRow; i <= endRow; i++) {
            for (int j = startCol; j <= endCol; j++) {
                int num = sudoku[i][j];
                numberCount[num] += 1;
            }
        }

        for (int i = 1; i <= 9; i++) {
            if (numberCount[i] != 1) return false;
        }

        return true;
    }

    public static boolean checkAll() {
        for (int i = 0; i < 9; i++) {
            if (!checkRow(i)) return false;
            for (int j = 0; j < 9; j++) {
                if (!checkColumn(j)) return false;
                if (!checkSquare(i, j)) return false;
            }
        }

        return true;
    }

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        int T = sc.nextInt();
        for (int testCase = 1; testCase <= T; testCase++) {
            sudoku = new int[9][9];

            for (int i = 0; i < 9; i++) {
                for (int j = 0; j < 9; j++) {
                    sudoku[i][j] = sc.nextInt();
                }
            }

            int result = checkAll() ? 1 : 0;

            System.out.println("#" + testCase + " " + result);
        }
    }
}
