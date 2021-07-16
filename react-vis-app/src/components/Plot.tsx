import styled from 'styled-components'
import {
    MarkSeries,
    VerticalBarSeries,
    XYPlot,
    LineSeries,
    YAxis,
    XAxis
  } from "react-vis";


const StyledFlexWrapper = styled.div`
display:flex;
justify-content: center;
`

interface Props {
    data: any,
    height: number,
    width: number,
    barwidth: number,
}
  
const Plot: React.FC<Props> = ({data, height, width, barwidth}) => {
    return (
        
            <StyledFlexWrapper>
                <XYPlot height={height} width={width}>
                    <XAxis />
                    <YAxis />
                    <VerticalBarSeries data={data} barWidth = {barwidth}/>
                </XYPlot>

                <XYPlot height={height} width={width}>
            
                    <XAxis />
                    <YAxis />
                    <LineSeries data={data} />
                
                </XYPlot>

                <XYPlot height={height} width={width}>
                    <XAxis />
                    <YAxis />
                    <MarkSeries data={data} />
                </XYPlot>
            </StyledFlexWrapper>

    )
}

export default Plot


  