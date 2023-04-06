import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { LoadingOutlined } from '@ant-design/icons'
import { Spin, Button } from 'antd'
import uniqid from 'uniqid'

import './ItemList.scss'
import ItemCart from '../ItemCart/ItemCart'
import filterTickets from '../../utils/filterTikckets'
import Error from '../../utils/Error'

const ItemList = () => {
  const [showCount, setShowCount] = useState(5)
  const { error, loading, tickets } = useSelector((state) => state.ticketsReducer)
  const filterTransfer = useSelector((state) => state.filterTransferReducer)
  const filterPrise = useSelector((state) => state.filterPriseReducer.filter)
  const filterListTikets = tickets.length ? filterTickets(tickets, filterTransfer, filterPrise) : []
  const listTikets = filterListTikets.slice(0, showCount).map((item) => {
    return <ItemCart key={uniqid()} data={item} />
  })
  const onShowClick = () => {
    setShowCount(showCount + 5)
  }
  const messageError = error ? <Error /> : null
  const dataList = listTikets.length ? (
    <div>
      <ul className="list-tikets">{listTikets}</ul>
      <Button onClick={() => onShowClick()} type="primary" block>
        Показать еще 5 билетов!
      </Button>
    </div>
  ) : (
    <div>Рейсов, подходящих под заданные фильтры, не найдено</div>
  )

  const content = loading ? <Spin indicator={<LoadingOutlined spin />} /> : dataList

  return messageError || content
}
export default ItemList
