import React from 'react';
import './sender-form.scss'

const SenderForm = () => (
  <div className="sender-sub-main">
    <div className="sender-sub-inner">
      <div className="subscription-form">
        <h4 className="dont-break-out">Subscríbete</h4>
          <div className="subscription-form-fields">
            <div className="subscription-form-content">
              Mantente al d&iacute;a con noticias, conciertos y promociones sobre Bad Possum
            </div>
            <form id="sender-subscribe" action="https://app.sender.net/forms/sender_subscription/3898/93870c23" method="POST">
              <div className="subscription-form-fields" id="subscription-form-fields">
                <input name="email" className="input email_type" id="email" data-label="Email" placeholder="Email" required />
                <input name="firstname" className="input text_type" id="firstname" data-label="Nombre (Opcional)" placeholder="Nombre (Opcional)" />
                <input name="lastname" className="input text_type" id="lastname" data-label="Apellido (Opcional)" placeholder="Apellido (Opcional)" />
              </div>
              <button type="submit" >Enviar</button>
            </form>
        </div>
        <a className="sender-link" href="http://sender.net" title="Email marketing services"></a>
      </div>
    </div>
  </div>
);

export default SenderForm;