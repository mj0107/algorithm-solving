T = int(input())

for test_case in range(1, T + 1):
    N = int(input())

    snail = [[0] * N for _ in range(N)]

    num = 1
    start_row, start_col = 0, 0
    end_row, end_col = N - 1, N - 1

    while num <= N * N:
        # 상 (오른쪽으로)
        for col in range(start_col, end_col + 1):
            snail[start_row][col] = num
            num += 1
        start_row += 1

        # 우 (아래쪽으로)
        for row in range(start_row, end_row + 1):
            snail[row][end_col] = num
            num += 1
        end_col -= 1

        # 하 (왼쪽으로)
        for col in range(end_col, start_col - 1, -1):
            snail[end_row][col] = num
            num += 1
        end_row -= 1

        # 좌 (위쪽으로)
        for row in range(end_row, start_row - 1, -1):
            snail[row][start_col] = num
            num += 1
        start_col += 1

    answer = []
    for row in snail:
        answer.append(" ".join(str(n) for n in row))
    answer = "\n".join(answer)

    print(f"#{test_case}\n{answer}")
