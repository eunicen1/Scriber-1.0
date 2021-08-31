import { Meteor } from 'meteor/meteor';
import React, { Fragment } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Chat } from './Chat.jsx';
import { Footer } from './partials/Footer.jsx';
import { LogReg } from './LogReg.jsx'

export const App = () => {
  const user = useTracker(() => Meteor.user());
  const logout = () => Meteor.logout();
  const today = new Date();
  const year = today.getFullYear();
  return(
    <div className='main'>
     {user ? (
        <Fragment>
          <div className="central">
            <section className="title"><h1>Scriber</h1><div className="circle">📣</div></section>
            <br></br>
            <div className="user" onClick={ logout }><button className="logout"><h3>Logout</h3></button></div>
            <hr></hr>
            <Chat user={ user }/>
          </div>
        </Fragment>
      ):(
        <Fragment>
          <div className="bg-img">
            <div className="inner">
              <section className="title"><h1>Scriber</h1><div className="circle">📣</div></section>
              <hr></hr>
              <LogReg user={ user }/>
            </div>
          </div>
        </Fragment>
        )
      }
      <Footer date={ year }/>
    </div>
  );
};
