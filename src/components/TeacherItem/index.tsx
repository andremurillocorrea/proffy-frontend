import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/27099418?s=460&u=9e9d60aaaa0442fe7490f625c9dbbe97ed1d3480&v=4" alt="André Corrêa" />
        <div>
          <strong>André Corrêa</strong>
          <span>Estatística</span>
        </div>
      </header>

      <p>
        Entusiasta em usar as melhores práticas de modelagem e Data Science para decisões de negócio.
        <br/><br/>
        Responsável por modelos de clusterização de base de cliente, segmentação de perfis, predição de churn, forecast de série temporal, análise de sobrevivência, entre outros.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>

    </article>
  )
}

export default TeacherItem;