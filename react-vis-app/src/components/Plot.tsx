import styled from 'styled-components'
import {
    MarkSeries,
    XYPlot,
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
}
  
const Plot: React.FC<Props> = ({data, height, width}) => {
    return (
        <StyledFlexWrapper>
            <XYPlot height={height} width={width}>
                <XAxis />
                <YAxis />
                <MarkSeries data={data} />
            </XYPlot>
        </StyledFlexWrapper>

    )
}

export default Plot


  