import React from 'react';
const styles ={
    backgroundColor:'black',
    width:'50%',
    height:'200px',
    marginLeft: '25%',
    marginBottom:'100px',
    color:'goldenRod'
}

const Comment = (props) => {
    
    const{name, email, body} = props.comment;
    console.log(name)
    return (
        <div style={styles}>
            <h1>{name}</h1>
            <h3>EMAIL : {email}</h3>
            <p>{body}</p>
        </div>
    );
};

export default Comment;