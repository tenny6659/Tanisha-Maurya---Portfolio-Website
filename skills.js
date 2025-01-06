// Add hover effects with slight delays for fun animations
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach((card, index) => {
  card.style.animation = `fadeInSkill 0.5s ease-in-out ${index * 0.2}s forwards`;
});

@keyframes fadeInSkill {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
