import React from 'react';
import { Table } from "react-bootstrap"
const Blogs = () => {
  return (
    <div className='min-vh-100 container my-2'>
      <div>
        <h3>1. Difference between Javascript and Node js:</h3>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>Javascript</th>
              <th>Node Js</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td> Javascript is a programing language.It runs with the help of browsers engine.  </td>
              <td> Node js is a javascript run time.It runs Javascript with the help of V8 engine </td>
            </tr>
            <tr>
              <td>2</td>
              <td>In before Javascript can only run on browser.</td>
              <td>Now node js gives opportunity to run javascript outside from browser </td>

            </tr>
            <tr>
              <td>3</td>
              <td> Usually Javascript used on client side </td>
              <td>Usually node js used on server side</td>
            </tr>
            <tr>
              <td>4</td>
              <td> Javascript can run with engines like Chakra ,Spider monkey,V8</td>
              <td> inside node js has only V8 engine </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='my-4'>
        <h2>2. Differences between SQL and NoSQL databases:</h2>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>No.</th>
              <th>SQL</th>
              <th>NoSQL</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td> Relational database management system </td>
              <td>Non-relational database management system. </td>
            </tr>
            <tr>
              <td>2</td>
              <td>This database have predefine format or schema</td>
              <td>this database sets data automatically </td>

            </tr>
            <tr>
              <td>3</td>
              <td>Not perfect for complex data query  </td>
              <td>Perfect for big complex query</td>
            </tr>
            <tr>
              <td>4</td>
              <td> These databases are not perfect for hierarchical data storage.</td>
              <td> These databases are perfect for hierarchical data storage. </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div className='d-flex flex-column flex-md-row my-5'>
        <div>
          <h3>3. when Should use Node js and when should use MongoDb:</h3>
          <article>
            First of all node js is javascript run time and mongoDb is a database.Node js used on server and it provides services or handle requests from Client side. server takes requests from client and then it goes to to database for particular data.MongoDb stores data and process data.So, when we have to handle client request Response we will use Node js and when we need to store data and process data we will use Mongodb.
          </article>
        </div>
        <div className='mx-md-4'>
          <div>
            <h2>4.1 What is the purpose of jwt:</h2>
            <article>
              The full from of jwt is JSON Web Token. Basically it secures Api. It protects api from un authorized people. By jwt we can define who can access what.it makes secure connection between two parties</article>
          </div>
          <div>
            <h2>4.2 How Jwt works:</h2>
            <article>
              While login/registration server generates a token and sends response to client.and stores in cookies or local storage.when client wants to access a particular data the it attached to http requests header.Then it goes to server and validate it .if it is valid than server grants access to client.
            </article>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Blogs;