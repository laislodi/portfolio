import React from 'react';
import { render, screen } from '@testing-library/react';
import Education from './Education.jsx';

describe('Education Component', () => {
  test('should render education list with valid data', () => {
    const education = [
      { name: 'B.Sc. Computer Science', type: 'Degree', institution: 'University A', year: '2020' },
      { name: 'M.Sc. Computer Science', type: 'Degree', institution: 'University B', year: '2022' }
    ];
    const { container } = render(<Education education={education} certifications={[]} />);
    const certificationItems = container.querySelectorAll('.certification-list > li');
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(certificationItems.length).toBe(0);
    expect(screen.getByText('B.Sc. Computer Science')).toBeInTheDocument();
    expect(screen.getAllByText('Degree').length).toBe(2);
    expect(screen.getByText('University A 2020')).toBeInTheDocument();
    expect(screen.getByText('M.Sc. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('University B 2022')).toBeInTheDocument();
  });

  test('should render certifications list with valid data', () => {
    const certifications = [
      { name: 'AWS Certified', issuedBy: 'Amazon', issued: '2021' },
      { name: 'Azure Fundamentals', issuedBy: 'Microsoft', issued: '2022' }
    ];
    render(<Education education={[]} certifications={certifications} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('AWS Certified')).toBeInTheDocument();
    expect(screen.getByText('Amazon')).toBeInTheDocument();
    expect(screen.getByText('2021')).toBeInTheDocument();
    expect(screen.getByText('Azure Fundamentals')).toBeInTheDocument();
    expect(screen.getByText('Microsoft')).toBeInTheDocument();
    expect(screen.getByText('2022')).toBeInTheDocument();
  });

  test('should render both sections with valid data', () => {
    const education = [
      { name: 'B.Sc. Computer Science', type: 'Degree', institution: 'University A', year: '2020' }
    ];
    const certifications = [
      { name: 'AWS Certified', issuedBy: 'Amazon', issued: '2021' }
    ];
    render(<Education education={education} certifications={certifications} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('B.Sc. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    expect(screen.getByText('AWS Certified')).toBeInTheDocument();
  });

  test('should handle empty education array', () => {
    render(<Education education={[]} certifications={[]} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    // No education items should be rendered
    const educationList = screen.getAllByRole('list')[0];
    expect(educationList.childElementCount).toBe(0);
    const certificationList = screen.getAllByRole('list')[1];
    expect(certificationList.childElementCount).toBe(0);
  });

  test('should handle empty certifications array', () => {
    const education = [
      { name: 'B.Sc. Computer Science', type: 'Degree', institution: 'University A', year: '2020' }
    ];
    render(<Education education={education} certifications={[]} />);
    expect(screen.getByText('Education')).toBeInTheDocument();
    expect(screen.getByText('B.Sc. Computer Science')).toBeInTheDocument();
    expect(screen.getByText('Certifications')).toBeInTheDocument();
    // No certification items should be rendered
    const certificationList = screen.getAllByRole('list')[1];
    expect(certificationList.childElementCount).toBe(0);
  });

  test('should handle missing or undefined props', () => {
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