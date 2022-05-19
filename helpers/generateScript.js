function generate(formId, fields){
    let txtFeedbackyId = `${formId}`

    let feedbackyAreas = ""
    let fieldsList = JSON.parse(fields);
    for(var i=0;i<fieldsList.length;i++){
        feedbackyAreas += `<textarea class="${fieldsList[i].name}" style="width: 100%;border:1px solid #bdc3c7;border-radius: 3px;resize: none;" minlength="${fieldsList[i].minLength}" maxlength="${fieldsList[i].maxLength}" rows="8"></textarea> <br><br>`
    }
    let txtFeedbackyContent = `<div id="feedbackyModal" class="feedbacky-modal"> <div class="feedbacky-modal-content"> <span class="feedbacky-close">&times;</span> <div class="feedbacky-modal-inside-content"> <h2 style="text-align: center;">SEND YOUR FEEDBACK</h2> ${feedbackyAreas} <br><br> <button onclick="feedbackySendForm()" style="width: 100%;background-color: #e67e22;color: #ffffff;border:none;padding-top: 20px;padding-bottom: 20px;">SEND</button> </div> </div> </div>`
    
    let txtFeedbackyResult= `<h2 style="text-align:center;color:green;"><br/><br/>WE HAVE GOT YOUR FEEDBACK<br/><br/></h2>`
    var scriptText = `<script> var feedbackyData = { feedbackyID: '${txtFeedbackyId}', formAreas: ${fields}, feedbackyContent: '${txtFeedbackyContent}', feedbackyResultContent: '${txtFeedbackyResult}', } </script> <script src="feedbacky.js"></script>`
    return scriptText
}

module.exports = {
    generate
}