REQUERIMIENTOS:

Qué se pide?

- Se pide crear un juego idéntico al gato, debe componerse de 1 tablero de 9 espacios donde los jugadores podrán hacer click y 
ocupar la casilla con una cruz o un circulo según corresponda al jugador.
-El jugador que logre alinear 3 figuras, vertical, horizontal o diagonalmente gana. 
-En caso de no cumplirse la condición de ganar y el tablero esté completo se declara empate.


Cómo se va a hacer?
- Crear un componente que representará a todo el tablero
- Crear un componente que represente un cuadrito 
- Cada cuadrito tendrá un OnClick que cuando se clickee ponga un circulo o una cruz según corresponda.
- El estado del tablero es quién va a manejar la condición de ganar
- Guardar una matriz en el estado, cada vez que se clickee un cuadrito esté se agregará a la matriz y cada vez se agregue un 
cuadrito se verificará si el jugador ha ganado. 
