import { Link } from 'react-router-dom'
import { getRegulationPolicies } from '@/data/policies'
import { policyComparison } from '@/data/policies'

export default function ComparisonPage() {
  const regulationPolicies = getRegulationPolicies()

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            규제정책 비교
          </h1>
          <p className="text-gray-600">
            6.27 대책과 10.15 대책의 주요 차이점을 비교합니다
          </p>
        </div>

        {/* 정책 개요 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {regulationPolicies.map((policy) => (
            <div key={policy.id} className="card">
              <div className="flex items-center space-x-3 mb-4">
                <span className="text-3xl">{policy.icon}</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {policy.title}
                  </h3>
                  <span className="policy-badge-regulation">규제정책</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">{policy.summary}</p>
              <div className="space-y-2">
                <div className="text-sm">
                  <span className="font-semibold">발표일:</span> {policy.date}
                </div>
                <div className="text-sm">
                  <span className="font-semibold">적용 지역:</span>{' '}
                  {policy.regions.join(', ')}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 투기과열지구/조정대상지역 비교 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-2">🏠</span>
            투기과열지구 / 조정대상지역
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📌</span>
                6.27 대책
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-2">서울 4개구</div>
                <ul className="space-y-1">
                  {policyComparison.specZones['0627'].map((area, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📌</span>
                10.15 대책
              </h3>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-2">
                  서울 전역 + 경기 12개 지역
                </div>
                <ul className="space-y-1">
                  {policyComparison.specZones['1015'].map((area, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <span className="text-xl">⚠️</span>
              <div className="text-sm text-gray-700">
                <span className="font-semibold">주요 변화:</span> 서울 4개구 → 서울 전역(25개구) + 경기 12개 지역으로 대폭 확대
              </div>
            </div>
          </div>
        </div>

        {/* 토지거래허가구역 비교 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-2">🏞</span>
            토지거래허가구역
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📌</span>
                6.27 대책
              </h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="font-semibold text-gray-900 mb-2">서울 4개구 등</div>
                <ul className="space-y-1">
                  {policyComparison.landPermitZones['0627'].map((area, index) => (
                    <li key={index} className="text-gray-700 text-sm flex items-start">
                      <span className="mr-2">•</span>
                      <span>{area}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg text-gray-900 mb-4 flex items-center">
                <span className="mr-2">📌</span>
                10.15 대책 (추가지정)
              </h3>
              <div className="bg-red-50 rounded-lg p-4">
                <div className="space-y-4">
                  <div>
                    <div className="font-semibold text-gray-900 mb-2">적용 지역</div>
                    <ul className="space-y-1">
                      {policyComparison.landPermitZones['1015'].areas.map((area, index) => (
                        <li key={index} className="text-gray-700 text-sm flex items-start">
                          <span className="mr-2">•</span>
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="font-semibold text-gray-900 mb-1">대상</div>
                    <div className="text-gray-700 text-sm">
                      {policyComparison.landPermitZones['1015'].targets}
                    </div>
                  </div>

                  <div>
                    <div className="font-semibold text-gray-900 mb-1">기간</div>
                    <div className="text-gray-700 text-sm">
                      {policyComparison.landPermitZones['1015'].period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <span className="text-xl">⚠️</span>
              <div className="text-sm text-gray-700">
                <span className="font-semibold">주요 변화:</span> 아파트뿐만 아니라 연립/다세대까지 확대, 기간은 2025.10.20 ~ 2026.12.31
              </div>
            </div>
          </div>
        </div>

        {/* 가계부채 관리방안 */}
        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <span className="mr-2">💰</span>
            가계부채 관리방안
          </h2>

          {/* 가계대출 총량관리 */}
          <div className="mb-8">
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              가계대출 총량관리 강화
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  6.27 대책
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <ul className="space-y-2">
                    {(policyComparison.debtManagement.totalControl.policy0627 as string[]).map((item, index) => (
                      <li key={index} className="text-gray-700 text-sm flex items-start">
                        <span className="mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  10.15 대책
                </h4>
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    {policyComparison.debtManagement.totalControl.policy1015 as string}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 주담대 한도 제한 */}
          <div className="mb-8">
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              주택담보대출 여신한도 제한
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  6.27 대책
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 font-medium">
                    {policyComparison.debtManagement.loanLimit.policy0627}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  10.15 대책 - 주택가격별 차등 적용
                </h4>
                <div className="bg-red-50 rounded-lg p-4">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-red-200">
                        <th className="py-2 px-3 text-left text-sm font-semibold text-gray-900">주택가격</th>
                        <th className="py-2 px-3 text-right text-sm font-semibold text-gray-900">한도</th>
                      </tr>
                    </thead>
                    <tbody>
                      {policyComparison.debtManagement.loanLimit.policy1015.map((item, index) => (
                        <tr key={index} className="border-b border-red-100">
                          <td className="py-2 px-3 text-sm text-gray-700">{item.priceRange}</td>
                          <td className="py-2 px-3 text-sm text-gray-900 font-bold text-right">{item.limit}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* 스트레스 금리 */}
          <div className="mb-8">
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              스트레스 금리 조정
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  6.27 대책
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    {policyComparison.debtManagement.stressRate.policy0627 as string}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  10.15 대책
                </h4>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm font-semibold">
                    {policyComparison.debtManagement.stressRate.policy1015 as string}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* DSR - 전세대출 */}
          <div>
            <h3 className="font-bold text-lg text-gray-900 mb-4">
              DSR 규제 강화
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  6.27 대책
                </h4>
                <div className="bg-gray-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm">
                    {policyComparison.debtManagement.dsrJeonse.policy0627 as string}
                  </p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                  <span className="mr-2">📌</span>
                  10.15 대책
                </h4>
                <div className="bg-red-50 rounded-lg p-4">
                  <p className="text-gray-700 text-sm font-semibold">
                    {policyComparison.debtManagement.dsrJeonse.policy1015 as string}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start space-x-2">
              <span className="text-xl">⚠️</span>
              <div className="text-sm text-gray-700">
                <span className="font-semibold">주요 변화:</span> 6.27 대책은 총량관리 중심, 10.15 대책은 고가주택 대출 제한 및 금리 규제 강화
              </div>
            </div>
          </div>
        </div>

        {/* 출처 표시 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">출처 정보</h3>
              <p className="text-sm text-gray-700 mb-2">
                이 비교 정보는 원본 PDF 문서를 기반으로 제공됩니다.
              </p>
              <div className="text-sm text-gray-600 space-y-1">
                <div>🔗 출처: /doc/0627/0627.pdf</div>
                <div>🔗 출처: /doc/1015/251015_주택시장_안정화_대책.pdf</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
