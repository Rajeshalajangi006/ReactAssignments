import  './index.css';

const CardItem = (props) =>{
    const{key,details} =props;
    const {title,description,imgUrl,className}=details;
    console.log(key);
    return(
        <div className={`common ${className}`}>
            <div>
                <h2> {title}</h2>
                <p>{description}</p>
            </div>
            <img src={imgUrl}  className="image" alt="mistake"/>
        </div>
    )
}

export default CardItem;
