import Helios from "helios-react"
import '../css/helios.css';

export default function Example() {
    return (
        <Helios
            infinite={true}
            dots={true}
        >
            <div className="box">
                <h1>
                    Slider 1
                </h1>
            </div>
            <div className="box">
                <h1>
                    Slider 2
                </h1>
            </div>
            <div className="box">
                <h1>
                    Slider 3
                </h1>
            </div>
            <div className="box">
                <h1>
                    Slider 4
                </h1>
            </div>
            <div className="box">
                <h1>
                    Slider 5
                </h1>
            </div>
        </Helios>
    )
 }