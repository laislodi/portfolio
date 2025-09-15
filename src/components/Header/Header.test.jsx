import React from 'react';
import { expect, it, describe, vi, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';

// Mock intlayer modules
vi.mock('intlayer', () => ({
  configuration: {
    internationalization: {
      locales: ['en', 'fr-CA'],
      defaultLocale: 'fr-CA'
    }
  }
}));

vi.mock('react-intlayer', () => ({
  useLocale: () => ({
    locale: 'en',
    setLocale: vi.fn()
  }),
  useIntlayer: () => ({
    name: 'John Doe',
    title: 'Software Developer',
    summary: 'I am a full stack developer with a passion for building web applications.',
    aboutMe: 'About me',
    linkedIn: 'https://www.linkedin.com/in/johndoe'
  })
}));

describe('Header Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => render(<Header />)).not.toThrow();
  });

  it('should render header elements with correct content', () => {
    render(<Header />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('John Doe');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Software Developer');
    expect(screen.getByText('I am a full stack developer with a passion for building web applications.')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/johndoe');
  });
});