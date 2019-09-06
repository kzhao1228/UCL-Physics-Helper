'use strict';
const Alexa = require('alexa-sdk');

//=========================================================================================================================================
//TODO: The items below this comment need your attention
//=========================================================================================================================================

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this:  const APP_ID = "amzn1.ask.skill.f6a1de13-4f8d-4cbd-bc54-d2fd9abbbd5e";
const APP_ID = undefined;

//This function returns a descriptive sentence about your data.  Before a user starts a quiz, they can ask about a specific data element,
//like "Ohio."  The skill will speak the sentence from this function, pulling the data values from the appropriate record in your data.
function getSpeechDescription1(item)
{
    let sentence =  "The " + item.PplName + " consists of " + item.Components + ". The Properties of this population are, one, the stars are " + item.FirstProperty + ", two, they are " + item.SecondProperty + ", three, they have " + item.ThirdProperty + ".  I've added the " + item.PplName + " to your Alexa app.  Which other type of Stellar populations or ASU facts would you like to know about?";
    return sentence;
}

function getSpeechDescription2(item)
{

    let sentence2 = "The " + item.Classification + " has, " + item.TypeOne + ", " + item.TypeTwo + ", " + item.TypeThree + ", " + item.TypeFour + ", " + item.TypeFive + ". I've added the " + item.Classification + " to your Alexa app.  Which other facts would you like to know about?";
    return sentence2;  


}

//We have two ways to create the quiz questions.  The default way is to phrase all of your questions like: "What is X of Y?"
//If this approach doesn't work for your data, take a look at the commented code in this function.  You can write a different question
//structure for each property of your data.
function getQuestion(counter, property, item)
{
    switch(property)
    {
        case "Components":
            return "Here is your " + counter + "th question.  What are the " + formatCasing(property) + " of the "  + item.PplName + "?";
        
        case "TypeOne":
        case "TypeTwo":
        case "TypeThree":
        case "TypeFour":
        case "TypeFive":
            return "Here is your " + counter + "th question.  What is the " + formatCasing(property) + " of the "  + item.Classification + "?";
        
        case "EvidenceOne":
        case "EvidenceTwo":
        case "EvidenceThree":
        	return "Here is your " + counter + "th question.  What is the " + formatCasing(property) + " of the light as a particle?";
        	
        case "SolutionOne":
            return "Here is your " + counter + "th question.  Name the model which structures the atom as electrons surrounded by positively charged liquid.";
        	
        case "AnswerOne":	
            return "Here is your " + counter + "th question.  In the Photoelectric effect, give the name of the minimum energy an electron needs to receive to escape from the metal ";
        	
        case "Redshift":
        case "Blueshift":
            return "Here is your " + counter + "th question.  If a galaxy has " + formatCasing(property) + " is it moving towards or away from the observer";
        	
        case "OClassification":
        case "BClassification":
        case "AClassification":
        case "FClassification":
        case "GClassification":
        case "KClassification":
        case "MClassification":
            return "Here is your " + counter + "th question.  What is the colour of a " + formatCasing(property) + " star?";
        	
        case "OType":
        case "BType":
        case "AType":
        case "FType":
        case "GType":
        case "KType":
        case "MType":
            return "Here is your " + counter + "th question.  What is the surface temperature of a " + formatCasing(property) + " star?";
        
        case "OneHundredMetres":
        case "OneCentimeter": 
        case "TenThousandNanoMetres":
        case "FiveHundredNanoMetres": 
        case "OneHundredNanoMetres": 
        case "OneNanoMetre":
            return "Here is your " + counter + "th question.  What is the type of electromagnetic wave with wavelength " + formatCasing(property) + "?";
        
        
        case "Lyman":
        case "Balmer":
        case "Paschen":
            return "Here is your " + counter + "th question.  What is the value of m for a spectral emission line in the " + formatCasing(property) + " series?";
        
        case "E0":
        case "E7":
             return "Here is your " + counter + "th question.  Does " + formatCasing(property) + " represent an elliptical galaxy that is completely round or completely elongated?";
        
        default:
            return "Here is your " + counter + "th question.  What is the " + formatCasing(property) + " of the "  + item.PplName + "?";
        
    }
}


