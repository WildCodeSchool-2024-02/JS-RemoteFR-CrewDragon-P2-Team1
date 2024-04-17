import "../styles/HeaderNavDesktop.scss";
import routes from "../routes";
import arrow from "../assets/images/fleche.png";

function HeaderNavDesktop() {
  return (
    <div className="DHearderContainer">
      <span className="DHearderNav">
        {routes.map((route) => (
          <a className="" href={route.href} key={route.title}>
            <span className="DlinkHeader">{route.title}</span>
          </a>
        ))}
      </span>
      <div className="DHearderTitle">
        <h1>GLOBE GUIDE</h1>
        <div className="DinputBtn">
          <input
            className="DheaderInput"
            type="text"
            placeholder="Search destination"
          />
          <img src={arrow} alt="icon" className="DiconNav2" />
        </div>
      </div>
    </div>
  );
}

export default HeaderNavDesktop;
