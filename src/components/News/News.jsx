import React from 'react';
import './News.css'
import {compose} from "redux";
import withAuthRedirect from "../../hocs/withAuthRedirect";

const News = () => {
    return (
        <div className='News_padding'>
            <h1>У Маши день рождения!!!!!!</h1>
            <img width='400px' src='https://i.pinimg.com/originals/d0/40/d3/d040d35c4329b603f887b7344af88c64.jpg'/>
        </div>
    );
};

export default compose(
    withAuthRedirect,
)(News)
