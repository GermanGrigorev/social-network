import React from 'react';
import './Post.css'

const Post = (props) => {
    return (
        <div className='post'>
            <img src='https://yt3.ggpht.com/a/AGF-l78D8sRdVCMJf7gg7Is2apd6wxydsVsoRJ6zPQ=s900-c-k-c0xffffffff-no-rj-mo'/>
            {props.message}
            <div>
                {props.likeCount} likes
            </div>
        </div>
    );
}

export default Post
