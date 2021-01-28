class Question {

    constructor(id, question, proposition, reponse)
    {
        // int id de la question
        this.id = id; 
        
        // string contenant la question 
        this.question = question;
        
        // tableau de string contenant la liste des proposition possible
        this.proposition = proposition;
       
        // string contenant la bonne réponse à la question
        this.reponse = reponse;
    }

    getId()
    {
        return this.id;
    }

    getQuestion()
    {
        return this.question;
    }

    getProposition()
    {
        return this.proposition;
    }

    getReponse()
    {
        return this.reponse;
    }
}

// 1er tableau de propositions
let proposition1 = ["bleu", "rouge", "vert"];
// première question posé à l'utilisateur : "quelle est la couleur du feux rouge : rouge"
let question1 = new Question(1, "quelle est la couleur du feu rouge ?", proposition1, "rouge");

// 2ème tableau de propositions
let proposition2 = ["8", "16", "64"];
// 2ème question posé à l'utilisateur "combien font 8 x 8" : 64
let question2 = new Question(2, "Combien font 8 x 8 = ?", proposition2, "64");

// 3ème tableau de proposition null car ici on n'affichera pas une liste de proposition mais un input texte que l'utilisateur devra remplir avec la bonne réponse
let proposition3 = null;
// 3ème question posé à l'utilisateur "" : Julie 
let question3 = new Question(3, "les parents de Julie ont 4 enfants la 1ère s'apelle \"A\", la 2ème s'apelle \"B\", la 3ème s'apelle \"C\", comment s'apelle la 4ème ?", proposition3, "Julie");

//tableau contenant les 3 objets de question
let tabQuestion = [question1, question2, question3];
// i est incrémenté lorsque qu'on appuie sur le boutton submit pour qu'on affiche la question de l'objet suivant de le tableau tabQuestion[i]
let i = 1;
let indiceReponseUser = 0;
let scoreUser = 0;

let reponseUser = new Array();