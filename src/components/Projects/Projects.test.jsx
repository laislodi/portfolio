import React from 'react';
import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects component', () => {
  it('should render project names and descriptions', () => {
    const projects = [
      {
        name: 'Project Alpha',
        description: 'Alpha description',
        languages: [],
        technologies: [],
      },
      {
        name: 'Project Beta',
        description: 'Beta description',
        languages: [],
        technologies: [],
      },
    ];
    render(<Projects projects={projects} />);
    expect(screen.getByText('Project Alpha')).toBeInTheDocument();
    expect(screen.getByText('Alpha description')).toBeInTheDocument();
    expect(screen.getByText('Project Beta')).toBeInTheDocument();
    expect(screen.getByText('Beta description')).toBeInTheDocument();
  });

  it('should render languages and technologies for each project', () => {
    const projects = [
      {
        name: 'Project Gamma',
        description: 'Gamma description',
        languages: ['JavaScript', 'Python'],
        technologies: ['React', 'Django'],
      },
    ];
    render(<Projects projects={projects} />);
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Django')).toBeInTheDocument();
  });

  it('should render github and live links when present', () => {
    const projects = [
      {
        name: 'Project Delta',
        description: 'Delta description',
        languages: [],
        technologies: [],
        github: 'https://github.com/example/project-delta',
        url: 'https://example.com/project-delta',
      },
    ];
    render(<Projects projects={projects} />);
    const githubLink = screen.getByRole('link', { name: /check the code!/i });
    expect(githubLink).toHaveAttribute('href', 'https://github.com/example/project-delta');
    const liveLink = screen.getByRole('link', { name: /try it!/i });
    expect(liveLink).toHaveAttribute('href', 'https://example.com/project-delta');
  });

  it('should render nothing when projects array is empty', () => {
    render(<Projects projects={[]} />);
    // Should not render any project-info list items
    expect(screen.queryByRole('listitem')).not.toBeInTheDocument();
  });

  it('should handle missing languages or technologies arrays', () => {
    const projects = [
      {
        name: 'Project Epsilon',
        description: 'Epsilon description',
        // languages missing
        technologies: ['Node.js'],
      },
      {
        name: 'Project Zeta',
        description: 'Zeta description',
        languages: ['TypeScript'],
        // technologies missing
      },
    ];
    render(<Projects projects={projects} />);
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('TypeScript')).toBeInTheDocument();
    expect(screen.getByText('Project Epsilon')).toBeInTheDocument();
    expect(screen.getByText('Project Zeta')).toBeInTheDocument();
  });

  it('should not render links when github or url is missing', () => {
    const projects = [
      {
        name: 'Project Eta',
        description: 'Eta description',
        languages: [],
        technologies: [],
        // github missing
        url: 'https://example.com/project-eta',
      },
      {
        name: 'Project Theta',
        description: 'Theta description',
        languages: [],
        technologies: [],
        github: 'https://github.com/example/project-theta',
        // url missing
      },
      {
        name: 'Project Iota',
        description: 'Iota description',
        languages: [],
        technologies: [],
        // both missing
      },
    ];
    render(<Projects projects={projects} />);
    // Project Eta: only live link
    expect(screen.getByRole('link', { name: /try it!/i })).toHaveAttribute('href', 'https://example.com/project-eta');
    expect(screen.queryByRole('link', { name: /check the code!/i })).toBeInTheDocument();
    // There should be only one "Try it!" link and one "Check the code!" link
    expect(screen.getAllByRole('link', { name: /try it!/i }).length).toBe(1);
    expect(screen.getAllByRole('link', { name: /check the code!/i }).length).toBe(1);
  });
});