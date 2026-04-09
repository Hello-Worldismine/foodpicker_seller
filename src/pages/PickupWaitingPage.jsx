import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'
import { pickupRows } from '../data/mockData'

function PickupWaitingPage() {
  const handleSendAlert = (productName, buyer) => {
    window.alert(`${buyer}님에게 ${productName} 미수령 알림을 전송합니다.`)
  }

  return (
    <div className="page-content">
      <PageHeader title="픽업 대기 상품" />

      <Card>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>번호</th>
                <th>상품명</th>
                <th>픽업예정시간</th>
                <th>구매자</th>
                <th>알림 전송</th>
              </tr>
            </thead>
            <tbody>
              {pickupRows.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.productName}</td>
                  <td>{row.pickupTime}</td>
                  <td>
                    <div className="buyer-info">
                      <div className="buyer-name">{row.buyer}</div>
                      <div className="buyer-phone">{row.buyerPhone}</div>
                    </div>
                  </td>
                  <td>
                    <button
                      className="bell-button"
                      onClick={() => handleSendAlert(row.productName, row.buyer)}
                      aria-label="미수령 알림 전송"
                      title="미수령 알림 전송"
                    >
                      🔔
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  )
}

export default PickupWaitingPage