//This is the function that returns an answer to your user during the quiz.  Much like the "getQuestion" function above, you can use a
//switch() statement to create different responses for each property in your data.  For example, when this quiz has an answer that includes
//a state Components, we add some SSML to make sure that Alexa spells that Components out (instead of trying to pronounce it.)
function getAnswer(property, item)
{
    switch(property)
    {
        case "Components":
            return "The " + formatCasing(property) + " of the " + item.PplName + " are " + item[property] + ". ";
        
        case "TypeOne":
        case "TypeTwo":
        case "TypeThree":
        case "TypeFour":
        case "TypeFive":
            return "The " + formatCasing(property) + " of the " + item.Classification + " is " + item[property] + ". ";
        
        case "EvidenceOne":
        case "EvidenceTwo":
        case "EvidenceThree":
        	return "The " +formatCasing(property) + " of light as a particle is, " + item[property]+".";
        
        case "Redshift":
        case "Blueshift":
            return "The answer is, "+ item[property]+".";
            
        case "Lyman":
        case "Balmer":
        case "Paschen":
            return "The answer is, " + item[property]+".";
        
        case "SolutionOne":
            return "The answer is, " + item[property]+".";
        
        case "OClassification":
        case "BClassification":
        case "AClassification":
        case "FClassification":
        case "GClassification":
        case "KClassification":
        case "MClassification":
            return "The answer is, " + item[property]+".";
        
        case "E0":
        case "E7":
            return "The answer is, " + item[property]+".";
        
        case "OneHundredMetres":
        case "OneCentimeter": 
        case "TenThousandNanoMetres":
        case "FiveHundredNanoMetres": 
        case "OneHundredNanoMetres": 
        case "OneNanoMetre":
            return "The answer is, " + item[property]+".";
        
        case "OType":
        case "BType":
        case "AType":
        case "FType":
        case "GType":
        case "KType":
        case "MType":
            return "The surface temperature of a " +formatCasing(property) + " is, " + item[property]+".";
        
        default:
            return "The " + formatCasing(property) + " of the " + item.PplName + " is " + item[property] + ". ";
    }
}

//This is a list of positive speechcons that this skill will use when a user gets a correct answer.  For a full list of supported
//speechcons, go here: https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speechcon-reference
const speechConsCorrect = ["Booya", "All righty", "Bam", "Bazinga", "Bingo", "Boom", "Bravo", "Cha Ching", "Cheers", "Dynomite",
"Hip hip hooray", "Hurrah", "Hurray", "Huzzah", "Oh dear.  Just kidding.  Hurray", "Kaboom", "Kaching", "Oh snap", "Phew",
"Righto", "Way to go", "Well done", "Whee", "Woo hoo", "Yay", "Wowza", "Yowsa"];

//This is a list of negative speechcons that this skill will use when a user gets an incorrect answer.  For a full list of supported
//speechcons, go here: https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/speechcon-reference
const speechConsWrong = ["Argh", "Aw man", "Blarg", "Blast", "Boo", "Bummer", "Darn", "D'oh", "Dun dun dun", "Eek", "Honk", "Le sigh",
"Mamma mia", "Oh boy", "Oh dear", "Oof", "Ouch", "Ruh roh", "Shucks", "Uh oh", "Wah wah", "Whoops a daisy", "Yikes"];

//This is the welcome message for when a user starts the skill without a specific intent.
const WELCOME_MESSAGE = "Welcome to the Atoms Stars and Universe Quiz Game!  You can ask me about some facts of ASU, or you can ask me to start a quiz.  What would you like to do?";

//This is the message a user will hear when they start a quiz.
const START_QUIZ_MESSAGE = "OK.  I will ask you 8 questions about ASU.";

//This is the message a user will hear when they try to cancel or stop the skill, or when they finish a quiz.
const EXIT_SKILL_MESSAGE = "Thank you for playing the Atoms Stars and Universe quiz Game!  Let's play again soon!";

//This is the message a user will hear after they ask (and hear) about a specific data element.
const REPROMPT_SPEECH = "Which other type of Stellar populations would you like to know about?";

