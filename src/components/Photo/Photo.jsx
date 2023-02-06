import React from 'react'
import PropTypes from 'prop-types'

const Photo = ({url}) => {

  return (

    <div>
        <img src={url} alt="" width='200' />
    </div>

  )
}

export default Photo


Photo.propTypes = {

    url: PropTypes.string.isRequired,

}