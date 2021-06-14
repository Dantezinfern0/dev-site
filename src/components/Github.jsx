import React from 'react'
import { Button } from 'reactstrap'

const git = "https://github.com/Dantezinfern0"

const Github = () => {
    return <>
    <Button
        className="small-margin button-bump"
        tag="a"
        color="success"
        size="large"
        target="_blank"
        href={git}>
            Github
        </Button>
        </>
}

export default Github
