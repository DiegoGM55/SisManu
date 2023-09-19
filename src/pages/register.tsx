import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import Grid from '../components/layout/Grid';
import { useState } from 'react';

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: ''
  });

  const InputValue = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  // Cria uma função para lidar com o evento de submit do formulário
  const handleSubmit = (event) => {
    // Impede o comportamento padrão de recarregar a página
    event.preventDefault();

    if (data.password !== data.passwordConfirm) {
      alert('As senhas não conferem');
      return;
    } else {
      delete data.passwordConfirm;
    }
    console.log(data);
    // Faz uma requisição POST para a rota localhost/8000/user/createUser, passando o formData como o corpo
    fetch('http://localhost:8000/user/createUser', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(data)
    })
      .then((response) => {
        // Verifica se a resposta foi bem sucedida
        if (response.ok) {
          // Converte a resposta em JSON
          return response.json();
        } else {
          // Lança um erro se a resposta não foi bem sucedida
          throw new Error('Algo deu errado');
        }
      })
      .then((data) => {
        // Faz algo com os dados da resposta, por exemplo, mostrar uma mensagem de sucesso
        console.log(data);
        if (data.status === 'Error') {
          alert(data.message);
          return;
        } else if (data.status === 'Success') {
          alert(data.message);
          return;
        }
      })
      .catch((error) => {
        // Faz algo com o erro, por exemplo, mostrar uma mensagem de erro
        console.error(error);
        alert('Ocorreu um erro ao tentar fazer o cadastro');
      });
  };

  return (
    <div className={`h-[90vh] flex items-center justify-center w-full`}>
      <div className="w-[90%] lg:w-[1000px]">
        <Grid cols={1}>
          <div className="border border-1 rounded p-10">
            <h2 className="mb-10 text-zinc-500 text-lg">
              Primeiro acesso? Faça seu cadastro
            </h2>
            {/* Adiciona o evento de submit ao formulário e passa a função handleSubmit */}
            <form
              className="flex flex-col justify-center"
              onSubmit={handleSubmit}
            >
              <div>
                <Input
                  type="text"
                  label="Nome de usuário"
                  name="name"
                  InputValue={InputValue}
                />
              </div>
              <div>
                <Input
                  type="email"
                  label="Email Unesp"
                  name="email"
                  InputValue={InputValue}
                />
              </div>
              <div>
                <Input
                  type="password"
                  label="Senha"
                  name="password"
                  InputValue={InputValue}
                />
              </div>
              <div>
                <Input
                  type="password"
                  label="Confirme sua senha"
                  name="passwordConfirm"
                  InputValue={InputValue}
                />
              </div>
              <div>
                <Button type="submit" name="button" value="Cadastrar" />
              </div>
            </form>
          </div>
        </Grid>
      </div>
    </div>
  );
};

export default Register;
