import { useMediaQuery } from "react-responsive";
import { useState } from "react";
import RecommandedCardDesktop from "./RecommandedCardDesktop";
import RecommandedCardMobile from "./RecommandedCardMobile";
import Pagination from "./Pagination";
import "../styles/RecommandedSection.scss";

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
  {
    ID: 7,
    Name: "Albania",
    Src: "https://media.istockphoto.com/id/529358575/fr/photo/saranda-le-port-de-la-mer-ionienne-albanie.jpg?s=612x612&w=0&k=20&c=ia5GWBtH529Hu7VbVY8NX2wEPK3Lda-9SUHZzrRmqYA=",
    Label: "Europe",
    Text: "Decouvrez ses montagnes majestueuses, ses plages pittoresques et son riche patrimoine culturel",
    TextDesktop:
      " L'Albanie, située en Europe du Sud-Est, est connue pour ses montagnes majestueuses, ses plages pittoresques et son riche patrimoine culturel. Le pays offre une histoire fascinante, une cuisine délicieuse et une hospitalité chaleureuse.",
    isFavorite: false,
    Capital: "Tirana",
    CountryCode: "AL",
    Currency: "Lek",
  },
  {
    ID: 8,
    Name: "Armenia",
    Src: "https://cdn.pixabay.com/photo/2020/04/09/14/07/armenia-5021630_1280.jpg",
    Label: "Europe",
    Text: " Partez a la decouverte  d'un pays montagneux avec une riche histoire et une culture ancienne.",
    TextDesktop:
      "l'Armenie est une des plus anciennes villes continuellement habitées au monde, célèbre pour son architecture rose et ses nombreux sites historiques. Le pays est également connu pour son patrimoine culturel, notamment sa musique, sa danse et ses traditions artisanales.  ",
    isFavorite: false,
    Capital: "Erevan",
    CountryCode: "AM",
    Currency: "Dram",
  },
  {
    ID: 9,
    Name: "Austria",
    Src: "https://cdn.pixabay.com/photo/2017/11/30/23/28/vienna-2989756_640.jpg",
    Label: "Europe",
    Text: " Partez a la decouverte d'un pays connu pour ses magnifiques paysages alpins, ses villes historiques et sa riche culture.",
    TextDesktop:
      " L'Autriche est réputée pour son architecture impériale, ses musées renommés et sa scène artistique dynamique. Le pays est également célèbre pour sa musique classique, ayant été le berceau de compositeurs tels que Mozart, Beethoven et Strauss  ",
    isFavorite: false,
    Capital: "Vienne",
    CountryCode: "AT",
    Currency: "Euro",
  },
  {
    ID: 10,
    Name: "Australia",
    Src: "https://cdn.pixabay.com/photo/2014/05/26/09/58/sydney-opera-house-354375_1280.jpg",
    Label: " l'Océanie",
    Text: "L'Australie est un pays insulaire situé dans l'hémisphère sud, célèbre pour sa diversité naturelle, ses villes dynamiques, sa culture aborigène et sa faune unique.",
    TextDesktop:
      " L'Australie célèbre pour ses paysages diversifiés, allant des plages immaculées aux déserts arides, en passant par les forêts tropicales luxuriantes. ",
    isFavorite: false,
    Capital: "Canberra",
    CountryCode: "AU",
    Currency: "Euro",
  },
  {
    ID: 11,
    Name: "Åland Islands",
    Src: "https://cdn.pixabay.com/photo/2017/10/02/20/28/mariehamn-2810073_640.jpg",
    Label: "Europe",
    Text: "Les îles Åland sont connues pour leur beauté naturelle, leurs paysages marins pittoresques et leur culture distincte.",
    TextDesktop:
      " Une région autonome de Finlande, située dans la mer Baltique, entre la Suède et la Finlande. Elles sont principalement habitées par des Suédophones et disposent d'un statut d'autonomie depuis 1921.  ",
    isFavorite: false,
    Capital: "Mariehamn",
    CountryCode: "AX",
    Currency: "Euro",
  },
  {
    ID: 12,
    Name: "Bosnia and Herzegovina",
    Src: "https://media.istockphoto.com/id/585067008/photo/mostar-bridge-bosnia-and-herzegovina.jpg?s=612x612&w=0&k=20&c=4_NgcTg6oWiXjpLS4LIObS8qxpFzZ7R-71GOd_QFRcw=",
    Label: "Europe",
    Text: "La Bosnie-Herzégovine est un pays des Balkans, marqué par sa diversité culturelle et son histoire complexe.",
    TextDesktop:
      " La Bosnie-Herzégovine est Connue pour son mélange unique d'influences orientales et occidentales. Le pays est parsemé de magnifiques paysages montagneux, de rivières cristallines et de sites historiques. ",
    isFavorite: false,
    Capital: "Sarajevo",
    CountryCode: "BA",
    Currency: "Mark",
  },
  {
    ID: 13,
    Name: "Barbados",
    Src: "https://cdn.pixabay.com/photo/2020/06/13/10/43/wallpaper-5293774_1280.jpg",
    Label: "L'Amerique du Nord",
    Text: "Explorez une des îles des Caraïbes, réputée pour ses plages de sable blanc, ses eaux turquoise et ses récifs coralliens..",
    TextDesktop:
      " La Barbade, une île des Caraïbes qui offre une culture vibrante, une cuisine délicieuse et une hospitalité chaleureuse. ",
    isFavorite: false,
    Capital: "Bridgetown",
    CountryCode: "BB",
    Currency: "Dollar (BBD)",
  },
  {
    ID: 14,
    Name: "Belguim",
    Src: "https://cdn.pixabay.com/photo/2018/08/14/20/36/mini-europe-3606552_1280.jpg",
    Label: "Europe",
    Text: "Partez decouvrirses villes pittoresques telles que Bruxelles, Bruges et Anvers.",
    TextDesktop:
      "La Belgique est un pays européen réputé pour sa riche histoire, sa diversité culturelle, ses délicieuses gaufres et chocolats. ",
    isFavorite: false,
    Capital: "Bruxelles",
    CountryCode: "BE",
    Currency: "Euro",
  },
  {
    ID: 15,
    Name: "Bulgaria",
    Src: "https://cdn.pixabay.com/photo/2022/08/10/19/24/landscape-7378004_640.jpg",
    Label: "Europe",
    Text: "Partez decouvrir ses montagnes, ses plages en bord de mer Noire et sa riche histoire culturelle.",
    TextDesktop:
      "La Bulgarie est un pays situé dans le sud-est de l'Europe, bordé par la mer Noire à l'est. Elle est connue pour ses montagnes, ses stations de ski, ses plages et sa riche histoire culturelle. ",
    isFavorite: false,
    Capital: "Sofia",
    CountryCode: "BG",
    Currency: "Lev",
  },
  {
    ID: 16,
    Name: "Benin",
    Src: "https://cdn.pixabay.com/photo/2016/01/13/17/48/machupicchu-1138641_960_720.jpg",
    Label: "Afrique",
    Text: "Plonger dans une richesse culturelle et naturelle unique en Afrique de l'Ouest.",
    TextDesktop:
      "Le Bénin, également appelé Dahomey, est un pays d'Afrique de l'Ouest. Le pays est connu pour sa riche histoire, sa culture vibrante et sa diversité ethnique. ",
    isFavorite: false,
    Capital: " Porto-Novo",
    CountryCode: "Bj",
    Currency: "Franc (CFA)",
  },
  {
    ID: 17,
    Name: "Bolivia",
    Src: "https://cdn.pixabay.com/photo/2020/03/10/13/53/flamingos-4919079_1280.jpg",
    Label: "Amerique du sud",
    Text: " Plonger dans un pays riche en culture, en paysages spectaculaires et en traditions fascinantes.",
    TextDesktop:
      "La Bolivie est connue pour son paysage diversifié, comprenant les hauts plateaux des Andes, l'Amazonie et le célèbre lac Titicaca. Elle abrite également le célèbre Salar d'Uyuni, le plus grand désert de sel du monde ",
    isFavorite: false,
    Capital: " La Paz",
    CountryCode: "BO",
    Currency: "Boliviano (BOB).",
  },
  {
    ID: 18,
    Name: "Brazil",
    Src: "https://cdn.pixabay.com/photo/2020/01/31/21/25/brazil-4809011_640.jpg",
    Label: "Amerique du sud",
    Text: "Explorez sa diversité naturelle, découvrez sa riche histoire, et appréciez la chaleur de son peuple accueillant .",
    TextDesktop:
      "Le Brésil est un pays dynamique et diversifié en Amérique du Sud, célèbre pour ses vastes forêts tropicales, ses plages magnifiques, sa culture vibrante et son amour pour le football. ",
    isFavorite: false,
    Capital: "Brasilia",
    CountryCode: "BR",
    Currency: "le Réal",
  },
  {
    ID: 19,
    Name: "Bahamas",
    Src: "https://cdn.pixabay.com/photo/2016/01/05/15/58/starfish-1122849_640.jpg",
    Label: "Amerique du nord",
    Text: "C'est une destination réputée pour ses plages de sable blanc, ses eaux cristallines et ses activités nautiques  .",
    TextDesktop:
      "Les Bahamas sont un archipel composé de plus de 700 îles, situé dans l'océan Atlantique, au nord de Cuba et de la République dominicaine. Les Bahamas offrent également une abondance de vie marine, y compris des dauphins, des tortues de mer et des requins.",
    isFavorite: false,
    Capital: "Nassau",
    CountryCode: "BS",
    Currency: "Dollar des Bahamas (BSD)",
  },
  {
    ID: 20,
    Name: "Botswana",
    Src: "https://cdn.pixabay.com/photo/2016/09/08/01/38/botswana-1653100_1280.jpg",
    Label: "Afrique",
    Text: "Plongez dans une vie sauvage diversifiée, notamment le célèbre delta de l'Okavango.",
    TextDesktop:
      "Le Botswana, situé en Afrique australe, est connu pour sa stabilité politique, son économie en croissance et ses parcs nationaux.",
    isFavorite: false,
    Capital: "Gaborone",
    CountryCode: "BW",
    Currency: "Pula (BWP).",
  },
  {
    ID: 21,
    Name: "Belarus",
    Src: "https://cdn.pixabay.com/photo/2021/11/25/13/38/mir-castle-complex-6823633_640.jpg",
    Label: "Europe",
    Text: " Decouvrez sa richesse histoirique, ses vastes forêts, ses lacs et ses châteaux médiévaux bien conservés.",
    TextDesktop:
      "La Biélorussie, également connue sous le nom de Belarus, est un pays d'Europe orientale, célèbre pour ses vastes étendues de forêts, ses châteaux médiévaux bien conservés et sa culture riche en histoire",
    isFavorite: false,
    Capital: "Minsk",
    CountryCode: "By",
    Currency: "Le rouble biéloruss",
  },
  {
    ID: 22,
    Name: "Beliz",
    Src: " https://cdn.pixabay.com/photo/2017/01/06/15/39/turtle-1958058_640.jpg",
    Label: "Amerique du nord",
    Text: "Decouvrez sa beauté naturelle et sa riche diversité culturelle. Ses attraits touristiques comprennent des plages de sable blanc .",
    TextDesktop:
      "Le Belize est un petit pays d'Amérique centrale bordé par la mer des Caraïbes à l'est. Il est connu pour sa barrière de corail, la deuxième plus grande au monde, offrant des opportunités exceptionnelles de plongée et de snorkeling",
    isFavorite: false,
    Capital: "Belmopan",
    CountryCode: "BZ",
    Currency: "Dollar de Belize",
  },
  {
    ID: 23,
    Name: "Canada",
    Src: " https://cdn.pixabay.com/photo/2017/10/28/07/47/woman-2896389_640.jpg",
    Label: "Amerique du nord",
    Text: " Explorez une beauté naturelle incroyable, avec des paysages diversifiés allant des majestueuses montagnes Rocheuses à l'immensité des Prairies, en passant par les vastes forêts boréales et les magnifiques côtes atlantiques et pacifiques .",
    TextDesktop:
      "Le Canada est un vaste pays d'Amérique du Nord réputé pour sa diversité culturelle, ses paysages époustouflants et sa qualité de vie élevée. Ses vastes étendues comprennent des montagnes majestueuses, des lacs cristallins, des forêts verdoyantes et des côtes spectaculaires.",
    isFavorite: false,
    Capital: "Ottawa",
    CountryCode: "CA",
    Currency: "Dollar Canadien",
  },
  {
    ID: 24,
    Name: "Swizerland",
    Src: "https://cdn.pixabay.com/photo/2020/01/14/15/51/the-cable-car-4765350_640.jpg ",
    Label: "Europe",
    Text: " La Suisse est renommée pour ses paysages alpins pittoresques, ses lacs cristallins, ses villes cosmopolites et son système politique neutre.",
    TextDesktop:
      "La Suisse est également célèbre pour ses montres de haute qualité, son chocolat exquis et ses fromages savoureux.",
    isFavorite: false,
    Capital: "Berne",
    CountryCode: "CH",
    Currency: "Franc Suisse",
  },
  {
    ID: 25,
    Name: "Chile",
    Src: "https://cdn.pixabay.com/photo/2016/06/17/18/45/nature-1463830_1280.jpg",
    Label: "Amerique du sud",
    Text: "Explorez sa riche culture et son histoire fascinante.",
    TextDesktop:
      "Le Chili est un pays doté d'une géographie variée comprenant des montagnes, des déserts, des forêts et des côtes pittoresques.Le Chili est réputé pour ses vignobles, ses volcans majestueux, ses glaciers impressionnants. ",
    isFavorite: false,
    Capital: "Santiago",
    CountryCode: "CL",
    Currency: "Peso Chilien",
  },
  {
    ID: 26,
    Name: "China",
    Src: "https://cdn.pixabay.com/photo/2020/08/12/19/28/great-wall-of-china-5483516_640.jpg",
    Label: "Asie",
    Text: "Decouvrez sa longue histoire, sa culture riche, sa grande population et son économie en plein essor.",
    TextDesktop:
      " La Chine est célèbre pour ses sites historiques comme la Grande Muraille, ses temples anciens et ses paysages naturels variés. La Chine est un acteur majeur sur la scène mondiale, tant sur le plan économique que politique",
    isFavorite: false,
    Capital: "Pekin",
    CountryCode: "CN",
    Currency: "Yuan (CNY)",
  },
  {
    ID: 27,
    Name: "Colombia",
    Src: "https://cdn.pixabay.com/photo/2024/01/23/21/46/canoes-8528338_1280.jpg",
    Label: "Amerique du sud",
    Text: "La richesse culturelle de la Colombie se reflète dans ses festivals animés, sa musique envoûtante et sa délicieuse cuisine. ",
    TextDesktop:
      " La Colombie est un pays aux multiples facettes. Elle offre une diversité incroyable, allant des plages de sable blanc de la mer des Caraïbes aux sommets enneigés de la Sierra Nevada",
    isFavorite: false,
    Capital: "Bogota",
    CountryCode: "CO",
    Currency: "Peso colombien (COP).",
  },
  {
    ID: 28,
    Name: "Costa Rica",
    Src: "https://cdn.pixabay.com/photo/2015/04/11/22/15/volcano-718277_640.jpg",
    Label: "Amerique centrale",
    Text: " Partez a la decouverte de ses musées fascinants, ses marchés animés et sa scène artistique dynamique.  ",
    TextDesktop:
      "Le Costa Rica est un petit pays doté d'une incroyable diversité naturelle. Il est réputé pour ses vastes étendues de forêts tropicales, ses plages paradisiaques, ses volcans actifs et sa biodiversité exceptionnelle. ",
    isFavorite: false,
    Capital: "San José",
    CountryCode: "CR",
    Currency: "Le colon costaricien (CRC)",
  },
  {
    ID: 29,
    Name: "Cuba",
    Src: "https://cdn.pixabay.com/photo/2018/04/20/04/26/architecture-3335045_640.jpg",
    Label: "Amerique du nord",
    Text: "Explorez une île enchanteresse des Caraïbes, réputée pour sa riche histoire, sa culture vibrante, ses plages de sable blanc et ses villes coloniales pittoresques.",
    TextDesktop:
      " Découvrez la musique envoûtante de la salsa et du son cubain, les voitures classiques des années 1950 qui sillonnent les rues colorées de La Havane, et l'architecture coloniale espagnole bien préservée.  ",
    isFavorite: false,
    Capital: "Havane",
    CountryCode: "CU",
    Currency: "Peso cubain",
  },
  {
    ID: 30,
    Name: "Cyprus",
    Src: "https://cdn.pixabay.com/photo/2019/02/03/12/25/kyrenia-3972470_640.jpg",
    Label: "Europe",
    Text: "Decouvrez une île ensoleillée de la Méditerranée orientale, célèbre pour son histoire riche, sa culture vibrante et ses paysages pittoresques.",
    TextDesktop:
      "Chypre, une île située dans la partie orientale de la mer Méditerranée, est connue pour son mélange fascinant de cultures, son histoire riche et ses paysages pittoresques. ",
    isFavorite: false,
    Capital: "Nicosie",
    CountryCode: "CY",
    Currency: "Euro",
  },
  {
    ID: 31,
    Name: "Czechia",
    Src: "https://cdn.pixabay.com/photo/2018/04/20/21/57/bridges-3337124_640.jpg",
    Label: "Europe",
    Text: "Explorez les paysages tchèques offrant une grande diversité, allant des montagnes des Sudètes et des monts des Géants aux plaines boisées et aux rivières pittoresques",
    TextDesktop:
      "La République tchèque, également connue sous le nom de Tchéquie, est un pays d'Europe centrale. Elle est réputée pour ses magnifiques châteaux médiévaux, ses charmantes villes historiques telles que Prague, Český Krumlov et Kutná Hora ",
    isFavorite: false,
    Capital: "Prague",
    CountryCode: "CZ",
    Currency: "La couronne tchèque (CZK)",
  },
  {
    ID: 32,
    Name: "Germany",
    Src: "https://cdn.pixabay.com/photo/2022/05/24/16/11/berlin-7218821_1280.jpg",
    Label: "Europe",
    Text: "Célèbre pour ses monuments historiques tels que la Porte de Brandebourg et le mur de Berlin, ainsi que pour ses contributions à la musique, la philosophie, la littérature et l'art.",
    TextDesktop:
      "L'Allemagne est un pays d'Europe centrale réputé pour son histoire riche, sa culture vibrante et sa technologie de pointe. Berlin en est la capitale et l'une des villes les plus dynamiques sur le plan culturel. ",
    isFavorite: false,
    Capital: "Berlin",
    CountryCode: "DE",
    Currency: "Euro",
  },
  {
    ID: 33,
    Name: "Denmark",
    Src: "https://cdn.pixabay.com/photo/2019/03/13/11/04/copenhagen-4052654_640.jpg",
    Label: "Europe",
    Text: "Decouvrez ses paysages pittoresques, ses îles magnifiques et ses côtes bordées de plages de sable.",
    TextDesktop:
      " Le pays est également réputé pour son design innovant, son architecture moderne et ses initiatives environnementales progressistes. La culture danoise met l'accent sur le bien-être, l'égalité sociale et la durabilité",
    isFavorite: false,
    Capital: "Copenhagen",
    CountryCode: "DK",
    Currency: "Couronne",
  },
  {
    ID: 34,
    Name: "Dominican Republic",
    Src: "https://cdn.pixabay.com/photo/2017/02/26/12/45/las-galeras-2100152_640.jpg",
    Label: "Amerique du nord",
    Text: "Partez a la decouverte de Sa culture imprégnée de musique et de danse, avec le merengue comme danse nationale. ",
    TextDesktop:
      "La République dominicaine, située dans les Caraïbes, est célèbre pour ses plages de sable blanc, ses stations balnéaires luxueuses et ses parcours de golf. Elle abrite également des chaînes de montagnes, des vallées fertiles et des cascades spectaculaires.",
    isFavorite: false,
    Capital: "Saint-Dominigue",
    CountryCode: "DO",
    Currency: "Le peso dominicain (DOP).",
  },
  {
    ID: 35,
    Name: "Equador",
    Src: "https://cdn.pixabay.com/photo/2019/12/11/13/50/volcano-4688409_640.jpg",
    Label: "Amerique du sud",
    Text: "L'Équateur a une riche culture et histoire indigène, avec une forte influence espagnole après la colonisation. ",
    TextDesktop:
      "L'Équateur est un pays traversé par la ligne équatoriale d'où son nom. Il est également connu pour ses volcans, ses paysages spectaculaires et sa diversité ethnique.",
    isFavorite: false,
    Capital: "Quito",
    CountryCode: "EC",
    Currency: "Dollar américain (USD)",
  },
  {
    ID: 36,
    Name: "Estonia",
    Src: "https://cdn.pixabay.com/photo/2014/12/30/17/14/tallinn-584127_640.jpg",
    Label: "Europe",
    Text: "Partez a la decouverte d'un pays réputé pour sa nature préservée, ses forêts denses, ses lacs et ses côtes pittoresques.",
    TextDesktop:
      "L'Estonie est connue pour être l'une des nations les plus numériquement avancées au monde, avec une forte présence en ligne dans de nombreux aspects de la vie quotidienne, notamment l'administration publique, les services bancaires et les élections en ligne.",
    isFavorite: false,
    Capital: "Tallinn",
    CountryCode: "EE",
    Currency: "Euro",
  },
  {
    ID: 37,
    Name: "Egypt",
    Src: "https://cdn.pixabay.com/photo/2017/03/20/14/33/pyramids-2159286_640.jpg",
    Label: "Afrique",
    Text: " L'Égypte est connue pour son riche patrimoine historique, en particulier les pyramides de Gizeh, le sphinx et les temples antiques le long du Nil. ",
    TextDesktop:
      "Le pays a une histoire ancienne fascinante, avec une civilisation remontant à plus de 5 000 ans. Outre son patrimoine culturel, l'Égypte possède également des stations balnéaires populaires le long de la mer Rouge, telles que Sharm el-Sheikh et Hurghada, qui attirent de nombreux touristes chaque année.",
    isFavorite: false,
    Capital: "Caire",
    CountryCode: "EG",
    Currency: "(EGP)",
  },
  {
    ID: 38,
    Name: "Spain",
    Src: "https://cdn.pixabay.com/photo/2018/06/08/12/58/royal-3462249_640.jpg",
    Label: "Europe",
    Text: " Explorez sa riche histoire, sa culture vibrante, sa cuisine délicieuse, ses magnifiques plages et ses festivals animés",
    TextDesktop:
      "Le pays abrite également des sites emblématiques tels que la Sagrada Familia à Barcelone, l'Alhambra à Grenade, et le Palais royal à Madrid. La langue officielle est l'espagnol, et le pays est célèbre pour ses nombreuses fêtes et célébrations colorées, comme la Feria de Abril à Séville et la Tomatina à Buñol. ",
    isFavorite: false,
    Capital: "Madrid",
    CountryCode: "ES",
    Currency: "Euro",
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
      <h3>Recommended for you</h3>
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
