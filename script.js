// Dodaj liście monstery
function createLeaves() {
  const leafImages = ['leaf1.png', 'leaf2.png', 'leaf3.png']; // Dodaj swoje obrazki liści
  const numberOfLeaves = 10; // Liczba liści

  for (let i = 0; i < numberOfLeaves; i++) {
    const leaf = document.createElement('img');
    leaf.src = leafImages[Math.floor(Math.random() * leafImages.length)];
    leaf.classList.add('leaf');
    leaf.style.left = `${Math.random() * 100}vw`; // Losowa pozycja pozioma
    leaf.style.animationDuration = `${Math.random() * 5 + 5}s`; // Losowa prędkość spadania
    document.body.appendChild(leaf);
  }
}

// Obsługa przycisku "Check My Prize"
document.getElementById('submitButton').addEventListener('click', function () {
  const codeInput = document.getElementById('codeInput').value;
  const resultDiv = document.getElementById('result');

  if (codeInput === '42023092') {
    resultDiv.style.display = 'block';
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    alert('Invalid code. Please try again!');
  }
});

// Dodaj liście po załadowaniu strony
window.onload = createLeaves;