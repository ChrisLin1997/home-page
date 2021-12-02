import { KeyboardEvent } from 'react'
import styled from 'styled-components'

const HeaderContent = styled.div`
  position: relative;
  padding: 24px;
  display: flex;
  align-items: center;
`

const Title = styled.div`
  margin: auto;
  font-size: 28px;
  font-weight: 700;
  color: white;
  letter-spacing: 1px;
  text-shadow: 2px 2px 2px #191919;
  user-select: none;
`

const Nav = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
`

const Link = styled.a`
  margin-right: 24px;
  color: #B7C2CB;
  font-size: 14px;

  &:hover {
    border-bottom: 1px solid #B7C2CB;
  }
`

const Header = () => {
  return (
    <HeaderContent>
      <Title>Hi Chris Lin</Title>

      <Nav>
        <Link href="https://mail.google.com/">信箱</Link>
        <Link href="https://www.google.com.tw/maps">地圖</Link>
        <Link href="https://meet.google.com/osp-jkdt-gfu">Meet</Link>
        <GoogleSearch />
      </Nav>
    </HeaderContent>
  )
}

const SearchInput = styled.input`
  padding: 12px 24px;
  width: 200px;
  height: 40px;
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

  return <SearchInput placeholder="搜尋 Google" onKeyDown={handleKeyDown} />
}

export default Header