function Profile(props) {
    let longName = "Don " + props.name;
    return <h1>Name: {longName} {props.lastname}
        {props.children}
        </h1>
}

export default Profile;