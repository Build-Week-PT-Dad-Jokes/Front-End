import React from 'react';
import { Button } from '@material-ui/core'

const BackButton = props => {
  return (
    <Button className="back-button" onClick={() => props.history.goBack()}>Go Back</Button> 
  )
}

export default BackButton;