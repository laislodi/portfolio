import React from 'react';
import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useIntlayer } from 'react-intlayer';
import SoftSkills from './SoftSkills';

vi.mock('react-intlayer', () => ({
  useIntlayer: vi.fn()
}));

// imagePath needs .value because the component accesses skill.imagePath.value for src.
// title and description are plain strings because they are rendered as JSX children.
const defaultContent = {
  sectionTitle: 'Soft Skills',
  soft: [
    {
      imagePath: { value: 'softskills/mentorship.svg' },
      title: 'Mentorship',
      description: 'Mentoring is one of my passions.'
    },
    {
      imagePath: { value: 'softskills/creativity.svg' },
      title: 'Creativity',
      description: 'I always think outside the box.'
    }
  ]
};

describe('SoftSkills', () => {
  beforeEach(() => {
    vi.mocked(useIntlayer).mockReturnValue(defaultContent);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => render(<SoftSkills />)).not.toThrow();
  });

  it('should render the section heading', () => {
    render(<SoftSkills />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Soft Skills');
  });

  it('should render all skill items', () => {
    const { container } = render(<SoftSkills />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });

  it('should render skill titles', () => {
    render(<SoftSkills />);
    expect(screen.getByText('Mentorship')).toBeInTheDocument();
    expect(screen.getByText('Creativity')).toBeInTheDocument();
  });

  it('should render skill descriptions', () => {
    render(<SoftSkills />);
    expect(screen.getByText('Mentoring is one of my passions.')).toBeInTheDocument();
    expect(screen.getByText('I always think outside the box.')).toBeInTheDocument();
  });

  it('should render an image for each skill', () => {
    render(<SoftSkills />);
    expect(screen.getAllByRole('img')).toHaveLength(2);
  });

  it('should use the skill title as the image alt text', () => {
    render(<SoftSkills />);
    expect(screen.getByAltText('Mentorship')).toBeInTheDocument();
    expect(screen.getByAltText('Creativity')).toBeInTheDocument();
  });

  it('should set the image src from imagePath.value', () => {
    render(<SoftSkills />);
    expect(screen.getByAltText('Mentorship')).toHaveAttribute('src', 'softskills/mentorship.svg');
  });

  it('should render within a #soft-skills section', () => {
    const { container } = render(<SoftSkills />);
    expect(container.querySelector('section#soft-skills')).toBeInTheDocument();
  });
});
