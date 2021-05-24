const product = (props) => {
  return(<div>
    <p>{props.title}</p>
    <img src={props.imgUrl}/>
    <button>remove product</button>
    <button>update product</button>
    </div>)
};

export default product;
