import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getId } from '../../store/redux/action'
import ItemList from '../ItemList'
import FilterPrice from '../FilterPrice'
import FilterTransfer from '../FilterTransfer'
import Logo from '../Logo'
import './App.scss'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getId())
  }, [])

  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="main">
        <FilterTransfer />
        <section className="content">
          <FilterPrice />
          <ItemList />
        </section>
      </main>
    </>
  )
}

export default App
