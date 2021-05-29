const product = (props) => {
  return(<div>
    <p>{props.title}</p>
    {/* <img src={props.imgUrl}/> */}
    <button onClick={props.added}>Add to Shopping Card</button>
    {/* <button onClick={props.deleted}>remove product</button>
    <button onClick={props.updated}>update product</button> */}
    </div>)
};

export default product;
