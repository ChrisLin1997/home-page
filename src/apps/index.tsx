import styled from 'styled-components'
import wrapperBG from '../images/wrapper.jpeg'
import Header from './header'
import Apps from './apps'
import News from './news'

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

const App = () => {
  return (
    <Wrapper className="app">
      <Header />
      <Apps />

      <News />
    </Wrapper>
  )
}

export default App
