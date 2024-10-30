// Array of quotes to display
const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Act as if what you do makes a difference. It does.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Believe you can and you're halfway there."
  ];
  
  // Function to generate a new quote and random background gradient
  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').textContent = quotes[randomIndex];
  
    // Generate two random colors for the gradient
    const color1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const color2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  
    // Set a new linear gradient background with the random colors
    document.body.style.background = `linear-gradient(135deg, ${color1}, ${color2})`;
  }
  
  