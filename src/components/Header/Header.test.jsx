import React from 'react';
import { expect, it, describe, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';
import * as dataModule from "../../assets/data/resume.jsx";

vi.mock('../../assets/data/resume.jsx');

describe('Header Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('Test header renders without errors with valid resume', () => {
    expect(() => render(<Header />)).not.toThrow();
  });

  it('Applies semantic roles to elements', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3 })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About me' })).toBeInTheDocument();
  });

  it('Function returns expected output for typical use case', () => {
    const about = "I am a full stack developer with a passion for building web applications.";
    dataModule.RESUME = {
      about: about,
      name: "John Doe",
      medias: {
        LinkedIn: "https://www.linkedin.com/in/johndoe"
      }
    }
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("John Doe");
    expect(screen.getByText(about)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/johndoe');
  });
});