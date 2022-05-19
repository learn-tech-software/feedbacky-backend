if(feedbackyData){
    document.body.innerHTML += feedbackyData.feedbackyContent;
    var modal = document.getElementById("feedbackyModal");
    var modalInsideContent = document.getElementsByClassName("feedbacky-modal-inside-content")[0];
    var defaultModalInsideContent = modalInsideContent.innerHTML;
    var span = document.getElementsByClassName("feedbacky-close")[0];
}else{
    console.log("Please, add your feedbacky datas.");
}

var API_URL = "https://feedbacky-backend-2022.herokuapp.com/form/createAnswer";

function feedbackyModalOpen(){
    modalInsideContent.innerHTML = defaultModalInsideContent;
    modal.style.display = "block";
};

function feedbackyModalClose(){
    modal.style.display = "none";
};

function feedbackySendForm(){
    var formBody = [];
    var formBodyFields = [];

    feedbackyData.formAreas.forEach(area => {
          formBodyFields.push({
                fieldName: document.getElementsByClassName(area.name)[0].classList.value,
                fieldAnswer: document.getElementsByClassName(area.name)[0].value
          });
    });
    const Http = new XMLHttpRequest();
    Http.open("POST", API_URL);
    Http.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    formBody = {
          response: JSON.stringify(formBodyFields),
          userAgent: navigator.userAgent,
          formId: feedbackyData.feedbackyID
    };
    Http.send(JSON.stringify(formBody));

    Http.onreadystatechange = (e) => {
          if(Http.status === 201){
                modalInsideContent.innerHTML = feedbackyData.feedbackyResultContent;
          }
    };
};

span.onclick = function () {
    modal.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
          modal.style.display = "none";
    }
};

