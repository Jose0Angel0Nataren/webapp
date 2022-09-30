

function Card(props){

    return(
        <div className="containerLibrary-card">
            {props.title}
            {props.img}
            {props.author}
            {props.yearpub}
            {props.description}
        </div>
    );
}

export default Card;