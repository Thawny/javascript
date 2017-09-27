console.log("Bienvenue dans ce jeu de devinette !");

// Cette ligne génère aléatoirement un nombre entre 1 et 100
var solution = Math.floor(Math.random() * 100) + 1;
//console.log("(La solution est " + solution + ")");
var input = Number(prompt("Saisir un nombre entre 1 et 100"));

//DEBOGAGE
console.log(solution);



for (var i = 0; (i < 6) && (solution != input) ; i++)
    {
        if (input == solution)
            {
                break;
            }
        else 
            {
                if(input < solution)
                    {
                        console.log(input+' est trop petit.');
                        var input = Number(prompt("Saisir un nombre entre 1 et 100"));
                    }
                else
                    {
                        console.log(input+' est trop grand.');
                        var input = Number(prompt("Saisir un nombre entre 1 et 100"));
                    }
            }
    }

if (solution != input)
    {
        console.log('Désolé! Vous avez épuisé vos tentatives. La solution était '+solution);
    }
else
    {
        console.log('Bravo ! '+'La solution était '+input);
        console.log('vous avez trouvé en '+(i+1)+' essai(s)');
    }
