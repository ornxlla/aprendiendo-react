import { useState } from "react";

export function TwitterFollowCard({children, userName, initialIsFollowing }){
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)


    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button' 
    const imageSrc = `https://unavatar.io/${userName}`

    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    const addAt = (username) => `@${username}`  
    return (
        <article className='tw-followCard'>
        <header className='tw-followCard-header'>
            <img  className='tw-followCard-avatar' src={imageSrc} />
            <div className='tw-followCard-info'>
                <strong>{children}</strong>
                <span className='tw-followCard-infoUsername'>@{userName}</span>
            </div> 
        </header>
        <aside>
            <button className={buttonClassName} onClick={handleClick}>
                <span className='tw-followCard-text'>{text}</span>
                <span className='tw-followCard-stopFollow'>Dejar de seguir</span>
            </button>
        </aside>
        </article>
    )
}