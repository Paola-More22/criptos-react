import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #fff;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    border: 1px solid #fff;
    border-radius: 5px;
    margin-top: 15px;
    box-shadow: 1px 1px 6px #C7C7C7;
`

const Texto = styled.p`
    font-size: 15px;
    margin-right: 3px;
    span{
        font-size: 500;
    }

`

const Precio = styled.p`
    font-size: 20px;
    margin: 5px 0;
    margin-right: 2px;
    padding-top: 10px;
    span{
        font-weight: 500;
    }
`

const Image = styled.img`
    width: 100px;
    display: block;
    margin-left: 10px;
`

const Resultado = ( {resultado} ) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Image 
                src={`https://cryptocompare.com${IMAGEURL}`} 
                alt='Imagen Cripto' >
            </Image>
            <div>
                <Precio>El precio es de: <spam>{PRICE}</spam></Precio>
                <Texto>El precio más alto del día: <spam>{HIGHDAY}</spam></Texto>
                <Texto>El precio más bajo del día: <spam>{LOWDAY}</spam></Texto>
                <Texto>Variación útimas 24 horas: <spam>{CHANGEPCT24HOUR}</spam></Texto>
                <Texto>Útima actualización: <spam>{LASTUPDATE}</spam></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado