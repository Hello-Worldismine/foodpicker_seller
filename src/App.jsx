import { useState } from 'react'
import './App.css'
import { FiPlusSquare, FiList, FiDollarSign, FiShoppingBag } from 'react-icons/fi'
import { HiOutlineBuildingStorefront } from 'react-icons/hi2'

import ProductRegisterPage from './pages/ProductRegisterPage'
import SalesListPage from './pages/SalesListPage'
import SettlementPage from './pages/SettlementPage'
import PickupWaitingPage from './pages/PickupWaitingPage'
import StoreInfoPage from './pages/StoreInfoPage'

const NAV_ITEMS = [
  {
    key: '상품 등록',
    label: '등록',
    icon: FiPlusSquare,
  },
  {
    key: '판매 상품 리스트',
    label: '목록',
    icon: FiList,
  },
  {
    key: '정산',
    label: '정산',
    icon: FiDollarSign,
  },
  {
    key: '픽업 대기 상품',
    label: '픽업',
    icon: FiShoppingBag,
  },
  {
    key: '매장 정보',
    label: '매장',
    icon: HiOutlineBuildingStorefront,
  },
]

function App() {
  const [activePage, setActivePage] = useState('상품 등록')

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
      <main className="mobile-frame">
        <header className="top-bar simple">
          <div className="top-bar-title">FOODPICKER SELLER</div>
        </header>

        <section className="screen-area with-bottom-nav">{renderPage()}</section>

        <nav className="bottom-nav">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon
            const isActive = activePage === item.key

            return (
              <button
                key={item.key}
                type="button"
                className={`bottom-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => setActivePage(item.key)}
              >
                <Icon className="bottom-nav-icon" />
                <span className="bottom-nav-label">{item.label}</span>
              </button>
            )
          })}
        </nav>
      </main>
    </div>
  )
}

export default App