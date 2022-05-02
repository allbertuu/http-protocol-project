import { useState, useEffect } from 'react';
import axios from 'axios';
// components
import Form from "./components/Form";
import User from './components/User';
// styles
import './App.scss';

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUsers() {
      await axios.get('http://localhost:5000/users')
        .then(res => setUsers(res.data))
        .catch(err => alert(`Mensagem: ${err.message}\nErro: ${err.response.statusText}\nCódigo do status: ${err.response.status}`))
    }

    getUsers();
  }, [users])

  async function deleteUser(id) {
    await axios.delete(`http://localhost:5000/users/${id}`)
      .then(() => setUsers([...users]))
      .catch(err => console.log(err))
  }

  return (
    <main className='container'>

      <section>
        <h1>Usuários</h1>

        {users.length > 0 ?
          <div className='c_user'>
            {users.map((user, index) => (
              <User name={user.name} age={user.age} work={user.work} key={index} deleteUser={() => deleteUser(user.id)} />
            ))}
          </div>
          :
          <div className='no_users'>Não há usuários registrados :(</div>}
      </section>

      <hr />

      <section>
        <h1>Cadastrar</h1>
        <Form></Form>
      </section>

    </main>
  );
}

export default App;
