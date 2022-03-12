import "./map.scss"

function Map() {
  return (
    <div className="map-container">
        <div className="adress">
            <p>Télephone : 07 42 42 42 42</p>
            <p>Adresse : quelque part à Argeles </p>
            <p>Après le sapin prendre trois fois à gauche jusqu'à nous voir sur votre droite.</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11670.515807174963!2d-0.10540200711223457!3d43.007147057749165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd57da6c4ee15807%3A0x406f69c2f3d8c30!2s65400%20Argel%C3%A8s-Gazost!5e0!3m2!1sfr!2sfr!4v1647090860523!5m2!1sfr!2sfr"
            className="map"
            width= "50%"
            height= "300"
            allowfullscreen="" 
            loading="lazy">
        </iframe>
    </div>
  )
}

export default Map