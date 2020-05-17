import React from 'react'
import {Button} from 'reactstrap'



const LinkedIn = (props) => {
    return <>
        <Button 
        className="small-margin"
        tag="a"
        color="success"
        size="large"
        target="_blank"
        href={props.link}>
            LinkedIn
        </Button>
    </>
}

export default LinkedIn