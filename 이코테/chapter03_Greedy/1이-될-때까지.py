N, K = map(int, input().split())
result = 0

while N >= K:
  if N % K == 0:
    N /= K
    result += 1
  else:
    N -= 1
    result += 1

print(result)   
  