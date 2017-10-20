var zodiacs =[
{
	Horoscope:"aquarius",
	img: "img/aquarius.jpg",
	description:"Perhaps the most misunderstood sign of the zodiac,we can for sure say that the Aquarius personality values intelligence, ideas and loves a good theory. Yet progress for its own sake is not what you’re after; Aquarius people are the discriminating embracers of innovation that works. Just to give one not-so-random example, you’ve probably got your hand on a mouse right now. That was invented by Douglas Engelbart, an Aquarian.",
},
{
    Horoscope:"pisces" ,
    img:"img/pisces.jpg",
    description:"The last sign of the zodiac embodies the idea that the world is created by opposite energies that complement and balance one another. Pisces is the living embodiment of yin and yang. That is to say, you want balance in your life, and you’ll go out of your way to find it. But you can also do without or function under extreme conditions, as if you’re drawing energy and information from some parallel universe. When we think of the great Pisceans of all time, Albert Einstein comes to mind, and this is someone who clearly understood alternate dimensions of reality and how what we see is not all there is.",
},
{
    Horoscope:"aries" ,
    img:"img/aries.jpg",
    description:"Self-assertive, sometimes bold, sometimes cloaking deep insecurity with that boldness, Aries is always up for an adventure. Your sign is the key that starts the engine of the universe, and that means you have extra motivation, even in the face of intimidating situations. Something in you just rises to the occasion and you make your presence known. Your friends count on you for this, though you often need their support and do a lot better as an initiator when you have a posse around you.",
},
{
    Horoscope:"taurus",
    img:"img/taurus.jpg",
    description:"Calm, collected and attractive on the outside, raging like a tempest on the inside, Taurus is the blacksmith shop of the soul. If you’re a Taurus, you’ve incarnated at this time for the purpose of being shaped and tempered. Just be sure you go gently on yourself even during the tempering process. And remember that such deep working out should be harnessed in the form of creative energy as well as sensuality. You need both.",
},
{
    Horoscope:"gemini",
    img:"img/gemini.jpg",
    description:"Gemini is one of the three human signs, illustrated by a person rather than some other kind of critter. And when a human appears, he/she appears in a pair. Isn’t that interesting? This comes with a question: what are the two sides of your nature? You’ve obviously identified a tendency to what’s called ‘dualism’ — the simultaneous expression of opposites.",
},
{
    Horoscope:"cancer",
    img:"img/cancer.jpg",
    description:"Nurturing, loving, devoted, cuddly, milky and self-centered, Cancer has it all. Your sign is not multifaceted; rather, you change like the tides, and are a little different every single day. Less polite people call you moody. What, not everyone has moods? Why do they all take things so personally? Or is it you who takes others so personally?",
},
{
    Horoscope:"leo",
    img:"img/leo.jpg",
    description:"Leo is one of the most misunderstood signs. But it’s easier to understand if you remember that while the other signs are ruled by a planet that orbits the Sun, Leo is ruled by the thing at the center of our solar system, around which all the other planets orbit",
},
{
    Horoscope:"virgo",
    img:"img/virgo.jpg",
    description:"Virgo is a mentally oriented, highly intelligent, nervous sign that needs to remember it’s made of the element earth, not air. That’s another way of saying that your life is a constant process of translating from idea to reality and back. Ideas are not enough. Yours is not the sign of science but applied science. The difference is similar to that between working in theoretical physics and learning how to be a master baker, or using your skill in chemistry to be an expert hair colorist. Applying ideas can be challenging because the mental world changes so much faster than the often-stuck dynamics of the physical world, and we’re often at a loss for how to translate between the two. That would be your job: to identify ideas and how to apply them; to match up problems with corresponding solutions",
},
{
    Horoscope:"libra",
    img:"img/lebra.jpg",
    description:"Your sign is about beauty in its many forms. No matter what a Libra does, it’s got the intention of elegance. Everything is considered in terms of its presentation, which is not at the expense of quality; the presentation enhances the quality and vice versa. But appearances count, and you’re unlikely to respect anything that’s not done both with care and the appearance thereof.",
},
{
    Horoscope:"scorpio",
    img:"img/scorpio.jpg",
    description:"Scorpio is an emotional, fiery water sign, usually represented by a creature of the desert — the scorpion. But it’s a desert creature that resembles lots of critters that live underwater, as if the ocean dried out and the scorpion stayed behind. Note the contradictions: fiery water, ruled by a land creature. Of all the animals to have as your totem, the scorpion is by far the oddest of the lot, and we can be sure the ancient masters of lore had a perverse sense of humor, or were keenly aware of human nature.",
},
{
    Horoscope:"sagittarius",
    img:"img/sagittarius.jpg",
    description:"At the gates of our galaxy stands a centaur (the constellation Centaurus), whose name is Chiron. This is an ancient symbol, half-horse, half-man (or woman), whose time has come. It’s a comment about the state of humanity — not sure if it’s a person or an ‘animal’ and not sure how we feel about the animal aspect. Chiron’s features include being a maverick and helpful, though in a way that’s sometimes inconvenient but works. Some astrologers associate a planet by this name with your sign",
},
{
    Horoscope:"capricorn",
    img:"img/capricorn.jpg",
    description:"The sign of tradition is also the sign of revolutionaries. The sign of reserve is the one associated with the impressive debauchery of the Roman festival of Saturnalia. Saturn, your ruling planet, is considered the very stalwart of stuck, but is in reality the most dependable agent of change. You are similarly versatile, embracing the new with a mix of eagerness and skepticism, and honoring tradition as a source of information about right now. That, and you think that old books smell interesting.",
}]
function getHoroscope(){
    
    var userInput = document.getElementById("userInput").value;
    var emptyH1 = document.getElementById("userSign");
    var emptyImg = document.getElementById("userLogo");
    var emptyP = document.getElementById("userDescription");


    for ( var i = 0; i <= zodiacs.length; i++ ) {
        
        if(userInput == zodiacs[i].Horoscope) {

            emptyH1.innerHTML = zodiacs[i].Horoscope;
            emptyImg.src = zodiacs[i].img;
            emptyP.innerHTML = zodiacs[i].description;
            
        }
    }
}




