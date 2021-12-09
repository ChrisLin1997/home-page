import { useEffect, useState } from 'react'
import styled from 'styled-components'

const PriceCard = styled.div`
  padding: 0 12px;
  width: 760px;
  height: fit-content;
  background-color: #1e2126;
  border-radius: 8px;
`

const CryptoItem = styled.div`
  padding: 12px;
  display: flex;
  align-items: center;
  height: 60px;
  font-weight: bold;

  &:not(:last-child){
    border-bottom: 1px solid white;
  }

  & > *:nth-child(1) {
    width: 10%;
  }
  & > *:nth-child(2) {
    width: 30%;
    text-align: right;
  }
  & > *:nth-child(3) {
    width: 30%;
    text-align: right;
  }
  & > *:nth-child(4) {
    width: 30%;
    text-align: right;
  }
`

const cryptoList = ['BTC', 'ETH', 'BNB', 'SOL', 'LUNA', 'ALGO', 'ATOM']

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
          change: `${isUp ? '+' : '-'}${(data[key].close - data[key].open).toFixed(2)}`,
          percent: `${isUp ? '+' : '-'}${((data[key].close - data[key].open) / data[key].open * 100).toFixed(2)} %`,
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
      { cryptoList.map(item => (
        <CryptoItem key={item} style={{ color: 'white' }}>
          <span>{ item }</span> &nbsp;
          <span style={{ color: cryptoMap[item]?.isUp === false ? '#f6465d' : '#0caa6e' }}>{ cryptoMap[item]?.price || '--' }</span> &nbsp;
          <span style={{ color: cryptoMap[item]?.isUp === false ? '#f6465d' : '#0caa6e' }}>{ cryptoMap[item]?.change || '--' }</span> &nbsp;
          <span style={{ color: cryptoMap[item]?.isUp === false ? '#f6465d' : '#0caa6e' }}>{ cryptoMap[item]?.percent || '--' }</span> &nbsp;
        </CryptoItem>
      ))}
    </PriceCard>
  )
}

export default CryptoPrice