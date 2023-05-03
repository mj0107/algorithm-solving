from itertools import combinations

T = int(input())

number_list = [i for i in range(1, 13)]
for test_case in range(1, T + 1):
    N, K = map(int, input().split())
    combi_list = list(combinations(number_list, N))
    
    count = 0
    for combi in combi_list:
        if sum(combi) == K:
            count += 1
    print(f"#{test_case} {count}")        