import React from 'react'
import './styleMain.css'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export function Main() {
  return (
    <main>
    <section className='sectionIntro'>
        <div>
            <h2>Los mejores celulares, al mejor precio.</h2>
            <h3>Solo en nuestro lugar.</h3>
        </div>
    </section>
    
    <div className='sectionTitle'>
      <h1>Nuestras Marcas</h1>
    </div>
    
    <section className='sectionMarcas'>
        <div className='container'>
          <img src="/image/apple.png" alt="" />
          <h2>Apple</h2>
        </div>

        <div className='container'>
          <img src="/image/samsung.png" alt="" />
          <h2>Samsung</h2>
        </div>

        <div className='container'>
          <img src="/image/huawei.png" alt="" />
          <h2>Huawei</h2>
        </div>

        <div className='container'>
          <img src="/image/xiaomi.png" alt="" />
          <h2>Xiaomi</h2>
        </div>
    </section>

    <div className='sectionButton'>
      <Link className='linkMarcas' to="/detalles"><button>Ver Marcas</button></Link>
    </div>
    
    <div className='sectionTitle'>
      <h1>Nuestros Modelos</h1>
    </div>

    <section className='sectionModelos'>
      <div className='cardContainer'>
        <h3>Iphone 15</h3>
        <img src="/image/iphone15.jpg" alt="" />
        <h4>$800.000</h4>
        <button onClick={confirmarCompra}><h5>Comprar</h5></button>
      </div>

      <div className='cardContainer'>
        <h3>Iphone 13</h3>
        <img src="/image/iphone13.jpg" alt="" />
        <h4>$500.000</h4>
        <button onClick={confirmarCompra}><h5>Comprar</h5></button>
      </div>

      <div className='cardContainer'>
        <h3>Iphone 11</h3>
        <img src="/image/iphone11.jpg" alt="" />
        <h4>$350.000</h4>
        <button onClick={confirmarCompra}><h5>Comprar</h5></button>
      </div>

      <div className='cardContainer'>
        <h3>Samsung Galaxy S23 Ultra</h3>
        <img src="/image/samsungS23.jpg" alt="" />
        <h4>$1.000.000</h4>
        <button onClick={confirmarCompra}><h5>Comprar</h5></button>
      </div>

      <div className='cardContainer'>
        <h3>Galaxy Z Fold</h3>
        <img src="/image/galaxyZfold.jpg" alt="" />
        <h4>$1.200.000</h4>
        <button onClick={confirmarCompra}><h5>Comprar</h5></button>
      </div>

      <div className='cardContainer'>
        <h3>Xiaomi 13 Ultra</h3>
        <img src="/image/xiaomi.webp" alt="" />
        <h4>$600.000</h4>
        <button onClick={confirmarCompra}><h5>Comprar</h5></button>
      </div>

      <div className='cardContainer'>
        <h3>Huawei P60 Pro</h3>
        <img src="/image/huawei.webp" alt="" />
        <h4>$560.000</h4>
        <button onClick={confirmarCompra}><h5>Comprar</h5></button>
      </div>

      <div className='cardContainer'>
        <h3>Google Pixel 8 Pro</h3>
        <img src="/image/google.jpeg" alt="" />
        <h4>$800.000</h4>
        <button onClick={confirmarCompra}><h5>Comprar</h5></button>
      </div>
    </section>


    </main>
  )

  function confirmarCompra () {

    Swal.fire({
      title: "Deseas confirmar la compra?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Confirmar",
      denyButtonText: `Cancelar`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Compra Confirmada!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Compra Cancelada!", "", "info");
      }
    });

  }
}