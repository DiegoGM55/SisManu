import Input from '../components/forms/Input';
import Button from '../components/forms/Button';
import Grid from '../components/layout/Grid';

const Register = () => {
  return (
    <div className={`h-[90vh] flex items-center justify-center w-full`}>
      <div className="w-[90%] lg:w-[1000px]">
        <Grid cols={1}>
          <div className="border border-1 rounded p-10">
            <h2 className="mb-10 text-zinc-500 text-lg">
              Primeiro acesso? Faça seu cadastro
            </h2>
            <form className="flex flex-col justify-center">
              <div>
                <Input type="text" label="Nome de usuário" name="name" />
              </div>
              <div>
                <Input type="email" label="Email Unesp" name="email" />
              </div>
              <div>
                <Input type="email" label="Confirme seu email" name="email" />
              </div>
              <div>
                <Input type="password" label="Senha" name="password" />
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
