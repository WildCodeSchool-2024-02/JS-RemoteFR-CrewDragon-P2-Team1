import { useState } from "react";
import "../styles/Contact.scss";
import Logo from "../assets/images/Logo.png";
import HeaderNavMobile from "../components/HeaderNavMobile";

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
      const messageContent = `Bonjour,  ${nom} ${prenom} Nous avons bien reçu votre message. l'équipe Globe Guide traitera votre demande dans les plus brefs délais. Si vous avez d'autres questions n'hésitez pas à nous recontacter.`;
      setMessage(messageContent);
      setMessageVisible(true);
    } else {
      alert("Veuillez remplir tous les champs obligatoires.");
    }
  };

  const handleReturnToForm = () => {
    setMessage("");
    setMessageVisible(false);
  };

  return (
    <body>
      <section className="section_contact">
        <HeaderNavMobile />
        <div className="flexbox-contact">
          <div className="container_contact">
            <div>
              {!messageVisible && (
                <h2 className="title3">Besoin d'un conseil </h2>
              )}
              {!messageVisible && (
                <h3 className="title">Un projet de voyage, une question ? </h3>
              )}
              {!messageVisible && (
                <p className="para">
                  {" "}
                  Vous recherchez un conseil, des renseignements sur une
                  destination, des détails sur un programme ? Ou bien peut-être
                  souhaitez-vous simplement nous faire part de vos remarques ?
                  N'hésitez pas à nous écrire. Nous vous répondrons dans les
                  plus brefs délais. Notre équipe Globe Guide est disponible
                  dans un esprit d'écoute, de conseil et de convivialité en
                  agence ou à distance.
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
                  <option value="">Civilité</option>
                  <option value="monsieur">M.</option>
                  <option value="madame">Mme.</option>
                  <option value="madame">Autres</option>
                </select>
                <div className="name">
                  <input
                    type="text"
                    id="firstName"
                    className="content"
                    name="firstName"
                    value={nom}
                    onChange={(e) => setNom(e.target.value)}
                    placeholder="Nom"
                  />

                  <input
                    type="text"
                    id="lastName"
                    className="content"
                    name="lastName"
                    value={prenom}
                    onChange={(e) => setPrenom(e.target.value)}
                    placeholder="Prénom"
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
                    placeholder="Message pour l'équipe GlobeGuide."
                  />
                </div>

                <div className="buttons">
                  <button
                    className="button"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Envoyer
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
