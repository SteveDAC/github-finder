import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from 'react-icons/fa'
import PropTypes from 'prop-types'

function RepoItem({ repo }) {
  const {
    name,
    description,
    html_url,
    forks,
    open_issues,
    watchers_count,
    stargazers_count,
  } = repo

  return (
    <div className='card mb-2 rounded-md bg-base-300 text-base-content shadow-md hover:bg-base-200'>
      <div className='card-body'>
        <h3 className='mb-2 text-xl font-semibold'>
          <a href={html_url} target='_blank' rel='noreferrer'>
            <FaLink className='mr-1 inline' />
            {name}
          </a>
        </h3>
        <p className='mb-3'>{description}</p>
        <div>
          <div className='badge-lf badge-info badge mr-2'>
            <FaEye className='mr-2' /> {watchers_count}
          </div>
          <div className='badge-lf badge-success badge mr-2'>
            <FaStar className='mr-2' /> {stargazers_count}
          </div>
          <div className='badge-lf badge-error badge mr-2'>
            <FaInfo className='mr-2' /> {open_issues}
          </div>
          <div className='badge-lf badge-warning badge mr-2'>
            <FaUtensils className='mr-2' /> {forks}
          </div>
        </div>
      </div>
    </div>
  )
}

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
}

export default RepoItem
