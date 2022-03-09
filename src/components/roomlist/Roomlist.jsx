import "./roomlist.scss"

const rooms = [1, 2, 3, 4, 5]

function Roomlist() {
  return (
    <div className="roomlist">
        <h2>Nos chambres</h2>
        <div className="wrapper">
            {rooms.map((e) => {
                return <div className="room-card">Chambre {e}</div>
            })}
        </div>
    </div>
  )
}

export default Roomlist