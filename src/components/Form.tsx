import React, { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form(props: FormProps) {
  const { onCancel } = props;
  const [nomeServico, setNomeServico] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [habilitarBotao, setHabilitarBotao] = useState(true);

  const [validacaoDeSenha, setValidacaoDeSenha] = useState({
    minLength: false,
    maxLength: false,
    hasLettersAndNumbers: false,
    hasSpecialCharacter: false,
  });

  const invalidPasswordMessage = 'invalid-password-check';
  const validPasswordMessage = 'valid-password-check';

  function handleHabilitarBotao() {
    if (
      nomeServico !== ''
      && login !== ''
      && Object.values(validacaoDeSenha).every((check) => check === true)
    ) {
      setHabilitarBotao(false);
    }
  }

  function validandoSenha(valorSenha:string) {
    const minLength = valorSenha.length >= 8;
    const maxLength = valorSenha.length <= 16;
    const hasLettersAndNumbers = /([A-Za-z][0-9][0-9][A-Za-z])/.test(valorSenha.toLowerCase());
    const hasSpecialCharacter = /[@#$%^&+=]/.test(valorSenha);

    setValidacaoDeSenha({
      minLength,
      maxLength,
      hasLettersAndNumbers,
      hasSpecialCharacter,
    });

    return minLength && maxLength && hasLettersAndNumbers && hasSpecialCharacter;
  }

  return (
    <div>
      <input
        type="text"
        id="nomeServico"
        value={ nomeServico }
        onChange={ ({ target }) => {
          setNomeServico(target.value);
          handleHabilitarBotao();
        } }
      />
      <label htmlFor="nomeServico">Nome do serviço</label>

      <input
        type="text"
        id="login"
        value={ login }
        onChange={ ({ target }) => {
          setLogin(target.value);
          handleHabilitarBotao();
        } }
      />
      <label htmlFor="login">Login</label>

      <input
        type="password"
        id="senha"
        value={ senha }
        onChange={ ({ target }) => {
          setSenha(target.value);
          handleHabilitarBotao();
          validandoSenha(target.value);
        } }
      />
      <label htmlFor="senha">Senha</label>

      <div>
        <p>A senha deverá: </p>
        <p
          className={ validacaoDeSenha.minLength ? validPasswordMessage
            : invalidPasswordMessage }
        >
          Possuir 8 ou mais caracteres
        </p>
        <p
          className={ validacaoDeSenha.maxLength ? validPasswordMessage
            : invalidPasswordMessage }
        >
          Possuir até 16 caracteres
        </p>
        <p
          className={ validacaoDeSenha.hasLettersAndNumbers ? validPasswordMessage
            : invalidPasswordMessage }
        >
          Possuir letras e números
        </p>
        <p
          className={ validacaoDeSenha.hasSpecialCharacter ? validPasswordMessage
            : invalidPasswordMessage }
        >
          Possuir algum caractere especial
        </p>
      </div>

      <input type="text" id="url" />
      <label htmlFor="url">URL</label>

      <input type="button" id="botao" />
      <label htmlFor="botao">Cadastrar</label>
      <button disabled={ habilitarBotao }>Cadastrar</button>

      <input type="button" id="botao" />
      <label htmlFor="botao">Cancelar</label>
      <button onClick={ onCancel }>Cancelar</button>
    </div>
  );
}

export default Form;
