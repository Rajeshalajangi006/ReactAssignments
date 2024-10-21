import './index.css'

const UserProfile = (props) => {
    const {userDetails,Deleteuser}=props
    const {imageUrl,name,role,uniqueNo}=userDetails
  
    const onDelete=()=>{
        Deleteuser(uniqueNo);
    }

    return(
        <div className="user-card-container">
          <img className='avatar' src={imageUrl} alt="avatar" />
          <div className='user-details-container' >
            <h1 className='user-name'>{name}</h1>
            <p className='user-description'>{role}</p>
          </div>
          <button type="button" onClick={onDelete}>Delete</button>
        </div>
      );
}

export default UserProfile;
