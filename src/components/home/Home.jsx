import "./home.scss"

import houseImg from "../../assets/house.jpg"

function Home() {
  return (
    <div className="home">
        <h1 className="home_title">Auberge des montagnes</h1>
        <p className="home_description">Un petit coin de paradis au beau milieu des montagnes</p>
        <img className="house-img" src={houseImg}></img>
    </div>
  )
}

export default Home