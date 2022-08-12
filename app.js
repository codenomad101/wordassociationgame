const scoreDisplay= document.querySelector('#score-display');

const questionDisplay = document.querySelector('#question-display');

const questions =[{
    quiz:['value', 'estimate','evaluate'],
    options:['jury','assess'],
    correct :2    
},

{
    quiz:['right', 'correct','good'],
    options:['evaluate','affirmative'],
    correct :2
},
{
    quiz:['close','near','next'],
    options:['trace','adjacent'],
    correct:2
},
{
    quiz:['fast','quick','rapid'],
    options:['charity','prompt'],
    correct:2
}

]

let score =0;
scoreDisplay.textContent=score;
const clicked=[];

function populateQuestions(){
    questions.forEach(question=>{
        const questionBox= document.createElement('div');
        questionBox.classList.add('question-box');
       question.quiz.forEach(tip=>{
        const tipText = document.createElement("p");
        tipText.innerText=tip;
        questionBox.append(tipText);

       })
      const questionButtons=document.createElement('div');
      questionButtons.classList.add('question-buttons');
      questionBox.append(questionButtons);

     question.options.forEach((option,optionIndex)=>{
        const questionButton=document.createElement('button');
        questionButton.classList.add('question-button');
        questionButton.textContent=option;

        questionButton.addEventListener('click',()=>checkAnswer(questionButton,option,optionIndex + 1,question.correct));
        questionButtons.append(questionButton);


     })
      const answerDisplay= document.createElement('div');
      answerDisplay.classList.add('answer-display');

        questionDisplay.append(questionBox);

    })
}
populateQuestions()

function checkAnswer(questionButton,option, optionIndex,correctAnswer){
    console.log('option',option);
    console.log('optionindex',optionIndex)
    if (optionIndex=== correctAnswer){
        score=score+1;
        scoreDisplay.textContent=score;

    }else{
        score=score-1;
        scoreDisplay.textContent=score;
    }
    clicked.push(option);
    questionButton.disabled= clicked.includes(option);
}
