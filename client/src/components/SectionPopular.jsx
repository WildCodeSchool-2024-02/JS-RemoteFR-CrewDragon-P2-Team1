import PopularCard from "./PopularCard";

const destinations = [
  {
    ID: 1,
    Name: "le Mexique",
    city: "Mexico",
    Src: "https://www.acs-ami.com/fr/blog/wp-content/uploads/2021/10/visiter-le-mexique-1.jpg",
    Label: "Amérique Latine",
    Text: "Découvrez le Mexique, un pays riche en histoire, culture et paysages variés.",
    TextDesktop:
      "De ses plages tropicales aux sites archéologiques, chaque coin du Mexique offre une expérience unique. Profitez de la cuisine savoureuse, des villes coloniales pittoresques et des festivités colorées.",
    isFavorite: true,
  },
  {
    ID: 2,
    Name: "le Vietnam",
    city: "Hanoi",
    Src: "https://media.istockphoto.com/id/186977241/fr/photo/îles-près-de-rock-village-flottant-dans-la-baie-dhalong.jpg?s=612x612&w=0&k=20&c=1fT_vtJn6Am_m_WQzkuzPi4Nktteb2ihbWcoYxbscF8=",
    Label: "Asie",
    Text: "Découvrez le Vietnam, une destination enchanteresse en Asie du Sud-Est.",
    TextDesktop:
      "Au Vietnam les rizières en terrasses verdoyantes et les baies karstiques spectaculaires comme celles d'Ha Long vous attendent. Plongez dans l'histoire captivante et la culture vibrante du Vietnam.",
    isFavorite: false,
  },
  {
    ID: 3,
    Name: "le Royaume Uni",
    city: "Londres",
    Src: "https://www.shutterstock.com/image-photo/big-ben-bridge-over-thames-600nw-2209687145.jpg",
    Label: "Europe",
    Text: "Explorez le Royaume-Uni, une destination fascinante et diversifiée en Europe.",
    TextDesktop:
      "L'Angleterre est réputée pour son mélange unique de tradition et de modernité. Des majestueux châteaux médiévaux aux villes animées comme Londres, découvrez l'histoire riche et la culture dynamique du Royaume-Uni.",
    isFavorite: false,
  },
];

function SectionPopular() {
  return (
    <>
      {destinations.map((destination) => (
        <PopularCard
          key={destination.Id}
          image={destination.Src}
          Text={destination.Text}
          country={destination.Name}
          city={destination.city}
          Isfavorite={destination.Isfavorite}
        />
      ))}
    </>
  );
}

export default SectionPopular;
