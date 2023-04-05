import React from 'react'
import { Radio } from 'antd'
import './FilterPrice.scss'
import { useDispatch, useSelector } from 'react-redux'

const FilterPrice = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filterPriseReducer.filter)
  const onChange1 = ({ target: { value } }) => {
    dispatch({ type: 'SET_FILTER', payload: value })
  }
  return (
    <nav className="filter-price">
      <Radio.Group defaultValue={filter} buttonStyle="solid">
        <Radio.Button onChange={onChange1} value="сheapest">
          Самый дешевый
        </Radio.Button>
        <Radio.Button onChange={onChange1} value="fastest">
          Самый быстрый
        </Radio.Button>
        <Radio.Button onChange={onChange1} value="optimal">
          Оптимальный
        </Radio.Button>
      </Radio.Group>
    </nav>
  )
}
export default FilterPrice
