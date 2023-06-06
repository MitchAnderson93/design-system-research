import { action } from '@storybook/addon-actions';
import QLDButton from './QLDButton';

export default {
  title: 'QLDButton',
  component: QLDButton,
};

export const Default = () => {
  const button = document.createElement('qld-button');
  button.textContent = 'Default Button';
  button.addEventListener('click', action('clicked'));
  return button;
};

export const CustomStyle = () => {
  const button = document.createElement('qld-button');
  button.textContent = 'Custom Style Button';
  button.style.backgroundColor = '#0077c2';
  button.style.color = '#fff';
  button.addEventListener('click', action('clicked'));
  return button;
};

export const CustomClass = () => {
  const button = document.createElement('qld-button');
  button.textContent = 'Custom Class Button';
  button.classList.add('custom-class');
  button.addEventListener('click', action('clicked'));
  return button;
};

export const Disabled = () => {
  const button = document.createElement('qld-button');
  button.textContent = 'Disabled Button';
  button.disabled = true;
  button.addEventListener('click', action('clicked'));
  return button;
};
