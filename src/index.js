import showHome from "./home";
import showMenu from './menu';
import showContact from './contact';

function nav() {
  const element = document.createElement('nav');

  element.setAttribute('id', 'navigation');
  element.textContent = 'Navigation';

  let homeButton = document.createElement('span');
  homeButton.setAttribute('data-nav-target', 'home');
  homeButton.textContent = 'Home';

  let menuButton = document.createElement('span');
  menuButton.setAttribute('data-nav-target', 'menu');
  menuButton.textContent = 'Menu';

  let contactButton = document.createElement('span');
  contactButton.setAttribute('data-nav-target', 'contact');
  contactButton.textContent = 'Contact';
  
  element.append(homeButton, menuButton, contactButton);
  return element;
}

function navigate(event) {
  let destination = event.target.getAttribute('data-nav-target');
  let root = document.getElementById('content');

  switch(destination) {
    case 'home':
      showHome(root);
      break;
    case 'menu':
      showMenu(root);
      break;
    case 'contact':
      showContact(root);
      break;
    default:
      showHome(root);
  }
}

const contentRoot = document.getElementById('content');
const navigation = nav();

document.body.prepend(navigation);
document.getElementById('navigation').addEventListener("click", navigate);

showHome(contentRoot);