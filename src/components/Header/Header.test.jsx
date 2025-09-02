import React from 'react';
import { expect, it, describe } from 'vitest';
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
    dataModule.RESUME = {
    //   about: "I am a full stack developer with a passion for building web applications.",
      name: "John Doe",
    //   medias: {
    //     LinkedIn: "https://www.linkedin.com/in/johndoe"
    //   }
    }
    // dataModule.RESUME.about = "I am a full stack developer with a passion for building web applications.";
    // dataModule.RESUME.name = "John Doe";
    // dataModule.RESUME.medias = {
    //   LinkedIn: "https://www.linkedin.com/in/johndoe"
    // };
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent("John Doe");
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('I am a full stack developer with a passion for building web applications.');
    expect(screen.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/johndoe');
  });
});