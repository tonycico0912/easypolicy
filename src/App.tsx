import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import PolicyDetailPage from './pages/PolicyDetailPage'
import ComparisonPage from './pages/ComparisonPage'
import SearchPage from './pages/SearchPage'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/policy/:id" element={<PolicyDetailPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Layout>
  )
}

export default App
