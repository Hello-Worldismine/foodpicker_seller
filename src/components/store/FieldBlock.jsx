function FieldBlock({ label, value, onChange }) {
    return (
      <div className="field-block">
        <label className="input-label">{label}</label>
        <input
          className="text-input"
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    )
  }
  
  export default FieldBlock