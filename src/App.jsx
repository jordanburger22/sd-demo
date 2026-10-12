import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'

// function useState(value) {
//   // logic
//   // if the value updates, the page rerenders
//   return [value, setterFunction]
// }

function App() {

  const title = 'Something Else'
  const [count, setCount] = useState(0)

  const [car, setCar] = useState({
    model: 'dodge',
    make: 'ram',
    year: 2000
  })

  const colors = ['red', 'blue', 'green', 'yellow']

  const colorElements = colors.map(color => <Form />)

  function increment() {
    // setCount(5) // sets to a hardcoded value
    setCount(prevCount => prevCount + 1)
  }

  // props
  //{title: 'My Title'}
  return (
    <>
      <Header title={title} anotherValue={"Hello there"} />
      <Form />
      <p>{title}</p>
      {/* 
        document.createElement
        .textConent
        append
      */}

      <p>{count}</p>
      <button onClick={increment}>+</button>
      {/* runs the second the page loads */}
      {/* <button onClick={increment()}>+</button> */}
      <p>{car.make}</p>
      {colorElements}
    </>
  )
}

export default App
