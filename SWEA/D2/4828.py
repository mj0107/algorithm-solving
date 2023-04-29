T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    number_list = list(map(int, input().split()))

    number_list.sort()

    min = number_list[0]
    max = number_list[-1]

    distance = max - min

    print(f"#{test_case} {distance}")
