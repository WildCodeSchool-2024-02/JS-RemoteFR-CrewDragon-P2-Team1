import { useState } from "react";
import "../styles/Contact.scss";
import Logo from "../assets/images/logo-couleur.png";

function Contact() {
  const [sexe, setSexe] = useState("");
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [messages, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [messageVisible, setMessageVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Formate le message
    if (sexe && nom && prenom && messages && email) {
      const messageContent = `Hello  ${nom} ${prenom} ! We have received your message. The Globe Guide team will process your request as soon as possible. If you have any further questions, please do not hesitate to contact us.`;
      setMessage(messageContent);
      setMessageVisible(true);
    } else {
      alert("Please complete all required fields.");
    }
  };

  const handleReturnToForm = () => {
    setMessage("");
    setMessageVisible(false);
  };

  return (
    <body>
      <section className="section_contact">
        <div className="flexbox-contact">
          <div className="container_contact">
            <div>
              {!messageVisible && (
                <h2 className="title3">Need some advice ? </h2>
              )}
              {!messageVisible && (
                <h3 className="title">A travel project, a question? </h3>
              )}
              {!messageVisible && (
                <p className="para">
                  {" "}
                  Are you looking for advice, information about a destination,
                  details about a program? Or perhaps you just want to share
                  your feedback with us? Feel free to write to us. We will
                  respond as soon as possible. Our Globe Guide team is available
                  with a spirit of listening, advice, and friendliness in person
                  or remotely.
                </p>
              )}
            </div>
            {!messageVisible ? (
              <form onSubmit={handleSubmit} className="forms">
                <select
                  value={sexe}
                  type="select"
                  onChange={(e) => setSexe(e.target.value)}
                  className="select"
                >
                  <option value="">Title</option>
                  <option value="monsieur">Mr.</option>
                  <option value="madame">Ms.</option>
                  <option value="madame">Mx</option>
                </select>
                <div className="name">
                  <input
                    type="text"
                    id="firstName"
                    className="content"
                    name="firstName"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Last Name"
                  />

                  <input
                    type="text"
                    id="lastName"
                    className="content"
                    name="lastName"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="First Name"
                  />
                </div>

                <div className="Email">
                  <input
                    type="email"
                    id="email"
                    className="content"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E-mail"
                  />
                </div>
                <div className="Message">
                  <textarea
                    id="message"
                    className="content"
                    name="message"
                    value={messages}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message to the Globe Guide team."
                  />
                </div>

                <div className="buttons">
                  <button
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </form>
            ) : (
              <div className="message-container">
                <p>{messages}</p>
                <img src={Logo} alt="logo" className="picture_message" />
                <button
                  type="submit"
                  onClick={handleReturnToForm}
                  className="back_formulaire"
                >
                  Back
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </body>
  );
}

export default Contact;
