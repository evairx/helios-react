import Helios from "helios-react"
import '../css/helios.css';

function CustomNextButton() {
   return (
        <div className="next-icon"></div>
   )
}

function CustomPrevButton() {
    return (
        <div className="prev-icon"></div>
    )
 }

 
export function Example() {
    return (
        <Helios
            nextArrow={{ component: <CustomNextButton />}}
            prevArrow={{ component: <CustomPrevButton />}}
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

export function ExampleCSS () {
    return (
        <Helios
            nextArrow={{ component: <CustomNextButton />, class: 'your-custom-next-class' }}
            prevArrow={{ component: <CustomPrevButton />, class: 'your-custom-prev-class' }}
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