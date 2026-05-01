import React from 'react';
import { expect, it, describe, vi, beforeEach, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { useIntlayer } from 'react-intlayer';
import Filter from './Filter';
import { FilterContext } from './store/filter-context';

vi.mock('react-intlayer', () => ({
  useIntlayer: vi.fn()
}));

// Filter accesses .value on all option/description fields, so they must be objects.
const defaultContent = {
  filter: {
    selectAll: {
      option: { value: 'selectAll' },
      description: { value: 'Select All' }
    },
    options: [
      { option: { value: 'frontend' }, description: { value: 'Frontend' } },
      { option: { value: 'backend' }, description: { value: 'Backend' } },
      { option: { value: 'devops' }, description: { value: 'DevOps' } }
    ]
  }
};

const allSelected = {
  category: ['frontend', 'backend', 'devops'],
  filterSelector: ['frontend', 'backend', 'devops'],
  onAdd: vi.fn(),
  onRemove: vi.fn(),
  onAddAll: vi.fn(),
  onRemoveAll: vi.fn()
};

function renderWithContext(contextValue = allSelected) {
  return render(
    <FilterContext.Provider value={contextValue}>
      <Filter />
    </FilterContext.Provider>
  );
}

describe('Filter', () => {
  beforeEach(() => {
    vi.mocked(useIntlayer).mockReturnValue(defaultContent);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => renderWithContext()).not.toThrow();
  });

  it('should render a checkbox for each filter option plus Select All', () => {
    renderWithContext();
    expect(screen.getAllByRole('checkbox')).toHaveLength(4);
  });

  it('should render the Select All option', () => {
    renderWithContext();
    expect(screen.getByLabelText('Select All')).toBeInTheDocument();
  });

  it('should render all category filter options', () => {
    renderWithContext();
    expect(screen.getByLabelText('Frontend')).toBeInTheDocument();
    expect(screen.getByLabelText('Backend')).toBeInTheDocument();
    expect(screen.getByLabelText('DevOps')).toBeInTheDocument();
  });

  it('should check Select All when all options are selected', () => {
    renderWithContext();
    expect(screen.getByLabelText('Select All')).toBeChecked();
  });

  it('should uncheck Select All when not all options are selected', () => {
    renderWithContext({
      ...allSelected,
      filterSelector: ['frontend']
    });
    expect(screen.getByLabelText('Select All')).not.toBeChecked();
  });

  it('should check options that are in the filter selector', () => {
    renderWithContext({
      ...allSelected,
      filterSelector: ['frontend', 'devops']
    });
    expect(screen.getByLabelText('Frontend')).toBeChecked();
    expect(screen.getByLabelText('Backend')).not.toBeChecked();
    expect(screen.getByLabelText('DevOps')).toBeChecked();
  });

  it('should render within a .filter container', () => {
    const { container } = renderWithContext();
    expect(container.querySelector('.filter')).toBeInTheDocument();
  });
});
