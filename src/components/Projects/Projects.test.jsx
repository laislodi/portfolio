import React from 'react';
import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useIntlayer } from 'react-intlayer';
import Projects from './Projects';

vi.mock('react-intlayer', () => ({
  useIntlayer: vi.fn(),
  t: (obj) => obj.en ?? ''
}));

const defaultContent = {
  sectionTitle: 'Projects',
  projects: [
    {
      name: 'Easy Cooking Design',
      description: 'A cooking course website.',
      github: { value: 'https://github.com/laislodi/easy-cooking_design' },
      url: { value: 'https://laislodi.github.io/easy-cooking_design/' },
      languages: ['HTML5', 'CSS3'],
      technologies: ['React']
    },
    {
      name: 'Tic-Tac-Toe',
      description: 'A beautiful game.',
      github: { value: 'https://github.com/laislodi/tic-tac-toe' },
      url: null,
      languages: ['Javascript'],
      technologies: []
    }
  ]
};

describe('Projects', () => {
  beforeEach(() => {
    vi.mocked(useIntlayer).mockReturnValue(defaultContent);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => render(<Projects />)).not.toThrow();
  });

  it('should render the section heading', () => {
    render(<Projects />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Projects');
  });

  it('should render all project cards', () => {
    const { container } = render(<Projects />);
    expect(container.querySelectorAll('.project-info')).toHaveLength(2);
  });

  it('should render project names', () => {
    render(<Projects />);
    expect(screen.getByText('Easy Cooking Design')).toBeInTheDocument();
    expect(screen.getByText('Tic-Tac-Toe')).toBeInTheDocument();
  });

  it('should render project descriptions', () => {
    render(<Projects />);
    expect(screen.getByText('A cooking course website.')).toBeInTheDocument();
    expect(screen.getByText('A beautiful game.')).toBeInTheDocument();
  });

  it('should render languages and technologies as tags', () => {
    render(<Projects />);
    expect(screen.getByText('HTML5')).toBeInTheDocument();
    expect(screen.getByText('CSS3')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Javascript')).toBeInTheDocument();
  });

  it('should render github links with correct hrefs', () => {
    render(<Projects />);
    const links = screen.getAllByRole('link');
    const githubLink = links.find(l => l.href.includes('easy-cooking_design'));
    expect(githubLink).toBeDefined();
    expect(githubLink).toHaveAttribute('href', 'https://github.com/laislodi/easy-cooking_design');
  });

  it('should render the url link when url is present', () => {
    render(<Projects />);
    const tryItLinks = screen.getAllByText('Try it!');
    expect(tryItLinks).toHaveLength(1);
  });

  it('should not render the url link when url is null', () => {
    vi.mocked(useIntlayer).mockReturnValue({
      ...defaultContent,
      projects: [{ ...defaultContent.projects[0], url: null }]
    });
    render(<Projects />);
    expect(screen.queryByText('Try it!')).not.toBeInTheDocument();
  });

  it('should open project links in a new tab', () => {
    render(<Projects />);
    const projectLinks = screen.getAllByRole('link').filter(l => l.closest('.project-info'));
    projectLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank');
    });
  });

  it('should render the GitHub logo image on github links', () => {
    render(<Projects />);
    expect(screen.getAllByAltText('GitHub logo')).toHaveLength(2);
  });
});
