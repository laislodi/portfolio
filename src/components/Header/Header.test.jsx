import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';
import { RESUME } from "../../assets/data/resume.js";

describe('Header Component', () => {

  test('Test header renders without errors with valid resume', () => {
    expect(() => render(<Header />)).not.toThrow();
  });

  test('Applies semantic roles to elements', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About me' })).toBeInTheDocument();
  });

  test('Function returns expected output for typical use case', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(RESUME.name);
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Full Stack Developer');
    expect(screen.getByText(RESUME.about)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '#projects');
  });
});