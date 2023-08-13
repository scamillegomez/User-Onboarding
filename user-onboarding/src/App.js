import logo from './logo.svg';
import './App.css';
import Form from './/components/Form';
import React, {useEffect, useState} from 'react';
import schema from './validation/formSchema';
import axios from 'axios';
import * as yup from 'yup';
import User from './components/User'

const initialFormValues = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsofservice: false
}

const initialFormErrors = {
  first_name: '',
  last_name: '',
  email: '',
  password: '',
  termsofservice: ''
}

// might need "initialUsers array here TBD"
// might need "initialDisabled = true here TBD"

const initialUsers = [];
const initialDisabled = true;

function App() {

  const [users,setUsers] = useState([]);
  const [formValues,setFormValues] = useState(initialFormValues);
  const [formErrors,setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  //doing a GET first so I can console log the result
  // const getUsers = () => {
  //   axios.get('https://reqres.in/api/users')
  //     .then(res=>{
  //       console.log(res.data.data);
  //       setUsers(res.data.data);
  //     })
  //     .catch(err=>console.error(err));
  // }


  // const postNewUser = newUser => {
  //   axios.post(`https://reqres.in/api/users`,newUser)
  //     .then(res=>{
  //       setUsers([res.data.data, ...users]);
  //     })
  //     .catch(err=>console.error(err))
  //     .finally(()=>{
  //       setFormValues(initialFormValues);
  //     })
  // } 

  // event handlers

  const validate = (name,value) => {
    yup.reach(schema,name)
    .validate(value)
    .then(()=>setFormErrors({...formErrors,[name]:''}))
    .catch(err=>setFormErrors({...formErrors,[name]:err.errors[0]}))
  }

  const inputChange = (name,value) => {
    validate(name,value);
    setFormValues({
      ...formValues,
      [name]:value
    });
  }

  const formSubmit = () => {
    axios.post(`https://reqres.in/api/users`, formValues)
      .then(res=>{
        setUsers([...users,res.data]);
      })
      .catch(err=>console.error(err))
  }

  useEffect(()=>{
    schema.isValid(formValues).then(valid=>setDisabled(!valid))
  }, [formValues]);

  return (
    <div className="App">
      <Form 
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />
      {users.map(user=>(
        <div key={user.id}>
          <p>{user.createdAt}</p>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
