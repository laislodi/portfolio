import React from 'react';
import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useIntlayer } from 'react-intlayer';
import Education from './Education';

vi.mock('react-intlayer', () => ({
  useIntlayer: vi.fn()
}));

const defaultContent = {
  educationTitle: 'Education',
  education: [
    {
      course: 'Computer Engineering',
      type: 'Bachelor',
      institution: 'UFES',
      year: 2015
    },
    {
      course: 'High School Diploma',
      type: 'High School',
      institution: 'CEFET',
      year: 2005
    }
  ],
  certificationTitle: 'Certifications',
  certifications: [
    {
      name: 'React Hooks',
      issuedBy: 'LinkedIn',
      issued: { month: 'Aug', year: 2023 }
    }
  ]
};

describe('Education', () => {
  beforeEach(() => {
    vi.mocked(useIntlayer).mockReturnValue(defaultContent);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => render(<Education />)).not.toThrow();
  });

  it('should render the section heading', () => {
    render(<Education />);
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Education');
  });

  it('should render all education items', () => {
    render(<Education />);
    expect(screen.getByText('Computer Engineering')).toBeInTheDocument();
    expect(screen.getByText('Bachelor')).toBeInTheDocument();
    expect(screen.getByText(/UFES/)).toBeInTheDocument();
    expect(screen.getByText('High School Diploma')).toBeInTheDocument();
  });

  it('should render the correct number of education list items', () => {
    const { container } = render(<Education />);
    const list = container.querySelector('.education-list');
    expect(list).toBeInTheDocument();
    expect(list.querySelectorAll('li')).toHaveLength(2);
  });

  it('should render the certifications section when certifications exist', () => {
    render(<Education />);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('React Hooks')).toBeInTheDocument();
    expect(screen.getByText('LinkedIn')).toBeInTheDocument();
  });

  it('should not render the education list when education is empty', () => {
    vi.mocked(useIntlayer).mockReturnValue({ ...defaultContent, education: [] });
    const { container } = render(<Education />);
    expect(container.querySelector('.education-list')).not.toBeInTheDocument();
  });

  it('should not render the certifications section when certifications are empty', () => {
    vi.mocked(useIntlayer).mockReturnValue({ ...defaultContent, certifications: [] });
    render(<Education />);
    expect(screen.queryByText('React Hooks')).not.toBeInTheDocument();
    expect(screen.queryByText('Certifications')).not.toBeInTheDocument();
  });

  it('should render the section within an #education anchor', () => {
    const { container } = render(<Education />);
    expect(container.querySelector('section#education')).toBeInTheDocument();
  });
});
