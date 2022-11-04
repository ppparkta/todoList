const quotes = [
	{
		quote: "Life is unfair, get used to it.",
		author: "Bill Gates",
	},
	{
		quote: "When you have faults, do not fear to abandon them.",
		author: "Confucius",
	},
	{
		quote: "Age is no guarantee of maturity.",
		author: "Lawana Blackwell",
	},
	{
		quote: "You will face many defeats in life, but never let yourself be defeated.",
		author: "Maya Angelou",
	},
	{
		quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
		author: "Nelson Mandela",
	},
	{
		quote: "This too shall pass.",
		author: "Et hoc transibit",
	},
	{
		quote: "The die is cast.",
		author: "Julius caesar",
	},
	{
		quote: "Only I can change me life, no one can do it for me.",
		author: "Carol Burnett",
	},
	{
		quote: "When in doubt, choose change.",
		author: "Lily leung",
	},
];

const $quote = document.querySelector("#quote span:first-child");
const $author = document.querySelector("#quote span:last-child");
const todaysQuote=quotes[Math.floor(Math.random()*quotes.length)];

$quote.textContent=todaysQuote.quote;
$author.textContent=todaysQuote.author;

