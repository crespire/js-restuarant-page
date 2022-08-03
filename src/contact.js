const showContact = (root) => {
  const element = document.createElement('div');

  element.textContent = 'Contact';
  root.replaceChildren(element);
}

export default showContact;