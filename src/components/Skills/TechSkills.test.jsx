import React from 'react';
import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useIntlayer } from 'react-intlayer';
import TechSkills from './TechSkills';
import { FilterContext } from './store/filter-context';

vi.mock('react-intlayer', () => ({
  useIntlayer: vi.fn()
}));

// TechSkills renders Filter internally, so this content must satisfy both components.
// skill.types entries need .value because TechSkills uses type.value for filtering.
// imagePath needs .value because TechSkills uses skill.imagePath.value for src.
const defaultContent = {
  sectionTitle: 'Tech Skills',
  filter: {
    selectAll: {
      option: { value: 'selectAll' },
      description: { value: 'Select All' }
    },
    options: [
      { option: { value: 'frontend' }, description: { value: 'Frontend' } },
      { option: { value: 'backend' }, description: { value: 'Backend' } }
    ]
  },
  tech: [
    {
      imagePath: { value: 'techskills/react.svg' },
      types: [{ value: 'frontend' }],
      title: 'React'
    },
    {
      imagePath: { value: 'techskills/python.svg' },
      types: [{ value: 'backend' }],
      title: 'Python'
    }
  ]
};

const allSelected = {
  category: ['frontend', 'backend'],
  filterSelector: ['frontend', 'backend'],
  onAdd: vi.fn(),
  onRemove: vi.fn(),
  onAddAll: vi.fn(),
  onRemoveAll: vi.fn()
};

function renderWithContext(contextValue = allSelected) {
  return render(
    <FilterContext.Provider value={contextValue}>
      <TechSkills />
    </FilterContext.Provider>
  );
}

describe('TechSkills', () => {
  beforeEach(() => {
    vi.mocked(useIntlayer).mockReturnValue(defaultContent);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => renderWithContext()).not.toThrow();
  });

  it('should render the section heading', () => {
    renderWithContext();
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Tech Skills');
  });

  it('should render the Filter component', () => {
    const { container } = renderWithContext();
    expect(container.querySelector('.filter')).toBeInTheDocument();
  });

  it('should render skills that match the active filter', () => {
    renderWithContext();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Python')).toBeInTheDocument();
  });

  it('should only show skills matching the selected category', () => {
    renderWithContext({ ...allSelected, filterSelector: ['frontend'] });
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.queryByText('Python')).not.toBeInTheDocument();
  });

  it('should show no skills when the filter is empty', () => {
    renderWithContext({ ...allSelected, filterSelector: [] });
    expect(screen.queryByText('React')).not.toBeInTheDocument();
    expect(screen.queryByText('Python')).not.toBeInTheDocument();
  });

  it('should render an image for each visible skill', () => {
    renderWithContext();
    expect(screen.getByAltText('React')).toBeInTheDocument();
    expect(screen.getByAltText('Python')).toBeInTheDocument();
  });

  it('should set image src from skill.imagePath.value', () => {
    renderWithContext();
    expect(screen.getByAltText('React')).toHaveAttribute('src', 'techskills/react.svg');
  });

  it('should render within a #tech-skills section', () => {
    const { container } = renderWithContext();
    expect(container.querySelector('section#tech-skills')).toBeInTheDocument();
  });
});
