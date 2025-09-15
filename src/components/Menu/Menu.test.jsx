import React from 'react';
import { expect, it, describe } from 'vitest';
import { render } from '@testing-library/react';
import Menu from './Menu.jsx';
import { useLocale } from 'react-intlayer';


// Mock intlayer modules
vi.mock('intlayer', () => ({
  configuration: {
    internationalization: {
      locales: ['en', 'fr-CA'],
      defaultLocale: 'en'
    }
  }
}));

vi.mock('react-intlayer', () => ({
  useLocale: () => ({
    locale: 'en',
    setLocale: vi.fn()
  }),
  useIntlayer: () => ({
    menuList: [
      {
        title: "Portfolio", 
        href: "#"
      }, {
        title: "Projects",
        href: "#projects"
      }, {
        title: "Experience",
        href: "#experience"
      }, {
        title: "Education",
        href: "#education"
      }, {
        title: "Soft Skills",
        href: "#soft-skills"
      }, {
        title: "Tech Skills",
        href: "#tech-skills"
      }, {
        title: "Contact",
        href: "#contact"
      }
    ],
    t: () => vi.fn()
  })
}));

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

  it('should render the menu with correct class names', () => {
    const { container } = render(<Menu />);
    const menu = container.querySelector('.menu');
    const menuList = container.querySelector('.menu-list');

    expect(menu).toBeInTheDocument();
    expect(menuList).toBeInTheDocument();
    expect(menu.classList.contains('menu')).toBe(true);
    expect(menuList.classList.contains('menu-list')).toBe(true);
  });

  it('should render component structure correctly', () => {

    const { container } = render(<Menu />);

    expect(container.querySelector('.menu')).toBeInTheDocument();
    expect(container.querySelector('.menu-list')).toBeInTheDocument();
    expect(container.querySelectorAll('.menu-option').length).toBe(7);
  });
});
