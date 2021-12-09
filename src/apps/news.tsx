import { useEffect, useState } from 'react'
import styled from 'styled-components'

const API_KEY = '00942a082b944507982c1e8c2cbba299'

const NewCard = styled.div`
  padding: 12px;
  width: 360px;
  height: fit-content;
  overflow: auto;
  border-radius: 8px;
  background-color: #191919;
`

const NewsItem = styled.a`
  margin-Bottom: 12px;
  display: block;
  width: 100%;
  color: #B7C2CB;
  font-size: 14px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  &:hover {
    color: #F2F2F2;
  }
`

const News = () => {
  const [newList, setNewList] = useState([])

  useEffect(() => {
    getNews()

    function getNews () {
      fetch(`https://newsapi.org/v2/top-headlines?country=tw&apiKey=${API_KEY}`)
        .then(res => res.json())
        .then(res => { setNewList(res.articles.slice(0, 10)) })
    }
  }, [])

  return (
    <NewCard>
      { newList.map((item: any) => (
        <div key={item.url}>
          <NewsItem target="_blank" href={item.url}>{ item.title }</NewsItem>
        </div>
      ))}
    </NewCard>
  )
}

export default News