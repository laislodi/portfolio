import React from 'react';
import { render } from '@testing-library/react';
import Menu from './Menu.jsx';

describe('Menu', () => {

    test('should render 7 navigation links in total', () => {
      const { container } = render(<Menu />);
  
      const menuOptions = container.querySelectorAll('.menu-option');
  
      expect(menuOptions.length).toBe(7);
    });
  
    test('should render all 7 navigation links correctly', () => {
      const { container } = render(<Menu />);
      const links = container.querySelectorAll('.menu-option a');
  
      expect(links[0].textContent).toBe('Portfolio');
      expect(links[0].getAttribute('href')).toBe('#');
  
      expect(links[1].textContent).toBe('Projects');
      expect(links[1].getAttribute('href')).toBe('#projects');
  
      expect(links[2].textContent).toBe('Experience');
      expect(links[2].getAttribute('href')).toBe('#experience');
  
      expect(links[3].textContent).toBe('Education');
      expect(links[3].getAttribute('href')).toBe('#education');
  
      expect(links[4].textContent).toBe('Soft Skills');
      expect(links[4].getAttribute('href')).toBe('#soft-skills');
  
      expect(links[5].textContent).toBe('Tech Skills');
      expect(links[5].getAttribute('href')).toBe('#tech-skills');
  
      expect(links[6].textContent).toBe('Contact');
      expect(links[6].getAttribute('href')).toBe('#contact');
    });

    test('should render back button with correct href and icon', () => {
      const { container } = render(<Menu />);
      const backButton = container.querySelector('.back-button');

      expect(backButton).toBeInTheDocument();
      expect(backButton.getAttribute('href')).toBe('#');

      const icon = backButton.querySelector('.material-icons');
      expect(icon).toBeInTheDocument();
      expect(icon.textContent.trim()).toBe('keyboard_double_arrow_up');
    });

    test('should render the menu with correct class names', () => {
      const { container } = render(<Menu />);
      const menu = container.querySelector('.menu');
      const menuList = container.querySelector('.menu-list');

      expect(menu).toBeInTheDocument();
      expect(menuList).toBeInTheDocument();
      expect(menu.classList.contains('menu')).toBe(true);
      expect(menuList.classList.contains('menu-list')).toBe(true);
    });

    test('should render component structure correctly', () => {
  
      const { container } = render(<Menu />);
  
      expect(container.querySelector('.menu')).toBeInTheDocument();
      expect(container.querySelector('.menu-list')).toBeInTheDocument();
      expect(container.querySelectorAll('.menu-option').length).toBe(7);
  
      const backButton = container.querySelector('.back-button');
      expect(backButton).toBeInTheDocument();
      expect(backButton.getAttribute('href')).toBe('#');
  
      const icon = backButton.querySelector('.material-icons');
      expect(icon).toBeInTheDocument();
      expect(icon.textContent.trim()).toBe('keyboard_double_arrow_up');
    });
});
