import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        statusValue: this.props.status, //TODO почему-то при обновлении страницы инпут пустой,
        // если перезайти на вкладку(не обновлять) то инпут снова синхронизированн
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status) {
            this.setState({statusValue: this.props.status,});
        }
    }

    toggleEditMode = (flag) => {
        this.setState({
            editMode: flag,
        });
    };

    saveStatus = () => {
        this.props.changeStatus(this.state.statusValue);
        this.toggleEditMode(false);
    };

    onStatusChange = (e) => {
        this.setState({statusValue: e.currentTarget.value});
    };

    render() {
        return (
            <>
                {this.state.editMode && (
                    <div>
                        <input
                            type='text'
                            value={this.state.statusValue}
                            onChange={this.onStatusChange}
                            onBlur={this.saveStatus}
                            autoFocus
                        />
                    </div>
                )}
                {!this.state.editMode && (
                    <div onDoubleClick={() => this.toggleEditMode(true)}>
                        <span>{this.props.status  || 'How are you doing?'}</span>
                    </div>
                )}
            </>
        )
    }
}

export default ProfileStatus;
