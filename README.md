# Estructura PWA con Next JS

La idea de este repositorio es mostrar el stack y estructura para realizar PWA con react js

## Stack
Las principales tecnologias y librerias usadas para el proyecto

- Next js
- Typescript
- Redux toolkit
- Redux saga
- Css modules
- Jest
- Testing Library
- Storybook
- Eslint
- Prettier

## Storybook, design tokens y atomic design
Crear un sistema de diseño permite tener unos estilos mas faciles de mantener y compartir entre proyectos, teniendo consistencia entre ellos. Asi mismo permite crear una libreria o paquete de npm por ejemplo el cual podemos usar en diferentes proyectos

Para esto es muy util el uso de 3 herramientas principales

- **Design tokens:** Permiten tener una serie de archivos donde se va a mantener elementos de diseño necesarios para la aplicacion, como colores, tamaños de fuentes, sombras, entre otros. 

  ![code](https://user-images.githubusercontent.com/66439344/208739909-720d8d9b-33de-4ea6-8c2d-ad0302961544.png)


- **Atomic design:** El uso de atomic design permite tener componentes reusables, faciles de usar y testear, basicamente define una estructura de atomos, moleculas, organismos, plantillas y paginas ![atomic design](http://bradfrost.com/wp-content/uploads/2013/06/atomic-design.png)
ya es a eleccion saber hasta que grado generar los componentes en una app, lo ideal es tener al menos atomos y moleculas.
	 - Atomos hablese de elementos que no pueden dividirse en otros, ejemplo botones, textos, inputs
	 - Moleculas, son uniones de atomos, logrando componentes mas complejos como un dropdown, un buscador, cards
- **Storybook:** Esta herramienta permite crear una documentacion de todos componentes que se desee, permitiendo hacer un sistema de diseño y componentes, teniendolos en un solo lugar y poder ver, probarlos y saber su funcionalidad sin tener que ejecutar la aplicacion. Muy util tambien para ser el punto de entrada de una libreria de componentesa
![Screenshot_20221220_024413](https://user-images.githubusercontent.com/66439344/208753193-b4be780e-5611-4a40-98f1-bfbad3a6c3d4.png)

## SEO
Next Js nos permite tener un mejor SEO en la app debido a su SSR, lo que permite que sea mas facil de identificar el html al navegador y asu darle mejor visibilidad, por otro lado favorece el rendimiento de la aplicacion, al tener una carga inicial de un html e ir cargando el resto de contenido a medida que se va requiriendo hace que la aplicacion luzca y se vea mas rapida