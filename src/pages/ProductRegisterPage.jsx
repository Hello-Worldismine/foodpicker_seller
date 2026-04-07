import { useState } from 'react'
import Card from '../components/common/Card'
import PageHeader from '../components/common/PageHeader'
import PhotoUpload from '../components/product/PhotoUpload'
import QuantitySelector from '../components/product/QuantitySelector'

function ProductRegisterPage() {
  const [productName, setProductName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [startPrice, setStartPrice] = useState('')
  const [minPrice, setMinPrice] = useState('')
  const [dropInterval, setDropInterval] = useState('1시간')
  const [images, setImages] = useState([])

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files || [])
    const remaining = 10 - images.length
    const selectedFiles = files.slice(0, remaining)

    const mapped = selectedFiles.map((file) => ({
      id: `${file.name}-${file.size}-${Math.random()}`,
      file,
      url: URL.createObjectURL(file),
    }))

    setImages((prev) => [...prev, ...mapped].slice(0, 10))
    event.target.value = ''
  }

  const decreaseQuantity = () => {
    setQuantity((prev) => Math.max(1, prev - 1))
  }

  const increaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="page-content">
      <PageHeader title="상품 등록" />

      <Card>
        <h2 className="section-title">사진 등록</h2>
        <PhotoUpload images={images} onFileChange={handleFileChange} />
      </Card>

      <Card>
        <h2 className="section-title">상품명</h2>
        <input
          className="text-input"
          type="text"
          maxLength={20}
          placeholder="상품명을 입력해주세요 (최대 20자)"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </Card>

      <Card>
        <h2 className="section-title">상품 수량</h2>
        <QuantitySelector
          quantity={quantity}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
        />
      </Card>

      <Card>
        <h2 className="section-title">가격 설정</h2>

        <div className="two-column-grid">
          <div>
            <label className="input-label">시작가</label>
            <input
              className="text-input"
              type="number"
              placeholder="시작가를 입력해주세요"
              value={startPrice}
              onChange={(e) => setStartPrice(e.target.value)}
            />
          </div>

          <div>
            <label className="input-label">최저가</label>
            <input
              className="text-input"
              type="number"
              placeholder="최저가를 입력해주세요"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="field-block extra-top-gap">
          <label className="input-label">가격 인하 시간</label>
          <select
            className="text-input"
            value={dropInterval}
            onChange={(e) => setDropInterval(e.target.value)}
          >
            <option>1시간</option>
            <option>30분</option>
            <option>20분</option>
            <option>10분</option>
          </select>
        </div>
      </Card>

      <div className="bottom-centered-button-wrap">
        <button className="primary-button">상품 등록하기</button>
      </div>
    </div>
  )
}

export default ProductRegisterPage