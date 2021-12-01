import styled from 'styled-components'
import wrapperBG from '../images/wrapper.jpeg'
import NavMenu from './nav-menu'
import Apps from './apps'


const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-image: url(${wrapperBG});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 100%;
`

const App = () => {
  return (
    <Wrapper className="app">
      <NavMenu />
      <Apps />
    </Wrapper>
  )
}

export default App
