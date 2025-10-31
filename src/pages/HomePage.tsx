import { Link } from 'react-router-dom'
import PolicyCard from '@/components/PolicyCard'
import { policies, getRegulationPolicies, getSupplyPolicies } from '@/data/policies'

export default function HomePage() {
  const regulationPolicies = getRegulationPolicies()
  const supplyPolicies = getSupplyPolicies()

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            부동산 정책 정보 플랫폼
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100">
            복잡한 부동산 정책을 쉽고 명확하게 이해하세요
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/search" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              정책 검색하기
            </Link>
            <Link to="/comparison" className="bg-blue-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-900 transition-colors border-2 border-white">
              정책 비교하기
            </Link>
          </div>
        </div>
      </section>

      {/* 주요 통계 */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">3</div>
              <div className="text-gray-600">주요 정책</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-secondary mb-2">2</div>
              <div className="text-gray-600">규제정책</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent mb-2">1</div>
              <div className="text-gray-600">공급활성화 정책</div>
            </div>
          </div>
        </div>
      </section>

      {/* 규제정책 섹션 */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                규제정책
              </h2>
              <p className="text-gray-600">
                주택시장 안정화를 위한 규제 대책
              </p>
            </div>
            <Link to="/comparison" className="text-primary hover:underline font-semibold">
              정책 비교 →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {regulationPolicies.map((policy) => (
              <PolicyCard key={policy.id} policy={policy} />
            ))}
          </div>
        </div>
      </section>

      {/* 공급활성화 정책 섹션 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              공급활성화 정책
            </h2>
            <p className="text-gray-600">
              주택 공급 확대를 위한 정책
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-1 max-w-2xl">
            {supplyPolicies.map((policy) => (
              <PolicyCard key={policy.id} policy={policy} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            궁금한 정책이 있으신가요?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            원본 PDF 문서 기반으로 정확한 정보를 제공합니다
          </p>
          <Link to="/search" className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block">
            지금 검색하기
          </Link>
        </div>
      </section>
    </div>
  )
}
