import React from 'react'
import { Card, Row, Col } from 'antd'

import './ItemCart.scss'
import { dateFormat, durationFormat, transferFormat } from '../../utils/dataFormat'

const ItemCart = ({ data }) => {
  const { price, carrier, segments } = data
  const small = segments.map((segment) => {
    const { origin, destination, date, stops, duration } = segment
    const newDate = dateFormat(date, duration)
    const dateOnWay = durationFormat(duration)
    return (
      <Row gutter={[16, 24]} justify="space-between">
        <Col>
          <p className="titel-info">{`${origin} - ${destination}`}</p>
          <p>{newDate}</p>
        </Col>
        <Col>
          <p>В пути</p>
          <p>{dateOnWay}</p>
        </Col>
        <Col>
          <p>{transferFormat(stops.length)}</p>
          <p>{stops.join(', ')}</p>
        </Col>
      </Row>
    )
  })
  return (
    <li>
      <Card
        extra={<img src={`https://pics.avs.io/99/36/$${carrier}.png`} alt={carrier} />}
        title={`${new Intl.NumberFormat('ru-RU').format(price)} P`}
      >
        {small}
      </Card>
    </li>
  )
}

export default ItemCart
