import { useState } from 'react'
import './App.css'

import Sidebar from './components/common/Sidebar'
import ProductRegisterPage from './pages/ProductRegisterPage'
import SalesListPage from './pages/SalesListPage'
import SettlementPage from './pages/SettlementPage'
import PickupWaitingPage from './pages/PickupWaitingPage'
import StoreInfoPage from './pages/StoreInfoPage'

const MENU_ITEMS = [
  '상품 등록',
  '판매 상품 리스트',
  '정산',
  '픽업 대기 상품',
  '매장 정보',
]

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [activePage, setActivePage] = useState('상품 등록')

  const handleSelectPage = (page) => {
    setActivePage(page)
    setIsSidebarOpen(false)
  }

  const renderPage = () => {
    switch (activePage) {
      case '상품 등록':
        return <ProductRegisterPage />
      case '판매 상품 리스트':
        return <SalesListPage />
      case '정산':
        return <SettlementPage />
      case '픽업 대기 상품':
        return <PickupWaitingPage />
      case '매장 정보':
        return <StoreInfoPage />
      default:
        return <ProductRegisterPage />
    }
  }

  return (
    <div className="app-shell">
      {isSidebarOpen && (
        <div
          className="sidebar-backdrop"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <Sidebar
        isOpen={isSidebarOpen}
        menuItems={MENU_ITEMS}
        activePage={activePage}
        onClose={() => setIsSidebarOpen(false)}
        onSelectPage={handleSelectPage}
      />

      <main className="mobile-frame">
        <header className="top-bar">
          <button
            className="icon-button"
            onClick={() => setIsSidebarOpen(true)}
            aria-label="메뉴 열기"
          >
            ☰
          </button>
          <div className="top-bar-title">FOODPICKER SELLER</div>
          <div className="top-bar-placeholder" />
        </header>

        <section className="screen-area">{renderPage()}</section>
      </main>
    </div>
  )
}

export default App