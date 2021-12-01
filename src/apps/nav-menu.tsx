import { KeyboardEvent } from 'react'
import styled from 'styled-components'

const NavContent = styled.div`
  position: absolute;
  top: 24px;
  right: 24px;
  display: flex;
  align-items: center;
`

const Link = styled.a`
  margin-right: 24px;
  color: #B7C2CB;
  font-size: 14px;

  &:hover {
    border-bottom: 1px solid #B7C2CB;
  }
`

const NavMenu = () => {
  return (
    <NavContent>
      <Link href="https://mail.google.com/">信箱</Link>
      <Link href="https://www.google.com.tw/maps">地圖</Link>
      <Link href="https://meet.google.com/osp-jkdt-gfu">Meet</Link>
      <GoogleSearch />
    </NavContent>
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

export default NavMenu