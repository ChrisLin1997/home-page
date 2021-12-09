import { useEffect, useState } from 'react'
import styled from 'styled-components'

const API_TOKEN = 'b59f562da5497d300e7edef0d1f4a556'

const NewCard = styled.div`
  padding: 12px;
  width: 420px;
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
      fetch(`https://gnews.io/api/v4/search?q=加密貨幣&country=tw&token=${API_TOKEN}`)
        .then(res => res.json())
        .then(res => { setNewList(res.articles) })
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