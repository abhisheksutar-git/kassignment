let buttonEl = document.getElementById("nextButton");
let previousButtonEl =  document.getElementById("previousButton");
let submmitButtonEl = document.getElementById("submmitButton");
let nextButtonEl = document.getElementById("nextButton");
let firstFormIdEl = document.getElementById("firstFormId");
let secondFormEl = document.getElementById("secondForm");

function onClickChangeNextButton() {
    submmitButtonEl.classList.replace("hideSubmitButton" , "showSubmitButton");
    nextButtonEl.classList.replace( "showNextButton" , "hideNextButton");
    previousButtonEl.classList.replace("hidepreviousButton" , "showpreviousButton");
    firstFormIdEl.classList.replace("showFirstForm" ,  "hideFirstForm");
    secondFormEl.classList.replace("hideSecondForm" , "showSecondForm");


}

function onclicprevious() {
    previousButtonEl.classList.replace( "showpreviousButton" , "hidepreviousButton" );
    nextButtonEl.classList.replace( "hideNextButton" ,"showNextButton" , );
    submmitButtonEl.classList.replace( "showSubmitButton" ,"hideSubmitButton" , );
    firstFormIdEl.classList.replace(  "hideFirstForm" , "showFirstForm"   );
    secondFormEl.classList.replace( "showSecondForm" , "hideSecondForm"  );
}