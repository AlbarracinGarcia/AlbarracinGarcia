# AlbarracinGarcia
Taller 1 Computación Visual Giovanny Albarracín y Germán García


## Motivación y objetivo

La capacidad tecnológica actual y las matemáticas aplicadas en los computadores, permiten innovar y profundizar en el campo de la visualización de datos en los sistemas computacionales; tal es el caso de la renderización de imágenes y videos, y cómo la llegada de equipos como tarjetas gráficas han potenciado este campo al aumentar la velocidad de los cálculos realizados por unidad de tiempo en esta misma renderización. En este trabajo se utilizan las técnicas de aplicación de filtros utilizando los recursos básicos de un computador que no posee tarjeta gráfica, como las técnicas de aquel que lo posee, comparando la velocidad de procesamiento expresado en FPS (frames por segundo) en cuestión de comparativa de filtros aplicados a videos, y se halla el histograma de frecuencias de una escala de colores como medida comparativapara las imágenes, con el objetivo de ofrecer una perspectiva imparcial de los algoritmos utilizados y su rendimiento.

## Metodología

El proceso de manipulación de imágenes se dividió en dos partes: una parte basada en el software, utilizando algotitmos de filtros básicos; y otra parte basada en el hardware, la cual contó con algoritmos de manipulación de shaders que utilizan los recursos de la tarjeta gráfica para realizar las operaciones.

### Manipulación de imágenes y video por software

Para la manipulación de imágenes y video por software, se aplicaron tres filtros, los cuales son: 1) filtro ASCII; 2) filtro grayScale; y 3) filtro Sharpen. A continuación se explica cada uno de estos. Los videos son captados desde la cámara, por lo cual, el sistema aplica los filtros en vivo y en tiempo real, y estos son mostrados con el filtro aplicado, también, en tiempo real.

#### Filtro ASCII

Para el filtro ASCII se creó una variable ``` options ```, que almacena las cadenas de caracteres con las que será conformada la imagen o video input. para este filtro se usa la función ```draw```, que se encarga de seleccionar entre los filtros existentes. Para el caso del ASCII, se selecciona que sea verdadera la variable ```ascii``` (cabe señalar que para cada filtro existe una variable inicializada en ```false```, que se hará ```true``` cuando sea llamada y, por tanto, aplicada a la imagen), y esto llama a la siguiente función:
```
unction getOptions() {
 if (reverse) {
    return reversedOptions;
 }
 return options;
}
```
la cual retorna 


### Manipulación de imágenes y video por hardware

## Resultados y conclusiones

## Trabajo de indagación futuro

Debido al interés de los integrantes del equipo por la manipulación de imágenes y videos, y la manera en la que estas pueden ser renderizadas utilizando diferentes filtros y técnicas algorítmicas, estos han decidido profundizar para un proyecto de manipulación de imágenes out-of-core o multiresolución (también llamadas megaimágenes), con el objetivo de aportar al área de investigación de las herramientas computacionales que facilitan la visualización (navegación o filtros) de imágenes médicas.
