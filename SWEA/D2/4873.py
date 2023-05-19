T = int(input())

for test_case in range(1, T + 1):
    string = input()

    stack = []
    for ch in string:
        # 스택이 비어있으면 삽입
        if len(stack) == 0:
            stack.append(ch)
        else:
            # 만약 스택의 top이 현재 문자와 같다면
            if stack[-1] == ch:
                # 스택 top 삭제
                stack.pop()
            else:
                # 아니라면 스택에 삽입
                stack.append(ch)

    answer = len(stack)
    print(f"#{test_case} {answer}")
