import React, { useState } from 'react'
import './FilterTransfer.scss'
import { useDispatch, useSelector } from 'react-redux'

const FilterTransfer = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filterTransferReducer)
  const [countFilterTrue, setcountFilterTrue] = useState(0)
  const onChange = (e) => {
    if (e.target.value === 'all') {
      dispatch({ type: 'SET_FILTER_TRANS_ALL' })
      if (!e.target.checked) {
        setcountFilterTrue(0)
      } else {
        setcountFilterTrue(4)
      }
    } else {
      dispatch({ type: 'SET_FILTER_TRANS', checked: e.target.checked, payload: e.target.value })
      if (e.target.checked) {
        setcountFilterTrue(countFilterTrue + 1)
        if (countFilterTrue === 3) {
          dispatch({ type: 'SET_FILTER_TRANS_ALL' })
        }
      } else {
        setcountFilterTrue(countFilterTrue - 1)
      }
    }
  }
  return (
    <section className="filter">
      <p className="title">Количество пересадок</p>
      <label className="check option">
        <input onChange={onChange} className="check__input" type="checkbox" value="all" checked={filter.all} />
        <span className="check__box" />
        Все
      </label>
      <label className="check option">
        <input onChange={onChange} className="check__input" type="checkbox" value="withOut" checked={filter.withOut} />
        <span className="check__box" />
        Без пересадок
      </label>
      <label className="check option">
        <input
          onChange={onChange}
          className="check__input"
          type="checkbox"
          value="oneTransfer"
          checked={filter.oneTransfer}
        />
        <span className="check__box" />1 пересадка
      </label>
      <label className="check option">
        <input
          onChange={onChange}
          className="check__input"
          type="checkbox"
          value="twoTransfer"
          checked={filter.twoTransfer}
        />
        <span className="check__box" />2 пересадки
      </label>
      <label className="check option">
        <input
          onChange={onChange}
          className="check__input"
          type="checkbox"
          value="threeTransfer"
          checked={filter.threeTransfer}
        />
        <span className="check__box" />3 пересадки
      </label>
    </section>
  )
}
export default FilterTransfer
