import java.util.Scanner;

public class Solution {
    static int N, M;
    static int[] A, B;
    static int[] shorter, longer;

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int T = sc.nextInt();

        for (int testCase = 1; testCase <= T; testCase++) {
            N = sc.nextInt();
            M = sc.nextInt();

            A = new int[N];
            B = new int[M];

            for (int i = 0; i < N; i++) {
                A[i] = sc.nextInt();
            }
            for (int j = 0; j < M; j++) {
                B[j] = sc.nextInt();
            }

            if (N > M) {
                shorter = B;
                longer = A;
            } else {
                shorter = A;
                longer = B;
            }

            int start = 0;
            int end = shorter.length;
            int maxMultiply = 0;
            while (end <= longer.length) {
                int multiply = 0;

                for (int i = 0; i < shorter.length; i++) {
                    multiply += shorter[i] * longer[i + start];
                }

                maxMultiply = Math.max(maxMultiply, multiply);
                start++;
                end++;
            }

            System.out.println("#" + testCase + " " + maxMultiply);
        }
    }
}
