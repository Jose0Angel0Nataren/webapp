
import '../assets/styles/header.css'

function Header(){
    return(
        <header className='head'>
            <div className='navleft'>
                <img src="/img/logo.png" alt="" className='logo'/>
                    <button className='navoptions'>Inicio</button>
                    <button className='navoptions'>Recomendados</button>
                    <button className='navoptions'>Nuevos</button>
            </div>
            <div className='navright'>
                <button className='navoptions button'>Ingreso</button>
                <button className='navoptions button'>Registro</button>
                <input className='navoptions search' type="text" placeholder="Buscar libro..." name="bookS"></input>
            </div>
        </header>
    );

}

export default Header;