import React, {InputHTMLAttributes} from 'react';

import './styles.css';

// Esse input modificado herda todos os atributis da tag input do HTML
// Assim não limitamos usuário para usar apenas os inputs que queremos
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label: string;
}

// Uso o spread operator para pegar todos os atributos restantes da interface InputProps
const Input: React.FC<InputProps> = ({ label, name, ...rest }) => {
  return (
    <div className="input-block">
      <label htmlFor={name}>{label}</label>
      <input type="text" id={name} {...rest}/>
    </div>
  );
}

export default Input;