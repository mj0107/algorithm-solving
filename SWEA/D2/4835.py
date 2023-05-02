T = int(input())

for test_case in range(1, T + 1):
    # N = 숫자의 개수
    # M = 더할 개수
    N, M = map(int, input().split())
    number_list = list(map(int, input().split()))

    sum_list = []
    start, end = 0, M
    while True:
        if end > N:
            break
        # start부터 end-1 까지의 합을 sum_list에 append
        sum_list.append(sum(number_list[start:end]))
        start += 1
        end += 1

    print(f"#{test_case} {max(sum_list) - min(sum_list)}")
