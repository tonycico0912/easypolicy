export type PolicyType = 'regulation' | 'supply';

export interface Policy {
  id: string; // '0627' | '0907' | '1015'
  title: string;
  type: PolicyType;
  date: string;
  category: string;
  summary: string;
  mainDocument: string; // PDF 파일 경로
  faqDocument?: string; // FAQ PDF 파일 경로
  dataDocument: string; // 마크다운 데이터 파일 경로
  regions: string[];
  highlights: string[];
  icon: string;
}

export interface PolicyComparison {
  specZones: {
    '0627': string[];
    '1015': string[];
  };
  landPermitZones: {
    '0627': string[];
    '1015': {
      areas: string[];
      targets: string;
      period: string;
    };
  };
}

export interface SearchResult {
  policyId: string;
  section: string;
  content: string;
  source: string; // PDF 경로
}
