import { useState } from 'react';
import axios from 'axios';
// components
import Input from "./Form/Input";
// styles
import './Form.scss';

function Form() {

  const [user, setUser] = useState(null);

  async function createUser(user = {}, e) {
    e.preventDefault();
    if (user) {
      await axios.post('http://localhost:5000/users', user)
    }
  }

  function handleChange(e) {
    setUser({ ...user, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={(e) => createUser(user, e)}>
      <div>
        <label htmlFor="name">Nome:</label>
        <Input
          type="text"
          id="name"
          name="name"
          placeholder="Digite seu nome"
          handleOnChange={handleChange}
          required={true} />
      </div>
      <div>
        <label htmlFor="idade">Idade:</label>
        <Input
          type="number"
          id="idade"
          name="age"
          placeholder="Digite sua idade"
          handleOnChange={handleChange}
          required={true} />
      </div>
      <div>
        <label htmlFor="profissao">Profissão:</label>
        <Input
          type="text"
          id="profissao"
          name="work"
          placeholder="Digite sua profissão"
          handleOnChange={handleChange}
          required={true} />
      </div>
      <div>
        <button type="submit">Cadastrar</button>
        <button type="reset">Resetar</button>
      </div>
    </form>
  );
}

export default Form