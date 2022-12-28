const guessNumber = Math.floor(Math.random() * 100);
let noOfGuesses = 0;
let IsGuessed = false;
let ins = document.getElementById("ins");
let showIns = document.getElementById("instruction");
function guess(){
    noOfGuesses++;
    let g = Number.parseInt(document.getElementById("g_no").value);
    if(Number.parseInt(g) == guessNumber){
        IsGuessed = true;
    }else if(Number.parseInt(g) <= guessNumber){
        showIns.classList = "anim";
        ins.innerText = "GO TO UP";
    }else{
        showIns.classList = "anim";
        ins.innerText = "GO TO DOWN";
    }
    document.getElementById("g_no").value = "";
    if(IsGuessed){
        document.getElementById("guess-res").innerHTML = `<h1>Congratulation! You Guess the Correct Number .</h1> <p>Your Score is ${100 - noOfGuesses} / 100.<p> <button onclick = location.reload()>Play Again</button>`
        console.log(100 - noOfGuesses);
    }
}
function removeAnim(){
    showIns.classList = "";    
}