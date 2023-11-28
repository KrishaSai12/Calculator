function ac(){
    let text = document.getElementById('text').value =""; //displaying empty value when ac button clicked by calling ac()

}

function display(no){
    let text = document.getElementById('text').value += no; // displaying the value from the button
    // console.log(text)
    
}
function output(){
    let res = eval(document.getElementById("text").value); // evaluating the value in the text box
    document.getElementById("text").value = res;

}
function sqrt(){
    let val = Math.sqrt(Number(document.getElementById("text").value));
    document.getElementById("text").value = val;
}
function log(){
    let val = Math.log(Number(document.getElementById("text").value));
    document.getElementById("text").value = val;
}

function ex(){
    let val = Math.exp(Number(document.getElementById("text").value));
    document.getElementById("text").value = val;
}