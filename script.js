console.log('Hello World!');
/*
  <script>
    window.addEventListener('load', () => {
      const links = document.getElementById('social-links');
      links.style.transition = 'opacity 1s ease-out, transform 1s ease-out';
      links.style.opacity = '1';
      links.style.transform = 'translateY(0)';
    });
  </script>*/
  
  /*
  const typingText = document.querySelector(".typing");
const texts = ["Développeur Web", "Freelancer", "Créateur de Solutions"];
let i = 0, j = 0, currentText = '', isDeleting = false;

function type() {
  if (i < texts.length) {
    if (!isDeleting && j <= texts[i].length) {
      currentText = texts[i].substring(0, j++);
    } else if (isDeleting && j >= 0) {
      currentText = texts[i].substring(0, j--);
    }

    typingText.textContent = currentText;

    if (!isDeleting && j === texts[i].length) {
      isDeleting = true;
      setTimeout(type, 2000);
    } else if (isDeleting && j === 0) {
      isDeleting = false;
      i = (i + 1) % texts.length;
    }

    setTimeout(type, isDeleting ? 50 : 200);
  }
}
type();*/