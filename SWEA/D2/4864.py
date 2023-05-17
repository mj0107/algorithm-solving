# 몇 칸 움직일지 반환하는 함수
def get_move_count(pattern, char):
    for i in range(len(pattern) - 2, -1, -1):
        # 만약 패턴의 i번째 문자가 입력으로 들어온 문자와 같다면
        if pattern[i] == char:
            # i번째 문자가 그 위치에 자리하도록 몇 칸 옮겨야 하는지 반환
            return len(pattern) - i - 1

    # 같은 문자를 찾지 못했다면 패턴의 길이만큼 이동
    return len(pattern)


def boyer_moore(pattern, string):
    pattern_len, string_len = len(pattern), len(string)

    i = 0
    while i <= string_len - pattern_len:
        j = pattern_len - 1

        # 패턴의 가장 뒷 문자부터 거꾸로 순회
        while j >= 0:
            # 패턴의 j번째 문자가,
            # 문자열에서 i번째 부터 시작했을때 i + j 번째 문자와 같지 않다면
            if pattern[j] != string[i + j]:
                # 문자열에서 i번째 부터 패턴이 시작한다 할 때,
                # (i + 패턴의 길이) 번째 문자가 패턴중에 일치하는 문자가 위치하기까지
                # 패턴이 몇 칸 움직여야하는지
                move = get_move_count(pattern, string[i + pattern_len - 1])
                break

            # 만약 일치한다면 거꾸로 순회하면서 계속 일치 확인
            j -= 1

        # 만약 j가 -1이라면 모두 다 일치
        if j == -1:
            return 1
        # 그렇지 않다면 위에서 구한 move 만큼 이동
        else:
            i += move
    # 일치하는 경우 없음
    return 0


T = int(input())
for test_case in range(1, T + 1):
    str1 = input()
    str2 = input()

    print(f"#{test_case} {boyer_moore(str1, str2)}")
