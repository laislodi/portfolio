import React from 'react';
import { expect, it, vi, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import SoftSkills from '../../components/Skills/SoftSkills';
import * as dataModule from '../../assets/data/data.jsx';

vi.mock('../../assets/data/data.jsx');

describe('SoftSkills Component', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render soft skills list with titles and images', () => {
    dataModule.SKILLS = {
      soft: [
        {
          image: 'mentorship.png',
          title: 'Mentorship',
          description: 'Mentoring is one of my passions.',
        },
        {
          image: 'creativity.png',
          title: 'Creativity',
          description: 'I always try to think outside the box.',
        },
      ],
    };
    render(<SoftSkills />);
    expect(screen.getByText('Mentorship')).toBeInTheDocument();
    expect(screen.getByText('Creativity')).toBeInTheDocument();
    expect(screen.getAllByRole('img', { name: /Mentorship|Creativity/ })).toHaveLength(2);
  });

  it('should display description when present', () => {
    dataModule.SKILLS = {
      soft: [
        {
          image: 'teamwork.png',
          title: 'Teamwork',
          description: 'Facilitated weekly deployment process.',
        },
        {
          image: 'communication.png',
          title: 'Communication',
          description: 'Talked to more senior developers.',
        },
      ],
    };
    render(<SoftSkills />);
    expect(screen.getByText('Facilitated weekly deployment process.')).toBeInTheDocument();
    expect(screen.getByText('Talked to more senior developers.')).toBeInTheDocument();
  });

  it('should render section and anchor link', () => {
    dataModule.SKILLS = { soft: [] };
    render(<SoftSkills />);
    expect(document.querySelector('section#soft-skills')).toBeInTheDocument();
    const anchor = screen.getByRole('link', { name: /Soft Skills/i });
    expect(anchor).toHaveAttribute('href', '#soft-skills');
    expect(screen.getByRole('heading', { name: 'Soft Skills' })).toBeInTheDocument();
  });

  it('should handle empty soft skills array', () => {
    dataModule.SKILLS = { soft: [] };
    render(<SoftSkills />);
    const list = screen.getByRole('list');
    expect(list.querySelectorAll('li')).toHaveLength(0);
  });

  it('should handle missing skills soft data', () => {
    dataModule.SKILLS = {};
    expect(() => render(<SoftSkills />)).not.toThrowError("");
    // Should not render any list items
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('should handle skill items with missing fields', () => {
    dataModule.SKILLS = {
      soft: [
        { image: 'img1.png', description: 'No title here.' },
        { title: 'No Image', description: 'Missing image field.' },
        { /* completely empty */ },
      ],
    };
    render(<SoftSkills />);
    // Only the item with a title should render a heading
    expect(screen.queryByText('No Image')).toBeInTheDocument();
    // Items without title should not render a heading
    expect(screen.queryByText('No title here.')).toBeInTheDocument();
    // Should not throw or break
    expect(screen.getByRole('list').querySelectorAll('li').length).toBe(3);
  });
});