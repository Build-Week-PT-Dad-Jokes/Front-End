import React from "react"
import {Error, CheckCircle} from "@material-ui/icons"

export const showErrors = (type, submitting, touched, errors) => {

    if(touched[type] && errors[type]) {
      return(
        <div>
          <span className="error-text">
            {errors[type]}
          </span>
          <Error className="error-icon" fontSize="medium"/>
        </div>
      )
    }
    else if(submitting) {
      return <CheckCircle className="check-icon" fontSize="medium"/>
    }
  }