import React from 'react'
import {Button} from 'reactstrap'
import resume from '../images/DanteHaraszResume.jpg'

const CV = () => {
    return <>
     <Button
        className="small-margin"
        tag="a"
        color="success"
        size="large"
        href={resume}
        target="_blank">
            Resume/CV
    </Button>
    </>
}

export default CV