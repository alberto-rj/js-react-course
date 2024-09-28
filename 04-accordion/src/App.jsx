import { useState } from 'react'
import { Faq } from './components'

function App() {
  const [count, setCount] = useState(0)
  return <Faq />;
}

export default App
