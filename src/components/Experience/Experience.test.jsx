import React from 'react';
import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useIntlayer } from 'react-intlayer';
import Experience from './Experience';

vi.mock('react-intlayer', () => ({
  useIntlayer: vi.fn()
}));

const defaultContent = {
  sectionTitle: 'Experience',
  experience: [
    {
      company: 'Arctic Wolf',
      title: 'Software Developer',
      date: {
        from: { month: 'Oct', year: 2022 },
        to: { month: 'Aug', year: 2024 }
      },
      location: {
        city: 'Waterloo',
        province: 'ON',
        country: 'Canada',
        type: 'Remote'
      },
      summary: 'Collaborated with cross-functional teams.'
    },
    {
      company: 'Tasktop',
      title: 'Software Engineer II',
      date: {
        from: { month: 'Jan', year: 2020 },
        to: { month: 'Sept', year: 2022 }
      },
      location: {
        city: 'Vancouver',
        province: 'BC',
        country: 'Canada',
        type: 'Remote'
      },
      summary: ''
    }
  ]
};

describe('Experience', () => {
  beforeEach(() => {
    vi.mocked(useIntlayer).mockReturnValue(defaultContent);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => render(<Experience />)).not.toThrow();
  });

  it('should render the section heading', () => {
    render(<Experience />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Experience');
  });

  it('should render all experience entries', () => {
    const { container } = render(<Experience />);
    expect(container.querySelectorAll('li')).toHaveLength(2);
  });

  it('should render company names', () => {
    render(<Experience />);
    expect(screen.getByText('Arctic Wolf')).toBeInTheDocument();
    expect(screen.getByText('Tasktop')).toBeInTheDocument();
  });

  it('should render job titles', () => {
    render(<Experience />);
    expect(screen.getByText('Software Developer')).toBeInTheDocument();
    expect(screen.getByText('Software Engineer II')).toBeInTheDocument();
  });

  it('should render date ranges', () => {
    render(<Experience />);
    expect(screen.getByText(/Oct/)).toBeInTheDocument();
    expect(screen.getByText(/2024/)).toBeInTheDocument();
  });

  it('should render location details', () => {
    render(<Experience />);
    expect(screen.getByText(/Waterloo/)).toBeInTheDocument();
    expect(screen.getByText(/Vancouver/)).toBeInTheDocument();
    expect(screen.getAllByText(/Canada/)).toHaveLength(2);
  });

  it('should render summary when present', () => {
    render(<Experience />);
    expect(screen.getByText('Collaborated with cross-functional teams.')).toBeInTheDocument();
  });

  it('should not render summary paragraph when summary is empty', () => {
    vi.mocked(useIntlayer).mockReturnValue({
      ...defaultContent,
      experience: [{ ...defaultContent.experience[0], summary: '' }]
    });
    const { container } = render(<Experience />);
    expect(container.querySelector('.job p')).not.toBeInTheDocument();
  });

  it('should render the section within a #experience anchor', () => {
    const { container } = render(<Experience />);
    expect(container.querySelector('section#experience')).toBeInTheDocument();
  });
});
