var topics = ["HTML", "CSS", "Git", "JavaScript"]
var randomTopic = topics[Math.floor(Math.random() * topics.length)]

console.log("Here are the topics we learned through Prework:");
listTopics();
console.log("Which topic should we study first?");
selectTopic(randomTopic);

function listTopics(){
    for(var x = 0; x < topics.length; x++){
        console.log(topics[x]);
    }
}

function selectTopic(i){
    if (i === 'HTML') {
        console.log("Let's study HTMl!");
    } else if (i === 'CSS') {
        console.log("Let's study CSS!");
    } else if (i === 'Git') {
        console.log("Let's study Git");
    } else if (i === 'JavaScript') {
        console.log("Let's study JavaScript");
    } else {
        console.log("Please try again!");
    }
}