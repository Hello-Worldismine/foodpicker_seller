import { useState } from 'react'
import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'
import DateSelectGroup from '../components/sales/DateSelectGroup'
import { initialProductRows } from '../data/mockData'

function SalesListPage() {
  const [rows] = useState(initialProductRows)
  const [selectedIds, setSelectedIds] = useState([])

  const [startYear, setStartYear] = useState('2026')
  const [startMonth, setStartMonth] = useState('01')
  const [startDay, setStartDay] = useState('01')

  const [endYear, setEndYear] = useState('2026')
  const [endMonth, setEndMonth] = useState('04')
  const [endDay, setEndDay] = useState('01')

  const years = ['2024', '2025', '2026', '2027', '2028']
  const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
  const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))

  const hasSelected = selectedIds.length > 0

  const toggleRow = (rowId) => {
    setSelectedIds((prev) =>
      prev.includes(rowId) ? prev.filter((id) => id !== rowId) : [...prev, rowId]
    )
  }

  const onClickEndSales = () => {
    if (!hasSelected) return
    const result = window.confirm('정말로 판매를 종료하시겠습니까?')
    if (result) {
      window.alert('판매 종료 처리 예시입니다.')
    }
  }

  const onClickStopDrop = () => {
    if (!hasSelected) return
    const result = window.confirm('정말로 하락 정지하시겠습니까?')
    if (result) {
      window.alert('하락 정지 처리 예시입니다.')
    }
  }

  return (
    <div className="page-content">
      <PageHeader title="판매 상품 리스트" />

      <Card>
        <h2 className="section-title">기간 설정</h2>

        <div className="date-range-vertical">
          <DateSelectGroup
            label="시작일"
            year={startYear}
            month={startMonth}
            day={startDay}
            onChangeYear={setStartYear}
            onChangeMonth={setStartMonth}
            onChangeDay={setStartDay}
            years={years}
            months={months}
            days={days}
          />

          <DateSelectGroup
            label="종료일"
            year={endYear}
            month={endMonth}
            day={endDay}
            onChangeYear={setEndYear}
            onChangeMonth={setEndMonth}
            onChangeDay={setEndDay}
            years={years}
            months={months}
            days={days}
          />
        </div>
      </Card>

      <Card>
        <div className="table-scroll">
          <table className="data-table">
            <thead>
              <tr>
                <th>[ ]</th>
                <th>번호</th>
                <th>판매상품</th>
                <th>판매금액</th>
                <th>거래여부</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => {
                const isSelling = row.status === '판매중'
                const checked = selectedIds.includes(row.id)

                return (
                  <tr key={row.id}>
                    <td>
                      <input
                        type="checkbox"
                        checked={checked}
                        disabled={!isSelling}
                        onChange={() => toggleRow(row.id)}
                      />
                    </td>
                    <td>{row.id}</td>
                    <td>{row.productName}</td>
                    <td>{row.price.toLocaleString()}원</td>
                    <td>
                      <span
                        className={`status-chip ${
                          row.status === '판매중'
                            ? 'selling'
                            : row.status === '판매완료'
                            ? 'done'
                            : 'paused'
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>

        <div className="table-actions">
          <button
            className={`primary-button half ${!hasSelected ? 'disabled' : ''}`}
            onClick={onClickEndSales}
            disabled={!hasSelected}
          >
            판매 종료
          </button>

          <button
            className={`outline-button half ${!hasSelected ? 'disabled' : ''}`}
            onClick={onClickStopDrop}
            disabled={!hasSelected}
          >
            하락 정지
          </button>
        </div>
      </Card>

      <div className="bottom-centered-button-wrap">
        <button className="primary-button">매출 증빙 자료 리스트 다운</button>
      </div>
    </div>
  )
}

export default SalesListPage