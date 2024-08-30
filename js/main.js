let num = true;
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;   
         num =!num;
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';   

    });
});
$(document).ready(function() {
    $(".elemento").click(function() {
      console("entra",num)
        $(this).animate({top: '200px'}, 500);
    });
});