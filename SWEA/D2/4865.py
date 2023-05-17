T = int(input())

for test_case in range(1, T + 1):
    str1 = input()
    str2 = input()

    count_dict = {}
    for ch in str2:
        if ch in count_dict:
            count_dict[ch] += 1
        else:
            count_dict[ch] = 1

    answer = 0
    for ch in str1:
        if ch in count_dict:
            answer = max(count_dict[ch], answer)

    # answer = 0
    # for ch in str1:
    #     answer = max(answer, str2.count(ch))

    print(f"#{test_case} {answer}")
