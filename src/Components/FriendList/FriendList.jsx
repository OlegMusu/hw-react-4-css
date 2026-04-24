import './FriendList.css'

function FriendList ({id, avatar, name, isOnline}) {
    return (
        <>
            <li className='friend-list-item' key={id}>
                <img className='friend-avatar' src={avatar} alt={name} width={150}/>
                <h2 style={{color: 'black', "fontSize": 45}}>{name}</h2>
                <p className={`friend-status friend-status-isOnline-${isOnline}`}>•{isOnline}</p>
            </li>
        </>
    )
}

export default FriendList