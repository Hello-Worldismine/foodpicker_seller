import { useState } from 'react'
import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'
import FieldBlock from '../components/store/FieldBlock'

function StoreInfoPage() {
  const [storeInfo, setStoreInfo] = useState({
    name: '푸드피커 서면점',
    storeNumber: 'A-102',
    owner: '김대표',
    address: '부산광역시 부산진구 서면로 00',
    phone: '051-123-4567',
    hours: '09:00 ~ 21:00',
  })

  const handleChange = (key, value) => {
    setStoreInfo((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  return (
    <div className="page-content">
      <PageHeader title="매장 정보" />

      <div className="bottom-centered-button-wrap top-button-gap">
        <button className="primary-button">매장 정보 수정하기</button>
      </div>

      <Card>
        <div className="field-stack">
          <FieldBlock
            label="이름"
            value={storeInfo.name}
            onChange={(value) => handleChange('name', value)}
          />
          <FieldBlock
            label="번호"
            value={storeInfo.storeNumber}
            onChange={(value) => handleChange('storeNumber', value)}
          />
          <FieldBlock
            label="대표자"
            value={storeInfo.owner}
            onChange={(value) => handleChange('owner', value)}
          />
          <FieldBlock
            label="주소"
            value={storeInfo.address}
            onChange={(value) => handleChange('address', value)}
          />
          <FieldBlock
            label="연락처"
            value={storeInfo.phone}
            onChange={(value) => handleChange('phone', value)}
          />
          <FieldBlock
            label="영업시간"
            value={storeInfo.hours}
            onChange={(value) => handleChange('hours', value)}
          />
        </div>
      </Card>

      <div className="split-button-wrap">
        <button className="outline-button fill">재고 연동 템플릿</button>
        <button className="outline-button fill">단골 알림 서비스</button>
      </div>
    </div>
  )
}

export default StoreInfoPage