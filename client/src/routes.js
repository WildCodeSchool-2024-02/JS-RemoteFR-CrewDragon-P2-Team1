import iconAccueil from "./assets/images/home.png";
import iconContact from "./assets/images/support.png";
import iconAbout from "./assets/images/about.png";
import DiconAccueil from "./assets/images/abri.png";
import DiconContact from "./assets/images/courriel-de-contact.png";
import DiconAbout from "./assets/images/info.png";

const routes = [
  {
    title: "Home",
    path: "/",
    href: "#",
    Icon: iconAccueil,
    IconD: DiconAccueil,
  },
  {
    title: "Contact",
    path: "/about",
    href: "#",
    Icon: iconContact,
    IconD: DiconContact,
  },
  {
    title: "About",
    path: "/about",
    href: "#",
    Icon: iconAbout,
    IconD: DiconAbout,
  },
];

export default routes;
