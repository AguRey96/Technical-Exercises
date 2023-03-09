/*      EXERCISE 1    
Reading the following statements, please indicate which information
will be printed on the screen.*/

var numberOfCalls = 0
const calculateBinomial = (a, b) => {
  var squereOfA = a * a
  var squereOfB = b * b
  numberOfCalls++
  return squereOfA + squereOfB + 2 * a * b
}
/*
alert(calculateBinomial(2,3))
La respuesta es 25 (numberOfCalls = 1)

alert(calculateBinomial(4,5))
La respuesta es 81 (numberOfCalls = 2)

alert(numberOfCalls)
numberOfCalls = 2

alert(typeof squereOfA)
Es undefined porque squereOfA esta inicializado dentro de la funcion calculateBinomial
*/

/*      EXERCISE 2    
Given the following data array. */

const array = [
  "Apple",
  "Orange",
  "Banana",
  "Strawberry",
  "Grape",
  "Mango",
  "Melon",
  "Pineapple",
  "Peach",
  "Peach",
]

/* Get all strings containing the letter 'p'. */
const stringWhitP = array.filter((e) => e.toLocaleLowerCase().includes("p"))

//stringWhitP es un array con todos los string que contienen p. La funcion toLocaleLowerCase() la use para pasar todo a minuscula tambien me da los strings que tienen 'p' solo en mayuscula.

/* Obtain the ‘Grape’ string. */
const stringGrape = array.find((e) => e.includes("Grape"))

/*      EXERCISE 3    
Using the following function,print by console the message: “Etendo!!!”.*/

const mostrar = (param) => {
  param()
}
const message = () => {
  console.log("Etendo!!!")
}
mostrar(message)

// La funcion message imprime "Etendo!!!" en la consola. Asi que le pasamos dicha funcion como argumento a mostrar, la cual ejecuta la funcion message e imprime por consola.

/*      EXERCISE 4    
Write a JavaScript program to check whether a matrix is a diagonal
matrix or not. In linear algebra, a diagonal matrix is a matrix in which the
entries outside the main diagonal are all zero (the diagonal from the upper
left to the lower right).*/

const diagonal = (matrix) => {
  const length = matrix.length
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (i !== j && matrix[i][j] !== 0) return false
    }
  }
  return true
}

/*      REACT      
Note: Here you have an icon to select the correct options.*/

/*1. What are props in a component?
✅ They are the parameters of a component.
❌ It Is the state of the component.
✅ It is a mechanism to put data inside the component. */

/*2. What is a component?
❌ An element.
✅ A function or class that returns an element.
❌ An element that returns a function or class. */

/*3. Which of these component types are valid?
❌ Complete Component.
✅ Class Component.
✅ Component Function.
✅ Parent Component.
✅ Child Component. */

/*4. What does the term JSX refer to?

❌ It is the mix between pure HTML and javascript , for this reason JSX is
used to identify React syntax.

✅ Similar in appearance to XML and HTML, JSX is used to create elements
using a familiar syntax.

❌ Term used by React that refers to the mixture of pure XML, HTML and
pure JavaScript.

❌ Allows to represent the mixture of XML, which is similar to HTML, and
JavaScript. */

/*5. How do I pass a value from a parent component to a child component?

✅ Using props.
❌ Through the use of states.
❌ By only destructuring one or more objects.
✅ Referring the child component to the values of the parent component.
✅ Using values from the global application context usage. */

/*6. Created the following state of a variable:
 */
import { useState } from "react"
const [value, setValue] = useState("Value")

/*
Which of these implementations change the state of a component?
❌ state.value = “my value”
✅ setValue(“my value”)
❌ setState({ value: “my value” })
❌ value = { value: “my value” }
❌ setValue({“value”: “my value”})
*/

/*
7. How many and which arguments does useEffect Hook receive?

❌ An argument to provoke the effect.

❌ Three arguments, which are the dependencies, the states of the variables
and the effect.

❌ Two arguments, which are the states of the variables and the
dependencies.

❌ An argument that receives the state of the variables.

✅ Two arguments, which are the effect and the dependencies.
*/

/*
8.How do you import Javascript modules installed with NPM or YARN?

❌ import name from 'node_modules/name';
❌ import name from '../../node_modules/name/name.js';
❌ import name from '../../node_modules/name/index.js';
✅ import name from 'name';
Others: */

/*
9. What functionality does the use of Context API provide?

✅ It is a mechanism that provides a way to pass data through the component
tree without manually passing props at all levels.

❌ It is a functionality that facilitates the handling of data from parent
components to child components.

❌ It is a React modality that replaces the use of props in its entirety to be
able to consume variable values no matter where they are located,
facilitating data management throughout the application.
*/

/*
10. How do I import the following component, considering that it is inside a
file in the same directory, called MyComponent.js?*/

export const MyComponent = () => {
  return <h1> Hello World</h1>
}
/*
❌ import MyComponent from './MyComponent';
❌ import { MyComponent } from 'MyComponent';
❌ import MyComponent from 'MyComponent.js';
✅ import { MyComponent } from './MyComponent.js';
Others: */

