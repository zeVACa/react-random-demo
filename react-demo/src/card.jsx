const Card = (props) => {
  console.log(props.image);
  return (
    <li className="col-lg-3">
      <img className="card-img-top" src={props.imgUrl} alt={props.title} />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </li>
  );
};

export default Card;
