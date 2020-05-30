import React from "react";

const AboutMe = (props) => {
    return (
        <div>
            <div>{props.fullName}</div>
            <hr />
            <div>{props.aboutMe}</div>
            <div>
                Looking for a job: {props.lookingForAJob ? 'yes' : 'no'}
            </div>
            <div>{props.lookingForAJobDescription}</div>
            <div>
                {Object.keys(props.contacts).map((name, id) => {
                    return (
                        <Contact key={id} contactName={name} contactValue={props.contacts[name]}/>
                    )
                })}
            </div>
        </div>
    )
};

const Contact = (props) => {
    return (
        <div>
            {props.contactName}: {props.contactValue}
        </div>
    )
};

export default AboutMe;
