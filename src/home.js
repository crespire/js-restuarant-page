const showHome = (root) => {
  const element = document.createElement('div');

  element.textContent = 'Home';
  // I guess I could use a card module to write a card with some content.
  root.replaceChildren(element);
}

export default showHome;