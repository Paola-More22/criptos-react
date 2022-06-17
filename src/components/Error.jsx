import styled from '@emotion/styled'

const Texto = styled.p`
    background-color: #fff;
    color: #b7322c;
    padding: 15px;
    font-size: 14px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    border-radius: 5px;
    border-color: #b7322c;
    border-style: solid;
    border-width: 1px;
    text-align: center;
`

const Error = ( {children} ) => {
    return (
        <Texto>
            {children}
        </Texto>
    )
}

export default Error