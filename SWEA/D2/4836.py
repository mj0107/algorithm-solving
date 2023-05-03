T = int(input())

for test_case in range(1, T + 1):
    N = int(input())

    board = [[False for j in range(0, 10)] for i in range(0, 10)]
    cnt = 0

    for _ in range(N):
        r1, c1, r2, c2, color = map(int, input().split())

        for i in range(r1, r2 + 1):
            for j in range(c1, c2 + 1):
                # 이미 칠해져 있다면 카운트 증가 후 continue
                if board[i][j] == True:
                    cnt += 1
                    continue
                # 칠해져 있지 않다면 True로 색칠 표시
                board[i][j] = True

    print(f"#{test_case} {cnt}")
