import PropTypes from 'prop-types'
import Person from './Person'
import { useEffect, useState } from 'react'

const People = ({ people, setPeople }) => {
  const [editingId, setEditingId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedPerson, setEditedPerson] = useState({
    name: '',
    role: '',
    img: ''
  })
  const [personToDelete, setPersonToDelete] = useState(null);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setEditedPerson((prevState) => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleEdit = (id) => {
    setEditingId(id);
    setIsEditing(true);
    const personToEdit = people.find((person) => {
      return person.id === id;
    });
    setEditedPerson({ ...personToEdit });
  }

  // const handleCreate = (e) => {
  //   e.preventDefault();
  //   setPeople([...people, { id: people.length + 1, ...editedPerson }])
  //   setEditedPerson({ name: '', role: '', img: '' })
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isEditing) {
      setPeople([...people, { id: people.length + 1, ...editedPerson }])
    } else {
      // const updatePeople = people.map(person => person.id === editingId ? editedPerson : person);
      const updatedPeople = people.map((person) => {
        return person.id === editingId ? {
          ...person,
          name: editedPerson.name,
          role: editedPerson.role,
          img: editedPerson.img
        } : person
      });
      setPeople([...updatedPeople])
    }
    setIsEditing(null);
    setEditedPerson({ name: '', role: '', img: '' });
    setIsEditing(false);
  }

  const handleDelete = (id) => {
    setPersonToDelete(id);
  }

  const confirmDelete = () => {
    setPeople(people.filter((person) => person.id !== personToDelete));
    setPersonToDelete(null);
  }

  const cancelDelete = () => {
    setPersonToDelete(null)
  }

  return (
    <>
      <h2 className='text-center my-4'>IT Team</h2>
      <div className='container'>
        <div className='row d-flex flex-wrap row-gap-4 row-cols-1 row-cols-md-2 row-cols-lg-3'>
          {people.map((person) => {
            return <Person {...person} key={person.id} handleEdit={handleEdit} handleDelete={handleDelete} />
          })}
        </div>
      </div>
      <div className="container mt-4 p-2">
        <h2 className='text-center'>{!isEditing ? 'Crear nuevo' : 'Editar'} empleado</h2>
        <form onSubmit={handleSubmit} className='d-flex flex-column row-gap-3'>
          <div>
            <label htmlFor="name">Nombres</label>
            <input type="text" name='name' value={editedPerson.name} onChange={handleChange} required className='form-control' />
          </div>
          <div>
            <label htmlFor="role">Role</label>
            <input type="text" name='role' value={editedPerson.role} onChange={handleChange} required className='form-control' />
          </div>
          <div>
            <label htmlFor="img">Avatar</label>
            <input type="text" name='img' value={editedPerson.img} onChange={handleChange} required className='form-control' />
          </div>
          <div className='text-center'>
            <button type="submit" className='btn btn-primary'>{isEditing ? 'Modificar' : 'Agregar'}</button>
            {/* <button type="submit" className="btn btn-primary" onClick={isEditing ? handleSave : handleCreate }> {isEditing ? 'Actualizar' : 'Crear'} </button> */}
          </div>
        </form>
      </div>
      <div id="deleteModal" className='modal fade' tabIndex='-1'>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Confirmar Eliminación</h4>
              <button type="button" className='btn-close' data-bs-dismiss='modal' onClick={cancelDelete}></button>
            </div>
            <div className="modal-body">
              <p>¿Estás seguro de eliminar a {people.find(person => person.id === personToDelete)?.name}</p>
            </div>
            <div className="modal-footer">
              <button type='button' className="btn btn-secondary" data-bs-dismiss='modal' onClick={cancelDelete}>Cancelar</button>
              <button type='button' className='btn btn-danger' data-bs-dismiss='modal' onClick={confirmDelete}>Eliminar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default People

People.propTypes = {
  people: PropTypes.array,
  setPeople: PropTypes.func
}