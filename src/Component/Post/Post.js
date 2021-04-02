import React from 'react';
import { useHistory } from 'react-router';










const styles = {
    width: "40%",
    height: "300px",
    color: "goldenRod",
    backgroundColor: "black",
    marginLeft: "30%",
    padding: "50px",
    marginBottom: "50px",
}




const Post = (props) => {
    const{id, title, body} = props.post
    const history = useHistory()
    const showDetails= id =>{
        const url = `/post/${id}`;
        history.push(url)
    }
    return (
        <div>
            <div style={styles}>

                <h2>{title}</h2>
                <h>{id}</h>

                <p>{body}</p>
                <button onClick={()=>showDetails(id)}>show</button>

            </div>
        </div>
    );
};

export default Post;