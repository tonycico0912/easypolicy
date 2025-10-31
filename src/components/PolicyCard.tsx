import { Link } from 'react-router-dom'
import { Policy } from '@/types/policy'

interface PolicyCardProps {
  policy: Policy
}

export default function PolicyCard({ policy }: PolicyCardProps) {
  return (
    <div className="card">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <span className="text-4xl">{policy.icon}</span>
          <div>
            <h3 className="text-xl font-bold text-gray-900">{policy.title}</h3>
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

      <div className="space-y-3 mb-4">
        <div className="flex items-center space-x-2">
          <span className="text-neutral">📋</span>
          <span className="text-gray-700">{policy.category}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-neutral">📍</span>
          <span className="text-gray-700">{policy.regions.join(', ')}</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-neutral">📅</span>
          <span className="text-gray-700">{policy.date}</span>
        </div>
      </div>

      <p className="text-gray-600 mb-4">{policy.summary}</p>

      <div className="mb-4">
        <h4 className="font-semibold text-gray-900 mb-2">주요 내용</h4>
        <ul className="space-y-1">
          {policy.highlights.map((highlight, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-start">
              <span className="mr-2">•</span>
              <span>{highlight}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex space-x-3">
        <Link to={`/policy/${policy.id}`} className="btn-primary flex-1 text-center">
          자세히 보기
        </Link>
        {policy.faqDocument && (
          <a
            href={policy.faqDocument}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary flex-1 text-center"
          >
            FAQ 보기
          </a>
        )}
      </div>
    </div>
  )
}
