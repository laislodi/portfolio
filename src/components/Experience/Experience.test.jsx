import { render } from '@testing-library/react';
import Experience from './Experience';

describe('Experience Component', () => {
  test('Function Executes With Valid Input', () => {
    const validProps = {
      company: 'Acme Corp',
      title: 'Developer',
      date: {
        from: {
          month: 'May',
          year: '2020'
        },
        to: {
          month: 'Aug',
          year: '2022'
        }
      },
      location: {
        city: "Vancouver",
        province: "BC",
        country: "Canada"
      },
      summary: 'Worked on frontend development.'
    };
    const { getByText } = render(<Experience jobExperiences={[validProps]} />);
    expect(getByText('Acme Corp')).toBeInTheDocument();
    expect(getByText('Developer')).toBeInTheDocument();
    expect(getByText('May 2020 to Aug 2022')).toBeInTheDocument();
    expect(getByText('Vancouver, BC, Canada')).toBeInTheDocument();
    expect(getByText('Worked on frontend development.')).toBeInTheDocument();
  });

  test('Function Handles Multiple Valid Inputs', () => {
    const experiences = [
      {
        company: 'Gamma LLC',
        title: 'Manager',
        date: {
          from: {
            month: 'Jan',
            year: '2015'
          },
          to: {
            month: 'Oct',
            year: '2022'
          }
        },
        location: {
          city: "Austin",
          state: "TX",
          country: "USA",
          type: "remote"
        },
        summary: 'Managed a team of developers.'
      },
      {
        company: 'Delta Ltd',
        title: 'Analyst',
        date: {
          from: {
            month: 'Apr',
            year: '2012'
          },
          to: {
            month: 'Jan',
            year: '2015'
          }
        },
        location: {
          city: "Calgary",
          province: "AB",
          country: "Canada"
        },
        summary: 'Analyzed business requirements.'
      }
    ];
    experiences.forEach(exp => {
      const { getByText, unmount } = render(<Experience jobExperiences={experiences} />);
      expect(getByText(exp.company)).toBeInTheDocument();
      expect(getByText(exp.title)).toBeInTheDocument();
      expect(getByText('Jan 2015 to Oct 2022')).toBeInTheDocument();
      expect(getByText('Apr 2012 to Jan 2015')).toBeInTheDocument();
      expect(getByText(exp.summary)).toBeInTheDocument();
      unmount();
    });
  });

  test('Function Handles Missing Input', () => {
    const { container } = render(<Experience />);
    expect(container).toBeDefined();
  });

  test('Function Handles Invalid Input Type', () => {
    const invalidProps = {
      company: 123,
      title: 456,
      date: {
        from: {
          month: 789,
          year: 1234
        },
        to: {
          month: 981,
          year: 872
        }
      },
      description: 101112
    };
    const { container } = render(<Experience jobExperiences={[invalidProps]} />);
    expect(container).toBeDefined();
  });

  test('Function Handles Extreme Input Values', () => {
    const largeString = 'A'.repeat(10000);
    const props = {
      company: largeString,
      title: '',
      duration: '',
      summary: ''
    };
    const { getByText } = render(<Experience jobExperiences={[props]} />);
    expect(getByText(largeString)).toBeInTheDocument();
  });
});