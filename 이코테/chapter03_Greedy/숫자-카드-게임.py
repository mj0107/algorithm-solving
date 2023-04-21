# N : 행의 개수
# M : 열의 개수
N, M = map(int, input().split())
card_list = [list(map(int, input().split())) for _ in range(N)]

min_num_list = list(map(min, card_list))
result = max(min_num_list)

print(result)