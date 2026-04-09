import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'
import { FiEdit2, FiMapPin, FiRefreshCw, FiVolume2 } from 'react-icons/fi'

function StoreInfoPage() {
  const storeInfo = {
    name: '푸드피커 베이커리 서초점',
    storeNumber: 'FP-SEOCHO-001',
    owner: '김피커',
    address: '서울특별시 서초구 서초동 123-45',
    phone: '02-555-1234',
    weekdayHours: '08:00 - 22:00',
    weekendHours: '10:00 - 20:00',
  }

  return (
    <div className="page-content store-page">
      <PageHeader title="매장 정보" />

      <div className="store-edit-button-wrap">
        <button className="store-edit-button">
          <FiEdit2 />
          <span>매장 정보 수정하기</span>
        </button>
      </div>

      <Card className="store-info-card">
        <div className="store-info-section">
          <div className="store-field">
            <div className="store-field-label">이름</div>
            <div className="store-field-box">{storeInfo.name}</div>
          </div>

          <div className="store-field">
            <div className="store-field-label">번호(ID)</div>
            <div className="store-field-box">{storeInfo.storeNumber}</div>
          </div>

          <div className="store-field">
            <div className="store-field-label">대표자</div>
            <div className="store-field-box">{storeInfo.owner}</div>
          </div>

          <div className="store-field">
            <div className="store-field-label">주소</div>
            <div className="store-field-box with-icon">
              <span>{storeInfo.address}</span>
              <FiMapPin className="store-field-inline-icon" />
            </div>
          </div>

          <div className="store-field">
            <div className="store-field-label">연락처</div>
            <div className="store-field-box">{storeInfo.phone}</div>
          </div>

          <div className="store-field">
            <div className="store-field-label">영업시간</div>
            <div className="store-hours-box">
              <div className="store-hours-row">
                <span className="store-hours-day">평일</span>
                <span className="store-hours-time">{storeInfo.weekdayHours}</span>
              </div>
              <div className="store-hours-row">
                <span className="store-hours-day">주말</span>
                <span className="store-hours-time">{storeInfo.weekendHours}</span>
              </div>
            </div>
          </div>
        </div>
      </Card>

      <div className="store-service-grid">
        <button className="store-service-card" type="button">
          <div className="store-service-icon blue">
            <FiRefreshCw />
          </div>
          <div className="store-service-text">
            재고 연동
            <br />
            템플릿
          </div>
        </button>

        <button className="store-service-card" type="button">
          <div className="store-service-icon peach">
            <FiVolume2 />
          </div>
          <div className="store-service-text">
            단골 알림
            <br />
            서비스
          </div>
        </button>
      </div>

      <div className="store-banner-card">
        <div className="store-banner-overlay" />
        <div className="store-banner-text">
          식당 낭비를 줄이는 가치 있는
          <br />
          발견을, Food Picker와 함께
        </div>
      </div>
    </div>
  )
}

export default StoreInfoPage