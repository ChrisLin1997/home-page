import { useEffect, useState } from 'react'
import styled from 'styled-components'

const API_TOKEN = 'b59f562da5497d300e7edef0d1f4a556'

const NewCard = styled.div`
  height: fit-content;
  overflow: auto;
`

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`

const NewsItem = styled.a`
  padding: 12px;
  border-radius: 8px;
  display: flex;
  transition: all .2s;

  &:hover {
    background-color: #2b3139;
  }
`

const NewsImg = styled.img`
  margin-right: 12px;
  width: 64px;
  height: 64px;
  object-fit: cover;
`

const NewsContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex: 1;
  overflow: hidden;

  & > * {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  & > *:nth-child(1) {
    color: white;
    font-weight: bold;
  }
  & > *:nth-child(2) {
    color: #B7C2CB;
    font-size: 14px;
  }
`

const News = () => {
  const [newList, setNewList] = useState([])

  useEffect(() => {
    getNews()

    function getNews () {
      fetch(`https://gnews.io/api/v4/search?q=加密貨幣&country=tw&token=${API_TOKEN}`)
        .then(res => res.json())
        .then(res => { setNewList(res.articles.slice(0, 6)) })
    }
  }, [])

  return (
    <NewCard>
      <Title>News</Title>
      { newList.map((item: any) => (
          <NewsItem key={item.url} target="_blank" href={item.url}>
            <NewsImg src={item.image} />
            <NewsContent>
              <div>{ item.title }</div>
              <div>{ item.description }</div>
            </NewsContent>
          </NewsItem>
      ))}
    </NewCard>
  )
}

export default News