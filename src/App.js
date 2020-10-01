import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './component/ui/header';
import CharacterGrig from './component/character/characterGrid';
import Search from './component/ui/Search';
var axios = require("axios")

function App() {

  const [items, setItems] = useState([])
  const [isLoading , setLoading] = useState(true)
  const [query ,setQuery] = useState('')


  useEffect(()=>{
      fetchItem()
      
      },[query])

      const fetchItem =async () =>{
        const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
          setItems(result.data)
          console.log(result)
          setLoading(false)
        }

  return (
    <div className='container' >
     <Header />
     <Search getQuery={(q) => setQuery(q)}/>
     <CharacterGrig isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
