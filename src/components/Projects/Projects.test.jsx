import React from 'react';
import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
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
      technologies: ['React'],
      screenshots: []
    },
    {
      name: 'Tic-Tac-Toe',
      description: 'A beautiful game.',
      github: { value: 'https://github.com/laislodi/tic-tac-toe' },
      url: null,
      languages: ['Javascript'],
      technologies: [],
      screenshots: []
    }
  ]
};

const contentWithScreenshots = {
  sectionTitle: 'Projects',
  projects: [
    {
      name: 'Hebrew Calendar',
      description: 'A Hebrew calendar app.',
      github: { value: 'https://github.com/laislodi/hebrew_calendar' },
      url: { value: 'https://laislodi.github.io/hebrew_calendar/' },
      languages: ['Typescript', 'React'],
      technologies: [],
      screenshots: [
        { value: '/src/assets/screenshots/hebrew_calendar/MonthlyView-dark.png' },
        { value: '/src/assets/screenshots/hebrew_calendar/MonthlyView-light.png' },
      ]
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

  describe('screenshots button', () => {
    it('should not render the screenshots button when screenshots list is empty', () => {
      render(<Projects />);
      expect(screen.queryByRole('button', { name: /screenshots/i })).not.toBeInTheDocument();
    });

    it('should render the screenshots button when screenshots are available', () => {
      vi.mocked(useIntlayer).mockReturnValue(contentWithScreenshots);
      render(<Projects />);
      expect(screen.getByRole('button', { name: /screenshots/i })).toBeInTheDocument();
    });
  });

  describe('screenshots modal', () => {
    beforeEach(() => {
      vi.mocked(useIntlayer).mockReturnValue(contentWithScreenshots);
    });

    it('should not show the modal initially', () => {
      const { container } = render(<Projects />);
      expect(container.querySelector('.screenshots-overlay')).not.toBeInTheDocument();
    });

    it('should open the modal when the screenshots button is clicked', () => {
      const { container } = render(<Projects />);
      fireEvent.click(screen.getByRole('button', { name: /screenshots/i }));
      expect(container.querySelector('.screenshots-overlay')).toBeInTheDocument();
    });

    it('should close the modal when the close button is clicked', () => {
      const { container } = render(<Projects />);
      fireEvent.click(screen.getByRole('button', { name: /screenshots/i }));
      fireEvent.click(screen.getByRole('button', { name: '✕' }));
      expect(container.querySelector('.screenshots-overlay')).not.toBeInTheDocument();
    });

    it('should close the modal when the overlay backdrop is clicked', () => {
      const { container } = render(<Projects />);
      fireEvent.click(screen.getByRole('button', { name: /screenshots/i }));
      fireEvent.click(container.querySelector('.screenshots-overlay'));
      expect(container.querySelector('.screenshots-overlay')).not.toBeInTheDocument();
    });

    it('should not close the modal when clicking inside the modal content', () => {
      const { container } = render(<Projects />);
      fireEvent.click(screen.getByRole('button', { name: /screenshots/i }));
      fireEvent.click(container.querySelector('.screenshots-modal'));
      expect(container.querySelector('.screenshots-overlay')).toBeInTheDocument();
    });

    it('should display one image per screenshot in the modal', () => {
      const { container } = render(<Projects />);
      fireEvent.click(screen.getByRole('button', { name: /screenshots/i }));
      expect(container.querySelectorAll('.screenshot-img')).toHaveLength(2);
    });

    it('should give images sequential alt text', () => {
      render(<Projects />);
      fireEvent.click(screen.getByRole('button', { name: /screenshots/i }));
      expect(screen.getByAltText('Screenshot 1')).toBeInTheDocument();
      expect(screen.getByAltText('Screenshot 2')).toBeInTheDocument();
    });

    it('should wrap each screenshot in a link that opens in a new tab', () => {
      render(<Projects />);
      fireEvent.click(screen.getByRole('button', { name: /screenshots/i }));
      const img = screen.getByAltText('Screenshot 1');
      expect(img.closest('a')).toHaveAttribute('target', '_blank');
    });
  });
});
