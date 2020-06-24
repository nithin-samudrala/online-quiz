function answersubited(){
    var total=5;
    var marks=0;
    var q1=document.forms['quiz']['q1'].value;
    var q2=document.forms['quiz']['q2'].value;
    var q3=document.forms['quiz']['q3'].value;
    var q4=document.forms['quiz']['q4'].value;
    var q5=document.forms['quiz']['q5'].value;
    var answer=['b','c','a','a','d'];
    for (let i = 1; i <= 5; i++) {
        if(eval('q'+i) == answer[i-1]){
            marks++;            
        }
        else{
            var rog=(eval('q'+i+answer[i-1]))
            var wrong=document.getElementById(eval('q'+i+answer[i-1]))
            // console.log(wrong);
            // console.log(rog.nextSibling.textContent+ 'correct ans');
            // rog.className='wrong'
            var newNode = document.createElement('p');
            newNode.textContent=`Correct answer is ${answer[i - 1]}` 
            newNode.id='answer'
            rog.parentNode.insertBefore(newNode, rog.nextSibiling);

        }
        
    }
    
    var score=document.getElementById('score')
    // score.textContent=`You scored ${marks} out of ${total}`
    score.innerHTML='<p>You scored <span>'+marks+'</span> out of <span>'+total+'</span><a href='+'#'+' onclick='+'location.reload();'+'>  Click hear to attemt quiz again</a></p>'
    // var button = document.getElementsByid('button');
    // console.log(button);
    
    button.parentNode.removeChild(button);
    // alert(marks);
    return false;
}
