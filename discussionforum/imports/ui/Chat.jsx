import React, { useState } from 'react';
import { Message } from './Message.jsx';
import { ChatCollection } from '../api/ChatCollection';
import { useTracker } from 'meteor/react-meteor-data';

export const Chat = ({ user }) => {
  const [text, setText] = useState('');
  var chatStream = useTracker(() => ChatCollection.find({}).fetch());
  var lengthStream = Number(chatStream.length);

  const changeText = e =>{
    setText(e.target.value);
  }

  const sendMessage = () => {
    var update = { id:lengthStream, email:user.emails[0].address, message:text, createdAt: new Date(), userId: user._id };
    if(!text) return;
    ChatCollection.insert(update);
    this.chatbar.value = ""; 
    setText('');
    var chatStream = useTracker(() => ChatCollection.find({}).fetch());
    lengthStream = Number(chatStream.length);
  };

  return (
    <div>
      <br></br>
      <div className="box">
        <h2>Chat </h2>
        <div className="enbox">
          <input onChange={ changeText } type="text" name="chatbar" id="chatbar" className="form-control" placeholder="Type text here..."/>
        </div>
        <div className="btn-enbox">
          <button className="btn btn-primary" onClick={ sendMessage }>Send</button>
        </div>
      </div>
      <hr></hr>
      <br></br>
      <br></br>
      <h2>Feed</h2>
      <br></br>
      <div>
        { chatStream.map( i => 
          {
            var packet = { email: i.email, message: i.message }
            return(
              <Message key={ i.id } chat={ packet }/>
            );
          }
        )}
      </div>
    </div>
  );
};
