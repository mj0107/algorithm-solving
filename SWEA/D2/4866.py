T = int(input())
# 괄호 쌍 저장
BUCKET_PAIR_DICT = {
    ')': '(',
    '}': '{'
}

for test_case in range(1, T + 1):
    code = input()
    stack = []

    answer = 1
    for ch in code:
        # 만약 여는 괄호라면 stack에 append
        if ch == '(' or ch == '{':
            stack.append(ch)
        # 닫는 괄호일 때
        elif ch in BUCKET_PAIR_DICT:
            # 스택이 이미 비어있다면 닫는 괄호가 더 많은것이므로
            # 쌍이 맞지 않으므로 answer을 0으로 바꾸고 break
            if len(stack) == 0:
                answer = 0
                break

            # 만약 stack의 top에 맞는 괄호쌍이 있다면
            if stack[-1] == BUCKET_PAIR_DICT[ch]:
                # stack에서 pop
                stack.pop()
            # stack의 top에 맞지 않는 괄호쌍이 있다면
            else:
                # answer을 0으로 바꾸고 break
                answer = 0
                break
    
    # 만약 stack에 남은 괄호가 있다면 여는 괄호가 더 많다는 뜻이므로
    # answer을 0으로 바꿔줌
    if len(stack) > 0:
        answer = 0
    
    print(f"#{test_case} {answer}")