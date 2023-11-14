import React from 'react'
import './styleDetalles.css'

export function Detalles() {
    return (
        <main className='detallesContainer'>
            <section className='detalles'>
                <h1>Apple <img src="/src/assets/apple.png" alt="" /></h1>
                <h3>Apple es una reconocida empresa estadounidense de tecnología con sede en Cupertino, California. Fundada el 1 de abril de 1976 por Steve Jobs, Steve Wozniak y Ronald Wayne, Apple se ha destacado por su enfoque en la innovación y el diseño elegante en productos electrónicos de consumo. La compañía es conocida por sus dispositivos emblemáticos como el iPhone, iPad, Mac, Apple Watch y Apple TV, así como por su software, que incluye el sistema operativo iOS, macOS, watchOS y tvOS.</h3>
            </section>

            <section className='detalles'>
                <h1>Huawei <img src="/src/assets/huawei.png" alt="" /></h1>
                <h3>Huawei es una empresa china de tecnología y telecomunicaciones, fundada en 1987 por Ren Zhengfei. Inicialmente, la compañía se centró en la fabricación de equipos de conmutación telefónica y, con el tiempo, ha crecido para convertirse en uno de los mayores proveedores de infraestructura de telecomunicaciones del mundo. Huawei se ha diversificado en diferentes áreas, incluyendo la fabricación de dispositivos electrónicos de consumo, como teléfonos inteligentes, tabletas, wearables y equipos de red.</h3>
            </section>

            <section className='detalles'>
                <h1>Samsung <img src="/src/assets/samsung.png" alt="" /></h1>
                <h3>Samsung es una empresa multinacional con sede en Corea del Sur, fundada en 1938 por Lee Byung-chul. A lo largo de los años, Samsung ha crecido hasta convertirse en uno de los conglomerados empresariales más grandes y diversificados del mundo, con intereses en diversos sectores, como la electrónica de consumo, la tecnología de la información, los electrodomésticos, la construcción, la financiación y más.</h3>
            </section>

            <section className='detalles'>
                <h1>Xiaomi <img src="/src/assets/xiaomi.png" alt="" /></h1>
                <h3>Xiaomi es una empresa china de tecnología fundada en 2010 por Lei Jun. A lo largo de los años, Xiaomi ha ganado reconocimiento internacional por ofrecer una amplia gama de productos electrónicos, incluyendo teléfonos inteligentes, dispositivos portátiles, electrodomésticos inteligentes, televisores y otros dispositivos relacionados con la tecnología de consumo.</h3>
            </section>
        </main>
    )
}