const filterTickets = (data, filters, prise) => {
  const { all, oneTransfer, threeTransfer, twoTransfer, withOut } = filters
  let newData = [...data]
  if (prise === 'сheapest') {
    newData = newData.sort((a, b) => a.price - b.price)
  }
  if (prise === 'fastest') {
    newData = newData.sort(
      (a, b) => a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
    )
  }
  if (prise === 'optimal') {
    newData = newData.sort(
      (a, b) =>
        a.segments[0].duration +
        a.segments[1].duration +
        a.price -
        (b.segments[0].duration + b.segments[1].duration + b.price)
    )
  }
  if (!all) {
    newData = newData.filter((alement) => {
      return alement.segments.some((value) => {
        const countTransfer = value.stops.length
        if (withOut && countTransfer === 0) {
          return true
        }
        if (oneTransfer && countTransfer === 1) {
          return true
        }
        if (twoTransfer && countTransfer === 2) {
          return true
        }
        if (threeTransfer && countTransfer === 3) {
          return true
        }
        return false
      })
    })
  }
  return newData
}

export default filterTickets
