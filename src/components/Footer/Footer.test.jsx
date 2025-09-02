import React from 'react';
import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  it('should render all contact links', () => {
    const contacts = [
      { url: 'https://twitter.com', title: 'Twitter', img: <img alt="Twitter" /> },
      { url: 'https://github.com', title: 'GitHub', img: <img alt="GitHub" /> },
    ];
    render(<Footer contact={contacts} />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', 'https://twitter.com');
    expect(links[1]).toHaveAttribute('href', 'https://github.com');
  });

  it('should display correct image and title for each contact', () => {
    const contacts = [
      { url: 'https://twitter.com', title: 'Twitter', img: <img alt="Twitter" data-testid="twitter-img" /> },
      { url: 'https://github.com', title: 'GitHub', img: <img alt="GitHub" data-testid="github-img" /> },
    ];
    render(<Footer contact={contacts} />);
    const twitterLink = screen.getByTitle('Twitter');
    const githubLink = screen.getByTitle('GitHub');
    expect(twitterLink).toBeInTheDocument();
    expect(githubLink).toBeInTheDocument();
    expect(screen.getByTestId('twitter-img')).toBeInTheDocument();
    expect(screen.getByTestId('github-img')).toBeInTheDocument();
  });

  it('should open links in new tab', () => {
    const contacts = [
      { url: 'https://twitter.com', title: 'Twitter', img: <img alt="Twitter" /> },
    ];
    render(<Footer contact={contacts} />);
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('target', '_blank');
  });

  it('should handle empty contact array', () => {
    render(<Footer contact={[]} />);
    const listItems = screen.queryAllByRole('listitem');
    expect(listItems).toHaveLength(0);
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });

  it('should handle missing contact fields', () => {
    const contacts = [
      { url: 'https://twitter.com', img: <img alt="Twitter" /> }, // missing title
      { title: 'GitHub', img: <img alt="GitHub" /> }, // missing url
      { url: 'https://linkedin.com', title: 'LinkedIn' }, // missing img
      {}, // all fields missing
    ];
    render(<Footer contact={contacts} />);
    // Should render 4 list items
    const listItems = screen.getAllByRole('listitem');
    expect(listItems).toHaveLength(4);
    // Check that the anchor tags exist where url is present
    expect(screen.getAllByRole('link').length).toBeGreaterThanOrEqual(2);
  });

  it('should handle undefined or null contact prop', () => {
    // undefined
    const { getByText, unmount } = render(<Footer />);
    expect(getByText('Contact')).toBeInTheDocument();
    unmount();
    // null
    render(<Footer contact={null} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
  });
});