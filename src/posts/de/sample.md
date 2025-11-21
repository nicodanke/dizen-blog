Markdown-Spickzettel Beispiel
=========================== 

Dies ist eine Beispiel-Markdown-Datei, die Ihnen hilft, schnell Markdown zu schreiben :)

Wenn Sie den großartigen [Sublime Text 2 Editor][ST2] zusammen mit dem [Markdown Preview Plugin][MarkdownPreview] verwenden, öffnen Sie Ihre ST2-Palette mit `CMD+P` und wählen Sie dann `Markdown Preview in browser`, um das Ergebnis in Ihrem Browser zu sehen.

## Textgrundlagen
dies ist *kursiv* und dies ist **fett**. noch eine _kursiv_ und noch eine __fett__

dies ist `wichtiger` Text.

## Einrückung
> Hier ist etwas eingerückter Text
>> noch mehr eingerückt

## Titel
# Großer Titel (h1)
## Mittlerer Titel (h2)
### Kleinerer Titel (h3)
#### und so weiter (hX)
##### und so weiter (hX)
###### und so weiter (hX)

## Beispiel-Listen (1)

 - Aufzählungszeichen können `-`, `+` oder `*` sein
 - Aufzählungsliste 1
 - Aufzählungsliste 2
    - Unterelement 1
    - Unterelement 2

        mit eingerücktem Text darin

 - Aufzählungsliste 3
 + Aufzählungsliste 4
 * Aufzählungsliste 5

## Links

Dies ist ein [Beispiel-Inline-Link](http://lmgtfy.com/) und [noch einer mit einem Titel](http://lmgtfy.com/ "Hallo, Welt").

Links können auch referenzbasiert sein: [Referenz 1][ref1] oder [Referenz 2 mit Titel][ref2].

Referenzen werden normalerweise am Ende des Dokuments platziert

## Bilder

Ein Beispielbild:

![revolunet logo](http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo")

Wie Links können Bilder auch Referenzen anstelle von Inline-Links verwenden:

![revolunet logo][revolunet-logo]


## Code

Es ist ziemlich einfach, Code in Markdown-Dateien anzuzeigen.

Backticks können verwendet werden, um einige Wörter `hervorzuheben`.

Außerdem wird jeder eingerückte Block als Codeblock betrachtet.

    <script>
        document.location = 'http://lmgtfy.com/?q=markdown+cheat+sheet';
    </script>

## GitHub-Flavored Markdown

Wenn Sie den Github-Parser verwenden, können Sie einige der Syntax von [GitHub-Flavored Markdown][gfm] verwenden:

 * Benutzer/Projekt@SHA: revolunet/sublimetext-markdown-preview@7da61badeda468b5019869d11000307e07e07401
 * Benutzer/Projekt#Issue: revolunet/sublimetext-markdown-preview#1
 * Benutzer: @revolunet

Etwas Python-Code:

```python
import random

class CardGame(object):
    """ eine Beispiel-Python-Klasse """
    NB_CARDS = 32
    def __init__(self, cards=5):
        self.cards = random.sample(range(self.NB_CARDS), 5)
        print 'ready to play'
```

Etwas Javascript-Code:

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

## Über

Dieses Plugin und diese Beispieldatei werden Ihnen stolz vom [revolunet-Team][revolunet] präsentiert

 [ref1]: http://revolunet.com
 [ref2]: http://revolunet.com "rich web apps"
 [MarkdownREF]: http://daringfireball.net/projects/markdown/basics
 [MarkdownPreview]: https://github.com/revolunet/sublimetext-markdown-preview
 [ST2]: http://sublimetext.com
 [revolunet]: http://revolunet.com
 [revolunet-logo]: http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo"
 [gfm]: http://github.github.com/github-flavored-markdown/


