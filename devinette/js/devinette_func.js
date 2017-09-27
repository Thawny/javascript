var solution = Math.floor(Math.random() * 100) + 1;
var input = Number(prompt("Saisir un nombre entre 1 et 100"));

(function play(counter) {
    if (counter !== 0) {
        var input = Number(prompt("Saisir un nombre entre 1 et 100"));
        if (input < solution) {
            console.log('Trop petit')
            play(counter - 1)
        }
        else if (input > solution) {
            console.log('Trop grand')
            play(counter - 1)
        }
        else {
            console.log('Vous avez gagné! La solution était bien '+solution)
        }

    } else {
        console.log('Vous avez épuisé vos chances. La solution était : '+solution)
    }
})(6)
