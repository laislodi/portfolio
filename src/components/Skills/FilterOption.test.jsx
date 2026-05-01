import React from 'react';
import { expect, it, describe, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterOption from './FilterOption';
import { FilterContext } from './store/filter-context';

const mockContext = {
  category: ['frontend', 'backend'],
  filterSelector: ['frontend'],
  onAdd: vi.fn(),
  onRemove: vi.fn(),
  onAddAll: vi.fn(),
  onRemoveAll: vi.fn()
};

function renderWithContext(props = {}) {
  return render(
    <FilterContext.Provider value={mockContext}>
      <FilterOption {...props} />
    </FilterContext.Provider>
  );
}

describe('FilterOption', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => renderWithContext()).not.toThrow();
  });

  it('should render a checkbox input', () => {
    renderWithContext({ option: 'frontend', label: 'Frontend', checked: true });
    expect(screen.getByRole('checkbox')).toBeInTheDocument();
  });

  it('should render the label text', () => {
    renderWithContext({ option: 'frontend', label: 'Frontend', checked: true });
    expect(screen.getByText('Frontend')).toBeInTheDocument();
  });

  it('should be checked when checked prop is true', () => {
    renderWithContext({ option: 'frontend', label: 'Frontend', checked: true });
    expect(screen.getByRole('checkbox')).toBeChecked();
  });

  it('should be unchecked when checked prop is false', () => {
    renderWithContext({ option: 'backend', label: 'Backend', checked: false });
    expect(screen.getByRole('checkbox')).not.toBeChecked();
  });

  it('should call onChange with the option and new checked state when clicked', () => {
    const onChange = vi.fn();
    renderWithContext({ option: 'frontend', label: 'Frontend', checked: true, onChange });
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledWith('frontend', false);
  });

  it('should call onChange with true when an unchecked option is clicked', () => {
    const onChange = vi.fn();
    renderWithContext({ option: 'backend', label: 'Backend', checked: false, onChange });
    fireEvent.click(screen.getByRole('checkbox'));
    expect(onChange).toHaveBeenCalledWith('backend', true);
  });

  it('should associate checkbox with label via htmlFor', () => {
    renderWithContext({ option: 'frontend', label: 'Frontend', checked: false });
    expect(screen.getByLabelText('Frontend')).toBeInTheDocument();
    expect(screen.getByRole('checkbox')).toHaveAttribute('id', 'filter-frontend');
  });

  it('should use default values when no props are provided', () => {
    renderWithContext();
    expect(screen.getByRole('checkbox')).toBeChecked();
    expect(screen.getByText('Select All')).toBeInTheDocument();
  });
});
