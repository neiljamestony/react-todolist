import { useState } from 'react'
import './assets/main.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import Content from './components/Content'
import SearchTask from './components/SearchTask'


function App() {
  const [tasks, setTasks] = useState([])
  const [formData, setFormData] = useState('')
  const [query, setQuery] = useState('')

  const onChange = (e) => {
    const { value } = e.target
    setFormData({title: value.toLowerCase(), isDone: false, id: tasks.length + 1})
  }

  const onSubmit = () => {
    setTasks([...tasks, formData])
    setFormData('')
  }

  return (
    <div className="wrapper">
      <div>
        <Header/>
        <SearchTask setQuery={setQuery}/>
        <AddTask formData={formData} onChange={onChange} onSubmit={onSubmit}/>
        <Content tasks={tasks} query={query} setTasks={setTasks}/>
      </div>
    </div>
  );
}

export default App;
