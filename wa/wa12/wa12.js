let quotesByAuthor = [];
    let currentAuthor = '';

    async function fetchQuotesByAuthor(author) {
      const apiUrl = `https://api.quotable.io/quotes?author=${author}`;

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch quotes. Status: ' + response.status);
        }

        const data = await response.json();
        return data.results;
      } catch (error) {
        console.error('Error fetching quotes:', error);
        return [];
      }
    }

    async function fetchQuoteByAuthor(author) {
      if (!quotesByAuthor.length) {
        quotesByAuthor = await fetchQuotesByAuthor(author);
      }

      if (quotesByAuthor.length > 0) {
        const nextQuote = quotesByAuthor.shift();
        return nextQuote;
      }

      return null;
    }

    async function fetchQuote() {
      const apiUrl = 'https://api.quotable.io/random';

      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Failed to fetch quote. Status: ' + response.status);
        }

        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching quote:', error);
        return null;
      }
    }

    function displayQuote(quoteData) {
      const quoteTextElement = document.getElementById('quote-text');
      const quoteAuthorElement = document.getElementById('quote-author');

      if (quoteData && quoteData.content) {
        quoteTextElement.textContent = `"${quoteData.content}"`;
        quoteAuthorElement.textContent = `- ${quoteData.author || 'Unknown'}`;
        currentAuthor = quoteData.author || '';
      } else {
        quoteTextElement.textContent = 'Failed to fetch a quote.';
        quoteAuthorElement.textContent = '';
        currentAuthor = '';
      }
    }

    async function generateNewQuote() {
      quotesByAuthor = []; // Reset stored quotes by the author
      const quoteData = await fetchQuote();
      displayQuote(quoteData);
    }

    async function generateQuoteBySameAuthor() {
      if (currentAuthor) {
        const quoteData = await fetchQuoteByAuthor(currentAuthor);
        if (quoteData) {
          displayQuote(quoteData);
        } else {
          console.log('No more quotes by this author.');
        }
      } else {
        console.log('No author information available.');
      }
    }

    window.onload = async () => {
      generateNewQuote(); // Display a quote when the page loads

      // Attach event listeners to the buttons for generating new quotes
      const newQuoteButton = document.getElementById('new-quote-btn');
      newQuoteButton.addEventListener('click', generateNewQuote);

      const sameAuthorButton = document.getElementById('same-author-btn');
      sameAuthorButton.addEventListener('click', generateQuoteBySameAuthor);
    };