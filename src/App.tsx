import { useState } from 'react'
import axios from 'axios'
import './App.css'
import SearchBar from './components/SearchBar'

function App() {
  const [answer, setAnswer] = useState<string>('');
  
  const handleSearch = async (query: string) => {
    try {
      const response = await axios.post<{ answer: string }>("https://localhost:5173/search", {query})
      setAnswer(response.data.answer);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <>
      <h1>TutorAI</h1>
      <SearchBar onSearch={handleSearch}/>
      <div>{answer}</div>
    </>
  )
}

export default App;
