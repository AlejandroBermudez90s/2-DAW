import './Radio.css'


const Radio = () => {

    return (  <div className="radio">
                <div className="antenna"></div>

                <div className="top">
                <div className="brand">RADIO FM</div>

                <div className="signal">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                </div>

                <div className="screen">
                    <div className="frequency" id="freq"></div>
                    <div className="station" id="station"></div>
                </div>

                <div className="speaker">
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                <div className="hole"></div>
                </div>

                <div className="controls">
                <div className="btn-group">
                    <button>⏮</button>
                    <button>▶</button>
                    <button>⏭</button>
                </div>

                <div className="volume">
                    <span>VOLUMEN</span>
                    <input type="range" min="0" max="10" />

                </div>
                </div>

                <div className="footer">
                Desarrollo web en entorno cliente - RA5
                </div>
                {JSON.stringify("estado de la radio")}
            </div> 
            )
}
export default Radio;