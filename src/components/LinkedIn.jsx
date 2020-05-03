import React from 'react'
import {Button} from 'reactstrap'

const linkedIn = {
    name: "Linkedin",
    link: "https://www.linkedin.com/in/k-dante-harasz"
}

const LinkedIn = () => {
    return <>
        <Button 
        className="small-margin"
        tag="a"
        color="success"
        size="large"
        target="_blank"
        href={linkedIn.link}>
            LinkedIn
        </Button>
    </>
}

export default LinkedIn