T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    number_list = list(map(int, input().split()))
    # 내림차순으로 정렬
    number_list.sort(reverse=True)

    start, end = 0, N - 1
    result = []

    while start <= end:
        result.append(number_list[start])
        result.append(number_list[end])

        start += 1
        end -= 1

    # 10개만 출력
    print(f"#{test_case}", *result[0:10])
