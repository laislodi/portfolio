import React, { useContext } from 'react';
import { expect, it, describe, vi, afterEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import FilterContextProvider, { FilterContext } from './filter-context';

function TestConsumer() {
  const ctx = useContext(FilterContext);
  return (
    <div>
      <span data-testid="filter-count">{ctx.filterSelector.length}</span>
      <span data-testid="category-count">{ctx.category.length}</span>
      <span data-testid="filters">{ctx.filterSelector.join(',')}</span>
      <button onClick={() => ctx.onAdd('api')} data-testid="add-api">Add API</button>
      <button onClick={() => ctx.onRemove('frontend')} data-testid="remove-frontend">Remove Frontend</button>
      <button onClick={() => ctx.onAddAll()} data-testid="add-all">Add All</button>
      <button onClick={() => ctx.onRemoveAll()} data-testid="remove-all">Remove All</button>
    </div>
  );
}

function renderProvider() {
  return render(
    <FilterContextProvider>
      <TestConsumer />
    </FilterContextProvider>
  );
}

describe('FilterContextProvider', () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it('should render without errors', () => {
    expect(() => renderProvider()).not.toThrow();
  });

  it('should provide all 8 categories', () => {
    renderProvider();
    expect(screen.getByTestId('category-count').textContent).toBe('8');
  });

  it('should have all categories selected initially', () => {
    renderProvider();
    expect(screen.getByTestId('filter-count').textContent).toBe('8');
  });

  it('should remove all filters with onRemoveAll', () => {
    renderProvider();
    fireEvent.click(screen.getByTestId('remove-all'));
    expect(screen.getByTestId('filter-count').textContent).toBe('0');
  });

  it('should restore all filters with onAddAll after removing all', () => {
    renderProvider();
    fireEvent.click(screen.getByTestId('remove-all'));
    fireEvent.click(screen.getByTestId('add-all'));
    expect(screen.getByTestId('filter-count').textContent).toBe('8');
  });

  it('should remove a specific filter with onRemove', () => {
    renderProvider();
    fireEvent.click(screen.getByTestId('remove-frontend'));
    expect(screen.getByTestId('filter-count').textContent).toBe('7');
    expect(screen.getByTestId('filters').textContent).not.toContain('frontend');
  });

  it('should add a specific filter with onAdd', () => {
    renderProvider();
    fireEvent.click(screen.getByTestId('remove-all'));
    fireEvent.click(screen.getByTestId('add-api'));
    expect(screen.getByTestId('filter-count').textContent).toBe('1');
    expect(screen.getByTestId('filters').textContent).toBe('api');
  });

  it('should not change the category list when filters change', () => {
    renderProvider();
    fireEvent.click(screen.getByTestId('remove-all'));
    expect(screen.getByTestId('category-count').textContent).toBe('8');
  });
});
