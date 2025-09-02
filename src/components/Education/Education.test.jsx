import { expect, it, describe } from 'vitest';
import { render, screen } from '@testing-library/react';
import Education from './Education.jsx';

describe('Education Component', () => {
  it('should render only education when certifications is missing', () => {
    const education = [
      { name: 'B.Sc. Computer Science', type: 'Degree', institution: 'University A', year: '2020' },
      { name: 'M.Sc. Computer Science', type: 'Degree', institution: 'University B', year: '2022' }
    ];
    render(<Education education={education} certifications={null} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('B.Sc. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('M.Sc. Computer Science')).toBeInTheDocument();
    expect(screen.getAllByText('Degree').length).toBe(2);
    expect(screen.queryByText('Certifications')).not.toBeInTheDocument();
    expect(screen.getByText('University A 2020')).toBeInTheDocument();
    expect(screen.getByText('University B 2022')).toBeInTheDocument();
  });

  it('should render only certifications when education is missing', () => {
    const certifications = [
      { name: 'AWS Certified', issuedBy: 'Amazon', issued: '2021' },
      { name: 'Azure Fundamentals', issuedBy: 'Microsoft', issued: '2022' }
    ];
    render(<Education education={null} certifications={certifications} />);

    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('AWS Certified')).toBeInTheDocument();
    expect(screen.getByText('Amazon')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('Azure Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Microsoft')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.queryByRole('listitem', { name: /MSc|M.Sc.|BSc|B.Sc.|Degree|Masters/ })).not.toBeInTheDocument();
  });

  it('should render both sections with valid data', () => {
    const education = [
      { name: 'B.Sc. Computer Science', type: 'Degree', institution: 'University A', year: '2020' },
      { name: 'M.Sc. Computer Science', type: 'Degree', institution: 'University A', year: '2022' }
    ];
    const certifications = [
      { name: 'AWS Certified', issuedBy: 'Amazon', issued: '2021' },
      { name: 'Azure Fundamentals', issuedBy: 'Microsoft', issued: '2022' }
    ];
    render(<Education education={education} certifications={certifications} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getAllByText('Degree').length).toBe(2);
    expect(screen.getAllByText(/B.Sc.|M.Sc. Computer Science/).length).toBe(2);
    expect(screen.getAllByText(/University A*/).length).toBe(2);
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('AWS Certified')).toBeInTheDocument();
    expect(screen.getByText('Amazon')).toBeInTheDocument();
    expect(screen.getByText('Azure Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Microsoft')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
    expect(screen.queryAllByText(/2022/).length).toBe(2);
  });

  it('should return null when no education or certifications', () => {
    const { container } = render(<Education />);
    expect(container.firstChild).toBeNull();
    const { container: container2 } = render(<Education education={null} certifications={null} />);
    expect(container2.firstChild).toBeNull();
    const { container: container3 } = render(<Education education={[]} certifications={[]} />);
    // Should render section but no lists or headings
    expect(container3.querySelector('.education-list')).toBeNull();
    expect(container3.querySelector('.certification-list')).toBeNull();
    expect(screen.queryByText('Certifications')).not.toBeInTheDocument();
  });

  it('should not render sections for empty arrays', () => {
    render(<Education education={[]} certifications={[]} />);
    expect(screen.queryByText('Certifications')).not.toBeInTheDocument();
    expect(screen.queryByRole('list')).not.toBeInTheDocument();
    expect(screen.getByText('Education')).toBeInTheDocument();
  });

  it('should handle incomplete education or certification items', () => {
    const education = [
      { name: 'PhD AI' }, // missing type, institution, year
      { type: 'Diploma', institution: 'Uni C' }, // missing name, year
      {} // all fields missing
    ];
    const certifications = [
      { name: 'Azure Fundamentals' }, // missing issuedBy, issued
      { issuedBy: 'Microsoft' }, // missing name, issued
      {} // all fields missing
    ];
    render(<Education education={education} certifications={certifications} />);
    // Should render whatever fields are present, and not throw
    expect(screen.getByText('PhD AI')).toBeInTheDocument();
    expect(screen.getByText('Diploma')).toBeInTheDocument();
    expect(screen.getByText('Uni C')).toBeInTheDocument();
    expect(screen.getByText('Azure Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Microsoft')).toBeInTheDocument();
  });

  it('should handle missing or undefined props', () => {
    // Both props missing
    const { container } = render(<Education />);
    const educationItems = container.querySelectorAll('.education-list > li');
    const certificationItems = container.querySelectorAll('.certification-list > li');
    expect(educationItems.length).toBe(0);
    expect(certificationItems.length).toBe(0);
    // Both props undefined
    render(<Education education={undefined} certifications={undefined} />);
    expect(educationItems.length).toBe(0);
    expect(certificationItems.length).toBe(0);
  });
});