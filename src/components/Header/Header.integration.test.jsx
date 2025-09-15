import React from 'react';
import { expect, it, describe, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from './Header.jsx';

// Enhanced mocks for integration testing
vi.mock('intlayer', () => ({
  configuration: {
    internationalization: {
      locales: ['en', 'fr-CA'],
      defaultLocale: 'en'
    }
  }
}));

// Create a mock that can switch content based on test scenarios
let mockContent = {
  name: 'Lais Gabrielle Lodi',
  title: 'Full Stack Developer',
  summary: 'Hello, I am a Full Stack Developer with 5+ years of experience...',
  aboutMe: 'About me',
  linkedIn: 'https://www.linkedin.com/in/laislodi/'
};

vi.mock('react-intlayer', () => ({
  useLocale: () => ({
    locale: 'en',
    setLocale: vi.fn()
  }),
  useIntlayer: () => mockContent
}));

describe('Header Integration Tests (Enhanced Mocks)', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    // Reset to English content
    mockContent = {
      name: 'Lais Gabrielle Lodi',
      title: 'Full Stack Developer',
      summary: 'Hello, I am a Full Stack Developer with 5+ years of experience...',
      aboutMe: 'About me',
      linkedIn: 'https://www.linkedin.com/in/laislodi/'
    };
  });

  it('should render English content correctly', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Lais Gabrielle Lodi');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Full Stack Developer');
    expect(screen.getByText(/Hello, I am a Full Stack Developer/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About me' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/laislodi/');
  });

  it('should render French content when mock is set to French', () => {
    // Update mock content to French
    mockContent = {
      name: 'Lais Gabrielle Lodi',
      title: 'Développeuse Full Stack',
      summary: 'Salut, Je sui une Développeuse Full Stack avec plus de 5 ans d\'expérience...',
      aboutMe: 'Sur moi',
      linkedIn: 'https://www.linkedin.com/in/laislodi/'
    };

    render(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Lais Gabrielle Lodi');
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Développeuse Full Stack');
    expect(screen.getByText(/Salut, Je sui une Développeuse Full Stack/)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sur moi' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/laislodi/');
  });

  it('should maintain consistent LinkedIn URL across locales', () => {
    // Test English
    const { rerender } = render(<Header />);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/laislodi/');

    // Update to French mock and rerender
    mockContent.title = 'Développeuse Full Stack';
    mockContent.aboutMe = 'Sur moi';

    rerender(<Header />);

    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://www.linkedin.com/in/laislodi/');
  });

  it('should render profile structure correctly', () => {
    render(<Header />);

    // Check structural elements
    expect(document.querySelector('header#home')).toBeInTheDocument();
    expect(document.querySelector('.profile')).toBeInTheDocument();
    expect(document.querySelector('.profile-image')).toBeInTheDocument();
    expect(document.querySelector('.profile-info')).toBeInTheDocument();
    expect(document.querySelector('.about-me-buttons')).toBeInTheDocument();
  });
});