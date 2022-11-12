import { MdError } from 'react-icons/md'
import { useContext } from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
  const { alert } = useContext(AlertContext)

  return (
    alert !== null && (
      <p className='mb-4 flex items-start space-x-2'>
        {alert.type === 'error' && <MdError className='text-3xl text-error' />}
        <p className='flex-1 text-base font-semibold leading-7 text-white'>
          <string>{alert.msg}</string>
        </p>
      </p>
    )
  )
}

export default Alert
