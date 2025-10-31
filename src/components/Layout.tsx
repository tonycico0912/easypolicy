import { Link, useLocation } from 'react-router-dom'
import { ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const location = useLocation()

  const isActive = (path: string) => {
    return location.pathname === path
      ? 'text-primary border-b-2 border-primary'
      : 'text-neutral hover:text-primary'
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl">🏠</span>
              <h1 className="text-2xl font-bold text-primary">EasyPolicy</h1>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link to="/" className={`px-3 py-2 ${isActive('/')}`}>
                홈
              </Link>
              <Link to="/comparison" className={`px-3 py-2 ${isActive('/comparison')}`}>
                정책 비교
              </Link>
              <Link to="/search" className={`px-3 py-2 ${isActive('/search')}`}>
                검색
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold mb-4">EasyPolicy</h3>
              <p className="text-gray-400">
                부동산 정책을 쉽고 명확하게 전달합니다.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">정책 문서</h3>
              <ul className="space-y-2 text-gray-400">
                <li>6.27 대책 (규제정책)</li>
                <li>9.7 정책 (공급활성화)</li>
                <li>10.15 대책 (규제정책)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">중요 공지</h3>
              <p className="text-gray-400">
                모든 정보는 원본 PDF 문서를 기반으로 제공됩니다.
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
            <p>&copy; 2025 EasyPolicy. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
