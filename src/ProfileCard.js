export default function ProfileCard({title, username, image}) {
    // const {title, username} = props
    return (
        <div>
        <img src={image} alt="pda-img"/>
        <div className="title">Title is {title}</div>
        <div className="handle">Twitter handle is {username}</div>
        </div>
    )
}