T = int(input())

# 300 까지의 dp 배열을 구하는 함수
def make_dp():
    global dp
    dp = [0] * 31

    dp[1] = 1
    dp[2] = 3

    for i in range(3, 31):
        dp[i] = dp[i - 2] * 2 + dp[i - 1]


# 주어진 최대 범위까지의 dp를 미리 모두 구해놓음
make_dp()
for test_case in range(1, T + 1):
    N = int(input())
    # 10이면 1, 20이면 2, ... (N / 10)의 인덱스에 저장되어 있음
    print(f"#{test_case} {dp[int(N / 10)]}")
