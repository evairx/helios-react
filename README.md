
# react-helios

> Helios is a simple React slider developed by evairx, it can be

> customized.

# [Documentation](https://evairx.github.io/helios/)

## step 1 - installation

```bash
npm install react-helios
```
  

## step 2 - import the component

```JSX
import Helios from "react-helios";
import "react-helios/dist/helios.min.css";
```

## step 3 - use it

  

```JSX
import Helios from "react-helios";
import "react-helios/dist/helios.min.css";
  
export default function Example() {
	return (
		<Helios
			infinite={true}
			dots={true}
			/**more props */
		>
			<div>Slider 1</div>
			<div>Slider 2</div>
		</Helios>
	)
}

```

## For more parameters, methods etc. see the official docu