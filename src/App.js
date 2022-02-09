import React from "react";
import crypto from "crypto";
import ReactDOM from 'react-dom';


class App extends React.Component {
 render(){
    return (
    
    <div>
    <h1>the information </h1>
    <b>we have so information about you. </b>
    <b>when you refleche the page We know it. </b>
    </div>
    )
 }

 

}

export default App 

const session = require('express-session');
      const MongoDBStore = require('connect-mongodb-session')(session);
      const store = new MongoDBStore({
        uri: MONGODB_URI,
        collection: 'sessions'
      });
      app.use(
        session({
          secret: 'secret string',
          resave: false,
          saveUninitialized: false,
          store: store, /* store session data in mongodb */
          cookie: { /* can add cookie related info here */ }
        })
  );


