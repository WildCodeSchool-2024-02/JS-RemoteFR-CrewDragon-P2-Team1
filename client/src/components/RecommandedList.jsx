import RecommandedCard from "./RecommandedCard";

const destinations = [
  {
    ID: 1,
    Name: "le Mexique",
    Src: "https://www.acs-ami.com/fr/blog/wp-content/uploads/2021/10/visiter-le-mexique-1.jpg",
    Label: "Amérique Latine",
    Text: "Découvrez le Mexique, un pays riche en histoire, culture et paysages variés.",
    isFavorite: true,
  },
  {
    ID: 2,
    Name: "le Vietnam",
    Src: "https://media.istockphoto.com/id/186977241/fr/photo/%C3%AEles-pr%C3%A8s-de-rock-village-flottant-dans-la-baie-dhalong.jpg?s=612x612&w=0&k=20&c=1fT_vtJn6Am_m_WQzkuzPi4Nktteb2ihbWcoYxbscF8=",
    Label: "Asie",
    Text: "Découvrez le Vietnam, une destination enchanteresse en Asie du Sud-Est.",
    isFavorite: false,
  },
  {
    ID: 3,
    Name: "le Royaume Uni",
    Src: "https://www.shutterstock.com/image-photo/big-ben-bridge-over-thames-600nw-2209687145.jpg",
    Label: "Europe",
    Text: "Explorez le Royaume-Uni, une destination fascinante et diversifiée en Europe.",
    isFavorite: false,
  },
  {
    ID: 4,
    Name: "L'Argentine",
    Src: "https://photos.tui.fr/vnf/Produits/ARGCT015-circuits-argentine-chili-tui.jpg",
    Label: "Amérique Latine",
    Text: "Plongez dans l'aventure en Argentine, un pays offrant des paysages à couper le souffle.",
    isFavorite: false,
  },
  {
    ID: 5,
    Name: "le Maroc",
    Src: "https://trvlr.fr/wp-content/uploads/2020/10/maroc-trvlr-guide-destination-digital.jpg",
    Label: "Afrique",
    Text: "Partez à la découverte du Maroc, un pays magique en Afrique du Nord.",
    isFavorite: false,
  },
];

function RecommandedList() {
  return (
    <div className="recommanded__section">
      <h3> Recommandé pour vous </h3>
      <div className="recommanded__caroussel">
        {destinations.map((destination) => (
          <RecommandedCard
            key={destination.id}
            Name={destination.Name}
            Src={destination.Src}
            Label={destination.Label}
            Text={destination.Text}
          />
        ))}
      </div>
    </div>
  );
}

export default RecommandedList;
