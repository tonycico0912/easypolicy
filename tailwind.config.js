/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',     // 파란색 - 신뢰감
        secondary: '#dc2626',   // 빨간색 - 규제 강조
        accent: '#16a34a',      // 초록색 - 공급활성화
        neutral: '#64748b',     // 회색 - 본문
        background: '#f8fafc',  // 연한 회색
      },
    },
  },
  plugins: [],
}
