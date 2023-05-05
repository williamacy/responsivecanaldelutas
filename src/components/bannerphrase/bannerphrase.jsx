import React from "react";
import './bannerphrase.css'

const Bannerphrase = () => {
    return(
        <div className="Programs" id="programs" style={{ marginTop: "3rem" }}>
            {/* header o cabeçalho dos planos */}
            {/* explore nossas modalidades */}
            <div className="programs-header" 
            // style={{ display: "flex", 
            // justifyContent: "center", 
            // alignItems: "center", 
            // flexDirection: "row", 
            // textAlign: "center",
            // gap: '2.5rem' }}
            >
                <span className="stroke-text">
                    Te ajudaremos a superar os limites físicos e mentais.
                </span>
               

            </div>

        </div>
    )
}

export default Bannerphrase;
