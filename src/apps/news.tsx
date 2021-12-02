import { useEffect, useState } from "react"

const API_KEY = '00942a082b944507982c1e8c2cbba299'

const News = () => {
  
  const [newList, setNewList] = useState([])

  useEffect(() => {
    getNews()

    function getNews () {
      fetch(`https://newsapi.org/v2/top-headlines?country=tw&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(res => {
          setNewList(res)
          console.log(res)
        })
    }
  }, [])
    
    

  return (
    <div>123</div>
  )
}

export default News