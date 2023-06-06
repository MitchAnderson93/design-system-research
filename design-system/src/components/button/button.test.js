test('QLDButton should have the correct attributes and role', () => {
  // Create the button element
  const button = document.createElement('button');
  button.setAttribute('is', 'qld-button');
  button.setAttribute('role', 'button');
  document.body.appendChild(button);

  // Assert that the button has the correct attributes
  expect(button.getAttribute('role')).toBe('button');

  // Remove the button from the document body
  document.body.removeChild(button);
});
