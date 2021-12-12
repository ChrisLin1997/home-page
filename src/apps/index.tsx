import styled from 'styled-components'
import Header from './header'
import Apps from './apps'
import CryptoPrice from './crypto-price'
import Calendar from './calendar'
import Weather from './weather'
import News from './news'

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
`

const Layout = styled.div`
  padding-bottom: 48px;
  display: flex;
  justify-content: center;
`

const LeftWrap = styled.div`
  margin-right: 24px;
  width: 768px;
  border-right: 1px solid #2f2f3d;
`

const RightWrap = styled.div`
  width: 424px;
`

const App = () => {
  return (
    <Wrapper className="app">
      <Header />

      <Layout>
        <LeftWrap>
          <Apps />
          <CryptoPrice />        
        </LeftWrap>

        <RightWrap>
          <Calendar />
          <Weather />
          <News />
        </RightWrap>
      </Layout>
    </Wrapper>
  )
}

export default App
