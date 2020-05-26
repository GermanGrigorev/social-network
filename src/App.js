import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import {Route, withRouter} from 'react-router-dom';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import FriendsContainer from "./components/Friends/FriendsContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/appReducer";
import Preloader from "./components/common/Preloader";
import withBrowserRouter from "./hocs/withBrowserRouter";
import withStoreProvider from "./hocs/withStoreProvider";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.isInitialized) {
            return <Preloader />
        }
        return (
            <div className='app-wrapper'>
                <div className='app-wrapper__header'><HeaderContainer/></div>
                <div className='app-wrapper__nav'><NavBar/></div>
                <div className='app-wrapper__content'>
                    <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                    <Route path='/news' render={() => <News/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/friends' render={() => <FriendsContainer/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/login' render={() => <Login/>}/>
                    <Route exact path='/' render={() => <Login/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isInitialized: state.app.isInitialized,
    }
};

export default compose(
    withBrowserRouter,
    withStoreProvider,
    withRouter,
    connect(mapStateToProps, {initializeApp}),
)(App);