/*
11. What is the difference between class components and functional
components? 
Un componente de clase es una clase de javascript que extiende la clase Component de React
Este nos permite guardar su estado y controlar lo que ocurre durante su ciclo de vida, exponiéndonos métodos como componentDidMount
Al ser una clase de Js tendremos que utilizar un constructor(props)
*/
class EjClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "Agustin Reynoso",
      age: props.age,
    }
  }
  render() {
    return <div> Nombre: {this.state.name} </div>
  }
  componentDidMount() {
    this.startAssignment()
  }
}
/* Un componente funcional recibe las props y retorna datos.
no puede guardar controlar por si solo el estado y el ciclo de vida, pero hay hooks de React que hacen esa funcion */
import { useState, useEffect } from "react"
const EjFunctional = (props) => {
  const [name, setName] = useState("Agustin Reynoso")
  const [age, setAge] = useState(props.age)
  useEffect(() => {
    startAssignment()
    return () => {
      finishAssignment()
    }
  })
  return <div> Nombre {name} </div>
}

/* Entonces a principal diferencia entre estos dos tipos de componentes es que los componentes de clase tienen estado y ciclo de vida, mientras que los componentes funcionales no tienen estado y ni ciclo de vida. Además, los componentes funcionales son mas simples y ligeros que los componentes de clase. */

/*
12. How would you set the state of a component? 

En un componente funcional se hace con el Hoock useState
const [age, setAge] = useState(10);
10 es el valor incial de age, y con el setAge se puede modificar el valor de age
setAge(12) entonces age se actualiza a 12


En un componente de clase el estado age se inicializa en el constructor,
constructor(props) {
    super(props);
    this.state = {
      age: 10
    }
}
y para actualizarlo se usa el this.setState.
this.setState({
      age: 12
    });
*/

/*
13. What happens when we change the state of a component? 

Pueden pasar varias cosas, depende de que necesitas que haga el componente.
por ejemplo:
-El componente puede volver a renderizarse con cada cambio de estado, afectando apariencia o comportamiento.
-Puede disparar algun evento que este sujeto a cierto estado, como un loading si es true se carge el componente loading.
*/

/*
14. Write a component that renders a list of elements, given a prop that contains an array of objects in the following form: { firstname: "demo", lastname: "demo", dni: 1234 }
*/

import React from "react"
export const Component14 = ({ array }) => {
  return (
    <ul>
      {array.map((e, i) => (
        <li key={i}>
          {e.firstname}
          {e.lastname}
          {e.dni}
        </li>
      ))}
    </ul>
  )
}

/*
15. Write a component that receives a prop called "data", and renders an H1 with the content of data.
 */

import React from "react"
export const Component15 = ({ data }) => {
  return <h1>{data}</h1>
}

/*
16. What is the error in the following component?
*/
export const Button = ({ text }) => {
  ;<div className="button">
    <h1 className="text-button">{text}</h1>
  </div>
}

// Le falta el return a la funcion flecha, entonces no devuelve nada explicitamente.

/*
17. Explain, in your own words, what this component does.
 */
import { useState } from "react"
export const Component = () => {
  const [state, setState] = useState(1)
  const click = (propertyValue /*: number* */) => {
    setState(propertyValue + 1)
  }
  return (
    <>
      <h1>{state}</h1>
      <button onClick={() => click(state)}>Click here</button>
    </>
  )
}

/*
Este componente es como un contador de click que muestra un numero y un boton.
Muestra un numero que empieza en 1 y con cada click que das en el boton se ejecuta la funcion click que recibe el estado actual del componente como argumento, dicha funcion llama a la funcion serState que se actualice con el valor acutal (argumento) sumandole 1.
 */

// en la funcion deje comentado ":numero" que es el type de propertyValue y es TypeScript, y como este archivo es Js da error.

/*
18. How would you make a Rest API call from JavaScript? 

Para llamar a la API se puede usar fetch, o alguna libreria como axios.
La funcion fetch le 'pega' a la url de la API y devuelve una promesa que se resuelve en la respuesta de la API. Para trabajar la respuesta usamos la funcion .then y .catch en caso de que ocurra un error.
EJEMPLO
*/
fetch("URL-API")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error(error))
/*
Se hacen 2 .then el primero convierte la respuesta en formato JSON, la función devuelve otra promesa que resuelve en los datos de la respuesta como objeto Js.
El segundo .then toma la respuesta de la promesa anterior y la imprime en consola.

Luego la forma en que se realiza la llamada dependerá del tipo de solicitud que se esté realizando (GET, POST, PUT, DELETE)
 */

/*

19. What is the use of the useEffect hook?

El useEffect tiene 2 partes, un callback que es un trozo de codigo que deseamos realizar (Se ejecuta después de que se ha renderizado el componente) y las dependencias que es un array que contiene las variables que si cambian, deben hacer que el callback se vuelva a ejecutar. Si la lista está vacía, el callback se ejecutará solo una vez, después de que el componente se haya montado.
*/

/*
20. How would you develop a custom hook that exposes methods to save and modify a counter? The hook must have a parameter that allows the developer to specify how much the counter should add for each call to the setter. */

import { useState } from "react"
const useCount = (initialValue, incrementAmount) => {
  const [count, setCount] = useState(initialValue)
  const incrementCount = () => {
    setCount((prevCount) => prevCount + incrementAmount)
  }
  return {
    setCount,
    incrementCount,
  }
}
/************************************************************/
import React from "react"
import useCount from "./useCounter"
const ComponentCount = () => {
  const { count, incrementCount } = useCount(0, 1)
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={incrementCount}>Increment</button>
    </div>
  )
}

//Llamamos al CustomHoock con un valor inicial de 0 y un incremento de 1 en cada vez que damos click en el botton Increment que ejecuta incrementCount y se actualiza el valor count (el estado de count se maneja en el customHoock)
