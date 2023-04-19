# N : 입력받을 수의 개수
# M : 더할 수의 개수
# K : 최대 반복 횟수
N, M, K = map(int, input().split())
number_list = list(map(int, input().split()))

# 내림차순으로 정렬
number_list.sort(reverse=True)
max_first = number_list[0];
max_second = number_list[1];

# 가장 큰 수를 몇번 더할지 카운트 구하기
# 최대 K번까지 반복이 가능하므로, K번후엔 반드시 다른 숫자가 최소 하나가 와야함
# 따라서 M을 K + 1로 나눠주고, 정수로 변환(내림)
# 그 후에 최대 반복 횟수를 곱해줌
sum_count = int(M / (K + 1)) * K
# 남은 더할수의 개수를 모두 최댓값으로 더해줌
sum_count += M % (K + 1)

result = 0
result += sum_count * max_first
# 남은 횟수는 두번째로 큰 수로 더해줌
result += (M - sum_count) * max_second

print(result)