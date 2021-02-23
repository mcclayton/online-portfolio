import React, { useState } from 'react';

const FORMSPREE_URL = 'https://formspree.io/f/mvovnewb';

const FORM_STATUSES = {
  DRAFT: 0,
  SENDING: 1,
  ERROR: 2,
  SUCCESS: 3
};

const ContactForm = () => {
  const [state, updateFormState] = useState({ status: FORM_STATUSES.DRAFT, response: null });

  const submitForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    updateFormState({ status: FORM_STATUSES.SENDING, response: null });
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        updateFormState({ status: FORM_STATUSES.SUCCESS, response: JSON.parse(xhr.response) });
      } else {
        updateFormState({ status: FORM_STATUSES.ERROR, response: JSON.parse(xhr.response) });
      }
    };
    xhr.send(data);
  }

  const { status, response } = state;

  const actions = (
    <ul className="actions">
      {
        status === FORM_STATUSES.SENDING && (
          <li>
            <input type='button' value="Sending..." className="special" />
          </li>
        )
      }
      {
        (status === FORM_STATUSES.DRAFT || status === FORM_STATUSES.ERROR) && (
          <>
            <li>
              <input type="submit" value="Send Message" className="special" />
            </li>
            <li>
              <input type="reset" value="Reset" />
            </li>
          </>
        )
      }
    </ul>
  );

  return (
    <form method="POST" action={FORMSPREE_URL} onSubmit={submitForm}>
      <div className="field half first">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field half">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="4"></textarea>
      </div>
      {status === FORM_STATUSES.SUCCESS && <h3>Submission confirmed — thank you!</h3>}
      {status === FORM_STATUSES.ERROR && (
        <>
          <h3 style={{ opacity: '0.4'}}>Error: Failed to submit contact form</h3>
          <ul>
            {
              response.errors.map((err) => (
                <li style={{ opacity: '0.5'}}>{getErrorMessage(err)}</li>
              ))
            }
          </ul>
        </>
      )}
      {actions}
    </form>
  );
}

function getErrorMessage(err) {
  if (err && err.field) {
    return `Field '${err.field}' ${err.message}`;
  } else {
    return err.message;
  }
}

export default ContactForm;
