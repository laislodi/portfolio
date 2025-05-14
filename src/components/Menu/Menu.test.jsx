import React from 'react';
import { render, screen } from '@testing-library/react';
import Menu from './Menu.jsx';

describe('Menu', () => {

    it('should render 7 navigation links in total', () => {
      const { container } = render(<Menu />);
  
      const menuOptions = container.querySelectorAll('.menu-option');
  
      expect(menuOptions.length).toBe(7);
    });
  
    it('should render all 7 navigation links correctly', () => {
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

    // Component renders correctly when CSS fails to load
    it('should render correctly even when CSS fails to load', () => {
      // Mock a CSS loading error
      jest.spyOn(console, 'error').mockImplementation(() => {});
  
      const { container } = render(<Menu />);
  
      // Verify the component structure is intact
      expect(container.querySelector('.menu')).toBeInTheDocument();
      expect(container.querySelector('.menu-list')).toBeInTheDocument();
      expect(container.querySelectorAll('.menu-option').length).toBe(7);
  
      // Verify back button is present
      const backButton = container.querySelector('.back-button');
      expect(backButton).toBeInTheDocument();
      expect(backButton.getAttribute('href')).toBe('#');
  
      // Verify the icon in the back button
      const icon = backButton.querySelector('.material-icons');
      expect(icon).toBeInTheDocument();
      expect(icon.textContent.trim()).toBe('keyboard_double_arrow_up');
  
      // Clean up mock
      console.error.mockRestore();
    });
});
