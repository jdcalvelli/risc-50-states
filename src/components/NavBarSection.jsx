import React from "react";

// stateless nav bar with risc logo and back to risc area

function NavBarSection(props) {
    return (
        <div className="navBarSection">
            {/* SVG IMAGE FOR LOGO */}
            <a href="https://risc.uchicago.edu"><img src="src/assets/risc_LOGO.svg" alt="RISC Logo" /></a>
            <h3>Back to RISC</h3>
        </div>
    )
}

export { NavBarSection }