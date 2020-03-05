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
    let sentence =  "The" + item.Topic + " that you wanna know about is in " + item.Testbook + ", page " + item.Pages + ", section " + item.Section + ", and if you're interested in practice about " + item.Topic + ", you can find the relevant problems at page " + item.ProblemPages + " with problem numbers " + item.ProblemNumbers + " I've added the " + item.Topic + " to your Alexa app.  Which other topics would you like to know about?";
    return sentence;
}

/*function getSpeechDescription2(item)
{

    let sentence2 = "The " + item.Classification + " has, " + item.TypeOne + ", " + item.TypeTwo + ", " + item.TypeThree + ", " + item.TypeFour + ", " + item.TypeFive + ". I've added the " + item.Classification + " to your Alexa app.  Which other facts would you like to know about?";
    return sentence2;  

}
*/

function getSpeechDescription2(item)
{
    let sentence2 =  "The " + item.Topic + " that you wanna know about is in Jewett and Serway 8th Edition, page " + item.Pages + ", section " + item.Section + ", and if you're interested in practice about " + item.Topic + ", you can find the relevant problems at page " + item.ProblemPages + " with problem numbers " + item.ProblemNumbers + ". I've added the " + item.Topic + " to your Alexa app.  Which other ASU topics would you like to know about?";
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
            return "Here is your " + counter + "th question.  What are the " + formatCasing(property) + " of the "  + item.PopulationName + "?";
        
        case "TypeOne":
        case "TypeTwo":
        case "TypeThree":
        case "TypeFour":
        case "TypeFive":
            return "Here is your " + counter + "th question.  What is the " + formatCasing(property) + " of the "  + item.Classification + "?";
        
        
        default:
            return "Here is your " + counter + "th question.  What is the " + formatCasing(property) + " of the "  + item.PopulationName + "?";
        
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
            return "The " + formatCasing(property) + " of the " + item.PopulationName + " are " + item[property] + ". ";
        
        case "TypeOne":
        case "TypeTwo":
        case "TypeThree":
        case "TypeFour":
        case "TypeFive":
            return "The " + formatCasing(property) + " of the " + item.Classification + " is " + item[property] + ". ";
        
        
        
        default:
            return "The " + formatCasing(property) + " of the " + item.PopulationName + " is " + item[property] + ". ";
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
const WELCOME_MESSAGE = "Welcome to Atoms Stars and Universe! You can ask me about some topics of ASU, start facts of the day, or you can ask me to start a quiz.  What would you like to do?";

//This is the message a user will hear when they start a quiz.
const START_QUIZ_MESSAGE = "OK.  I will ask you 8 questions about ASU.";

//This is the message a user will hear when they try to cancel or stop the skill, or when they finish a quiz.
const EXIT_SKILL_MESSAGE = "Thank you for using the Atoms Stars and Universe skill! Goodbye!";
const EXIT_SKILL_MESSAGE_facts = "Thank you for playing the Atoms Stars and Universe facts of the day! Let's play again tomorrow!";
const EXIT_SKILL_MESSAGE_quiz = "Thank you for playing the Atoms Stars and Universe quiz game! Let's play again soon!";

//This is the message a user will hear after they ask (and hear) about a specific data element.
/*const REPROMPT_SPEECH = "Which other type of Stellar populations would you like to know about?"; */
const REPROMPT_SPEECH = ""; 

//This is the message a user will hear when they ask Alexa for help in your skill.
const HELP_MESSAGE = "I know lots of things about the ASU.  You can ask me about some ASU topics and start the facts of the day, and I'll tell you what I know.  You can also test your knowledge by asking me to start a quiz.  What would you like to do?";


//This is the response a user will receive when they ask about something we weren't expecting.  For example, say "pizza" to your
//skill when it starts.  This is the response you will receive.
function getBadAnswer(item) { return "I'm sorry. " + item + " is not something I know very much about in this skill. " + HELP_MESSAGE; }

//This is the message a user will receive after each question of a quiz.  It reminds them of their current score.
function getCurrentScore(score, counter) { return "Your current score is " + score + " out of " + counter + ". "; }

//This is the message a user will receive after they complete a quiz.  It tells them their final score.
function getFinalScore(score, counter) { return "Your final score is " + score + " out of " + counter + ". "; }

//These next four values are for the Alexa cards that are created when a user asks about one of the data elements.
//This only happens outside of a quiz.

//If you don't want to use cards in your skill, set the USE_CARDS_ASU to false.  If you set it to true, you will need an image for each
//item in your data.
const USE_CARDS_ASU = true;

//This is what your card title will be.  

/* The function below is to obtain the property of the first object.
*/
function getCardTitle(item) 
{ 

    return item[Object.getOwnPropertyNames(item)[0]];
    
}

//=========================================================================================================================================
// This is the data section.
//=========================================================================================================================================


/*  Below is the code that imports the data constant defined in the script database.js  */

const data = require('./database').data;
 
const data_ans = require('./database').data1;

const data_ans2 = require('./database').data2;
//=========================================================================================================================================
// End of the notes and quiz game
//=========================================================================================================================================



//=========================================================================================================================================
// Start of the facts of the day!
//=========================================================================================================================================
const data_facts = require('./factData').data;

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const SKILL_NAME = 'Facts of the day';
const GET_FACT_MESSAGE = "Here's your daily fact: ";
/* const HELP_MESSAGE_facts = 'You can say: give me a fact, or, you can say exit... What can I help you with?'; */
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';
const REPEAT_MESSAGE = 'Sure: ';



// defining a function to get the fact of the day, which will be called by the GetNewFactInent and the RepeatIntent

function getFact(factArray) {
    
    // generating an index to call a fact from the array of facts
    // start / end date = first / last day of teaching of ASU ("YYYY-MM-DD")
    const startDate = new Date("2017-10-02"); // 2nd oct 2017
    const endDate = new Date("2017-12-15"); // 15th dec 2017
    const currentDate = new Date();
    
    // initialising the index of the the array to be called
    let factIndex;
    
    // finding the elapsed time in milliseconds between current date and epoch date
    const msElapsed = currentDate - startDate;
    // converting the elpased time, in milliseconds, to days
    const daysElapsed = Math.floor( msElapsed / (1000 * 60 * 60 * 24) );
    
    // if the course is being taught, provide facts in chronological order
    if (currentDate <= endDate) {
    // reducing days elapsed to an index within the limits of fact array
    factIndex = daysElapsed % (factArray.length);
    }
    
    // if the course is over, provide facts in a random order
    else if (currentDate > endDate) {
        // psuedo random number generator based on current date, between 0 and 1
        var x = Math.sin(daysElapsed) * 10000; // days elapsed is used as the 'seed'
        var y = x - Math.floor(x); // y = random no. between 0 and 1
        factIndex = Math.floor(y * factArray.length); // adjusting number to an integer within index of array
    }
    
    const randomFact = factArray[factIndex];
    
    return randomFact;
}

//=========================================================================================================================================
// End of the facts of the day!
//=========================================================================================================================================



//=========================================================================================================================================
//Plz do not change the code below bcoz it might break your skill.
//=========================================================================================================================================

const states = {
    START: "_START",
    QUIZ: "_QUIZ",
    FACTS:"_FACTS"
};

const handlers = {
     "LaunchRequest": function() {
        this.handler.state = states.START;
        this.emitWithState("Start");
     },
    "GetNewFactIntent": function() {
        this.handler.state = states.FACTS;
        this.emitWithState("Facts");
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
//This is the notes and references of the physics part
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
            console.log("\nMEMO's TEST\n");
            if (USE_CARDS_ASU)
            {
/*                let imageObj = {smallImageUrl: getSmallImage(item), largeImageUrl: getLargeImage(item)}; */

                this.response.speak(getSpeechDescription1(item)).listen(REPROMPT_SPEECH);
                this.response.cardRenderer(getCardTitle(item), getTextDescription(item) /*, imageObj */);            }
            else
            {
                this.response.speak(getSpeechDescription1(item)).listen(REPROMPT_SPEECH);
            }
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
            console.log("\nMEMO's TEST\n");
            if (USE_CARDS_ASU)
            {
/*                let imageObj = {smallImageUrl: getSmallImage(item), largeImageUrl: getLargeImage(item)};
*/
                this.response.speak(getSpeechDescription2(item)).listen(REPROMPT_SPEECH);
                this.response.cardRenderer(getCardTitle(item), getTextDescription(item) /*, imageObj*/);            }
            else
            {
                this.response.speak(getSpeechDescription2(item)).listen(REPROMPT_SPEECH);
            }
        }
        else
        {
            this.response.speak(getBadAnswer(item)).listen(getBadAnswer(item));

        }

        this.emit(":responseReady");
    },
    'GetNewFactIntent': function () {
        this.handler.state = states.FACTS;
        this.emitWithState("Facts");
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
//This is the facts of the day part
//=========================================================================================================================================

const factsHandlers = Alexa.CreateStateHandler(states.FACTS,{
    "Facts": function() {
        this.emitWithState("GetNewFactIntent");
    },
    "GetNewFactIntent": function () {
        const factArr = data_facts;
        const randomFact = getFact(factArr);
        const speechOutput = GET_FACT_MESSAGE + randomFact + " I've added the this fact to your Alexa app. You can ask me about some topics of ASU or you can ask me to start a quiz.  What would you like to do?";

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput).listen(REPROMPT_SPEECH);
        this.emit(":responseReady");
    },
    "AnswerIntent_a": function() {
        this.handler.state = states.START;
        this.emitWithState("AnswerIntent_a");
    },
    "QuizIntent": function() {
        this.handler.state = states.QUIZ;
        this.emitWithState("Quiz");
    },
    "AMAZON.PauseIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE_facts);
        this.emit(":responseReady");
    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(EXIT_SKILL_MESSAGE_facts);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(EXIT_SKILL_MESSAGE_facts);
        this.emit(':responseReady');
    },
     'AMAZON.RepeatIntent': function () {
        const factArr = data_facts;
        const randomFact = getFact(factArr);
        const speechOutput = REPEAT_MESSAGE + randomFact;

        this.response.cardRenderer(SKILL_NAME, randomFact);
        this.response.speak(speechOutput).listen(REPROMPT_SPEECH);
        this.emit(':responseReady');

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
            speechOutput = response + " " + EXIT_SKILL_MESSAGE_quiz;

            this.response.speak(speechOutput);
            this.emit(":responseReady");
        }
    },
    "AMAZON.RepeatIntent": function() {
        let question = getQuestion(this.attributes["counter"], this.attributes["quizproperty"], this.attributes["quizitem"]);
        this.response.speak(question).listen(question);
        this.emit(":responseReady");
    },
    'GetNewFactIntent': function () {
        this.handler.state = states.FACTS;
        this.emitWithState("Facts");
    },
    "AMAZON.StartOverIntent": function() {
        this.emitWithState("Quiz");
    },
    "AMAZON.StopIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE_quiz);
        this.emit(":responseReady");
    },
    "AMAZON.NoIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE_quiz);
        this.emit(":responseReady");
    },
    "AMAZON.PauseIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE_quiz);
        this.emit(":responseReady");
    },
    "AMAZON.CancelIntent": function() {
        this.response.speak(EXIT_SKILL_MESSAGE_quiz);
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
//The function defined below has been linked to the notes and references intent.
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
//The function defined below has been used in the card skill.
//=========================================================================================================================================

function getTextDescription(item)
{
    let text = "";

    for (let key in item)
    {
        text += formatCasing(key) + ": " + item[key] + "\n";
    }
    return text;
}
//=========================================================================================================================================
//The function defined below has been used in the Answer intent above.
//=========================================================================================================================================

exports.handler = (event, context) => {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers, startHandlers, quizHandlers,factsHandlers);
    alexa.execute();
};
