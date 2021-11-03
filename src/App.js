import { useState } from 'react'
import Header from './components/Header'
import Choice from './components/Chioce'
import Button from './components/Button'

function App() {
  // const [question, setQuestion] = useState('')
  // const [text, setText] = useState('')
  // const [textOne, setTextOne] = useState('')
  // const [textTwo, setTextTwo] = useState('')
  const [fields, setFields ] = useState(["", ""])
  
 
  const addOption = () => {
    setFields([ ...fields, ""])
  }
  const removeOption = (index) => {
    const values = [...fields];
    values.splice(index, 1);
    setFields(values); 
  }

  return (
    <div className="container">
      <Header />
      <Choice  fields={ fields } addOption={addOption} removeOption={removeOption} />
    </div>
  );
}

export default App
