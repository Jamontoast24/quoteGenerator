var quotes = [ {
  quote: "Icecrown... A monument to our suffering. The veil between life and death. Where a usurper sits on a Frozen Throne. But no king rules forever",
  author: "Sylvanas Windrunner"
},
{
  quote: "Truth is found in death.",
  author: "Blood Prince Council"
},
{
  quote: "In this world where time is your enemy. It is my greatest ally. This grand game of life that you think you play infact plays you. To that I say... Let the games begin!",
  author: "Nefarian"
},
{
  quote: "Can you feel the cold hand of death upon your heart?",
  author: "Sindragosa"
},
{
  quote: "Frostmourne hungers...",
  author:" The Lich King"
},
{
  quote: "Good news everyone! I think I perfected a plague that will destroy all life on Azeroth!",
  author: "Professor putricide"
},
{
  quote: "You speak of justice? Of cowardice? I will show you the justice of the grave... And the true meaning of fear.",
  author: "The Lich King"
}
]

var generateQuote = document.getElementById("generate")

generateQuote.onclick = function() {
  var random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[random].quote;
  document.getElementById("author").innerHTML = quotes[random].author;
}


