const box = document.getElementById('box');
const toggleBtn = document.getElementById('toggleBoxBtn');

// Load last state from localStorage
if (localStorage.getItem('boxVisible') === 'true') {
  box.classList.remove('hidden');
  box.classList.add('show');
}

// Toggle animation & visibility

toggleBtn.addEventListener('click', () => {
    const isVisible = box.classList.contains('show');
  
    if (isVisible) {
      box.classList.remove('show');
      setTimeout(() => box.classList.add('hidden'), 500); // Wait for animation to end
      localStorage.setItem('boxVisible', 'false');
    } else {
      box.classList.remove('hidden');
      setTimeout(() => box.classList.add('show'), 10); // Tiny delay for transition
      localStorage.setItem('boxVisible', 'true');
    }
  });
  