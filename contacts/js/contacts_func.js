function Contact(firstname, lastname) {
    var firstname = firstname;
    var lastname = lastname;
    function describe() {
        console.log("nom : "+firstname+" prénom : "+lastname)
    }
    return {
        lastname: lastname,
        firstname: firstname,
        describe: describe
    }
}

// contact : [] || [...]
function main(contacts) {
    const option = prompt("Choisissez un option")
    switch(option) {
        case 0 :
            console.log("Au revoir!")
            break
        case 1 :
            if (contacts.length == 0) console.log('Vous n\'avez pas de contacts enregistré!')
            else {
                console.log("Voici vos contacts :")
                contacts.forEach(contact => contact.describe())
                main(contacts)
            }
            break
        case 2 :
            const prenom = prompt("Saisissez le prénom de votre nouveau contact")
            const nom = prompt("Saissiez le nom de votre nouveau contact")
            newContact = Contact(prenom, nom)
            contacts.push(newContact)
            console.log(prenom+" "+nom+" a bien été ajouté(e) à vos contacts")
            main(contacts)
            break
        default :
            console.log("Je n'ai pas compris")
    }
}

console.log("0 : quitter");
console.log("1 : lister les contacts");
console.log("2 : ajouter un contact");
main([])
