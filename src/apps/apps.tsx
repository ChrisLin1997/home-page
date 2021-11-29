import styled from 'styled-components'
import Binance from '../images/binance.png'

const Main = styled.main`
  width: 1080px;
`

const Title = styled.div`
  margin: 24px 0;
  font-size: 36px;
  font-weight: 700;
  color: white;
`

const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
`

const AppItem = styled.article`
  width: 112px;
  height: 112px;

  & > div {
    text-align: center;
  }

  & > img {

  }
`



const Apps = () => {
  const cryptoList = [
    { label: 'Binance', icon: Binance }
  ]


  return (
    <Main>
      <Title>加密貨幣</Title>
      <Section>
        { cryptoList.map(item => {
          return (
            <AppItem>
              <img src={item.icon} />
              <div>{item.label}</div>
            </AppItem>
          )
        }) }
      </Section>


      <Title>軟體工程師</Title>
      <Section>

      </Section>

    </Main>
  )
}

export default Apps