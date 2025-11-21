Guida Rapida Markdown di Esempio
=========================== 

Questo è un file markdown di esempio per aiutarti a scrivere Markdown rapidamente :)

Se usi il favoloso editor [Sublime Text 2][ST2] insieme al [plugin Markdown Preview][MarkdownPreview], apri la tua Palette ST2 con `CMD+P` e poi scegli `Markdown Preview in browser` per vedere il risultato nel tuo browser.

## Basi del testo
questo è *corsivo* e questo è **grassetto**. un altro _corsivo_ e un altro __grassetto__

questo è testo `importante`.

## Rientro
> Ecco del testo con rientro
>> ancora più rientrato

## Titoli
# Titolo grande (h1)
## Titolo medio (h2)
### Titolo più piccolo (h3)
#### e così via (hX)
##### e così via (hX)
###### e così via (hX)

## Liste di esempio (1)

 - gli elenchi puntati possono essere `-`, `+`, o `*`
 - elenco puntato 1
 - elenco puntato 2
    - sottovoce 1
    - sottovoce 2

        con testo rientrato all'interno

 - elenco puntato 3
 + elenco puntato 4
 * elenco puntato 5

## Link

Questo è un [link inline di esempio](http://lmgtfy.com/) e [un altro con un titolo](http://lmgtfy.com/ "Ciao, mondo").

I link possono anche essere basati su riferimenti: [riferimento 1][ref1] o [riferimento 2 con titolo][ref2].

I riferimenti sono generalmente posizionati nella parte inferiore del documento

## Immagini

Un'immagine di esempio:

![revolunet logo](http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo")

Come i link, le immagini possono anche usare riferimenti invece di link inline:

![revolunet logo][revolunet-logo]


## Codice

È abbastanza facile mostrare codice nei file markdown.

I backtick possono essere usati per `evidenziare` alcune parole.

Inoltre, qualsiasi blocco rientrato è considerato un blocco di codice.

    <script>
        document.location = 'http://lmgtfy.com/?q=markdown+cheat+sheet';
    </script>

## GitHub Flavored Markdown

Se usi il parser Github, puoi usare parte della sintassi di [GitHub Flavored Markdown][gfm]:

 * Utente/Progetto@SHA: revolunet/sublimetext-markdown-preview@7da61badeda468b5019869d11000307e07e07401
 * Utente/Progetto#Issue: revolunet/sublimetext-markdown-preview#1
 * Utente: @revolunet

Un po' di codice Python:

```python
import random

class CardGame(object):
    """ una classe python di esempio """
    NB_CARDS = 32
    def __init__(self, cards=5):
        self.cards = random.sample(range(self.NB_CARDS), 5)
        print 'ready to play'
```

Un po' di codice Javascript:

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

## Informazioni

Questo plugin e questo file di esempio sono orgogliosamente portati a te dal [team revolunet][revolunet]

 [ref1]: http://revolunet.com
 [ref2]: http://revolunet.com "rich web apps"
 [MarkdownREF]: http://daringfireball.net/projects/markdown/basics
 [MarkdownPreview]: https://github.com/revolunet/sublimetext-markdown-preview
 [ST2]: http://sublimetext.com
 [revolunet]: http://revolunet.com
 [revolunet-logo]: http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo"
 [gfm]: http://github.github.com/github-flavored-markdown/


