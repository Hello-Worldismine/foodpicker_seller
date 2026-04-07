function DateSelectGroup({
  label,
  year,
  month,
  day,
  onChangeYear,
  onChangeMonth,
  onChangeDay,
  years,
  months,
  days,
}) {
  return (
    <div className="date-select-row">
      <div className="date-select-title">{label}</div>

      <div className="date-select-group">
        <select
          className="date-select date-select-year"
          value={year}
          onChange={(e) => onChangeYear(e.target.value)}
        >
          {years.map((item) => (
            <option key={`year-${item}`} value={item}>
              {item}년
            </option>
          ))}
        </select>

        <select
          className="date-select date-select-month"
          value={month}
          onChange={(e) => onChangeMonth(e.target.value)}
        >
          {months.map((item) => (
            <option key={`month-${item}`} value={item}>
              {item}월
            </option>
          ))}
        </select>

        <select
          className="date-select date-select-day"
          value={day}
          onChange={(e) => onChangeDay(e.target.value)}
        >
          {days.map((item) => (
            <option key={`day-${item}`} value={item}>
              {item}일
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default DateSelectGroup