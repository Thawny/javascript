var Contact = {
	init: function (nom, prenom) {
		this.nom = nom;
		this.prenom = prenom;
	},
	
	decrire: function () {
		var description = "nom : " + this.nom + ", prénom : " + this.prenom;
		return description;
	}

};

var contact1 = Object.create(Contact);
contact1.init("Levisse","Carole");


var contact2 = Object.create(Contact);
contact2.init("Nelsonne","Mélodie"); 

var contacts = [];
contacts.push(contact1);
contacts.push(contact2); 

//console.log("Bienvenue dans le gestionnaire des contacts\n 1 : lister les contacts\n 2 : ajouter un contact\n 0 : quitter");
console.log("Bienvenue dans le gestionnaire des contacts");
console.log("0 : quitter");
console.log("1 : lister les contacts");
console.log("2 : ajouter un contact");



var option = prompt("Choisissez une option");
while (option !== "0") {

	switch (option) {
		case "1":
		contacts.forEach(function (contact) {
			console.log(contact.decrire());
		});
		break;
		
		case "2":
		var nom = prompt("Saisir le nom du nouveau contact");
		var prenom = prompt("Saisir le prenom du nouveau contact");
		var nouveauContact = Object.create(Contact);
		nouveauContact.init(nom,prenom);
		contacts.push(nouveauContact);
		console.log(nouveauContact.prenom +" "+ nouveauContact.nom + " a bien été ajouté(e) à votre liste de contacts");
		break;
	};
	var option = prompt("Choisissez une option");
};

console.log("Au revoir!");
