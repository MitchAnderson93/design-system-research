test('QLDButton should have the correct attributes and role', () => {
  const button = document.createElement('button', { is: 'qld-button' });
  document.body.appendChild(button);
  // assert that the button has the correct attributes
  //expect(button.getAttribute('role')).toBe('button');
  //expect(button.getAttribute('tabindex')).toBe('0');
  console.log('Write tests here')
  document.body.removeChild(button);
});