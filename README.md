REQUERIMIENTOS:

Qué se pide?

- Se pide crear un juego idéntico al gato, debe componerse de 1 tablero de 9 espacios donde los jugadores podrán hacer click y 
ocupar la casilla con una cruz o un circulo según corresponda al jugador.
- El jugador que logre alinear 3 figuras, vertical, horizontal o diagonalmente gana. 
- En caso de no cumplirse la condición de ganar y el tablero esté completo se declara empate.
- A modo de ejemplo, ver la imagen en esta misma carpeta "ejemplo.jpeg"


Cómo se va a hacer?
- A efectos de practicar el useState, solo se permite el uso de useState y no se puede hacer uso de manejadores de estado (Redux, Context API)
- Se permite el uso de UseEffect pero se recomienda omitirlo en un principio y hacer dos implementaciones, a modo de entender mejor su uso.
- Crear un componente que representará a todo el tablero
- Crear un componente que represente un cuadrito 
- Cada cuadrito tendrá un OnClick que cuando se clickee ponga un circulo o una cruz según corresponda.
- El estado del tablero es quién va a manejar la condición de ganar
- Guardar una matriz en el estado, cada vez que se clickee un cuadrito esté se agregará a la matriz y cada vez se agregue un 
cuadrito se verificará si el jugador ha ganado. 
- Otras formas podrían implementarse, sentirse libre de implementarlas pero ir llenando la documentación.
