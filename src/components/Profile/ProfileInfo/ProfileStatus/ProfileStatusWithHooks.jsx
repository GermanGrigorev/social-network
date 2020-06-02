import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    const saveStatus = () => {
        props.changeStatus(status);
        setEditMode(false);
    };

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    return (
        <>
            {editMode && (
                <div>
                    <input
                        type='text'
                        value={status}
                        onChange={onStatusChange}
                        onBlur={saveStatus}
                        autoFocus
                    />
                </div>
            )}
            {!editMode && (
                <div onDoubleClick={() => setEditMode(true)}>
                    <span>{props.status || 'How are you doing?'}</span>
                </div>
            )}
        </>
    )
};

export default ProfileStatusWithHooks;
