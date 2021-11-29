import styled from 'styled-components'
import wrapperBG from '../images/wrapper.jpeg'
import GoogleSearch from './google-search'

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
      <GoogleSearch />

    </Wrapper>
  )
}

export default App
