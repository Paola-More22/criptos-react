import { useState, useEffect} from 'react'
import styled from '@emotion/styled'
import Formulario from './components/Formulario'
import Resultado from './components/Resultado'
import Spinner from './components/Spinner'
import ImagenCripto from './img/2454244.png'

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 100%;
  padding: 15px;
  @media(min-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin: 0 auto;
    width: 80%;
    padding: 15px;
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
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: 30px;
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
  const [ resultado, setResultado ] = useState({})
  const [ cargando, setCargando ] = useState(false)

  useEffect(() => {
    if(Object.keys(monedas).length > 0) {

      const cotizarCripto = async () => {
        setCargando(true)
        setResultado({})
        const {moneda, criptomoneda} = monedas
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptomoneda}&tsyms=${moneda}`

        const respuesta = await fetch(url)
        const resultado = await respuesta.json()

        setResultado(resultado.DISPLAY[criptomoneda][moneda])

        setCargando(false)
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
        {cargando && <Spinner />}
        {resultado.PRICE && <Resultado resultado={resultado} />}
      </div>

    </Contenedor>
  )
}

export default App
