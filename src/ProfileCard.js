import './css/ProfileCard.css'

function ProfileCard({image,title, handle, desc}){

    return (
    <div className="profile-card">
        <div className="image-holder">
            <img src={image} alt={title}/>
        </div>
        <div className='card-title'>{title}</div>
        <div className='handle'>{handle}</div>
        <div className='desc'>{desc}</div>
    </div>
    )
}

export default ProfileCard