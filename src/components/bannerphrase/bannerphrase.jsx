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
                    Te 
                </span>
                <span>
                    ajudaremos
                </span>
                <span className="stroke-text">
                    a
                </span>
                <span>
                    superar 
                </span>
                <span className="stroke-text">
                    os
                </span>
                <span>
                    limites.
                </span>
                <span className="stroke-text">
                    físicos
                </span>
                <span>
                    e
                </span>
                <span className="stroke-text">
                    mentais.
                </span>
               

            </div>

        </div>
    )
}

export default Bannerphrase;
