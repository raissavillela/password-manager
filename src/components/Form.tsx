type FormProps = {
  onCancelar: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  form: {
    serviceName: string;
    login: string;
    password: string;
    url: string;
  }
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  handleControlPassword: (event: React.ChangeEvent<HTMLInputElement>) => void;
  hidePassword: boolean;
  showForm: boolean;
};

function Form({ showForm, onCancelar, form, handleChange, handleSubmit,
  handleControlPassword, hidePassword } : FormProps) {
  const validateForm = () => {
    const hasLettersAndNumbers = /[A-Za-z].*\d|\d.*[A-Za-z]/;
    const hasSpecialCharacter = /[@#$%^&+=]/;

    const serviceValid = form.serviceName !== '';
    const loginValid = form.login !== '';
    const passwordValid1 = form.password.length >= 8;
    const passwordValid2 = form.password.length <= 16;
    const passwordValid3 = hasLettersAndNumbers.test(form.password);
    const passwordValid4 = hasSpecialCharacter.test(form.password);

    return serviceValid && loginValid
      && passwordValid1 && passwordValid2
      && passwordValid3 && passwordValid4;
  };

  const isPasswordValid = (password: string) => password.length >= 8;
  const isPasswordValid2 = (password: string) => password.length <= 16;
  const hasLettersAndNumbers = /[A-Za-z].*\d|\d.*[A-Za-z]/;
  const isPasswordValid3 = (password: string) => hasLettersAndNumbers.test(form.password);
  const hasSpecialCharacter = /[@#$%^&+=]/;
  const isPasswordValid4 = (password: string) => hasSpecialCharacter.test(form.password);

  const validPasswordPhase = 'valid-password-check';
  const invalidPasswordPhase = 'invalid-password-check';

  return (
    <form>

      <label htmlFor="serviceName">
        Nome do serviço
        <input
          id="serviceName"
          type="text"
          name="serviceName"
          value={ form.serviceName }
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="text">
        Login
        <input
          id="text"
          type="text"
          name="login"
          value={ form.login }
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="password">
        Senha
        <input
          id="password"
          type="password"
          name="password"
          value={ form.password }
          onChange={ handleChange }
        />
      </label>

      <label htmlFor="url">
        URL
        <input
          id="url"
          type="text"
          name="url"
          value={ form.url }
          onChange={ handleChange }
        />
      </label>

      <section>
        <p>A senha deve:</p>
        <p
          className={ isPasswordValid(form.password)
            ? validPasswordPhase : invalidPasswordPhase }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={ isPasswordValid2(form.password)
            ? validPasswordPhase : invalidPasswordPhase }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ isPasswordValid3(form.password)
            ? validPasswordPhase : invalidPasswordPhase }
        >
          Possuir letras e números
        </p>
        <p
          className={ isPasswordValid4(form.password)
            ? validPasswordPhase : invalidPasswordPhase }
        >
          Possuir algum caractere especial
        </p>
      </section>

      <button
        type="submit"
        disabled={ !validateForm() }
        onClick={ handleSubmit }
      >
        Cadastrar
      </button>
      <button
        onClick={ onCancelar }
      >
        Cancelar
      </button>

    </form>
  );
}
export default Form;
