import styled from 'styled-components'
import Binance from '../images/binance.png'
import FTX from '../images/ftx.png'
import ByBit from '../images/bybit.png'
import MAX from '../images/max.png'
import TradingView from '../images/tradingview.png'
import CoinMarketCap from '../images/coinmarketcap.png'
import Francium from '../images/francium.png'
import Raydium from '../images/raydium.png'
import Solanium from '../images/solanium.png'
import Trello from '../images/trello.png'
import Github from '../images/github.png'
import Hackmd from '../images/hackmd.png'
import Leetcode from '../images/leetcode.png'
import Juejin from '../images/juejin.png'
import Youtube from '../images/youtube.png'
import Facebook from '../images/facebook.png'
import Linkedin from '../images/linkedin.png'
import Twitch from '../images/twitch.png'
import Medium from '../images/medium.png'

const Main = styled.main`
  margin: 0 auto 64px;
  width: 1160px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Section = styled.section`
  margin-bottom: 8px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`

const AppItem = styled.a`
  margin: 0 12px;
  padding: 12px;
  width: 92px;
  height: 82px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  user-select: none;
  cursor: pointer;
  border-radius: 4px;
  transition: all .2s;

  &:hover {
    background-color: #cccccc44;
  }

  & > div {
    text-align: center;
    color: #D9E4E6;
    font-size: 14px;
  }

  & > img {
    width: 28px;
    height: 28px;
  }
`



const Apps = () => {
  const exchangeList = [
    { label: 'Binance', icon: Binance, url: 'https://www.binance.com/zh-TW' },
    { label: 'FTX', icon: FTX, url: 'https://ftx.com/markets' },
    { label: 'ByBit', icon: ByBit, url: 'https://www.bybit.com/zh-TW/' },
    { label: 'MAX', icon: MAX, url: 'https://max.maicoin.com/' },
    { label: 'MarketCap', icon: CoinMarketCap, url: 'https://coinmarketcap.com/zh-tw/' },
    { label: 'Francium', icon: Francium, url: 'https://francium.io/app/mypage' },
    { label: 'Raydium', icon: Raydium, url: 'https://raydium.io/swap/' },
    { label: 'Solanium', icon: Solanium, url: 'https://www.solanium.io/' },
    { label: 'TradingView', icon: TradingView, url: 'https://tw.tradingview.com/' },
  ]

  const engineerList = [
    { label: 'Youtube', icon: Youtube, url: 'https://www.youtube.com/' },
    { label: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/' },
    { label: 'Linkedin', icon: Linkedin, url: 'https://www.linkedin.com/feed/' },
    { label: 'Twitch', icon: Twitch, url: 'https://www.twitch.tv/directory/all' },
    { label: 'Medium', icon: Medium, url: 'https://medium.com/' },
    { label: 'Trello', icon: Trello, url: 'https://trello.com/b/2ebe3mcu/chris-lin-%E5%BE%85%E8%BE%A6%E4%BA%8B%E9%A0%85' },
    { label: 'GitHub', icon: Github, url: 'https://github.com/ChrisLin1997' },
    { label: 'HackMD', icon: Hackmd, url: 'https://hackmd.io/?nav=overview' },
    { label: 'LeetCode', icon: Leetcode, url: 'https://leetcode.com/problemset/all/' },
    { label: '掘金', icon: Juejin, url: 'https://juejin.cn/recommended' },
  ]

  return (
    <Main>
      <Section>
        { exchangeList.map(item => {
          return (
            <AppItem key={item.label} href={item.url}>
              <img src={item.icon} />
              <div>{item.label}</div>
            </AppItem>
          )
        }) }
      </Section>

      <Section>
        { engineerList.map(item => {
          return (
            <AppItem key={item.label} href={item.url}>
              <img src={item.icon} />
              <div>{item.label}</div>
            </AppItem>
          )
        }) }
      </Section>
    </Main>
  )
}

export default Apps