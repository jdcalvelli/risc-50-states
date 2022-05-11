import React from "react";

import imgUrl from '../assets/risc_LOGO.svg'

// stateless nav bar with risc logo and back to risc area

function NavBarSection(props) {
    return (
        <div className="navBarSection">
            {/* SVG IMAGE FOR LOGO */}
            <a href="https://risc.uchicago.edu"><img src={imgUrl} alt="RISC Logo" /></a>
            <a href="https://risc.uchicago.edu"><h3 style={{fontWeight: 'bold'}}>Back to RISC</h3></a>
        </div>
    )
}

export { NavBarSection }