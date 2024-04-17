import { useState } from "react";
import PopularCard from "./PopularCard";
import "../styles/SectionPopular.scss";

const destinations = [
  {
    ID: 1,
    Name: "Mexico",
    Src: "https://www.acs-ami.com/fr/blog/wp-content/uploads/2021/10/visiter-le-mexique-1.jpg",
    Label: "Amérique Latine",
    Text: "Découvrez le Mexique, un pays riche en histoire, culture et paysages variés.",
    TextDesktop:
      "De ses plages tropicales aux sites archéologiques, chaque coin du Mexique offre une expérience unique. Profitez de la cuisine savoureuse, des villes coloniales pittoresques et des festivités colorées.",
    isFavorite: true,
    Capital: "Mexico",
    CountryCode: "MX",
    Currency: "Peso",
  },
  {
    ID: 2,
    Name: "Vietnam",
    Src: "https://media.istockphoto.com/id/186977241/fr/photo/%C3%AEles-pr%C3%A8s-de-rock-village-flottant-dans-la-baie-dhalong.jpg?s=612x612&w=0&k=20&c=1fT_vtJn6Am_m_WQzkuzPi4Nktteb2ihbWcoYxbscF8=",
    Label: "Asie",
    Text: "Découvrez le Vietnam, une destination enchanteresse en Asie du Sud-Est.",
    TextDesktop:
      "Au Vietnam les rizières en terrasses verdoyantes et les baies karstiques spectaculaires comme celles d'Ha Long vous attendent. Plongez dans l'histoire captivante et la culture vibrante du Vietnam.",
    isFavorite: false,
    Capital: "Hanoi",
    CountryCode: "VN",
    Currency: "Dồng",
  },
  {
    ID: 3,
    Name: "United Kingdom",
    Src: "https://www.shutterstock.com/image-photo/big-ben-bridge-over-thames-600nw-2209687145.jpg",
    Label: "Europe",
    Text: "Explorez le Royaume-Uni, une destination fascinante et diversifiée en Europe.",
    TextDesktop:
      "L'Angleterre est réputée pour son mélange unique de tradition et de modernité. Des majestueux châteaux médiévaux aux villes animées comme Londres, découvrez l'histoire riche et la culture dynamique du Royaume-Uni.",
    isFavorite: false,
    Capital: "Londres",
    CountryCode: "GB",
    Currency: "livre sterling (£)",
  },
  {
    ID: 4,
    Name: "Argentina",
    Src: "https://photos.tui.fr/vnf/Produits/ARGCT015-circuits-argentine-chili-tui.jpg",
    Label: "Latin America",
    Text: "Plongez dans l'aventure en Argentine, un pays offrant des paysages à couper le souffle.",
    TextDesktop:
      "Explorez des villes passionnantes comme Buenos Aires, vibrez au rythme du tango et découvrez une culture riche en traditions et en passion pour le football. ",
    isFavorite: false,
    Capital: "Buenos Aires",
    CountryCode: "AR",
    Currency: "Peso",
  },

  {
    ID: 5,
    Name: "Morocco",
    Src: "https://trvlr.fr/wp-content/uploads/2020/10/maroc-trvlr-guide-destination-digital.jpg",
    Label: "Africa",
    Text: "Partez à la découverte du Maroc, un pays magique en Afrique du Nord.",
    TextDesktop:
      "Dans ce pays où le désert rencontre la mer et les montagnes majestueuses, imprégnez-vous de l'atmosphère envoûtante des souks animés, des palais somptueux et des ruelles étroites des médinas historiques.",
    isFavorite: false,
    Capital: "Rabat",
    CountryCode: "MA",
    Currency: "Dirham",
  },
  {
    ID: 6,
    Name: "Andorra",
    Src: "https://media.istockphoto.com/id/1187845438/fr/photo/vue-a%C3%A9rienne-de-la-station-de-ski-de-grandvalira-dans-le-pas-de-la-casa.jpg?s=612x612&w=0&k=20&c=wCTQZfNvNlu4BYDd4CXrLv59Z0dTQX_QUYRbHnwIWcA=",
    Label: "Europe",
    Text: "Petit pays montagneux réputé pour ses stations de ski, ses paysages pittoresques et son statut de paradis fiscal",
    TextDesktop:
      "Andorre, nichée dans les Pyrénées entre la France et l'Espagne, offre une expérience unique mêlant nature, culture et shopping .Célèbre pour ses stations de ski, ses centres commerciaux détaxés et ses paysages montagneux spectaculaires. .",
    isFavorite: false,
    Capital: "Andorre-la-Vieille",
    CountryCode: "AD",
    Currency: "Euro",
  },
];

function PopularList() {
  const [page, setPage] = useState(1);
  const recordsPerPage = 3;

  const endIndex = page * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const pageDestinations = destinations.slice(startIndex, endIndex);

  const nPages = Math.ceil(destinations.length / recordsPerPage);

  const goToPrevPage = () => {
    if (page !== 1) setPage(page - 1);
  };

  const goToNextPage = () => {
    if (page !== nPages) setPage(page + 1);
  };

  return (
    <div className="popular__section">
      <h3> Popular destinations </h3>

      <div className="popular_list">
        <svg
          onClick={goToPrevPage}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="button__svg__nav"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        {pageDestinations.map((destination) => (
          <PopularCard
            key={destination.ID}
            image={destination.Src}
            Text={destination.Text}
            country={destination.Name}
            city={destination.Capital}
            Isfavorite={destination.Isfavorite}
          />
        ))}
        <svg
          onClick={goToNextPage}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="button__svg__nav"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </div>
    </div>
  );
}

export default PopularList;
