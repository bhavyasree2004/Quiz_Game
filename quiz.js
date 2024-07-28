const quesJSON = [
  {
    correctAnswer: 'Three ',
    options: ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    options: [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    options: [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    options: [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    options: [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

  let score=0;
  let currentQuestion=0;
  let totalScore=quesJSON.length;
  const questionEl=document.getElementById("question");
  const optionsEl=document.getElementById("options");
  const scoreEL=document.getElementById("score");
  const nextEl=document.getElementById("next");
  showQuestion();
  nextEl.addEventListener('click',()=>{
    scoreEL.textContent=`Score: ${score} / ${totalScore}`;
    nextQuestion();
  });
 function showQuestion(){
  const {correctAnswer,options,question}=quesJSON[currentQuestion];
  questionEl.textContent=question;
  const shuffledoptions=shuffleOptions(options);
  for(let i=0;i<shuffledoptions.length;i++){
    const buttons=document.createElement("button");
    buttons.textContent=shuffledoptions[i];
    optionsEl.appendChild(buttons);
    buttons.addEventListener('click',()=>{
      if(shuffledoptions[i] === correctAnswer){
        score++;
      }
      else{
        score=score-0.25;
      }
      scoreEL.textContent=`Score: ${score} / ${totalScore}`;
      nextQuestion();
    });
  }
 }

 function nextQuestion(){
  currentQuestion++;
  optionsEl.textContent="";
  if(currentQuestion>=quesJSON.length){
    questionEl.textContent='Quiz Completed';
    nextEl.remove();
  }
  else{
    showQuestion();
  }
 }
//funtion for shuffling
function shuffleOptions(options){
  for(let i=options.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*i);
    [options[i],options[j]]=[options[j],options[i]];
  }
  return options;
}
    
 
