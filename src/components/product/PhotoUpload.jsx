function PhotoUpload({ images, onFileChange }) {
    return (
      <>
        <label className="photo-upload-box">
          <input
            type="file"
            accept="image/*"
            multiple
            onChange={onFileChange}
            hidden
          />
          <div className="camera-icon">📷</div>
          <div className="photo-upload-text">사진 등록</div>
          <div className="photo-upload-subtext">최대 10장까지 등록 가능</div>
        </label>
  
        {images.length > 0 && (
          <div className="thumbnail-grid">
            {images.map((image, index) => (
              <div key={image.id} className="thumbnail-item">
                {index === 0 && <span className="badge-primary">대표</span>}
                <img src={image.url} alt={`상품 썸네일 ${index + 1}`} />
              </div>
            ))}
          </div>
        )}
      </>
    )
  }
  
  export default PhotoUpload