import React, { useEffect,useState } from 'react'
import MainPageNavbar from './NavBar'
import "./MainPage.css"
import Carousel from 'react-bootstrap/Carousel';
import { getTopHeadlines,getNewsData } from '../api';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
// import {image} from "../../public/logo192.png"
// getTopHeadlines

export const MainPage = () => {
//  const data={
//   "totalArticles": 103440,
//   "articles": [
//     {
//       "title": "Greenland: Mystery of a mega-tsunami that made the Earth vibrate for 9 days has been solved",
//       "description": "It started with a melting glacier, which set off a landslide, which triggered a 650-foot high mega-tsunami in Greenland. Then came something inexplicable.",
//       "content": "CNN —\nIt started with a melting glacier that set off a huge landslide, which triggered a 650-foot high mega-tsunami in Greenland last September. Then came something inexplicable: a mysterious vibration that shook the planet for nine days.\nOver the pa... [5112 chars]",
//       "url": "https://www.cnn.com/2024/09/13/climate/mega-tsunami-landslide-greenland-seismic-signal/index.html",
//       "image": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1630149314.jpg?c=16x9&q=w_800,c_fill",
//       "publishedAt": "2024-09-13T08:00:00Z",
//       "source": {
//         "name": "CNN",
//         "url": "https://www.cnn.com"
//       }
//     },
//     {
//       "title": "China is raising its retirement age, now among the youngest in the world's major economies",
//       "description": "China is raising its retirement age for workers, which is now among the youngest in the world’s major economies.",
//       "content": "BEIJING (AP) — Starting next year, China will raise its retirement age for workers, which is now among the youngest in the world’s major economies, in an effort to address its shrinking population and aging work force.\nThe Standing Committee of the N... [3554 chars]",
//       "url": "https://apnews.com/article/china-retirement-age-642a34c97b1935fbaea8add81eda88b0",
//       "image": "https://dims.apnews.com/dims4/default/085c5f9/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc9%2Fc1%2F237620c77c96f7741e3acc3bc6c7%2Fc9f34b8a062e4175a56d1ca58c61809a",
//       "publishedAt": "2024-09-13T07:33:00Z",
//       "source": {
//         "name": "The Associated Press",
//         "url": "https://apnews.com"
//       }
//     },
//     {
//       "title": "Springfield, Ohio: Fear and frustration as political debate seizes on growing Haitian population",
//       "description": "Concern is growing that inflammatory rhetoric about Haitians could escalate into actual violence – something that many have traveled hundred of miles to escape.",
//       "content": "Springfield, Ohio CNN —\nRose Goute Creole restaurant does a bustling business in Springfield, Ohio, with clientele drawn from across the city to its heaping displays of patties and donuts, and pots of perfumed rice, fried pork and fish, and golden pl... [8864 chars]",
//       "url": "https://edition.cnn.com/2024/09/12/politics/springfield-ohio-migrants-jd-vance/index.html",
//       "image": "https://media.cnn.com/api/v1/images/stellar/prod/still-20952956-162759-335-still.jpg?c=16x9&q=w_800,c_fill",
//       "publishedAt": "2024-09-13T05:10:00Z",
//       "source": {
//         "name": "CNN",
//         "url": "https://www.cnn.com"
//       }
//     },
//     {
//       "title": "Springfield, Ohio: Fear and frustration as political debate seizes on growing Haitian population",
//       "description": "Concern is growing that inflammatory rhetoric about Haitians could escalate into actual violence – something that many have traveled hundred of miles to escape.",
//       "content": "Springfield, Ohio CNN —\nRose Goute Creole restaurant does a bustling business in Springfield, Ohio, with clientele drawn from across the city to its heaping displays of patties and donuts, and pots of perfumed rice, fried pork and fish, and golden pl... [8864 chars]",
//       "url": "https://www.cnn.com/2024/09/12/politics/springfield-ohio-migrants-jd-vance/index.html",
//       "image": "https://media.cnn.com/api/v1/images/stellar/prod/still-20952956-162759-335-still.jpg?c=16x9&q=w_800,c_fill",
//       "publishedAt": "2024-09-13T05:10:00Z",
//       "source": {
//         "name": "CNN",
//         "url": "https://www.cnn.com"
//       }
//     },
//     {
//       "title": "Tua Tagovailoa sustains concussion after hitting head on turf in Dolphins' loss to Bills",
//       "description": "Miami Dolphins quarterback Tua Tagovailoa sustained a concussion for the third time in his NFL career, leaving his team’s game Thursday night against Buffalo after running into defensive back Damar Hamlin and hitting the back of his head against the turf.",
//       "content": "MIAMI GARDENS, Fla. (AP) — Miami Dolphins quarterback Tua Tagovailoa sustained a concussion for the third time in his NFL career, leaving his team’s game Thursday night against Buffalo after running into defensive back Damar Hamlin and hitting the ba... [5425 chars]",
//       "url": "https://apnews.com/article/tua-tagovailoa-injury-a8cc153d3ac902be42b710a187cea50e",
//       "image": "https://dims.apnews.com/dims4/default/90bfbb1/2147483647/strip/true/crop/4052x2279+0+211/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F56%2F4b%2F9264984ce6f0b5d84857fb0feafc%2F448a8b5bc9ed444cb2ca9e7297954bfc",
//       "publishedAt": "2024-09-13T04:11:00Z",
//       "source": {
//         "name": "The Associated Press",
//         "url": "https://apnews.com"
//       }
//     },
//     {
//       "title": "Thursday Night Football: James Cook, Ja'Marcus Ingram star in Bills' 31-10 rout of Dolphins",
//       "description": "Miami lost quarterback Tua Tagovailoa to a concussion in the third quarter.",
//       "content": "The Dolphins lost handedly to the Bills, 31-10, and added injury to insult by losing Tua Tagovailoa.\nThe Dolphins quarterback was diagnosed with a concussion after a scary collision on a fourth-down run when he lowered his head into Bills defensive b... [1185 chars]",
//       "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/thursday-night-football-james-cook-jamarcus-ingram-star-in-bills-31-10-rout-of-dolphins",
//       "image": "https://nbcsports.brightspotcdn.com/dims4/default/21869b1/2147483647/strip/true/crop/3000x1688+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fc1%2F5d%2F862023a94b4e83cc07e43b777067%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2171636505",
//       "publishedAt": "2024-09-13T03:13:40Z",
//       "source": {
//         "name": "NBC Sports",
//         "url": "https://www.nbcsports.com"
//       }
//     },
//     {
//       "title": "NFL Week 2 Recap: Immediate fantasy football takeaways from Dolphins-Bills Thursday Night Football",
//       "description": "PFF's fantasy football recap focuses on player usage and stats, breaking down all the vital information you need to achieve fantasy success in 2024.",
//       "content": "• James Cook finds the end zone three times: Cook ran for two touchdowns during all of 2022, two touchdowns during all of 2023, and two touchdowns Thursday night.\n• De’Von Achane sets a new career high: Achane reached over 20 carries for the first ti... [6377 chars]",
//       "url": "https://www.pff.com/news/fantasy-football-nfl-week-2-recap-immediate-fantasy-football-takeaways-from-dolphins-bills-thursday-night-football",
//       "image": "https://media.pff.com/2024/09/2Y37AK5-scaled.jpg?w=1200&h=675",
//       "publishedAt": "2024-09-13T03:11:00Z",
//       "source": {
//         "name": "Pro Football Focus",
//         "url": "https://www.pff.com"
//       }
//     },
//     {
//       "title": "Sean O’Malley, Merab Dvalishvili square up at presser",
//       "description": "Sean O'Malley and Merab Dvalishvili got a good look at each other during Thursday's UFC 306 press conference staredown.",
//       "content": "LAS VEGAS – Sean O'Malley and Merab Dvalishvili are one step closer to finding out who is the better men after Thursday’s UFC 306 pre-fight press conference staredown.\nO’Malley (18-1 MMA, 10-1 UFC) will put his bantamweight title on the line against ... [941 chars]",
//       "url": "https://mmajunkie.usatoday.com/2024/09/noche-ufc-306-faceoff-sean-omalley-vs-merab-dvalishvili-pre-fight-press-conference-staredown-video",
//       "image": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2024/09/sean-omalley-merab-dvalishvili-ufc-306-press-conference-faceoff-1.jpg?w=1000&h=576&crop=1",
//       "publishedAt": "2024-09-13T02:56:00Z",
//       "source": {
//         "name": "MMA Junkie",
//         "url": "https://mmajunkie.usatoday.com"
//       }
//     },
//     {
//       "title": "Dolphins QB Tua Tagovailoa sustains concussion in 31-10 loss to Bills",
//       "description": "Miami Dolphins quarterback Tua Tagovailoa left Thursday’s game against the Buffalo Bills with a concussion, the team announced.",
//       "content": "Miami Dolphins quarterback Tua Tagovailoa left Thursday’s game against the Buffalo Bills with a concussion, the team announced.\nAfter a fourth-down run in the third quarter, Tagovailoa collided head-first with Bills safety Damar Hamlin as he went to ... [3404 chars]",
//       "url": "https://www.nbcnews.com/news/sports/dolphins-qb-tua-tagovailoa-leaves-game-bills-concussion-rcna170965",
//       "image": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-09/240912-Bills-Dolplhins-nfl-Football-Tua-Tagovailoa-injury-ac-1035p-b218c2.jpg",
//       "publishedAt": "2024-09-13T02:40:00Z",
//       "source": {
//         "name": "NBC News",
//         "url": "https://www.nbcnews.com"
//       }
//     },
//     {
//       "title": "California fires: Three major wildfires rage on, thousands evacuate",
//       "description": "California is only now heading into the teeth of the wildfire season but already has seen nearly three times as much acreage burn than during all of 2023.",
//       "content": "RUNNING SPRINGS, Calif. (AP) — In the Southern California mountain town of Running Springs, residents live between two scenic lake resorts — a seemingly serene spot but one also caught between the swings of devastating winter snowstorms and menacing ... [7374 chars]",
//       "url": "https://apnews.com/article/wildfires-california-wrightwood-heat-wave-c57adb98fea42204140349e7d31ebece",
//       "image": "https://dims.apnews.com/dims4/default/65d15d6/2147483647/strip/true/crop/4500x2531+0+234/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F0d%2F7f%2F5f4083f5ff22b366c9a0084d30de%2F723a3f6c48944a6fb5fc9a77dba86794",
//       "publishedAt": "2024-09-13T02:36:00Z",
//       "source": {
//         "name": "The Associated Press",
//         "url": "https://apnews.com"
//       }
//     }
//   ]
// }

const [data, setData] = useState([
  {
      "title": "Josh Allen: Can't help but feel for Tua Tagovailoa, he's a great player and great person",
      "description": "Tagovailoa left Thursday night's game with a concussion, and players on both teams were concerned.",
      "content": "Players on both teams expressed their concern on Thursday night for Dolphins quarterback Tua Tagovailoa, who suffered a concussion in the loss to the Bills.\nAfter the game, Bills quarterback Josh Allen said on the Prime post game show what many were ... [855 chars]",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/josh-allen-cant-help-but-feel-for-tua-tagovailoa-hes-a-great-player-and-great-person",
      "image": "https://nbcsports.brightspotcdn.com/dims4/default/606c31d/2147483647/strip/true/crop/3000x1688+0+156/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F88%2Fce%2F00df6485428092e5409919ac7f64%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2171643052",
      "publishedAt": "2024-09-13T08:16:54Z",
      "source": {
          "name": "NBC Sports",
          "url": "https://www.nbcsports.com"
      }
  },
  {
      "title": "Greenland: Mystery of a mega-tsunami that made the Earth vibrate for 9 days has been solved",
      "description": "It started with a melting glacier, which set off a landslide, which triggered a 650-foot high mega-tsunami in Greenland. Then came something inexplicable.",
      "content": "CNN —\nIt started with a melting glacier that set off a huge landslide, which triggered a 650-foot high mega-tsunami in Greenland last September. Then came something inexplicable: a mysterious vibration that shook the planet for nine days.\nOver the pa... [5112 chars]",
      "url": "https://www.cnn.com/2024/09/13/climate/mega-tsunami-landslide-greenland-seismic-signal/index.html",
      "image": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1630149314.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-09-13T08:00:00Z",
      "source": {
          "name": "CNN",
          "url": "https://www.cnn.com"
      }
  },
  {
      "title": "China is raising its retirement age, now among the youngest in the world's major economies",
      "description": "China is raising its retirement age for workers, which is now among the youngest in the world’s major economies.",
      "content": "BEIJING (AP) — Starting next year, China will raise its retirement age for workers, which is now among the youngest in the world’s major economies, in an effort to address its shrinking population and aging work force.\nThe Standing Committee of the N... [3554 chars]",
      "url": "https://apnews.com/article/china-retirement-age-642a34c97b1935fbaea8add81eda88b0",
      "image": "https://dims.apnews.com/dims4/default/085c5f9/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2Fc9%2Fc1%2F237620c77c96f7741e3acc3bc6c7%2Fc9f34b8a062e4175a56d1ca58c61809a",
      "publishedAt": "2024-09-13T07:33:00Z",
      "source": {
          "name": "The Associated Press",
          "url": "https://apnews.com"
      }
  },
  {
      "title": "Boeing workers vote to strike after rejecting pay deal",
      "description": "US Pacific north-west workers voted 96% in favor of the strike, which will begin at midnight",
      "content": "Boeing workers voted on Thursday night to strike for higher pay, halting production of the planemaker’s strongest-selling jet as it wrestles with chronic output delays and mounting debt.\nNewly installed Boeing CEO Kelly Ortberg pleaded with workers n... [3718 chars]",
      "url": "https://www.theguardian.com/business/2024/sep/13/boeing-union-strike",
      "image": "https://i.guim.co.uk/img/media/70ebe6f94d08da14c33373d9d312171a30700357/0_34_6146_3688/master/6146.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=05e86ad629a312ce0132ee8d8f66fac5",
      "publishedAt": "2024-09-13T07:24:00Z",
      "source": {
          "name": "The Guardian",
          "url": "https://www.theguardian.com"
      }
  },
  {
      "title": "Springfield, Ohio: Fear and frustration as political debate seizes on growing Haitian population",
      "description": "Concern is growing that inflammatory rhetoric about Haitians could escalate into actual violence – something that many have traveled hundred of miles to escape.",
      "content": "Springfield, Ohio CNN —\nRose Goute Creole restaurant does a bustling business in Springfield, Ohio, with clientele drawn from across the city to its heaping displays of patties and donuts, and pots of perfumed rice, fried pork and fish, and golden pl... [8864 chars]",
      "url": "https://edition.cnn.com/2024/09/12/politics/springfield-ohio-migrants-jd-vance/index.html",
      "image": "https://media.cnn.com/api/v1/images/stellar/prod/still-20952956-162759-335-still.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-09-13T05:10:00Z",
      "source": {
          "name": "CNN",
          "url": "https://www.cnn.com"
      }
  },
  {
      "title": "Springfield, Ohio: Fear and frustration as political debate seizes on growing Haitian population",
      "description": "Concern is growing that inflammatory rhetoric about Haitians could escalate into actual violence – something that many have traveled hundred of miles to escape.",
      "content": "Springfield, Ohio CNN —\nRose Goute Creole restaurant does a bustling business in Springfield, Ohio, with clientele drawn from across the city to its heaping displays of patties and donuts, and pots of perfumed rice, fried pork and fish, and golden pl... [8864 chars]",
      "url": "https://www.cnn.com/2024/09/12/politics/springfield-ohio-migrants-jd-vance/index.html",
      "image": "https://media.cnn.com/api/v1/images/stellar/prod/still-20952956-162759-335-still.jpg?c=16x9&q=w_800,c_fill",
      "publishedAt": "2024-09-13T05:10:00Z",
      "source": {
          "name": "CNN",
          "url": "https://www.cnn.com"
      }
  },
  {
      "title": "Tua Tagovailoa sustains concussion after hitting head on turf in Dolphins' loss to Bills",
      "description": "Miami Dolphins quarterback Tua Tagovailoa sustained a concussion for the third time in his NFL career, leaving his team’s game Thursday night against Buffalo after running into defensive back Damar Hamlin and hitting the back of his head against the turf.",
      "content": "MIAMI GARDENS, Fla. (AP) — Miami Dolphins quarterback Tua Tagovailoa sustained a concussion for the third time in his NFL career, leaving his team’s game Thursday night against Buffalo after running into defensive back Damar Hamlin and hitting the ba... [5425 chars]",
      "url": "https://apnews.com/article/tua-tagovailoa-injury-a8cc153d3ac902be42b710a187cea50e",
      "image": "https://dims.apnews.com/dims4/default/90bfbb1/2147483647/strip/true/crop/4052x2279+0+211/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F56%2F4b%2F9264984ce6f0b5d84857fb0feafc%2F448a8b5bc9ed444cb2ca9e7297954bfc",
      "publishedAt": "2024-09-13T04:11:00Z",
      "source": {
          "name": "The Associated Press",
          "url": "https://apnews.com"
      }
  },
  {
      "title": "Thursday Night Football: James Cook, Ja'Marcus Ingram star in Bills' 31-10 rout of Dolphins",
      "description": "Miami lost quarterback Tua Tagovailoa to a concussion in the third quarter.",
      "content": "The Dolphins lost handedly to the Bills, 31-10, and added injury to insult by losing Tua Tagovailoa.\nThe Dolphins quarterback was diagnosed with a concussion after a scary collision on a fourth-down run when he lowered his head into Bills defensive b... [1185 chars]",
      "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/thursday-night-football-james-cook-jamarcus-ingram-star-in-bills-31-10-rout-of-dolphins",
      "image": "https://nbcsports.brightspotcdn.com/dims4/default/21869b1/2147483647/strip/true/crop/3000x1688+0+0/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fc1%2F5d%2F862023a94b4e83cc07e43b777067%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F2171636505",
      "publishedAt": "2024-09-13T03:13:40Z",
      "source": {
          "name": "NBC Sports",
          "url": "https://www.nbcsports.com"
      }
  },
  {
      "title": "NFL Week 2 Recap: Immediate fantasy football takeaways from Dolphins-Bills Thursday Night Football",
      "description": "PFF's fantasy football recap focuses on player usage and stats, breaking down all the vital information you need to achieve fantasy success in 2024.",
      "content": "• James Cook finds the end zone three times: Cook ran for two touchdowns during all of 2022, two touchdowns during all of 2023, and two touchdowns Thursday night.\n• De’Von Achane sets a new career high: Achane reached over 20 carries for the first ti... [6377 chars]",
      "url": "https://www.pff.com/news/fantasy-football-nfl-week-2-recap-immediate-fantasy-football-takeaways-from-dolphins-bills-thursday-night-football",
      "image": "https://media.pff.com/2024/09/2Y37AK5-scaled.jpg?w=1200&h=675",
      "publishedAt": "2024-09-13T03:11:00Z",
      "source": {
          "name": "Pro Football Focus",
          "url": "https://www.pff.com"
      }
  },
  {
      "title": "Sean O’Malley, Merab Dvalishvili square up at presser",
      "description": "Sean O'Malley and Merab Dvalishvili got a good look at each other during Thursday's UFC 306 press conference staredown.",
      "content": "LAS VEGAS – Sean O'Malley and Merab Dvalishvili are one step closer to finding out who is the better men after Thursday’s UFC 306 pre-fight press conference staredown.\nO’Malley (18-1 MMA, 10-1 UFC) will put his bantamweight title on the line against ... [941 chars]",
      "url": "https://mmajunkie.usatoday.com/2024/09/noche-ufc-306-faceoff-sean-omalley-vs-merab-dvalishvili-pre-fight-press-conference-staredown-video",
      "image": "https://mmajunkie.usatoday.com/wp-content/uploads/sites/91/2024/09/sean-omalley-merab-dvalishvili-ufc-306-press-conference-faceoff-1.jpg?w=1000&h=576&crop=1",
      "publishedAt": "2024-09-13T02:56:00Z",
      "source": {
          "name": "MMA Junkie",
          "url": "https://mmajunkie.usatoday.com"
      }
  }
]);
const [lang,setlang]=useState("English")
const [searchterm,setsearchterm]=useState("example");
const [category,setcategory]=useState("general")
useEffect(() => {
 console.log(searchterm);
 console.log(category);
}, [searchterm,category])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response1 = await getNewsData(category,"en",searchterm);
        console.log(response1);
        setcardsdata(response1)
        await new Promise(resolve => setTimeout(resolve, 2000)); 
        const response = await getTopHeadlines(category,"en",searchterm); // Assuming getTopHeadlines is defined and returns a promise
        setData(response);console.log(response)
      } catch (error) {setData([]);setcardsdata([]);
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchterm,category]); 
  const [cardsdata,setcardsdata]=useState([]);
