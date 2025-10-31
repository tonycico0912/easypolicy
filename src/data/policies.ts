import { Policy, PolicyComparison } from '@/types/policy';

export const policies: Policy[] = [
  {
    id: '0627',
    title: '6.27 대책',
    type: 'regulation',
    date: '2025-06-27',
    category: '가계대출 관리 강화',
    summary: '서울 4개구를 대상으로 가계대출 총량관리 및 규제지역 대출 제한',
    mainDocument: '/doc/0627/0627.pdf',
    faqDocument: '/doc/0627/250627_가계대출 관리 강화 방안 FAQ.pdf',
    dataDocument: '/data/0627/0627.md',
    regions: ['서울 4개구 (강남, 서초, 송파, 용산)'],
    highlights: [
      '가계대출 총량관리',
      '규제지역 대출 제한',
      '투기과열지구 지정 유지',
    ],
    icon: '🏢',
  },
  {
    id: '0907',
    title: '9.7 정책',
    type: 'supply',
    date: '2025-09-07',
    category: '주택공급 확대',
    summary: '수도권 135만호 공급 계획 및 공공택지 활용',
    mainDocument: '/doc/0907/250907_새정부_주택공급_확대방안.pdf',
    dataDocument: '/data/0907/0907.md',
    regions: ['수도권 전역'],
    highlights: [
      '수도권 135만호 공급',
      '공공택지 활용',
      '주택공급 활성화',
    ],
    icon: '🏗️',
  },
  {
    id: '1015',
    title: '10.15 대책',
    type: 'regulation',
    date: '2025-10-15',
    category: '주택시장 안정화',
    summary: '서울 전역 및 경기 12개 지역으로 규제지역 확대',
    mainDocument: '/doc/1015/251015_주택시장_안정화_대책.pdf',
    faqDocument: '/doc/1015/251015_대출수요 관리 강화 방안_주요 FAQ.pdf',
    dataDocument: '/data/1015/1015_주택시장_안정화_대책.md',
    regions: ['서울 전역 (25개구)', '경기 12개 지역'],
    highlights: [
      '규제지역 확대',
      '토지거래허가구역 확대',
      '대출 한도 제한',
    ],
    icon: '🏛️',
  },
];

export const policyComparison: PolicyComparison = {
  specZones: {
    '0627': ['강남구', '서초구', '송파구', '용산구'],
    '1015': [
      '서울 25개구 전역',
      '과천시',
      '광명시',
      '수원시(영통구·장안구·팔달구)',
      '안양시(동안구)',
      '성남시(분당구·수정구·중원구)',
      '용인시(수지구)',
      '의왕시',
      '하남시',
    ],
  },
  landPermitZones: {
    '0627': [
      '강남구, 서초구, 송파구, 용산구 소재 아파트',
      '압구정·여의도·목동·성수동',
      '신속통합기획 재건축·재개발 단지',
      '공공택지 개발지구, 용산정비창 등',
    ],
    '1015': {
      areas: [
        '서울 25개구 전역',
        '과천시',
        '광명시',
        '수원시(영통구·장안구·팔달구)',
        '안양시(동안구)',
        '성남시(분당구·수정구·중원구)',
        '용인시(수지구)',
        '의왕시',
        '하남시',
      ],
      targets: '아파트 및 동일 단지 내 아파트가 1개 동 이상 포함된 연립/다세대',
      period: '2025.10.20 ~ 2026.12.31',
    },
  },
};

export const getPolicyById = (id: string): Policy | undefined => {
  return policies.find((policy) => policy.id === id);
};

export const getRegulationPolicies = (): Policy[] => {
  return policies.filter((policy) => policy.type === 'regulation');
};

export const getSupplyPolicies = (): Policy[] => {
  return policies.filter((policy) => policy.type === 'supply');
};
