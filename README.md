# react-helios
 

> Helios is a simple React slider developed by evairx, it can be
> customized.

---
# [Documentation](/)

## step 1 - installation
**using npm**
```npm install react-helios```
**using pnpm**
```pnpm install react-helios```

## step 2 - import the component
```
import Helios from "react-helios";
import "react-helios/dist/helios.min.css";
```
## step 3 - use it

```
import Helios from "react-helios";
import "react-helios/dist/helios.min.css";

export  default  function  Example() {
   return (
     <Helios
       color="#ff0000"
       height="60lvh"
       width="100%"
       infinite={true}
       /**more props */
     >
         <div>Slider 1</div>
         <div>Slider 2</div>
     </Helios>
   )
}
```
## Parameters
[INFO]: the boxes marked in the following list mean that they can already be used in your code, if they are not marked it means that they will arrive soon and are not available.

 - [x] **color:** allows you to customize the color of arrows and dots to your liking
 - [x] **height:** allows you to customize the height to your liking. 
 - [x] **width:** allows you to customize the width to your liking. 
 - [x] **infinite:** this is a boolean parameter that allows you to set your slider to be infinite or not
 - [ ] **dots**: this is a Boolean parameter that allows you to hide the dots
 - [ ] **autoplay**: este parametro viene activo por defecto, pero puedes modificarlo para cambiarlo

## For more parameters, methods etc. see the official documentation.