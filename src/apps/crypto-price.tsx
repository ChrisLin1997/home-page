import { useEffect, useState } from 'react'
import styled from 'styled-components'
import btc from '../images/btc.png'
import eth from '../images/eth.png'
import bnb from '../images/bnb.png'
import sol from '../images/sol.png'
import luna from '../images/luna.png'
import algo from '../images/algo.png'
import atom from '../images/atom.png'

const PriceCard = styled.div`
  padding: 12px;
  height: fit-content;
`

const TitleWrap = styled.div`
  margin-bottom: 12px;
  padding-right: 24px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

const Title = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: white;
`

const More = styled.span`
  color: #848E9C;
  font-size: 14px;
`

const CryptoItem = styled.div`
  padding: 12px;
  display: flex;
  height: 60px;
  align-items: center;
  font-weight: bold;
  border-radius: 8px;

  &:hover {
    background-color: #2b3139;
  }

  & > *:nth-child(1) {
    width: 5%;
  }
  & > *:nth-child(2) {
    width: 10%;
    text-align: center;
  }
  & > *:nth-child(3) {
    width: 30%;
    text-align: right;
  }
  & > *:nth-child(4) {
    width: 27.5%;
    text-align: right;
  }
  & > *:nth-child(5) {
    width: 27.5%;
    text-align: right;
  }
`

const cryptoList = ['BTC', 'ETH', 'BNB', 'SOL', 'LUNA', 'ALGO', 'ATOM']
const imgList = [btc, eth, bnb, sol, luna, algo, atom]

let cryptoPriceMap = {}
const webSocket = new WebSocket('wss://chris-binance.herokuapp.com')

  webSocket.onmessage = event => {
    const data = JSON.parse(event.data)

    const result = { ...cryptoPriceMap } as any
    cryptoList.forEach(item => {
      const key = item + 'USDT'
      
      if (data[key]) {
        const isUp = data[key].close >= data[key].open

        result[item] = {
          name: item,
          price: `$ ${Number(data[key].close).toFixed(2)}`,
          change: `${isUp ? '+' : ''}${(data[key].close - data[key].open).toFixed(2)}`,
          percent: `${isUp ? '+' : ''}${((data[key].close - data[key].open) / data[key].open * 100).toFixed(2)} %`,
          isUp: isUp,
        }
      }
    })
    cryptoPriceMap = result
  }

const CryptoPrice = () => {
  const [cryptoMap, setCryptoMap] = useState<any>({})

  useEffect(() => {
    const timer = setInterval(() => {
      setCryptoMap(cryptoPriceMap)
    }, 1500)
    return () => clearInterval(timer)
  }, [])

  return (
    <PriceCard>

      <TitleWrap>
        <Title>Market</Title>
        <More>more</More>
      </TitleWrap>
      { cryptoList.map((item, index) => (
        <CryptoItem key={item} style={{ color: 'white' }}>
          <img src={imgList[index]}  />
          <span>{ item }</span> &nbsp;
          <span>{ cryptoMap[item]?.price || '--' }</span> &nbsp;
          <span style={{ color: cryptoMap[item]?.isUp === false ? '#f6465d' : '#0caa6e' }}>{ cryptoMap[item]?.change || '--' }</span> &nbsp;
          <span style={{ color: cryptoMap[item]?.isUp === false ? '#f6465d' : '#0caa6e' }}>{ cryptoMap[item]?.percent || '--' }</span> &nbsp;
        </CryptoItem>
      ))}
    </PriceCard>
  )
}

export default CryptoPrice