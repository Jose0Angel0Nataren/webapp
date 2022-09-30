import Card from "./Card";
import "../assets/styles/library.css";

function Library(){
    const book = [
      {
        title:    <div className="titles">La fuerza de Sheccid</div>,
        img:      <div className="imgsbody"><img  src="/img/sheccid.jpg" alt="" /></div> ,
        author:   <div className="authors">Carlos Cuauhtémoc Sánchez</div>,
        yearpub:  <div className="years">1996</div>,

        description:
        <div className="descriptions">
          <b>Lugar: </b>Mexico<br />
          <b>Generos: </b>Novela rosa, Novela de aprendizaje, Ficción didáctica <br />
          <b>Traduccion: </b>Español-Español<br />
          <b>Paginas: </b>100<br />
          <b>Editorial: </b>Ediciones Selectas Diamante<br />
          <b>Versiones alternas: </b>Los ojos de mi princesa 2004<br />
        </div>
      },
      {
        title:    <div className="titles">Un país posible</div>,
        img:      <div className="imgsbody"><img  src="/img/unPaisPosible.jpg" alt="" /></div> ,
        author:   <div className="authors">Julio Madrazo</div>,
        yearpub:  <div className="years">2022</div>,

        description:<div className="descriptions">
          <b>Lugar: </b>Mexico<br />
          <b>Generos: </b>Ciencias humanas y sociales, Ciencias políticas<br />
          <b>Traduccion: </b>Español-Español<br />
          <b>Paginas: </b>248<br />
          <b>Editorial: </b>Ariel Mexico<br />
        </div>
      },
      {
        title:    <div className="titles">Wonder / La leccion de August</div>,
        img:      <div className="imgsbody"><img  src="/img/wonder.jpg" alt="" /></div> ,
        author:   <div className="authors">Raquel Jaramillo Palacio</div>,
        yearpub:  <div className="years">1998</div>,

        description:<div className="descriptions">
          <b>Lugar: </b>Estados Unidos<br />
          <b>Generos: </b>Cine de drama y ficción <br />
          <b>Traduccion: </b>Ingles-Español<br />
          <b>Paginas: </b>416<br />
          <b>Editorial: </b>Alfred A. Knopf<br />
          <b>Versiones alternas: </b><br />
        </div>
      },
      {
        title:    <div className="titles">Die Verwandlung / La Metamorfosis</div>,
        img:      <div className="imgsbody"><img  src="/img/laMetamorfosis.jpg" alt="" /></div> ,
        author:   <div className="authors">Franz Kafka</div>,
        yearpub:  <div className="years">1916</div>,

        description:<div className="descriptions">
          <b>Lugar: </b>Imperio austrohúngaro<br />
          <b>Traduccion: </b>Aleman-Español<br />
          <b>Paginas: </b>100<br />
          <b>Editorial: </b>Kurt Wolff Verlag, Leipzig<br />
          <b>Versiones alternas: </b><br />
        </div>
      }
    ];

    return(
        <div className="containerLibrary">
          <h1 className="containerLibrary-header">Libros Disponibles</h1>
          <div className="containerLibrary-main">
            
            {book.map((book) => {
              return <Card 
              title   = {book.title} 
              img     = {book.img}
              author  = {book.author} 
              yearpub = {book.yearpub}
              
              description = {book.description}
              />;
            })}
          </div>
        </div>
    );
}

export default Library;
