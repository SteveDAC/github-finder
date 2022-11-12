import spinner from './assets/spinner.gif'

function Spinner() {
  return (
    <div className='w-100 mt-20'>
      <img
        src={spinner}
        alt='Loading...'
        width={45}
        className='mx-auto text-center'
      />
    </div>
  )
}

export default Spinner
