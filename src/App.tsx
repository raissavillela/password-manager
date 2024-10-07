import { useState } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';

type ServiceType = {
  serviceName: string;
  login: string;
  password: string;
  url:string;
};

function App() {
  const [data, setData] = useState<ServiceType[]>([]);

  const [showForm, setFormVisible] = useState(false);

  const [form, setForm] = useState<ServiceType>({
    serviceName: '',
    login: '',
    password: '',
    url: '',
  });

  const [hidePassword, setHidePassword] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleClique = () => {
    setShowForm(true);
  };

  const handleCancelar = () => {
    setShowForm(false);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setData([...data, form]);
    setShowForm(false);
    setForm({
      serviceName: '',
      login: '',
      password: '',
      url: '',
    });
  };

  const handleClearService = (serviceName: string) => {
    const newData = data.filter((service) => service.serviceName !== serviceName);
    setData(newData);
  };

  const handleControlPassword = () => {
    setHidePassword(!hidePassword);
  };

  return (

    <div>

      <Title />

      <label htmlFor="esconder-senhas">
        Esconder senhas
        <input
          id="esconder-senhas"
          type="checkbox"
          onChange={ handleControlPassword }
          checked={ hidePassword }
        />
      </label>

      {showForm ? (
        <Form
          showForm={ showForm }
          onCancelar={ handleCancelar }
          form={ form }
          handleChange={ handleChange }
          handleSubmit={ handleSubmit }
          handleControlPassword={ handleControlPassword }
          hidePassword={ hidePassword }
        />
      ) : (
        <button
          onClick={ handleClique }
        >
          Cadastrar nova senha
        </button>

      )}
      <div>

        {data.length === 0 ? (
          <p>Nenhuma senha cadastrada</p>
        ) : (
          <ul>
            {data.map((service) => (
              <li key={ service.serviceName }>
                <a href={ service.url }>{service.serviceName}</a>
                <p>
                  Login
                  {service.login}
                </p>
                <p>
                  Senha
                  {hidePassword ? '******' : service.password}
                </p>
                <button
                  data-testid="remove-btn"
                  onClick={ () => handleClearService(service.serviceName) }
                >
                  Apagar Serviço
                </button>
              </li>
            ))}

          </ul>
        )}
      </div>

    </div>
  );
}

export default App;
