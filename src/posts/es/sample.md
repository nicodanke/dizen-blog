Guía Rápida de Markdown
=========================== 

Este es un archivo markdown de ejemplo para ayudarte a escribir Markdown rápidamente :)

Si usas el fabuloso editor [Sublime Text 2][ST2] junto con el [plugin Markdown Preview][MarkdownPreview], abre tu Paleta de ST2 con `CMD+P` y luego elige `Markdown Preview in browser` para ver el resultado en tu navegador.

## Conceptos básicos de texto
esto es *cursiva* y esto es **negrita**. otra _cursiva_ y otra __negrita__

esto es texto `importante`.

## Indentación
> Aquí hay texto con indentación
>> aún más indentado

## Títulos
# Título grande (h1)
## Título medio (h2)
### Título pequeño (h3)
#### y así sucesivamente (hX)
##### y así sucesivamente (hX)
###### y así sucesivamente (hX)

## Listas de ejemplo (1)

 - las viñetas pueden ser `-`, `+`, o `*`
 - lista de viñetas 1
 - lista de viñetas 2
    - sub elemento 1
    - sub elemento 2

        con texto indentado dentro

 - lista de viñetas 3
 + lista de viñetas 4
 * lista de viñetas 5

## Enlaces

Este es un [enlace en línea de ejemplo](http://lmgtfy.com/) y [otro con un título](http://lmgtfy.com/ "Hola, mundo").

Los enlaces también pueden basarse en referencias: [referencia 1][ref1] o [referencia 2 con título][ref2].

Las referencias generalmente se colocan en la parte inferior del documento

## Imágenes

Una imagen de ejemplo:

![revolunet logo](http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo")

Como los enlaces, las imágenes también pueden usar referencias en lugar de enlaces en línea:

![revolunet logo][revolunet-logo]


## Código

Es bastante fácil mostrar código en archivos markdown.

Las comillas invertidas se pueden usar para `resaltar` algunas palabras.

Además, cualquier bloque con indentación se considera un bloque de código.

    <script>
        document.location = 'http://lmgtfy.com/?q=markdown+cheat+sheet';
    </script>

## Markdown con Sabor a GitHub

Si usas el analizador de Github, puedes usar algo de la sintaxis de [Markdown con Sabor a GitHub][gfm]:

 * Usuario/Proyecto@SHA: revolunet/sublimetext-markdown-preview@7da61badeda468b5019869d11000307e07e07401
 * Usuario/Proyecto#Issue: revolunet/sublimetext-markdown-preview#1
 * Usuario: @revolunet

Algo de código Python:

```python
import random

class CardGame(object):
    """ una clase python de ejemplo """
    NB_CARDS = 32
    def __init__(self, cards=5):
        self.cards = random.sample(range(self.NB_CARDS), 5)
        print 'ready to play'
```

Algo de código Javascript:

```js
var config = {
    duration: 5,
    comment: 'WTF'
}
// callbacks beauty un action
async_call('/path/to/api', function(json) {
    another_call(json, function(result2) {
        another_another_call(result2, function(result3) {
            another_another_another_call(result3, function(result4) {
                alert('And if all went well, i got my result :)');
            });
        });
    });
})
```

## Acerca de

Este plugin y este archivo de ejemplo son orgullosamente traídos a ti por el [equipo revolunet][revolunet]

 [ref1]: http://revolunet.com
 [ref2]: http://revolunet.com "rich web apps"
 [MarkdownREF]: http://daringfireball.net/projects/markdown/basics
 [MarkdownPreview]: https://github.com/revolunet/sublimetext-markdown-preview
 [ST2]: http://sublimetext.com
 [revolunet]: http://revolunet.com
 [revolunet-logo]: http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo"
 [gfm]: http://github.github.com/github-flavored-markdown/


