def change(numbers, cnt):
    global result

    temp = ""
    # list형의 numbers를 문자열로 하나로 이어줌
    for number in numbers:
        temp += number

    # result의 cnt번째에 temp가 있다면
    if int(temp) in result[cnt]:
        return
    # 만약 없다면 cnt번째에 temp를 append
    else:
        result[cnt].append(int(temp))

    if cnt == 0:
        return

    n = len(numbers)

    for i in range(n):
        for j in range(i + 1, n):
            # 자리를 바꿔서
            numbers[i], numbers[j] = numbers[j], numbers[i]
            # DFS를 했다가
            change(numbers, cnt - 1)
            # 다시 원상복구(백트래킹)
            numbers[i], numbers[j] = numbers[j], numbers[i]


T = int(input())

for t in range(1, T + 1):
    temp, cnt = input().split()

    numbers = list(temp)
    # result에 cnt 만큼의 [](빈배열) 선언
    result = [[] for _ in range(int(cnt) + 1)]

    change(numbers, int(cnt))

    print(f"#{t} {max(result[0])}")
