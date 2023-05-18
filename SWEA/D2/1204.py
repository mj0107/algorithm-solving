T = int(input())

for test_case in range(1, T + 1):
    test_num = int(input())

    score_list = list(map(int, input().split()))
    # 인덱스가 점수, 값이 해당 점수(인덱스)의 카운트
    count_list = [0 for _ in range(101)]

    for score in score_list:
        count_list[score] += 1

    answer = 0
    max_count = max(count_list)
    # 카운트가 같을 경우 가장 큰 점수를 찾아야 하기 때문에 거꾸로 순회
    for i in range(len(count_list) - 1, -1, -1):
        if count_list[i] == max_count:
            answer = i
            break

    print(f"#{test_num} {answer}")