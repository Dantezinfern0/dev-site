import React from 'react'
import {Button} from 'reactstrap'

const EmailMe = () => {
    return <>
        <Button
                className="small-margin"
                tag="a"
                color="success"
                size="large"
                href="mailto:dankdevteam@gmail.com?Subject=Web%20Development%20Work%20Needed"
                target="_top">
            Email
        </Button>
    </>
}

export default EmailMe