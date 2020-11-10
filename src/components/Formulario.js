import React from 'react';
import styled from '@emotion/styled';
//importar nuestro propio hook
import useMoneda from '../hooks/useMoneda';
import useCriptomoneda from '../hooks/useCriptomoneda';
const Boton = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;
const Formulario = () => {

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar United States' },
        { codigo: 'BOB', nombre: 'Peso Boliviano' },
        { codigo: 'ARS', nombre: 'Peso Argentino' }
    ];
    //utilizar useMoneda
    const [moneda, SelectMoneda] = useMoneda('Elige tu Moneda', '', MONEDAS);
    //utilizar useCriptomoneda
    const [criptomoneda, SelectCripto] = useMoneda('Elige tu Moneda', '');
    return (
        <form>
            <SelectMoneda />
            <SelectCripto />
            <Boton
                type="submit"
                value="Calcular"
            />
        </form>
    );
}

export default Formulario;