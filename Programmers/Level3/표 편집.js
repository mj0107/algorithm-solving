class Row {
  constructor(index) {
    this.index = index;
    this.prev = null;
    this.next = null;
  }
}

class Table {
  constructor(n, k) {
    this.rows = [];
    this.cursor = null;
    this.deletedStack = [];
    this.initTable(n, k);
  }

  initTable(n, k) {
    for (let i = 0; i < n; i++) {
      this.rows[i] = new Row(i);
    }

    for (let i = 0; i < n; i++) {
      if (i > 0) this.rows[i].prev = this.rows[i - 1];
      if (i < n - 1) this.rows[i].next = this.rows[i + 1];
    }

    this.cursor = this.rows[k];
  }

  up(moveCount) {
    for (let i = 0; i < moveCount; i++) {
      this.cursor = this.cursor.prev;
    }
  }

  down(moveCount) {
    for (let i = 0; i < moveCount; i++) {
      this.cursor = this.cursor.next;
      ``;
    }
  }

  remove() {
    const deletedRow = this.cursor;

    // 삭제할 때 prev/next 정보를 저장해두기
    this.deletedStack.push({
      row: deletedRow,
      prevRow: deletedRow.prev,
      nextRow: deletedRow.next,
    });

    // 연결 끊기
    if (deletedRow.prev) {
      deletedRow.prev.next = deletedRow.next;
    }
    if (deletedRow.next) {
      deletedRow.next.prev = deletedRow.prev;
    }

    // 커서 이동
    if (deletedRow.next) {
      this.cursor = deletedRow.next;
    } else {
      this.cursor = deletedRow.prev;
    }
  }

  restore() {
    if (this.deletedStack.length === 0) return;

    const { row: restoredRow, prevRow, nextRow } = this.deletedStack.pop();

    // 저장된 연결 정보로 즉시 복구 (O(1))
    restoredRow.prev = prevRow;
    restoredRow.next = nextRow;

    if (prevRow) {
      prevRow.next = restoredRow;
    }
    if (nextRow) {
      nextRow.prev = restoredRow;
    }
  }

  getResult() {
    const result = new Array(this.rows.length).fill('O');

    for (const { row } of this.deletedStack) {
      result[row.index] = 'X';
    }

    return result.join('');
  }
}

/**
 * 표 편집
 * @description 표에서 행을 선택, 삭제, 복구하는 명령어들을 수행한 후 최종 표의 상태를 구하는 함수
 * @param {number} n 표의 행 개수
 * @param {number} k 처음 선택된 행의 위치
 * @param {string[]} cmd 수행할 명령어 배열
 * @returns {string} 최종 표의 상태 ('O': 존재, 'X': 삭제)
 * @constraints
 * - 표의 행 개수 n은 5 이상 1,000,000 이하입니다.
 * - 처음 선택된 행의 위치 k는 0 이상 n-1 이하입니다.
 * - 명령어 배열 cmd의 길이는 1 이상 200,000 이하입니다.
 * - 명령어는 "U X", "D X", "C", "Z" 형태입니다.
 */
function solution(n, k, cmd) {
  const table = new Table(n, k);

  for (let i = 0; i < cmd.length; i++) {
    const [command, x] = cmd[i].split(' ');

    switch (command) {
      case 'U':
        table.up(parseInt(x));
        break;
      case 'D':
        table.down(parseInt(x));
        break;
      case 'C':
        table.remove();
        break;
      case 'Z':
        table.restore();
        break;
    }
  }

  const result = table.getResult();
  return result;
}
