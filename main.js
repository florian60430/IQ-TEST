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

//Initialisation des question et réponse


/*--------------
    QUESTION 1 
--------------*/

let proposition1 = ["bleu", "rouge", "vert"];
let question1 = new Question(1, "quelle est la couleur du feu rouge ?", proposition1, "rouge");

/*---------------
    QUESTION 2 
--------------*/
let proposition2 = ["8", "16", "64"];
let question2 = new Question(2, "Combien font 8 x 8 = ?", proposition2, "64");

/*---------------
    QUESTION 3
--------------*/
let proposition3 = null;
let question3 = new Question(3, "les parents de Julie ont 4 enfants la 1ère s'apelle \"A\", la 2ème s'apelle \"B\", la 3ème s'apelle \"C\", comment s'apelle la 4ème ?", proposition3, "Julie");





//tableau contenant les objets de question
let tabQuestion = [question1, question2, question3];
// i est incrémenté lorsque qu'on appuie sur le boutton submit pour qu'on affiche la question de l'objet suivant de le tableau tabQuestion[i]
let i = 1;
let indiceReponseUser = 0;
let scoreUser = 0;

let reponseUser = new Array();


const main = () => 
{


     /* --------------------------------- 
    RECUPERATION DES ELEMENTS DU DOM 
    -----------------------------------*/
    
    //question
    const question = document.getElementById("question");
    
    //formulaire
    const propose = document.getElementById("propose");
    
    //bouton
    const btnValider = document.getElementById("btn");

    //score 
    const score = document.getElementById("score");

    //questionParent
    const questionParent = document.getElementById("questionParent");

    /* -----------------------
     INITIALISATION DE LA PAGE
     ------------------------ */

     
    //1ère question on load
    document.addEventListener('DOMContentLoaded', function (e) {

        //1ère question du tableau
        question.innerHTML = tabQuestion[0].getQuestion();
        //1ère propositions du tableau
        propose.innerHTML = createForm(tabQuestion[0].getProposition());
    });


    /* ------------------------------
    GESTION DES QUESTION ET REPONSE
    -------------------------------*/
    

    // change la question et la reponse a chaque click du formulaire
    btnValider.addEventListener('click', function (e) {

        //annuler le comportement normal du formulaire
        e.preventDefault();

        
        if (tabQuestion[i] != null) 
        {
            //changement de la question
            question.innerHTML = tabQuestion[i].getQuestion();

            if(tabQuestion[i].getProposition() != null)
            {
                propose.innerHTML = createForm(tabQuestion[i].getProposition());
                console.log(tabQuestion[i]);
            }
            //sinon un input texte
            else 
            {
                propose.innerHTML = "<input type='text' name='test' id='reponse'>";
            }

            i++;
            indiceReponseUser++;
        }
        else 
        {
            /* -------------------------
            CALCULE DU SCORE DU USER
            ------------------------- */

            for (i = 0; i<tabQuestion.length; i++) 
            {
                if(tabQuestion[i].getReponse() == reponseUser[i])
                {
                    scoreUser += 1;
                }
                else 
                {
                    scoreUser -= 1;
                }
            }
            //affichage du score du user
            question.remove();
            questionParent.remove();
            propose.innerHTML = "score : "+ scoreUser;
            btnValider.remove();

        }
    });

    //génération des bouton input réponse
    const createForm = (proposeIt) => {

        let i;
        let form;
        let chaineFinale = "";

        for (i = 0; i < proposeIt.length; i++) 
        {
            form = "<input type='radio' id='reponse" + i + "' name='test' value='" + proposeIt[i] + "'> <label for='reponse" + i + "'>" + proposeIt[i] + "</label>";
            chaineFinale = chaineFinale + form;
        }
    
        return chaineFinale;

    }

    /* ------------------------------
    ENREGISTREMENT DES REPONSES USER
    ------------------------------- */

    propose.addEventListener('input', function(e)
    {
        reponseUser[indiceReponseUser] = e.target.value;
    });  
}