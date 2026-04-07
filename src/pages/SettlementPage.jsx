import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'

function SettlementPage() {
  const totalSales = 324000
  const serviceFee = 32400
  const paymentFee = 4860
  const realAmount = totalSales - serviceFee - paymentFee

  const settlementRows = [
    { label: '총 판매액', value: totalSales },
    { label: '대행 수수료', value: serviceFee },
    { label: '결제 수수료', value: paymentFee },
    { label: '실 입금액', value: realAmount },
  ]

  return (
    <div className="page-content">
      <PageHeader title="정산" />

      <Card>
        <h2 className="section-title">입금 예정 금액</h2>

        <p className="description-text">
          주 단위 정산으로 매주 월요일~일요일 판매된 제품을 차주 수요일에 정산해드립니다.
          금주 정산 예정 금액을 확인하세요!
        </p>

        <div className="highlight-box">
          <div className="highlight-label">이번주 입금 예정 금액</div>
          <div className="highlight-amount">{realAmount.toLocaleString()}원</div>
        </div>

        <div className="settlement-table">
          {settlementRows.map((row) => (
            <div key={row.label} className="settlement-row">
              <span>{row.label}</span>
              <strong>{row.value.toLocaleString()}원</strong>
            </div>
          ))}
        </div>
      </Card>

      <div className="bottom-centered-button-wrap">
        <button className="primary-button">매출 증빙 자료 리스트 다운</button>
      </div>
    </div>
  )
}

export default SettlementPage