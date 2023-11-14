import React, { useEffect, useState } from 'react'
import './dolarStyle.css'

export const Dolar = () => {

  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://dolarapi.com/v1/dolares/blue")
      .then((response) => response.json())
      .then((data) => {
        setData({
          compra: data.compra,
          venta: data.venta,
          fechaActualizacion: data.fechaActualizacion
        })

      });
  }, [])


  return (

    <section className='sectionDolar'>
        <h1>Valor del Dolar en tiempo real</h1>
        
        {
          data ? (
        <div className='containerDolar'>
            <h3>Valor de Compra: ${data.compra}</h3>
            <h3>Valor de Venta: ${data.venta}</h3>
            <h3>Fecha Actualización: {data.fechaActualizacion}</h3>
        </div>
          ) :(
            <p>Cargando...</p>
          )
        }
    </section>

  )


}