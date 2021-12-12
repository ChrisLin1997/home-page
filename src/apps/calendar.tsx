import styled from 'styled-components'
import InfiniteCalendar from 'react-infinite-calendar'
import 'react-infinite-calendar/styles.css'

const Wrap = styled.div`
  margin-bottom: 24px;
  border-radius: 16px;
  height: 310px;
  overflow: hidden;
`

const StyleInfiniteCalendar = styled(InfiniteCalendar)`
  & .Cal__Day__root.Cal__Day__today > span {
    color: #efb90a;
    font-weight: bold;
  }

  & .Cal__Month__rows {
    background: #474d57;
  }

  & .Cal__Month__row:first-child li {
    background-color: transparent;
  }

  * {
    box-shadow: none !important;
    color: white;
  }
`

const Calendar = () => {
  return (
    <Wrap>
      <StyleInfiniteCalendar
        width={424}
        height={330}
        rowHeight={50}
        selected={new Date()}
        locale={{
          weekStartsOn: 1,
          weekdays: [ '日', '一', '二', '三', '四', '五', '六',],
        }}
        displayOptions={{
          showHeader: false,
          shouldHeaderAnimate: false,
        }}

        theme={{
          accentColor: '#efb90a',
          floatingNav: {
            background: '#181a1f',
            chevron: 'transparent',
            color: '#FFF',
          },
          selectionColor: '#efb90a',
          textColor: {
            active: '#FFF',
            default: '#FFF',
          },
          todayColor: '#efb90a',
          weekdayColor: '#efb90a',
        }}
      />
    </Wrap>
  )
}

export default Calendar