const showMenu = (root) => {
  const element = document.createElement('div');

  element.textContent = 'Menu';
  root.replaceChildren(element);
}

export default showMenu;