//This is the message a user will hear when they ask Alexa for help in your skill.
const HELP_MESSAGE = "I know lots of things about the ASU.  You can ask me about some facts , and I'll tell you what I know.  You can also test your knowledge by asking me to start a quiz.  What would you like to do?";


//This is the response a user will receive when they ask about something we weren't expecting.  For example, say "pizza" to your
//skill when it starts.  This is the response you will receive.
function getBadAnswer(item) { return "I'm sorry. " + item + " is not something I know very much about in this skill. " + HELP_MESSAGE; }

//This is the message a user will receive after each question of a quiz.  It reminds them of their current score.
function getCurrentScore(score, counter) { return "Your current score is " + score + " out of " + counter + ". "; }

//This is the message a user will receive after they complete a quiz.  It tells them their final score.
function getFinalScore(score, counter) { return "Your final score is " + score + " out of " + counter + ". "; }

//These next four values are for the Alexa cards that are created when a user asks about one of the data elements.
//This only happens outside of a quiz.


//=========================================================================================================================================
//TODO: Replace this data with your own.
//=========================================================================================================================================


/*  Below is the code that imports the data constant defined in the script database.js  */

const data = require('./database').data;
 
const data_ans = require('./database').data1;

const data_ans2 = require('./database').data2;

//=========================================================================================================================================
//Plz do not change the code below bcoz any change to the code might break your skill.
//=========================================================================================================================================

const states = {
    START: "_START",
    QUIZ: "_QUIZ"
};

const handlers = {
     "LaunchRequest": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
     },
    "QuizIntent": function() {
        this.handler.state = states.QUIZ;
        this.emitWithState("Quiz");
    },
    "AnswerIntent": function() {
        this.handler.state = states.START;
        this.emitWithState("AnswerIntent");
    },
    "AnswerIntent_a": function() {
        this.handler.state = states.START;
        this.emitWithState("AnswerIntent_a");
    },
    "AMAZON.HelpIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "Unhandled": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
    }
};

//=========================================================================================================================================
//This is the facts of the physics part
//=========================================================================================================================================

const startHandlers = Alexa.CreateStateHandler(states.START,{
    "Start": function() {
        this.response.speak(WELCOME_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "AnswerIntent": function () {
        let item = getItem(this.event.request.intent.slots);
       
        if (item && item[Object.getOwnPropertyNames(data_ans[0])[0]] != undefined)
        {
            this.response.speak(getSpeechDescription1(item)).listen(REPROMPT_SPEECH);
        }
        else
        {
            this.response.speak(getBadAnswer(item)).listen(getBadAnswer(item));

        }

        this.emit(":responseReady");
    },
    "AnswerIntent_a": function () {
        let item = getItem2(this.event.request.intent.slots);
       
        if (item && item[Object.getOwnPropertyNames(data_ans2[0])[0]] != undefined)
        {
            this.response.speak(getSpeechDescription2(item)).listen(REPROMPT_SPEECH);
            
        }
        else
        {
            this.response.speak(getBadAnswer(item)).listen(getBadAnswer(item));

        }

        this.emit(":responseReady");
    },
        
    "QuizIntent": function() {
        this.handler.state = states.QUIZ;
        this.emitWithState("Quiz");
    },
    "AMAZON.PauseIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.StopIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.NoIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.CancelIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.HelpIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "Unhandled": function() {
        this.emitWithState("Start");
    }
});


//=========================================================================================================================================
//This is the ASU quiz part.
//=========================================================================================================================================

const quizHandlers = Alexa.CreateStateHandler(states.QUIZ,{
    "Quiz": function() {
        this.attributes["response"] = "";
        this.attributes["counter"] = 0;
        this.attributes["quizscore"] = 0;
        this.emitWithState("AskQuestion");
    },
    "AskQuestion": function() {
        if (this.attributes["counter"] == 0)
        {
            this.attributes["response"] = START_QUIZ_MESSAGE + " ";
        }

        let random = getRandom(0, data.length-1);
        let item = data[random];

        let propertyArray = Object.getOwnPropertyNames(item);
        let property = propertyArray[getRandom(1, propertyArray.length-1)];

        this.attributes["quizitem"] = item;
        this.attributes["quizproperty"] = property;
        this.attributes["counter"]++;

        let question = getQuestion(this.attributes["counter"], property, item);
        let speech = this.attributes["response"] + question;

        this.emit(":ask", speech, question);
    },
    "AnswerIntent": function() {
        let response = "";
        let speechOutput = "";
        let item = this.attributes["quizitem"];
        let property = this.attributes["quizproperty"];

        let correct = compareSlots(this.event.request.intent.slots, item[property]);

        if (correct)
        {
            response = getSpeechCon(true);
            this.attributes["quizscore"]++;
        }
        else
        {
            response = getSpeechCon(false);
        }

        response += getAnswer(property, item);

        if (this.attributes["counter"] < 8)
        {
            response += getCurrentScore(this.attributes["quizscore"], this.attributes["counter"]);
            this.attributes["response"] = response;
            this.emitWithState("AskQuestion");
        }
        else
        {
            response += getFinalScore(this.attributes["quizscore"], this.attributes["counter"]);
            speechOutput = response + " " + EXIT_SKILL_MESSAGE;

            this.response.speak(speechOutput);
            this.emit(":responseReady");
        }
    },
    "AMAZON.RepeatIntent": function() {
        let question = getQuestion(this.attributes["counter"], this.attributes["quizproperty"], this.attributes["quizitem"]);
        this.response.speak(question).listen(question);
        this.emit(":responseReady");
    },
    "AMAZON.StartOverIntent": function() {
        this.emitWithState("Quiz");
    },
    "AMAZON.StopIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.NoIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.PauseIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.CancelIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE);
        this.emit(":responseReady");
    },
    "AMAZON.HelpIntent": function() {
        this.response.speak(HELP_MESSAGE).listen(HELP_MESSAGE);
        this.emit(":responseReady");
    },
    "Unhandled": function() {
        this.emitWithState("AnswerIntent");
    }
});

