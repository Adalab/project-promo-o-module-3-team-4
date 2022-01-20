import "../stylesheets/App.scss";
import { useState, useEffect } from "react";
//Imagenes
import superPopLogo from "../images/superpop-logo.png";
<<<<<<< HEAD
=======

>>>>>>> poncegui
import shareIconCard from "../images/address-card-regular (2).svg";
import imgShareTwitter from "../images/twitter.svg";
import imgShareLinkedin from "../images/linkedin.svg";
import imgShareFacebook from "../images/facebook.svg";
<<<<<<< HEAD
import FormFill from "./FormFill";
import ls from "../services/localStorage";
import PreviewBtnReset from "./PreviewBtnReset";
import PreviewIcons from "./PreviewIcons";
=======
import ls from "../services/localStorage";

>>>>>>> poncegui
import Preview from "./Preview";
import FormDesign from "./FormDesign";
import Header from "./Header";

function App() {
  const [data, setData] = useState(
    ls.get("localData", {
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "Photo",
    })
  );

  useEffect(() => {
    ls.set("localData", data);
<<<<<<< HEAD
  });
=======
  }, [data]);
>>>>>>> poncegui

  const handleInput = (value,name) => {
    const inputChange = name;
    setData({
      ...data,
<<<<<<< HEAD
      [inputChange]: value,
=======
      [inputChange]: event.currentTarget.value,
>>>>>>> poncegui
    });
  };

  const handleReset = () => {
    setData({
      palette: "1",
      name: "",
      job: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
      photo: "Photo",
    });
  };

  const [collapsablePalette, setcollapsablePalette] = useState(false);
  const [collapsableFill, setcollapsableFill] = useState(true);
  const [collapsableShare, setcollapsableShare] = useState(true);

  const handleCollapsable = (ev) => {
    const oneID = ev.currentTarget.id;
    if (oneID === "legend-design") {
      setcollapsablePalette(!collapsablePalette);
    } else if (oneID === "legend-fill") {
      setcollapsableFill(!collapsableFill);
    } else if (oneID === "legend-share") {
      setcollapsableShare(!collapsableShare);
    }
  };

  return (
    <div className="App">
      <Header />

      <main className="designmain">
<<<<<<< HEAD
        <section className="card-container">
          <div className="container">
            <PreviewBtnReset handleReset={handleReset} />

            <article className="card">
              <Preview
                dataPalette={data.palette}
                dataName={data.name}
                dataJob={data.job}
              />

              <div className="card__photo profile__preview js__profile-preview"></div>
              <ul className="card__list">
                <PreviewIcons
                  link={`tel:${data.phone}` || "/"}
                  dataPalette={data.palette}
                  className={`fas fa-mobile-alt card__list--icon-1 cardicon-js icon-${data.palette}`}
                />

                <PreviewIcons
                  link={`mailto:${data.email || "mailto:email@email.com"}`}
                  dataPalette={data.palette}
                  className={`far fa-envelope cardicon-js icon-${data.palette}`}
                />

                <PreviewIcons
                  link={`//${data.linkedin}`}
                  dataPalette={data.palette}
                  className={`fab fa-linkedin-in card__list--icon-1 cardicon-js icon-${data.palette}`}
                />

                <PreviewIcons
                  link={`https://github.com/${data.github}`}
                  dataPalette={data.palette}
                  className={`fab fa-github-alt card__list--icon-1 cardicon-js icon-${data.palette}`}
                />
              </ul>
            </article>
          </div>
        </section>

        <form className="form-section" action="" id="form">
          <FormDesign/>
=======
        <Preview
          handleReset={handleReset}
          dataPalette={data.palette}
          dataName={data.name}
          dataJob={data.job}
        />

        <form className="form-section" action="" id="form">
          <fieldset className="legend">
            <div
              className="js-legend legend__container"
              id="legend-design"
              onClick={handleCollapsable}
            >
              <div className="legend__container--icon">
                <i
                  className="legend__icon far fa-object-ungroup icon"
                  alt="icono de diseño"
                  title="diseña tu tarjeta"
                ></i>
                <legend className="legend__title">diseña</legend>
              </div>
              <i
                title="Pulsa para desplegar"
                className={`legend__arrow fas ${
                  collapsablePalette ? "fa-chevron-down" : "fa-chevron-up"
                }`}
                alt="arrow"
              ></i>
            </div>
            <div
              className={`design-container js-container ${
                collapsablePalette ? "collapsed" : ""
              }`}
            >
              <h4 className="design__title">Colores</h4>
              <div className="options-container">
                <label className="design__label" htmlFor="blue-green">
                  <input
                    className="design__radio"
                    type="radio"
                    name="palette"
                    id="blue-green"
                    value="1"
                    checked={data.palette === "1"}
                    onChange={handleInput}
                  />
                  <div className="design__color design__color--primary-blue"></div>
                  <div className="design__color design__color--dirty-blue"></div>
                  <div className="design__color design__color--green"></div>
                </label>

                <label className="design__label" htmlFor="red-orange">
                  <input
                    className="design__radio"
                    type="radio"
                    name="palette"
                    id="red-orange"
                    value="2"
                    checked={data.palette === "2"}
                    onChange={handleInput}
                  />
                  <div className="design__color design__color--dried-blood"></div>
                  <div className="design__color design__color--red"></div>
                  <div className="design__color design__color--tomato"></div>
                </label>

                <label className="design__label" htmlFor="color-mix">
                  <input
                    className="design__radio"
                    type="radio"
                    name="palette"
                    id="color-mix"
                    value="3"
                    checked={data.palette === "3"}
                    onChange={handleInput}
                  />
                  <div className="design__color design__color--slate"></div>
                  <div className="design__color design__color--yellow"></div>
                  <div className="design__color design__color--sky-blue"></div>
                </label>
              </div>
            </div>
          </fieldset>
>>>>>>> poncegui

          <fieldset className="legend">
            <div
              className="js-legend legend__container"
              id="legend-fill"
              onClick={handleCollapsable}
            >
              <div className="legend__container--icon">
                <i
                  className="legend__icon far fa-keyboard icon"
                  alt="icono de relleno"
                  title="Rellena tu tarjeta"
                ></i>
                <legend className="legend__title">Rellena</legend>
              </div>
              <i
                title="Pulsa para desplegar"
                className={`legend__arrow fas ${
                  collapsableFill ? "fa-chevron-down" : "fa-chevron-up"
                }`}
                alt="arrow"
              ></i>
            </div>
<<<<<<< HEAD
            <div className={`fill-container ${collapsableFill ? "collapsed" : ""}`}>
              
              <FormFill handleInput={handleInput()} data={data} />

=======
            <div
              className={`fill-container ${collapsableFill ? "collapsed" : ""}`}
            >
              <label className="fill__label" htmlFor="name">
                Nombre completo
                <input
                  className="fill__input fill__input-js js-fullname"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Ej.: Sally Jill"
                  value={data.name}
                  onChange={handleInput}
                />
              </label>
              <label className="fill__label" htmlFor="job">
                Puesto
                <input
                  className="fill__input fill__input-js js-job"
                  type="text"
                  name="job"
                  id="job"
                  placeholder="Ej.: Front-end unicorn"
                  value={data.job}
                  onChange={handleInput}
                />
              </label>
              <div className="fill__label" htmlFor="profilePic">
                <p className="label__img">Imagen de perfil</p>
                <label
                  className="fill__btn js__profile-trigger"
                  htmlFor="img-selector"
                >
                  Añadir imagen
                </label>
                <input
                  className="action__hiddenField js__profile-upload-btn hidden"
                  type="file"
                  name="photo"
                  id="img-selector"
                />
                <div className="label__container profile">
                  <div className="fill__profile-pic profile__image js__profile-image"></div>
                </div>
              </div>
              <label className="fill__label" htmlFor="email">
                Email
                <input
                  className="fill__input fill__input-js js-email"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Ej.: sally-hill@gmail.com"
                  value={data.email}
                  onChange={handleInput}
                />
              </label>
              <label className="fill__label" htmlFor="phone">
                Teléfono
                <input
                  className="fill__input fill__input-js"
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="Ej.: 555-555-555"
                  value={data.phone}
                  onChange={handleInput}
                />
              </label>
              <label className="fill__label" htmlFor="linkedin">
                Linkedin
                <input
                  className="fill__input fill__input-js"
                  type="text"
                  name="linkedin"
                  id="linkedin"
                  placeholder="Ej.: linkedin.com/in/sally.hill"
                  value={data.linkedin}
                  onChange={handleInput}
                />
              </label>
              <label className="fill__label" htmlFor="github">
                Github
                <input
                  className="fill__input fill__input-js"
                  type="text"
                  name="github"
                  id="github"
                  placeholder="Ej.: @sally-hill"
                  value={data.github}
                  onChange={handleInput}
                />
              </label>
>>>>>>> poncegui
            </div>
          </fieldset>

          <fieldset className="legend">
            <div
              className="js-legend legend__container"
              id="legend-share"
              onClick={handleCollapsable}
            >
              <div className="legend__container--icon">
                <i
                  className="legend__icon far fa-address-card icon"
                  alt="icono de compartir"
                  title="Comparte tu tarjeta"
                ></i>
                <legend className="legend__title">Comparte</legend>
              </div>
              <i
                className={`legend__arrow fas ${
                  collapsableShare ? "fa-chevron-down" : "fa-chevron-up"
                }`}
                alt="arrow"
                title="Click to open"
              ></i>
            </div>
            <div
              className={`sharecontainer ${
                collapsableShare ? "collapsed" : ""
              }`}
            >
              <section className="share_button">
                <button
                  type="submit"
                  className="share_button__item sharebuttonorange"
                  disabled
                >
                  <img
                    className="share_button__item--img"
                    src={shareIconCard}
                    title="icon"
                    alt="Comparte"
                  />
                  Crear Tarjeta
                </button>
              </section>

              <section className="share_creation collapsed">
                <div className="share_button__item--line"></div>
                <h3 className="share_creation__title">
                  La tarjeta ha sido creada:
                </h3>
                <a
                  href="./#"
                  target="_blank"
                  className="share_creation__link href js-shareCreationLink"
                  src="https://awesome-profile-card.com?id=A456DF0001"
                >
                  https://awesome-profile-card.com?id=A456DF0001
                </a>

                <a
                  target="_blank"
                  className="share_creation__twitter js-share-RRSS"
                  href="./#"
                >
                  <img
                    className="share_creation__twitter--img"
                    src={imgShareTwitter}
                    alt="Comparte Twitter"
                  />
                  Compartir en Twitter
                </a>
                <a
                  className="share_creation__linkedin js-share-RRSS"
                  href="./#"
                  target="_blank"
                >
                  <img
                    className="share_creation__linkedin--img"
                    src={imgShareLinkedin}
                    alt="Comparte Linkedin"
                  />
                  Comparte en LinkedIn
                </a>
                <a
                  className="share_creation__facebook js-share-RRSS"
                  href="./#"
                  target="_blank"
                >
                  <img
                    className="share_creation__facebook--img"
                    src={imgShareFacebook}
                    alt="Comparte Facebook"
                  />
                  Comparte en Facebook
                </a>
              </section>
            </div>
          </fieldset>
        </form>
      </main>
      <footer className="page__footer">
        <h6 className="page__footer--title">Tarjetas super molonas @2021</h6>
        <img
          className="page__footer--logo"
          src={superPopLogo}
          alt="Logo de SuperPop"
        />
      </footer>
    </div>
  );
}

export default App;
