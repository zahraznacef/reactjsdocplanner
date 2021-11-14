import axios from "axios"
import './App.css';
import {useState,useEffect} from "react";

// useEffect = On DOM Load

function App() {
  const [cards,setCard] = useState([]);
  const getdata = ()=>{
  axios.get('http://localhost:3000/cards').then(res =>{
      setCard(res.data)
  })
}
  const [triplecard, settriplecard] = useState([]);
  const gettriplecard = ()=>{
    axios.get("http://localhost:3000/triplecards").then(res =>{
      settriplecard(res.data)
    })
  }
  const [icon, setIcon] = useState([])
  const geticon = ()=>{
    axios.get("http://localhost:3000/icon").then(res =>{
      setIcon(res.data)
    })
  }

useEffect(() => {
  getdata();
  gettriplecard();
  geticon();
},[])

  return (
    <div>
      <div className="navigation">
          <a href="">
            <img src="https://www.docplanner.com/img/logo-default-group-en.svg?v=1" className="main_icon"/>
          </a>
          <ul className="nav-ul">
            <a href="">Exemple</a>
            <a href="">Nafd</a>
            <a href="">fzefze</a>
          </ul>
      </div>
      <div className="head-page">
        {icon.map(e =>(
          <div className="icon-div">
              <img src={e.icon} className="icon"/>
          </div>
        ))}
        <h1 className="head-page-h1">Making the healthcare experience more human</h1>
        <div className="paragraphs">
            <div>
              <p>We want patients to find the perfect doctor and book an appointment in the most easy way. The patient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere.</p>
            </div>
            <div>
              <p>We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients.</p>
            </div>
        </div>
      </div>  
      <div className="improving">
          <h1 className="improving-h1">Improve the lives of millions.<br/>Change yours forever</h1>
          <p className="header-p">More than 2100 team mates share our same vision, goals and passion. With offices in Warsaw, Barcelona, Istanbul, Rome, Bologna, Mexico City and Curitiba, our search for great talent never stops.</p>
      </div>
        <div className="triplecard">
          {triplecard.map(e =>(
            <div className={e.classname}>
                <div className="triplecard-content">
                    <img src={e.icon}/>
                    <div className="triplecard-content-head">{e.head}</div>
                    <div className="triplecard-content-content">{e.content}</div>
                </div>
                <div className="triplecard-bottom">
                    <a href="#" className="triplecard-bottom-a">{e.select}</a>
                </div>
            </div>
          ))}
        </div>

      <div className="cards">
        {cards.map(e =>(
          <div className="cards-div">
            <img src={e.img} className="cards-img"/>
            <div className="cards-content">
                <p>
                  {e.country}
                </p>
                <a href={e.link} className="cards-link">
                  See Openings
                </a>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
