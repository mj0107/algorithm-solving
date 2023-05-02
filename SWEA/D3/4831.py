T = int(input())

for test_case in range(1, T + 1):
    # K = 한번 충전으로 최대한 이동할 수 있는 정류장 수
    # N = 종점 번호
    # M = 정류장의 개수
    K, N, M = map(int, input().split(" "))

    # 충전기가 설치된 정류장의 번호
    station_number_list = list(map(int, input().split(" ")))

    count = 0
    current = 0

    while current + K < N:
        # K부터 1까지 1씩 감소
        for step in range(K, 0, -1):
            # 충전기가 있는 정류장이라면
            if (current + step) in station_number_list:
                # 현재 위치 옮기기
                current += step
                # 이동횟수 + 1
                count += 1
                break
        # 만약 for문에서 break가 걸리지 않았다면,
        # 즉, K칸 안에 충전기가 있는곳으로 갈 수 없다면
        else:
            count = 0
            break

    print(f"#{test_case} {count}")
