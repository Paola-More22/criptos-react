import { useState, useEffect } from 'react'
import React from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
    border: 1px solid #fff;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    background-color: transparent;
    text-transform: uppercase;
    font-size: 1rem;
    transform: background-color 0.3s ease;
    margin-top: 30px;
    &:hover {
        background-color: rgba(255,255,255,0.2);
        cursor: pointer;
    }
    `

const Formulario = ({ setMonedas }) => {

    const [ criptos, setCriptos ] = useState([])
    const [ error, setError ] = useState(false)
    const [ tlm, setTlm ] = useState(false)

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu Moneda', monedas)
    const [ criptomoneda, SelectCriptoMoneda ] = useSelectMonedas('Elige tu CriptoMoneda', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD`
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map( cripto => {
                const objetoCriptos = {
                    id: cripto.CoinInfo.Name,
                    name: cripto.CoinInfo.FullName
                }
                return objetoCriptos
            })
            setCriptos(arrayCriptos)
        }
        consultarAPI();
    }, [])

    const handleSumit = e => {
        e.preventDefault()

        if([moneda, criptomoneda].includes('')){
            setError(true)
            return
        }
        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Todos los campos son obligatorios</Error>}

            <form
                onSubmit={handleSumit}
            >
                <SelectMonedas/>
                <SelectCriptoMoneda/>

                <InputSubmit
                    type='submit'
                    value='Cotizar'
                />
            </form>
        </>
    )
}

export default Formulario