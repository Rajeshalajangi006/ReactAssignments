const Division =(props) =>{
      const   {className,buttonText}=props;
         return(
                <button className={`button ${className}`}> {buttonText} </button>
         )
}

const element=(
        <div className="container">
          <div className="content">
                <h1 className="first">Social Buttons</h1>
                    <div className="mainpage"> 
                       <Division className="like" buttonText="Like"/>
                       <Division className="comment" buttonText="Comment"/>
                       <Division className="share" buttonText="Share"/>
                    </div>
           </div>
        </div>
);

let rootele=document.getElementById("root");
ReactDOM.render(element,rootele);