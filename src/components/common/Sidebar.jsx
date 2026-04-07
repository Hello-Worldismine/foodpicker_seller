function Sidebar({ isOpen, menuItems, activePage, onClose, onSelectPage }) {
    return (
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-header">
          <div className="sidebar-title">푸드피커 판매자</div>
          <button className="icon-button" onClick={onClose} aria-label="사이드바 닫기">
            ✕
          </button>
        </div>
  
        <nav className="sidebar-menu">
          {menuItems.map((item) => (
            <button
              key={item}
              className={`sidebar-menu-item ${activePage === item ? 'active' : ''}`}
              onClick={() => onSelectPage(item)}
            >
              {item}
            </button>
          ))}
        </nav>
      </aside>
    )
  }
  
  export default Sidebar