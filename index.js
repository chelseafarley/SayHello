var greetings = [
  "Bonjour", "Hola", "Hello", "Konnichiwa", "Guten tag", "Shalom", "G'day", "Kia ora", "Bula", "Aloha"
];

var getRandomGreeting = function() {
  return greetings[Math.floor(Math.random() * greetings.length)];
}

export default function SayHello(name) {
  var greeting = getRandomGreeting();
  return greeting + " " + name;
}
