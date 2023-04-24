T = 10

for test_case in range(1, T + 1):
    N = int(input())
    height_list = list(map(int, input().split()))
    
    count = 0
    for i in range(2, N - 2):
        standard = height_list[i]
        side_height_list = []
        
        for j in range(i - 2, i + 3):
            if j == i:
                continue
            side_height_list.append(height_list[j])
            
        if standard - max(side_height_list) > 0:
            count += standard - max(side_height_list)
            
    print(f"#{test_case} {count}")