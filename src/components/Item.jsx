import "./Item.css";

function Item(props) {
  return (
    <span className="nirma">
      {props.name} ID:{props.id} |
    </span>
  );
}

export default Item;
