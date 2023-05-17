def is_palindrome(string):
    string_len = len(string)

    # 문자열의 중간까지만 검사해서 팰린드롬(데칼코마니 or 회문)을 이루는지 판별
    for i in range(int(string_len / 2)):
        if string[i] != string[-(i + 1)]:
            return False

    return True


def check_row():
    for row in board:
        for idx in range(0, N - M + 1):
            string = row[idx : idx + M]

            if is_palindrome(string):
                return string

    return ""


def check_col():
    for j in range(N):
        col = ""
        for i in range(N):
            col += board[i][j]

        for idx in range(0, N - M + 1):
            string = col[idx : idx + M]

            if is_palindrome(string):
                return string

    return ""


T = int(input())

for test_case in range(1, T + 1):
    answer = ""
    # N = 행, 열의 개수
    # M = 회문의 길이
    N, M = map(int, input().split(" "))
    board = [input() for _ in range(N)]

    answer = check_row()

    if answer == "":
        answer = check_col()

    print(f"#{test_case} {answer}")
