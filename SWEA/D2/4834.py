T = int(input())

for test_case in range(1, T + 1):
    N = int(input())
    number_list = list(map(int, input()))

    number_count = {} # dictionary

    for number in number_list:
        # dictionary에 number가 없다면
        if number not in number_count:
            # 0으로 초기화
            number_count[number] = 0
        # 카운트 + 1    
        number_count[number] += 1

    # .items() = (key, value)쌍 tuple로 얻기
    # key=lambda x: (-x[1], -x[0]) = 카운트로 내림차순 정렬하고, 같으면 숫자로 내림차순
    max_num, max_count = sorted(number_count.items(), key=lambda x: (-x[1], -x[0]))[0]
    print(f"#{test_case} {max_num} {max_count}")