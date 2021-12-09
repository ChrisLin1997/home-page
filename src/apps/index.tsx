import styled from 'styled-components'
import wrapperBG from '../images/wrapper.jpeg'
import Header from './header'
import Apps from './apps'
import News from './news'
import CryptoPrice from './crypto-price'

const Wrapper = styled.div`
  padding: 24px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${wrapperBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`

const Content = styled.div`
  margin: auto;
  width: 1160px;
  display: flex;
  justify-content: space-between;
`

const App = () => {
  return (
    <Wrapper className="app">
      <Header />
      <Apps />

      <Content>
        <CryptoPrice />

        <News />
      </Content>
    </Wrapper>
  )
}

export default App
