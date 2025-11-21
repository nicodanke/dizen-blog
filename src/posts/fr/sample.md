Guide Rapide Markdown d'Exemple
=========================== 

Ceci est un fichier markdown d'exemple pour vous aider à écrire Markdown rapidement :)

Si vous utilisez le fabuleux éditeur [Sublime Text 2][ST2] avec le [plugin Markdown Preview][MarkdownPreview], ouvrez votre Palette ST2 avec `CMD+P` puis choisissez `Markdown Preview in browser` pour voir le résultat dans votre navigateur.

## Bases du texte
ceci est *italique* et ceci est **gras**. un autre _italique_ et un autre __gras__

ceci est du texte `important`.

## Indentation
> Voici du texte indenté
>> encore plus indenté

## Titres
# Grand titre (h1)
## Titre moyen (h2)
### Titre plus petit (h3)
#### et ainsi de suite (hX)
##### et ainsi de suite (hX)
###### et ainsi de suite (hX)

## Listes d'exemple (1)

 - les puces peuvent être `-`, `+`, ou `*`
 - liste à puces 1
 - liste à puces 2
    - sous-élément 1
    - sous-élément 2

        avec du texte indenté à l'intérieur

 - liste à puces 3
 + liste à puces 4
 * liste à puces 5

## Liens

Ceci est un [lien inline d'exemple](http://lmgtfy.com/) et [un autre avec un titre](http://lmgtfy.com/ "Bonjour, monde").

Les liens peuvent également être basés sur des références: [référence 1][ref1] ou [référence 2 avec titre][ref2].

Les références sont généralement placées en bas du document

## Images

Une image d'exemple:

![revolunet logo](http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo")

Comme les liens, les images peuvent également utiliser des références au lieu de liens inline:

![revolunet logo][revolunet-logo]


## Code

Il est assez facile d'afficher du code dans les fichiers markdown.

Les backticks peuvent être utilisés pour `surligner` certains mots.

De plus, tout bloc indenté est considéré comme un bloc de code.

    <script>
        document.location = 'http://lmgtfy.com/?q=markdown+cheat+sheet';
    </script>

## GitHub Flavored Markdown

Si vous utilisez l'analyseur Github, vous pouvez utiliser une partie de la syntaxe de [GitHub Flavored Markdown][gfm]:

 * Utilisateur/Projet@SHA: revolunet/sublimetext-markdown-preview@7da61badeda468b5019869d11000307e07e07401
 * Utilisateur/Projet#Issue: revolunet/sublimetext-markdown-preview#1
 * Utilisateur: @revolunet

Du code Python:

```python
import random

class CardGame(object):
    """ une classe python d'exemple """
    NB_CARDS = 32
    def __init__(self, cards=5):
        self.cards = random.sample(range(self.NB_CARDS), 5)
        print 'ready to play'
```

Du code Javascript:

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

## À propos

Ce plugin et ce fichier d'exemple vous sont fièrement présentés par l'[équipe revolunet][revolunet]

 [ref1]: http://revolunet.com
 [ref2]: http://revolunet.com "rich web apps"
 [MarkdownREF]: http://daringfireball.net/projects/markdown/basics
 [MarkdownPreview]: https://github.com/revolunet/sublimetext-markdown-preview
 [ST2]: http://sublimetext.com
 [revolunet]: http://revolunet.com
 [revolunet-logo]: http://www.revolunet.com/static/parisjs8/img/logo-revolunet-carre.jpg "revolunet logo"
 [gfm]: http://github.github.com/github-flavored-markdown/


