import React from 'react'
import PropTypes from 'prop-types'
import '../../web-component/jb-date-input';
function JBDateInput(props) {
    return (
        <jb-date-input label={props.label} min={props.min} max={props.max}></jb-date-input>
    )
}
JBDateInput.propTypes = {
    label: PropTypes.string,
    min: PropTypes.string,
    max:PropTypes.string
}
export default JBDateInput