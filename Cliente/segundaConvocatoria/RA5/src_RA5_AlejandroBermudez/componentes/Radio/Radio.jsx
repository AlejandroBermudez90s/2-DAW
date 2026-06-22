import { useState } from 'react';
import './Radio.css'


const Radio = () => {

    const [radio, setRadio] = useState({
                                            emisoras  : [
                                                         { freq : '90.1', name : 'Classic FM'},
                                                         { freq : '94.7', name : 'Pop Murcia'},
                                                         { freq : '98.5', name : 'Murcia Hits'},
                                                         { freq : '102.3', name : 'Rock Station'},
                                                         { freq : '107.9', name : 'Electro Wave'},
                                                        ],
                                            volumen   : 5,
                                            selected  : 0,
                                            encendido : false
                                        })
                                    
    function radioOnOff () {
        setRadio({...radio, encendido : !radio.encendido})
    }

    function siguienteEmisora () {
        if (radio.selected > radio.emisoras.length-2) {
            radio.encendido ? setRadio({...radio, selected : 0}) : setRadio(radio)
        } 
        else {
            radio.encendido ? setRadio({...radio, selected : radio.selected + 1}) : setRadio(radio)
        }
    }

    function anteriorEmisora () {
        if (radio.selected < 0) {
            radio.encendido ? setRadio({...radio, selected : radio.emisoras.length}) : setRadio(radio)
        } 
        else {
            radio.encendido ? setRadio({...radio, selected : radio.selected - 1}) : setRadio(radio)
        }
    }

    function manejarVolumen() {
        radio.encendido ? setRadio({...radio, volumen : radio.volumen.value}) : setRadio(radio)
    }

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
                    <div className="frequency" id="freq">{radio.encendido ? (radio.emisoras.map(radio => radio.freq)[radio.selected]) : ''}</div>
                    <div className="station" id="station">{radio.encendido ? (radio.emisoras.map(radio => radio.name)[radio.selected]) : ''}</div>
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
                    <button onClick={anteriorEmisora}>⏮</button>
                    <button onClick={radioOnOff}>▶</button>
                    <button onClick={siguienteEmisora}>⏭</button>
                </div>

                <div className="volume">
                    <span>VOLUMEN</span>
                    <input type="range" min="0" max="10" onChange={manejarVolumen}/>

                </div>
                </div>

                <div className="footer">
                Desarrollo web en entorno cliente - RA5
                </div>
                {JSON.stringify(radio)}
            </div> 
            )
}
export default Radio;