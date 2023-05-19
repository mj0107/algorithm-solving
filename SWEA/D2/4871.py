def dfs(start_node, end_node):
    # 스택에 시작 노드 넣어줌
    stack = [start_node]

    # 스택이 빌 때까지
    while stack:
        cur = stack.pop()

        # 만약 현재 노드가 도착 노드라면,
        # 즉 도착했다면
        if cur == end_node:
            return 1

        # 현재 노드로부터 이어지는 노드들 모두 스택에 넣어줌
        stack.extend(graph[cur])

    return 0


T = int(input())

for test_case in range(1, T + 1):
    # V: 노드의 개수, E: 간선(연결)의 개수
    V, E = map(int, input().split())

    graph = {}
    for start in range(1, V + 1):
        graph[start] = []

    for _ in range(E):
        start, end = map(int, input().split())
        graph[start].append(end)

    # S: 시작 노드, G: 도착 노드
    S, G = map(int, input().split())
    answer = dfs(S, G)
    print(f"#{test_case} {answer}")
