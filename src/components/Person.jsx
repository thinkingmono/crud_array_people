import PropTypes from "prop-types"

const Person = ({ name, img, role }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: '18rem', height: '30rem' }}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title">{name}</h3>
          <p className="card-text">{role}</p>
          <div className="container mb-4 d-flex flex-direction-row justify-content-between">
            <button className="btn btn-success">Editar</button>
            <button className="btn btn-danger">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Person

Person.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  role: PropTypes.string
}