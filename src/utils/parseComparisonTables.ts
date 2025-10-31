// 정책 비교 테이블 파싱 유틸리티

export interface TableRow {
  [key: string]: string;
}

export interface ParsedTable {
  headers: string[];
  rows: TableRow[];
}

/**
 * 마크다운 테이블을 파싱하여 구조화된 데이터로 변환
 * @param content 마크다운 테이블 문자열
 * @returns 파싱된 테이블 데이터
 */
export function parseMarkdownTable(content: string): ParsedTable {
  const lines = content.split('\n').map(line => line.trim()).filter(line => line);

  const headers: string[] = [];
  const rows: TableRow[] = [];

  let headerParsed = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // 테이블 행이 아니면 스킵
    if (!line.startsWith('|')) continue;

    // 구분선(|---|---) 스킵
    if (line.includes('---')) continue;

    // 셀 파싱
    const cells = line
      .split('|')
      .map(cell => cell.trim())
      .filter((cell, index, arr) => {
        // 첫 번째와 마지막 빈 셀 제거
        if (index === 0 && cell === '') return false;
        if (index === arr.length - 1 && cell === '') return false;
        return true;
      });

    // 헤더 파싱
    if (!headerParsed) {
      headers.push(...cells);
      headerParsed = true;
      continue;
    }

    // 데이터 행 파싱 - 합계 행 제외
    if (cells.length > 0) {
      const firstCell = cells[0].toLowerCase();
      if (firstCell === 'nan' || firstCell === '합계' || firstCell === '총계' ||
          firstCell === 'total' || firstCell === '-') {
        continue;
      }

      const row: TableRow = {};
      headers.forEach((header, index) => {
        row[header] = cells[index] || '';
      });
      rows.push(row);
    }
  }

  return { headers, rows };
}

/**
 * 다중 정책 비교 테이블 파싱 (구분 | 6.27 대책 | 10.15 대책 형식)
 */
export function parseComparisonTable(content: string): ParsedTable {
  return parseMarkdownTable(content);
}

/**
 * 가계부채 LTV/DTI/DSR 테이블 파싱
 */
export function parseLtvDtiTable(content: string): ParsedTable {
  return parseMarkdownTable(content);
}

/**
 * 여러 섹션으로 구분된 마크다운에서 특정 섹션 추출
 * @param content 전체 마크다운 콘텐츠
 * @param sectionTitle 섹션 제목 (예: "## 분양가상한제")
 * @returns 해당 섹션의 내용
 */
export function extractSection(content: string, sectionTitle: string): string {
  const lines = content.split('\n');
  const sectionStart = lines.findIndex(line => line.includes(sectionTitle));

  if (sectionStart === -1) return '';

  // 다음 섹션 시작점 찾기 (## 로 시작하는 다음 라인)
  let sectionEnd = lines.length;
  for (let i = sectionStart + 1; i < lines.length; i++) {
    if (lines[i].trim().startsWith('##')) {
      sectionEnd = i;
      break;
    }
  }

  return lines.slice(sectionStart, sectionEnd).join('\n');
}

/**
 * 섹션 내의 모든 테이블 추출
 */
export function extractTablesFromSection(sectionContent: string): string[] {
  const tables: string[] = [];
  const lines = sectionContent.split('\n');

  let currentTable: string[] = [];
  let inTable = false;

  for (const line of lines) {
    const trimmedLine = line.trim();

    if (trimmedLine.startsWith('|')) {
      inTable = true;
      currentTable.push(line);
    } else if (inTable && !trimmedLine.startsWith('|')) {
      // 테이블 종료
      if (currentTable.length > 0) {
        tables.push(currentTable.join('\n'));
        currentTable = [];
      }
      inTable = false;
    }
  }

  // 마지막 테이블 처리
  if (currentTable.length > 0) {
    tables.push(currentTable.join('\n'));
  }

  return tables;
}
