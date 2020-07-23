const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

//
const greetings = [
  'its none of your business',
  'i am fine,buddy',
  'oh please, do not ask me that'
];

const weather = [
  'go and, see yourself',
  'i do not know'
];



const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

recognition.onstart = function() {
  console.log('Voice is activated');
}

// recognition.onspeechend = function() {
//
// }

recognition.onresult = function(event) {
  const current = event.resultIndex;

  const transcript = event.results[current][0].transcript;
  content.textContent = transcript;
  readOutLoud(transcript);
}

//add the listener to the button

btn.addEventListener('click', () => {
  recognition.start();
});

function readOutLoud(message){
  const speech = new SpeechSynthesisUtterance();
  speech.text = message;
if (message.includes('how are you')) {
  const finalText = greetings[Math.floor(Math.random() * greetings.length)];
  speech.text = finalText;
}
if (message.includes('weather')) {
  const finalText = weather[Math.floor(Math.random() * weather.length)];
  speech.text = finalText;
}
if (message.includes('who are you')) {
  // const finalText = weather[Math.floor(Math.random() * weather.length)];
  speech.text = 'preetoms new gaal frend';
}
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;

  window.speechSynthesis.speak(speech);
}
