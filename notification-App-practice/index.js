const Notification = props => {
    const {className,text}= props;
    return(
      <div className={className}>{text}</div>
    )
}

const element = (
      <div className="container">
          <h1 className="heading">Notification</h1>
          <div className="boxes">
              <Notification className="box1" text="Information Message"/>
              <Notification className="box2" text="Success Message"/>
              <Notification className="box3" text="Warning Message"/>
              <Notification className="box4" text="Error Message"/>
          </div>
      </div>
 )

ReactDOM.render(element, document.getElementById('root'))
