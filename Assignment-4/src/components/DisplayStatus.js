function DisplayStatus({type, message}){
    return (
        <div className= {`DisplayStatus ${type}`}>
            <p> {type}: {message} </p>
        </div>
    )
}

export default DisplayStatus