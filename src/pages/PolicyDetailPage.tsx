import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getPolicyById } from '@/data/policies'

export default function PolicyDetailPage() {
  const { id } = useParams<{ id: string }>()
  const policy = id ? getPolicyById(id) : undefined
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (policy) {
      fetch(policy.dataDocument)
        .then((res) => res.text())
        .then((text) => {
          setContent(text)
          setLoading(false)
        })
        .catch((err) => {
          console.error('Failed to load policy document:', err)
          setLoading(false)
        })
    }
  }, [policy])

  if (!policy) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">
          정책을 찾을 수 없습니다
        </h1>
        <Link to="/" className="text-primary hover:underline">
          홈으로 돌아가기
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-background min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 헤더 */}
        <div className="mb-8">
          <Link to="/" className="text-primary hover:underline mb-4 inline-block">
            ← 홈으로 돌아가기
          </Link>
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="text-5xl">{policy.icon}</span>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  {policy.title}
                </h1>
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div>
                <div className="text-sm text-gray-600 mb-1">분류</div>
                <div className="font-semibold text-gray-900">{policy.category}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">발표일</div>
                <div className="font-semibold text-gray-900">{policy.date}</div>
              </div>
              <div>
                <div className="text-sm text-gray-600 mb-1">적용 지역</div>
                <div className="font-semibold text-gray-900">
                  {policy.regions.join(', ')}
                </div>
              </div>
            </div>

            <div className="border-t pt-6">
              <h2 className="font-bold text-gray-900 mb-2">주요 내용</h2>
              <ul className="space-y-2">
                {policy.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">✓</span>
                    <span className="text-gray-700">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={policy.mainDocument}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-center flex items-center justify-center space-x-2"
              >
                <span>📥</span>
                <span>원본 PDF 다운로드</span>
              </a>
              {policy.faqDocument && (
                <a
                  href={policy.faqDocument}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-center flex items-center justify-center space-x-2"
                >
                  <span>❓</span>
                  <span>FAQ 보기</span>
                </a>
              )}
            </div>
          </div>
        </div>

        {/* 상세 내용 */}
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">상세 내용</h2>
          {loading ? (
            <div className="text-center py-12">
              <div className="text-gray-600">문서를 불러오는 중...</div>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          )}
        </div>

        {/* 출처 표시 */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h3 className="font-bold text-gray-900 mb-2">출처 정보</h3>
              <p className="text-sm text-gray-700 mb-2">
                이 페이지의 모든 정보는 원본 PDF 문서를 기반으로 제공됩니다.
              </p>
              <div className="text-sm text-gray-600">
                <div>🔗 출처: {policy.mainDocument}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
