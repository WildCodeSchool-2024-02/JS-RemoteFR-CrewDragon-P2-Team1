import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import RecommandedCardDesktop from "./RecommandedCardDesktop";
import RecommandedCardMobile from "./RecommandedCardMobile";
import Pagination from "./Pagination";
import "../styles/RecommandedSection.scss";

const destinations = [
  {
    ID: 1,
    Name: "le Mexique",
    Src: "https://www.acs-ami.com/fr/blog/wp-content/uploads/2021/10/visiter-le-mexique-1.jpg",
    Label: "Amérique Latine",
    Text: "Découvrez le Mexique, un pays riche en histoire, culture et paysages variés.",
    TextDesktop:
      "De ses plages tropicales aux sites archéologiques, chaque coin du Mexique offre une expérience unique. Profitez de la cuisine savoureuse, des villes coloniales pittoresques et des festivités colorées.",
    isFavorite: true,
    City: "Mexico",
  },
  {
    ID: 2,
    Name: "le Vietnam",
    Src: "https://media.istockphoto.com/id/186977241/fr/photo/%C3%AEles-pr%C3%A8s-de-rock-village-flottant-dans-la-baie-dhalong.jpg?s=612x612&w=0&k=20&c=1fT_vtJn6Am_m_WQzkuzPi4Nktteb2ihbWcoYxbscF8=",
    Label: "Asie",
    Text: "Découvrez le Vietnam, une destination enchanteresse en Asie du Sud-Est.",
    TextDesktop:
      "Au Vietnam les rizières en terrasses verdoyantes et les baies karstiques spectaculaires comme celles d'Ha Long vous attendent. Plongez dans l'histoire captivante et la culture vibrante du Vietnam.",
    isFavorite: false,
    City: "Hanoi",
  },
  {
    ID: 3,
    Name: "le Royaume Uni",
    Src: "https://www.shutterstock.com/image-photo/big-ben-bridge-over-thames-600nw-2209687145.jpg",
    Label: "Europe",
    Text: "Explorez le Royaume-Uni, une destination fascinante et diversifiée en Europe.",
    TextDesktop:
      "L'Angleterre est réputée pour son mélange unique de tradition et de modernité. Des majestueux châteaux médiévaux aux villes animées comme Londres, découvrez l'histoire riche et la culture dynamique du Royaume-Uni.",
    isFavorite: false,
    City: "Londres",
  },
  {
    ID: 4,
    Name: "l'Argentine",
    Src: "https://photos.tui.fr/vnf/Produits/ARGCT015-circuits-argentine-chili-tui.jpg",
    Label: "Amérique Latine",
    Text: "Plongez dans l'aventure en Argentine, un pays offrant des paysages à couper le souffle.",
    TextDesktop:
      "Explorez des villes passionnantes comme Buenos Aires, vibrez au rythme du tango et découvrez une culture riche en traditions et en passion pour le football. ",
    isFavorite: false,
    City: "Buenos Aires",
  },
  {
    ID: 5,
    Name: "le Maroc",
    Src: "https://trvlr.fr/wp-content/uploads/2020/10/maroc-trvlr-guide-destination-digital.jpg",
    Label: "Afrique",
    Text: "Partez à la découverte du Maroc, un pays magique en Afrique du Nord.",
    TextDesktop:
      "Dans ce pays où le désert rencontre la mer et les montagnes majestueuses, imprégnez-vous de l'atmosphère envoûtante des souks animés, des palais somptueux et des ruelles étroites des médinas historiques.",
    isFavorite: false,
    City: "Marrakesh",
  },
  {
    ID: 6,
    Name: "La Chine",
    Src: "https://visasnews.com/wp-content/uploads/2024/03/exemption-visa-chine-tourisme-voyage.webp",
    Label: "Asie",
    Text: "Découvrez la majesté de la Chine avec Globe Guide.",
    TextDesktop:
      "Explorez les merveilles anciennes de la Grande Muraille et plongez-vous dans la beauté impériale de la Cité Interdite. Goûtez à la délicieuse cuisine locale et vivez l'effervescence des marchés animés. Laissez-vous envoûter par la richesse culturelle et les paysages époustouflants de ce pays fascinant",
    isFavorite: false,
    City: "Pékin",
  },
  {
    ID: 7,
    Name: "la Grèce",
    Src: "https://media.istockphoto.com/id/1145450965/fr/photo/%C3%AEle-de-santorin-gr%C3%A8ce.jpg?s=612x612&w=0&k=20&c=oZIiXqJqZGsYYZA5-fZ_uc_bmk8r0UlaQKDiABuxMsk=",
    Label: "Europe",
    Text: "Explorez la beauté intemporelle de la Grèce et ses vestiges antiques fascinants.",
    TextDesktop:
      "Admirez l'Acropole majestueuse à Athènes, puis naviguez vers les îles grecques pour découvrir des plages paradisiaques et des villages pittoresques. Imprégnez-vous de l'ambiance authentique et dégustez la délicieuse cuisine méditerranéenne.",
    isFavorite: false,
    City: "Athènes",
  },
  {
    ID: 8,
    Name: "le Pérou",
    Src: "https://media.istockphoto.com/id/930824730/fr/photo/machu-picchu-au-p%C3%A9rou.jpg?s=612x612&w=0&k=20&c=M8pijHeeSTE_Ni2qPPt_KMJcaXfec1kXmCpCZCKl06I=",
    Label: "Amérique Latine",
    Text: "Plongez dans l'incroyable richesse culturelle du Pérou lors d'un voyage inoubliable.",
    TextDesktop:
      "Explorez les mystérieuses ruines de Machu Picchu, témoin de la grandeur de l'Empire inca. Traversez les paysages des Andes et goûtez aux saveurs de la cuisine péruvienne. Imprégnez-vous de l'histoire fascinante de ce pays enchanteur.",
    isFavorite: false,
    City: "Lima",
  },
  {
    ID: 9,
    Name: "les Etats-Unis",
    Src: "https://www.state.gov/wp-content/uploads/2022/01/shutterstock_248799484-scaled.jpg",
    Label: "Amérique du Nord",
    Text: "Découvrez la diversité époustouflante des États-Unis",
    TextDesktop:
      "Des gratte-ciel imposants de New York aux plages ensoleillées de la Californie, parcourez les parcs nationaux majestueux comme le Grand Canyon et ressentez l'effervescence culturelle à travers les quartiers emblématiques de villes comme Los Angeles et Chicago.",
    isFavorite: false,
    City: "Washington",
  },
  {
    ID: 10,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 11,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 12,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 13,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 14,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 15,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 16,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 17,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 18,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 19,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
  {
    ID: 20,
    Name: "l'Afrique du Sud",
    Src: "https://media.istockphoto.com/id/620737858/fr/photo/le-cap-et-les-12-apostels-den-haut.jpg?s=612x612&w=0&k=20&c=Hb429bbMHcfjmLHbVEQngXRsMwYtIeyUIg97ei15twc=",
    Label: "Afrique",
    Text: "Partez à la découverte de l'Afrique du Sud, une terre de contrastes et de merveilles naturelles.",
    TextDesktop:
      "Explorez la faune incroyable lors d'un safari inoubliable dans le parc Kruger. Imprégnez-vous de l'histoire bouleversante de l'apartheid à Johannesburg et admirez les paysages époustouflants de la route des Jardins.",
    isFavorite: false,
    City: "Le Cap",
  },
];

function RecommandedList() {
  const [page, setPage] = useState(1);
  const recordsPerPage = 8;

  const endIndex = page * recordsPerPage;
  const startIndex = endIndex - recordsPerPage;

  const pageDestinations = destinations.slice(startIndex, endIndex);

  const nPages = Math.ceil(destinations.length / recordsPerPage);

  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 700px)" });

  return (
    <div className="recommended__section">
      <h3>Recommandé pour vous</h3>
      <div className="recommended__carousel">
        {pageDestinations.map((destination) => (
          <div key={destination.ID}>
            {isDesktopOrLaptop ? (
              <div>
                <RecommandedCardDesktop
                  name={destination.Name}
                  src={destination.Src}
                  label={destination.Label}
                  text={destination.Text}
                  textDesktop={destination.TextDesktop}
                  isFavorite={destination.isFavorite}
                />
              </div>
            ) : (
              <RecommandedCardMobile
                name={destination.Name}
                src={destination.Src}
                label={destination.Label}
                text={destination.Text}
                isFavorite={destination.isFavorite}
              />
            )}
          </div>
        ))}
      </div>
      <Pagination nPages={nPages} page={page} setPage={setPage} />
    </div>
  );
}

export default RecommandedList;
