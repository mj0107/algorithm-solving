N = int(input())


def check(n):
    num = int(n)
    result = ""

    while num:
        # 한자리씩 체크
        digit = num % 10
        # 3의 배수이고, 0이 아닐 경우에만
        if digit % 3 == 0 and digit != 0:
            # '-' 하나 추가
            result += "-"
        # 맨 뒷자리는 체크했으므로 없애버림
        num = int(num / 10)

    # result의 길이가 0이라면 추가된 '-'가 없으므로
    # 3의 배수인 숫자가 없었다는 의미이므로 원래 숫자 반환
    if len(result) == 0:
        result = str(n)

    return result


answer = []
for i in range(1, N + 1):
    answer.append(check(i))

answer = " ".join(answer)
print(answer)