// const cardsdata={
//   "totalArticles": 3706,
//   "articles": [
//     {
//       "title": "I tested Google's new smart thermostat, and it managed my home like a champ",
//       "description": "The Google Nest Learning Thermostat is the perfect example of a gorgeous piece of tech that works and promises to remain relevant.",
//       "content": "Maria Diaz/ZDNET\nZDNET's key takeaways\nThe Google Nest Learning Thermostat\nThe fourth-generation smart thermostat learns behaviors, trends, and patterns and can adjust settings accordingly. The Nest Temperature Sensor can go in a different room in yo... [7314 chars]",
//       "url": "https://www.zdnet.com/home-and-office/smart-home/i-tested-googles-new-smart-thermostat-and-it-managed-my-home-like-a-champ/",
//       "image": "https://www.zdnet.com/a/img/resize/db08dcf776c4cf1a770f8b72944316345a5cc56b/2024/09/11/7ac55fdf-c2fc-45e3-abd8-a1fa2df6d6b6/4.jpg?auto=webp&fit=crop&height=675&width=1200",
//       "publishedAt": "2024-09-12T12:48:00Z",
//       "source": {
//         "name": "ZDNet",
//         "url": "https://www.zdnet.com"
//       }
//     },
//     {
//       "title": "Apple Shares First Example of Image Playground in Action, and It's Based on Craig Federighi's Dog",
//       "description": "Apple has shared its first \"real-world example\" of Image Playground, the upcoming Apple Intelligence feature that generates cartoon-like...",
//       "content": "Apple has shared its first \"real-world example\" of Image Playground, the upcoming Apple Intelligence feature that generates cartoon-like illustrations based on a text prompt. The picture was apparently made by Apple's senior VP of software engineerin... [1672 chars]",
//       "url": "https://www.macrumors.com/2024/09/12/apple-shares-image-playground-example/",
//       "image": "https://images.macrumors.com/t/Q4ZSnC_HIFffXqzPXc9KO42GWjs=/1920x/article-new/2024/09/image-playground-bailey.jpg",
//       "publishedAt": "2024-09-12T12:37:52Z",
//       "source": {
//         "name": "MacRumors",
//         "url": "https://www.macrumors.com"
//       }
//     },
//     {
//       "title": "Carlos Alcaraz’s Missing Piece Identified as ATP Legend Dishes Out Key Advice With an Apt ‘Big 3’ Example",
//       "description": "What could be missing from Carlos Alcaraz's tennis puzzle after dominating half of the calendar year? David Ferrer has something to say!",
//       "content": "“When you lose, everything is always dramatized”- said the ATP legend, David Ferrer on Carlos Alcaraz’s early round exit at the US Open. It was a shocking result for the Spaniard. However, the World No.3 had been consistent for over half of the seaso... [4730 chars]",
//       "url": "https://www.essentiallysports.com/atp-tennis-news-carlos-alcarazs-missing-piece-identified-as-atp-legend-dishes-out-key-advice-with-an-apt-big-three-example/",
//       "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/Facebook-Article-Picture-Design-1920-%C3%97-1080px-3-2-560x315.png",
//       "publishedAt": "2024-09-11T11:16:07Z",
//       "source": {
//         "name": "Essentially Sports",
//         "url": "https://www.essentiallysports.com"
//       }
//     },
//     {
//       "title": "30 Best Characters In Every Arrowverse TV Show Ranked",
//       "description": "The Arrowverse is so far the best example of a shared DC universe in live-action, with several iconic DC heroes and villains from the comics shining.",
//       "content": "The Arrowverse has formally come to an end, bringing many DC characters' stories to a close after more than a decade. The shared universe thrived for years, with the Arrowverse's crossover events uniting many characters from all over the franchise. S... [8891 chars]",
//       "url": "https://screenrant.com/arrowverse-tv-shows-best-characters-ranked/",
//       "image": "https://static1.srcdn.com/wordpress/wp-content/uploads/wm/2024/09/green-arrow-stephen-amell-flash-grant-gustin.jpg",
//       "publishedAt": "2024-09-10T20:40:15Z",
//       "source": {
//         "name": "Screen Rant",
//         "url": "https://screenrant.com"
//       }
//     },
//     {
//       "title": "These Apple Products Are Still Sold With Lightning After More AirPods Switch to USB-C",
//       "description": "Apple has been gradually transitioning its products from Lightning to USB-C in recent years. For example, the charging cases for both new AirPods 4...",
//       "content": "Apple has been gradually transitioning its products from Lightning to USB-C in recent years. For example, the charging cases for both new AirPods 4 models unveiled this week, and the revised AirPods Max, are now equipped with a USB-C port. In additio... [810 chars]",
//       "url": "https://www.macrumors.com/2024/09/10/apple-still-sells-these-lightning-products/",
//       "image": "https://images.macrumors.com/t/ydSnppzAzphaBIt8NndX5rfHX28=/2500x/article-new/2023/04/lightning-connector-feature-purple.jpg",
//       "publishedAt": "2024-09-10T16:11:49Z",
//       "source": {
//         "name": "MacRumors",
//         "url": "https://www.macrumors.com"
//       }
//     },
//     {
//       "title": "Patrick Mahomes Becomes Michael Jordan of the Current Era as Bobby Witt Jr Wishes to Emulate Chiefs QB’s Success",
//       "description": "Patrick Mahomes is setting an example in other sports besides the NFL. He has become the biggest inspiration of MLB player, Bobby Witt Jr.",
//       "content": "Patrick Mahomes’ success and his vibrant demeanor have not only left his mark on the NFL but also motivated other sports players. And, this time, after Derek Jeter, ex-baseball shortstop, there is another baseball shortstop who the NFL’s no. 1 quarte... [3843 chars]",
//       "url": "https://www.essentiallysports.com/nfl-active-news-patrick-mahomes-becomes-michael-jordan-of-the-current-era-as-bobby-witt-jr-wishes-to-emulate-chiefs-qbs-success/",
//       "image": "https://image-cdn.essentiallysports.com/wp-content/uploads/2024-08-10T214639Z_208089564_MT1USATODAY23968341_RTRMADP_3_NFL-KANSAS-CITY-CHIEFS-AT-JACKSONVILLE-JAGUARS-1.jpg",
//       "publishedAt": "2024-09-10T02:47:10Z",
//       "source": {
//         "name": "Essentially Sports",
//         "url": "https://www.essentiallysports.com"
//       }
//     },
//     {
//       "title": "Google continues Play Points promo with Playground game",
//       "description": "Google Play has been heavily promoting its Play Points loyalty program, with the latest example being at Zedd In The Park.",
//       "content": "For the past few months, Google Play has been heavily promoting its Play Points loyalty program, with the latest example being at Zedd In The Park and with Playground.\nZedd In The Park is a musical festival happening in Los Angeles this weekend, with... [1306 chars]",
//       "url": "https://9to5google.com/2024/09/06/google-play-points-playground-game/",
//       "image": "https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2024/09/Google-Play-Points-Playground-game-1.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
//       "publishedAt": "2024-09-06T17:00:00Z",
//       "source": {
//         "name": "9to5Google",
//         "url": "https://9to5google.com"
//       }
//     },
//     {
//       "title": "Ravens' Ronnie Stanley irked by multiple penalties against him",
//       "description": "Ravens left tackle Ronnie Stanley was flagged three times for illegal formation against the Chiefs and said he felt like the referees were \"trying to make an example\" of him given the rule's point of emphasis this season.",
//       "content": "Open Extended Reactions\nKANSAS CITY, Mo. -- Baltimore Ravens left tackle Ronnie Stanley felt he was being singled out by officials during Thursday night's 27-20 loss to the Kansas City Chiefs.\nStanley was flagged three times for illegal formation. He... [1733 chars]",
//       "url": "https://www.espn.com/nfl/story/_/id/41148338/ravens-ronnie-stanley-irked-multiple-penalties-him",
//       "image": "https://a.espncdn.com/combiner/i?img=%2Fphoto%2F2022%2F0929%2Fr1068761_1296x729_16%2D9.jpg",
//       "publishedAt": "2024-09-06T13:47:00Z",
//       "source": {
//         "name": "ESPN",
//         "url": "https://www.espn.com"
//       }
//     },
//     {
//       "title": "How ‘Moana 2’ charted a course back to the big screen",
//       "description": "Decision to make sequel a movie prime example of Disney’s new course",
//       "content": "Decision to make sequel a movie prime example of Disney’s new course\nWhen you look at some of the numbers, it’s hard to believe “Moana 2” was ever going to be anything but a movie.\nWhen the teaser trailer for “Moana 2” dropped in May, it was watched ... [5618 chars]",
//       "url": "https://www.caledoniacourier.com/entertainment/how-moana-2-charted-a-course-back-to-the-big-screen-7522027",
//       "image": "https://www.bpmcdn.com/f/files/shared/feeds/gps/2024/09/web1_20240905170956-66da2946530ede66721e36d3jpeg.jpg;w=967;h=640;mode=crop",
//       "publishedAt": "2024-09-06T13:30:00Z",
//       "source": {
//         "name": "Caledonia Courier",
//         "url": "https://www.caledoniacourier.com"
//       }
//     },
//     {
//       "title": "What is founder mode?",
//       "description": "Steve Jobs is supposedly the ultimate example of an entrepreneur remaining in \"founder mode\"",
//       "content": "In This Story ABNB AAPL\nYet another new buzzword has hit the world of startups, dividing the already fractious Silicon Valley community over the best way to manage a growing company.\nNvidia stock is navigating one of its most turbulent weeks ever CC ... [2526 chars]",
//       "url": "https://qz.com/manager-mode-founder-mode-startups-1851641323",
//       "image": "https://i.kinja-img.com/image/upload/c_fill,h_675,pg_1,q_80,w_1200/f4557640446fe1d1a0af0dabdebcfafd.jpg",
//       "publishedAt": "2024-09-06T09:00:00Z",
//       "source": {
//         "name": "Quartz India",
//         "url": "https://qz.com"
//       }
//     }
//   ]
// }

  return (
    <div>
        <MainPageNavbar setlang1={setlang} setsearchterm={setsearchterm} setcategory={setcategory}/>
        {/* MainPage */}
       {(lang!=="English"  || (!data || data.length===0)) &&
        <div style={{paddingTop:'3rem'}}>

          <img src="https://img.freepik.com/premium-vector/no-data-found-empty-file-folder-concept-design-vector-illustration_620585-1698.jpg" alt="No Data Found" />
        </div>
       
    }  {(lang==="English" || data.length!==0 )&& <>
       <h1>

      Latest Headlines
       </h1>
       <Carousel data-bs-theme="dark">
  {data  && data.length > 0 && data.map((article, index) => ( // Check if articles exist
    <Carousel.Item key={index}>
      <img
        className="d-block w-100 "
        src={article.image}
        alt={`Slide ${index + 1}`}
        style={{ height: '50rem', objectFit: 'cover' }} // Adjusted image size and fit
      />
      <Carousel.Caption>
        <h5>{article.title}</h5>
        <p>{article.description}</p>
      </Carousel.Caption>
    </Carousel.Item>
  ))}
</Carousel>
        <div style={{padding:'5rem'}}>
          <div className="row">
            {cardsdata && cardsdata.length && cardsdata.map((card, index) => (
              index % 5 === 0 && index !== 0 ? (
                <div className="w-100" key={index}></div> 
              ) : null
            ))}
            {cardsdata && cardsdata.length && cardsdata.map((card, index) => (
              <div className="col mb-4" key={index}> 
                <div className="card" style={{width:'22rem',height:'25rem', marginBottom: '1rem'}}> 
                  <img className="card-img-top" style={{height:'10rem'}} src={card.image} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title" style={{ display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {card.title}
                    </h5>                    
                    <p className="card-text">
                      {card.description.length > 100 ? `${card.description.slice(0, 100)}...` : card.description}
                    </p>
                   
                    <a style= {{position:'absolute',bottom:'1rem',right:'7rem'}}href={card.url} className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        </> }
        </div>
  )
}
