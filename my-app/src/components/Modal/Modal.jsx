import './Modal.scss';

export default function Modal() {
  return (
    <section className="modal">
      <div className="modal-wrapper">
        <div className="modal-top">
          <h2 className="modal-top__title">CONTACT US</h2>
          <p className="modal-top__subtitle">Leave us a message</p>
        </div>
        <form className="modal-form" action="#" method="post">
          <div className="modal-form__field">
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="modal-form__input"
              placeholder="John Doe"
              required
            />
          </div>
          <div className="modal-form__field">
            <input
              id="email"
              name="email"
              type="email"
              className="modal-form__input"
              placeholder="you@example.com"
              required
            />
          </div>
          <div className="modal-form__field">
            <textarea
              id="message"
              name="message"
              className="modal-form__textarea"
              placeholder="Write a short message..."
              rows="4"
              maxLength="500"
            />
          </div>
          <button type="submit" className="modal-form__submit">
            Send
          </button>
        </form>
        <div className="modal-bottom">
          <p className="modal-bottom__adress"></p>
          <a href="tel:+919599272754" className="modal-bottom__phone">
            +91 9599272754
          </a>
          <a href="mailto:hello@info.com.ng" className="modal-bottom__mail">
            hello@info.com.ng
          </a>
          <div className="modal-bottom__social"></div>
        </div>
      </div>
    </section>
  );
}
