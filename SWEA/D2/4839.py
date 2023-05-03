T = int(input())


def binary_search(l, r, target):
    cnt = 0

    while l <= r:
        c = int((l + r) / 2)

        if c < target:
            l = c
            cnt += 1
        elif c > target:
            r = c
            cnt += 1
        else:
            break

    return cnt


for test_case in range(1, T + 1):
    P, Pa, Pb = map(int, input().split())

    l_a = l_b = 1
    r_a = r_b = P

    count_a = binary_search(l_a, r_a, Pa)
    count_b = binary_search(l_b, r_b, Pb)

    winner = ""
    if count_a < count_b:
        winner = "A"
    elif count_a > count_b:
        winner = "B"
    else:
        winner = 0

    print(f"#{test_case} {winner}")
