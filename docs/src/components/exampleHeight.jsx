import Helios from "helios-react"
import '../css/helios.css';

export default function Example() {
    return (
        <Helios
            infinite={true}
            dots={true}
            height="500px"
        >
            <div className="boxH">
                <h1>
                    Slider 1 with 500px height
                </h1>
            </div>
            <div className="boxH">
                <h1>
                    Slider 2 with 500px height
                </h1>
            </div>
            <div className="boxH">
                <h1>
                    Slider 3 with 500px height
                </h1>
            </div>
            <div className="boxH">
                <h1>
                    Slider 4 with 500px height
                </h1>
            </div>
            <div className="boxH">
                <h1>
                    Slider 5 with 500px height
                </h1>
            </div>
        </Helios>
    )
 }