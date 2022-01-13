import React from 'react'

const Footer = () => {
    let d = new Date()
    let year = d.getFullYear()
    return <div>
        <footer>
        © {year} Dante Harasz
        </footer>
    </div>
}

export default Footer