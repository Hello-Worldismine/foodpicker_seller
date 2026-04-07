function QuantitySelector({ quantity, onDecrease, onIncrease }) {
    return (
      <div className="quantity-box">
        <button type="button" className="quantity-button" onClick={onDecrease}>
          −
        </button>
        <div className="quantity-value">{quantity}</div>
        <button type="button" className="quantity-button" onClick={onIncrease}>
          +
        </button>
      </div>
    )
  }
  
  export default QuantitySelector