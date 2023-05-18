T = int(input())

for test_case in range(1, T + 1):
    answer = 0
    N = int(input())
    cost_list = list(map(int, input().split(' ')))

    selling_cost = 0
    # 거꾸로 순회
    for cost in reversed(cost_list):
        # 현재 값이 저장되어 있는 팔아야할 값보다 크다면
        if cost >= selling_cost:
            selling_cost = cost
        # 그렇지 않을 경우엔 차이만큼 정답에 더해줌
        else:
            answer += selling_cost - cost

    print(f"#{test_case} {answer}")