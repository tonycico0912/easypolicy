import { useState } from 'react'
import { Link } from 'react-router-dom'
import { policies } from '@/data/policies'

export default function SearchPage() {
  const [query, setQuery] = useState('')
  const [selectedPolicy, setSelectedPolicy] = useState<string>('all')

  const filteredPolicies = policies.filter((policy) => {
    const matchesQuery =
      query === '' ||
      policy.title.toLowerCase().includes(query.toLowerCase()) ||
      policy.category.toLowerCase().includes(query.toLowerCase()) ||
      policy.summary.toLowerCase().includes(query.toLowerCase()) ||
      policy.highlights.some((h) => h.toLowerCase().includes(query.toLowerCase())) ||
      policy.regions.some((r) => r.toLowerCase().includes(query.toLowerCase()))

    const matchesFilter =
      selectedPolicy === 'all' || policy.id === selectedPolicy

    return matchesQuery && matchesFilter
  })

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">
            ← 홈으로 돌아가기
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            정책 검색
          </h1>
          <p className="text-gray-600">
            키워드를 입력하여 원하는 정책 정보를 찾아보세요
          </p>
        </div>

        {/* 검색 영역 */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                검색어
              </label>
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="예: 투기과열지구, 대출, 서울, 경기..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                정책 선택
              </label>
              <select
                value={selectedPolicy}
                onChange={(e) => setSelectedPolicy(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">전체</option>
                <option value="0627">6.27 대책</option>
                <option value="0907">9.7 정책</option>
                <option value="1015">10.15 대책</option>
              </select>
            </div>
          </div>

          <div className="mt-4 flex items-center text-sm text-gray-600">
            <span className="mr-2">💡</span>
            <span>
              지역명, 정책명, 주요 키워드 등을 입력하여 검색하세요
            </span>
          </div>
        </div>

        {/* 검색 결과 */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">
              검색 결과 ({filteredPolicies.length}건)
            </h2>
          </div>

          {filteredPolicies.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                검색 결과가 없습니다
              </h3>
              <p className="text-gray-600">
                다른 키워드로 검색해보세요
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPolicies.map((policy) => (
                <div key={policy.id} className="bg-white rounded-lg shadow-md p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-3xl">{policy.icon}</span>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {policy.title}
                        </h3>
                        <span
                          className={
                            policy.type === 'regulation'
                              ? 'policy-badge-regulation'
                              : 'policy-badge-supply'
                          }
                        >
                          {policy.type === 'regulation' ? '규제정책' : '공급활성화'}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                    <div>
                      <div className="text-sm text-gray-600 mb-1">분류</div>
                      <div className="font-semibold text-gray-900">
                        {policy.category}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">발표일</div>
                      <div className="font-semibold text-gray-900">
                        {policy.date}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-600 mb-1">적용 지역</div>
                      <div className="font-semibold text-gray-900">
                        {policy.regions.join(', ')}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4">{policy.summary}</p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">주요 내용</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {policy.highlights.map((highlight, index) => (
                        <li key={index} className="text-sm text-gray-600 flex items-start">
                          <span className="text-primary mr-2">✓</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link
                      to={`/policy/${policy.id}`}
                      className="btn-primary text-center"
                    >
                      자세히 보기
                    </Link>
                    <a
                      href={policy.mainDocument}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-center flex items-center justify-center space-x-2"
                    >
                      <span>📥</span>
                      <span>원본 PDF</span>
                    </a>
                    {policy.faqDocument && (
                      <a
                        href={policy.faqDocument}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary text-center flex items-center justify-center space-x-2"
                      >
                        <span>❓</span>
                        <span>FAQ</span>
                      </a>
                    )}
                  </div>

                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <div className="text-sm text-gray-600">
                      🔗 출처: {policy.mainDocument}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 안내 */}
        <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">검색 안내</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• 모든 검색 결과는 원본 PDF 문서를 기반으로 제공됩니다</li>
                <li>• 정책명, 지역명, 주요 키워드로 검색할 수 있습니다</li>
                <li>• 규제정책과 공급활성화 정책을 구분하여 검색할 수 있습니다</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
