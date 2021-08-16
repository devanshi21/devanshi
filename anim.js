let quotes=[

           'Leadership and learning are indispensable to each other.” – John F. Kennedy, 35th President of the United States',
           'I am always doing things I cant do — thats how I get to do them. - Pablo Picasso, Spanish painter, sculptor, stage designer, poet, playwright',
           'Before software can be reusable it first has to be usable. (Ralph Johnson)',
           'Learning is not a one-time event or a periodic luxury. Great leaders in great companies recognize that the ability to constantly learn, innovate, and improve is vital to their success.” – Amy Edmondson inTeaming: How Organizations Learn, Innovate, and Compete in the Knowledge Economy',
           'Software undergoes beta testing shortly before it’s released. Beta is Latin for “still doesn’t work. (Anonymous)',
           'The best performance improvement is the transition from the nonworking state to the working state. (J. Osterhout)',
           'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late. (Seymour Cray)',
           'Don’t worry if it doesn’t work right. If everything did, you’d be out of a job. (Mosher’s Law of Software Engineering)'
];


// let btn=document.querySelector('.btn');
// btn.addEventListener('click', displayQuote);

function displayQuote(){
    //create an index of a random number 
    //convert it into between 0 to length of quotes[]
    let index=Math.floor(Math.random()*quotes.length);
    let div=document.querySelector('#quote');
    let quote=`<div class="card1">
    <i class="fas fa-quote-left">
    <p>${quotes[index]}</p>
    <i class="fas fa-quote-right">
   </div>`;
    div.innerHTML=quote;
    
}

