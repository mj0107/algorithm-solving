# 큰 놈, 작은 놈, 같은 놈
T = int(input())

for test_case in range(1, T + 1):
    num1, num2 = map(int, input().split())
    result = ''
    
    if num1 > num2:
        result = ">"
    elif num1 < num2:
        result = "<"
    else:
        result = "="
    
    print(f"#{test_case} {result}")