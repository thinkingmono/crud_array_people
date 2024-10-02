import PropTypes from 'prop-types'
import Person from './Person'

const People = ({ people }) => {
  return (
    <>
      <h2 className='text-center my-4'>IT Team</h2>
      <div className='container'>
        <div className='row d-flex flex-wrap row-gap-2 row-cols-1 row-cols-md-2 row-cols-lg-3'>
          {people.map((person) => {
            return <Person {...person} key={person.id} />
          })}
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