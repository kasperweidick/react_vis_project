import styled from 'styled-components'

interface Props {
    title: string
}

const StyledHeader = styled.header`
box-sizing: border-box;
width: 100%;
display: flex;
justify-content: center;
align-items: baseline;
padding: 1em;
margin-bottom: 2em;
background-color: rgb(202, 180, 180);
color: #fff;
`

const Header: React.FC<Props> = ({title}) => {
    return (
        <StyledHeader>
            <h1>{title} app</h1>    
        </StyledHeader>
       )
}

export default Header
