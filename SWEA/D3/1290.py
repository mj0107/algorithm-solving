for _ in range(10):
    test_case = int(input())

    matrix = [[] for _ in range(100)]
    for i in range(100):
        matrix[i] = list(map(int, input().split()))

    # 각 행의 합
    max_sum_row = 0
    for row in matrix:
        max_sum_row = max(max_sum_row, sum(row))

    # 각 열의 합
    max_sum_col = 0
    for j in range(100):
        sum_col = 0
        for i in range(100):
            sum_col += matrix[i][j]
        max_sum_col = max(max_sum_col, sum_col)

    # 왼쪽 위에서 오른쪽 아래로 향하는 대각선 합
    sum_to_right_diagonal = 0
    for i in range(100):
        for j in range(100):
            if i == j:
                sum_to_right_diagonal += matrix[i][j]

    # 오른쪽 위에서 왼쪽 아래로 향하는 대각선의 합
    sum_to_left_diagonal = 0
    for i in range(100):
        for j in range(100):
            if i + j == 99:
                sum_to_left_diagonal += matrix[i][j]

    # 최댓값
    max_sum = max(max_sum_row, max_sum_col, sum_to_right_diagonal, sum_to_left_diagonal)

    print(f"#{test_case} {max_sum}")
