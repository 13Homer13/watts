let quotes = [
    "Waking up to who you are requires letting go of who you imagine yourself to be",
    "No amount of anxiety makes any difference to anything that is going to happen.",
    "The meaning of life is just to be alive. It is so plain and so obvious and so simple. And yet, everybody rushes around in a great panic as if it were necessary to achieve something beyond themselves.",
    "By replacing fear of the unknown with curiosity we open ourselves up to an infinite stream of possibility. We can let fear rule our lives or we can become childlike with curiosity, pushing our boundaries, leaping out of our comfort zones, and accepting what life puts before us.",
    "This is the real secret of life -- to be completely engaged with what you are doing in the here and now. And instead of calling it work, realize it is play.",
    "Stop measuring days by degree of productivity and start experiencing them by degree of presence.",
    "We are living in a culture entirely hypnotized by the illusion of time, in which the so-called present moment is felt as nothing but an infinitesimal hairline between a causative past and an absorbingly important future. We have no present. Our consciousness is almost completely preoccupied with memory and expectation. We do not realize that there never was, is, nor will be any other experience than present experience. We are therefore out of touch with reality.",
    "Life is not a problem to be solved, but an experience to be had.",
    "You are the universe experiencing itself.",
    "The future is a concept, it doesn't exist. There is no such thing as tomorrow. There never will be, because time is always now. That's one of the things we discover when we stop talking to ourselves and stop thinking. We find there is only present, only an eternal now.",
    "To go out of your mind at least once a day is tremendously important. By going out of your mind, you come to your senses.",
    "People sometimes fail to live because they are always preparing to live.",
    "We must abandon completely the notion of blaming the past for any kind of situation we're in and reverse our thinking and see that the past always flows back from the present. That now is the creative point of life. So you see it's like the idea of forgiving somebody, you change the meaning of the past by doing that...Also, watch the flow of music. The melody as its expressed is changed by notes that come later. Just as the meaning of a sentence...you wait till later to find out what the sentence means...The present is always changing the past.",
    "Problems that remain persistently insoluble should always be suspected as questions asked in the wrong way.",
    "All that you see out in front of you is how you feel inside your head.",
    "Stay in the center, and you will be ready to move in any direction.",
    "The only way to make sense out of change is to plunge into it, move with it, and join the dance.",
    "Man suffers only because he takes seriously what the gods made for fun.",
    "You must not be afraid of playing wrong notes. Just forget it, play it wrong! But play!",
    "Everything in the world is gloriously meaningless.",
    "Many people never grow up. They stay all their lives with a passionate need for external authority and guidance, pretending not to trust their own judgment.",
    "We see what we believe rather than what we see.",
    "The destination of life is this eternal moment.",
    "Hurrying and delaying are alike ways of trying to resist the present.",
    "Real religion is the transformation of anxiety into laughter.",
];

console.log(quotes.length);

const button = document.getElementById("button");
const quote = document.getElementById("quote");

button.addEventListener("click", () => {
    quote.innerText = quotes[Math.floor(Math.random() * 25)];
})