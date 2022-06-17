import { useState, useEffect} from 'react'
import styled from '@emotion/styled'
import ImagenCripto from './img/2454244.png'
import Formulario from './components/Formulario'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: 15px;
  @media(min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 480px;
  width: 100%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #fff;
  text-align: center;
  font-weight: 700;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;
  &::after {
    content: '';
    width: 130px;
    height: 3px;
    background-color: white;
    display: block;
    margin: 10px auto 0 auto;
  }
  `

function App() {

  const [ monedas, setMonedas ] = useState({})

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {

      const cotizarCripto = async () => {
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        console.log(resultado)
        
      }
      cotizarCripto()
    }
  }, [monedas])

  return (
    <Contenedor>

      <Imagen
      src={ImagenCripto}
      alt='Imagen Criptomonedas'
      />

      <div>
        <Heading>Cotiza CriptoMonedas al Instante</Heading>
        <Formulario
          setMonedas={setMonedas}
        />
      </div>

    </Contenedor>
  )
}

export default App
