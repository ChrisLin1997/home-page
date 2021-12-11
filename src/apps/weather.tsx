import styled from 'styled-components'

const Title = styled.div`
  margin-bottom: 12px;
  font-size: 24px;
  font-weight: bold;
  color: white;
`

const Weather = () => {
  return (
    <div style={{ marginBottom: '8px' }}>
      <Title>Weather</Title>
      <iframe width="424" height="246" src="https://embed.windy.com/embed2.html?lat=23.536&lon=121.023&detailLat=20.303&detailLon=121.531&width=424&height=246&zoom=6&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1" frameBorder="0"></iframe>
    </div>
  )
}

export default Weather