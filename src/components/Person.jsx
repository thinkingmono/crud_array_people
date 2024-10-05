import PropTypes from "prop-types"

const Person = ({ id, name, img, role, handleEdit, handleDelete }) => {
  return (
    <div className="col">
      <div className="card" style={{ width: '18rem', height: '30rem' }}>
        <img src={img} className="card-img-top" alt="" />
        <div className="card-body">
          <h3 className="card-title text-center">{name}</h3>
          <p className="card-text text-center">{role}</p>
          <div className="container mb-4 d-flex flex-direction-row justify-content-center column-gap-2">
            <button className="btn btn-success" onClick={() => handleEdit(id)}>Editar</button>
            <button className="btn btn-danger" onClick={() => handleDelete(id)} data-bs-toggle="modal" data-bs-target="#deleteModal">Eliminar</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Person

Person.propTypes = {
  id: PropTypes.number,
  name: PropTypes.string,
  img: PropTypes.string,
  role: PropTypes.string,
  handleEdit: PropTypes.func,
  handleDelete: PropTypes.func
}