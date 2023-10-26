function Form() {
  return (
    <div>
      <input type="text" id="nomeServico" />
      <label htmlFor="nomeServico">Nome do serviço</label>

      <input type="text" id="login" />
      <label htmlFor="login">Login</label>

      <input type="password" id="senha" />
      <label htmlFor="senha">Senha</label>

      <input type="text" id="url" />
      <label htmlFor="url">URL</label>

      <input type="button" id="botao" />
      <label htmlFor="botao">Cadastrar</label>

      <input type="button" id="botao" />
      <label htmlFor="botao">Cancelar</label>

    </div>
  );
}

export default Form;
