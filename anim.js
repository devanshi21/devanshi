function displayQuote(){
    let div=document.querySelector('#quote');
  fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
        //console.log(`${data.content} —${data.author}`)            
        let quote=`<div class="card1">
        <i class="fas fa-quote-left">
        <p>${data.content} <br>— ${data.author} </p>
        <i class="fas fa-quote-right">
        </div>`;
        div.innerHTML=quote;
        })
}


/****************Text animation ************************/

var text1 = ["I'm a", "I'm"];
var text2 = ["\"Software Developer\"","\"into amazing experiences\""];
var count = 2;
setInterval(() => {
  count--;
  document.getElementById('text-1').innerHTML= text1[count];
  document.getElementById('text-2-span').innerHTML= text2[count];
  if(count == 0){
    count = 2;
  }
}, 7000);