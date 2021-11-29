import { KeyboardEvent } from 'react'
import styled from 'styled-components'

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const Title = styled.div`
  margin: 64px 0 24px;
  font-size: 84px;
  font-weight: 700;
  letter-spacing: 2px;
  color: white;
`

const SearchInput = styled.input`
  padding: 12px 24px;
  width: 400px;
  height: 44px;
  border: 0;
  border-radius: 24px;
  font-size: 16px;
  outline: none;
`

const GoogleSearch = () => {
  

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Enter') {
      window.location.href = `https://www.google.com/search?q=${event.currentTarget.value}`
    }
  }

  return (
    <Header>
      <Title>Google</Title>
      <SearchInput
        placeholder="搜尋 Google"
        onKeyDown={handleKeyDown}
      />
    </Header>
  )
}

export default GoogleSearch