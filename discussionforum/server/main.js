require('dotenv').config();
import { Meteor } from 'meteor/meteor';
import { ChatCollection } from '/imports/api/ChatCollection';
import { Accounts } from 'meteor/accounts-base';

function makeUser({ email, password }){
  Accounts.createUser({
    username:email,
    email,
    password,
  });
}

function sendMessage({ id, email, message, user }) {
  ChatCollection.insert({ id, email, message, createdAt: new Date(), userId:user._id });
}

Meteor.startup(() => {
  // If the Links collection is empty, add some data.
  if(!Accounts.findUserByEmail(String(process.env.ADMINEMAIL))){
    makeUser({
      email: String(process.env.ADMINEMAIL),
      password: String(process.env.ADMINPASSWORD),
    });
  }
  
  const user = Accounts.findUserByEmail(String(process.env.ADMINEMAIL));
  
  if (ChatCollection.find().count() === 0) {
    // sendMessage({
    //   id: 0,
    //   email: user.emails[0].address,
    //   message: 'Hello World!',
    //   user
    // });
  }
});