function compareSlots(slots, value)
{
    for (let slot in slots)
    {
        if (slots[slot].value != undefined)
        {
            if (slots[slot].value.toString().toLowerCase() == value.toString().toLowerCase())
            {
                return true;
            }
        }
    }
    return false;
}

function getRandom(min, max)
{
    return Math.floor(Math.random() * (max-min+1)+min);
}

//=========================================================================================================================================
//The function defined below has been linked to the Facts of the Day intent.
//=========================================================================================================================================

function getItem(slots)
{
    let propertyArray = Object.getOwnPropertyNames(data_ans[0]);
    let value;

    for (let slot in slots)
    {
        if (slots[slot].value !== undefined)
        {
            value = slots[slot].value;
            for (let property in propertyArray)
            {
                let item = data_ans.filter(x => x[propertyArray[property]].toString().toLowerCase() === slots[slot].value.toString().toLowerCase());
                if (item.length > 0)
                {
                    return item[0];
                }
            }
        }
    }
    return value;
}

function getItem2(slots)
{
    let propertyArray = Object.getOwnPropertyNames(data_ans2[0]);
    let value;

    for (let slot in slots)
    {
        if (slots[slot].value !== undefined)
        {
            value = slots[slot].value;
            for (let property in propertyArray)
            {
                let item = data_ans2.filter(x => x[propertyArray[property]].toString().toLowerCase() === slots[slot].value.toString().toLowerCase());
                if (item.length > 0)
                {
                    return item[0];
                }
            }
        }
    }
    return value;
}
//=========================================================================================================================================
//This is to get the Speechcons defined at the begining.
//=========================================================================================================================================

function getSpeechCon(type)
{

    if (type) return "<say-as interpret-as='interjection'>" + speechConsCorrect[getRandom(0, speechConsCorrect.length-1)] + "! </say-as><break strength='strong'/>";
    else return "<say-as interpret-as='interjection'>" + speechConsWrong[getRandom(0, speechConsWrong.length-1)] + " </say-as><break strength='strong'/>";
}

function formatCasing(key)
{
    key = key.split(/(?=[A-Z])/).join(" ");
    return key;
}
//=========================================================================================================================================
//The function defined below has been used in the Answer intent above.
//=========================================================================================================================================

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers, startHandlers, quizHandlers);
    alexa.execute();
};
