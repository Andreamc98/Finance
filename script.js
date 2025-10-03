const searchInput = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box .btn');
const quickQuestionButton = document.getElementById('quick-question');
const chatInput = document.querySelector('.chat-input input');
const chatSendButton = document.querySelector('.chat-input .btn');

function setQueryFromElement(element) {
  const query = element?.dataset?.query;
  if (!query) return;

  searchInput.value = query;
  searchInput.focus();
}

document.querySelectorAll('[data-query]').forEach((element) => {
  element.addEventListener('click', () => setQueryFromElement(element));
});

searchButton.addEventListener('click', () => {
  const value = searchInput.value.trim();
  if (!value) {
    searchInput.focus();
    searchInput.classList.add('shake');
    setTimeout(() => searchInput.classList.remove('shake'), 400);
    return;
  }

  alert(`Simulation Perplexité\n\nVous avez recherché : "${value}"`);
});

quickQuestionButton.addEventListener('click', () => {
  searchInput.focus();
  searchInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

chatSendButton.addEventListener('click', () => {
  const value = chatInput.value.trim();
  if (!value) {
    chatInput.focus();
    chatInput.classList.add('shake');
    setTimeout(() => chatInput.classList.remove('shake'), 400);
    return;
  }

  alert('Simulation de réponse IA :\n\n' + value);
  chatInput.value = '';
});

chatInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    event.preventDefault();
    chatSendButton.click();
  }
});
