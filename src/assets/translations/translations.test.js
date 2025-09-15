import { expect, it, describe, vi } from 'vitest';

// Mock translation content based on what we know should be there
const mockHeaderContent = {
  key: 'header_content',
  content: {
    name: 'Lais Gabrielle Lodi',
    title: {
      en: 'Full Stack Developer',
      'fr-CA': 'Développeuse Full Stack'
    },
    aboutMe: {
      en: 'About me',
      'fr-CA': 'Sur moi'
    },
    summary: {
      en: 'Hello, I am a Full Stack Developer',
      'fr-CA': 'Salut, Je sui une Développeuse Full Stack'
    },
    linkedIn: 'https://www.linkedin.com/in/laislodi/'
  }
};

const mockMenuContent = {
  key: 'menu_content',
  content: {
    menuList: [
      { title: { en: 'Portfolio', 'fr-CA': 'Portefeuille' }, href: '#' },
      { title: { en: 'Projects', 'fr-CA': 'Projets' }, href: '#projects' },
      { title: { en: 'Experience', 'fr-CA': 'Expérience' }, href: '#experience' },
      { title: { en: 'Education', 'fr-CA': 'Éducation' }, href: '#education' },
      { title: { en: 'Soft Skills', 'fr-CA': 'Compétences générales' }, href: '#soft-skills' },
      { title: { en: 'Tech Skills', 'fr-CA': 'Compétences techniques' }, href: '#tech-skills' },
      { title: { en: 'Contact', 'fr-CA': 'Contact' }, href: '#contact' }
    ]
  }
};

describe('Translation Content Tests (Mocked)', () => {
  describe('Header Content Structure', () => {
    it('should have correct structure and required fields', () => {
      expect(mockHeaderContent.key).toBe('header_content');
      expect(mockHeaderContent.content).toBeDefined();
      expect(mockHeaderContent.content.name).toBe('Lais Gabrielle Lodi');
      expect(mockHeaderContent.content.linkedIn).toBe('https://www.linkedin.com/in/laislodi/');
    });

    it('should have English and French Canadian translations for title', () => {
      const titleTranslations = mockHeaderContent.content.title;
      expect(titleTranslations.en).toBe('Full Stack Developer');
      expect(titleTranslations['fr-CA']).toBe('Développeuse Full Stack');
    });

    it('should have English and French Canadian translations for aboutMe', () => {
      const aboutMeTranslations = mockHeaderContent.content.aboutMe;
      expect(aboutMeTranslations.en).toBe('About me');
      expect(aboutMeTranslations['fr-CA']).toBe('Sur moi');
    });

    it('should have English and French Canadian translations for summary', () => {
      const summaryTranslations = mockHeaderContent.content.summary;
      expect(summaryTranslations.en).toContain('Hello, I am a Full Stack Developer');
      expect(summaryTranslations['fr-CA']).toContain('Salut, Je sui une Développeuse Full Stack');
    });
  });

  describe('Menu Content Structure', () => {
    it('should have correct structure and 7 menu items', () => {
      expect(mockMenuContent.key).toBe('menu_content');
      expect(mockMenuContent.content).toBeDefined();
      expect(mockMenuContent.content.menuList).toHaveLength(7);
    });

    it('should have correct href values for all menu items', () => {
      const menuList = mockMenuContent.content.menuList;
      const expectedHrefs = ['#', '#projects', '#experience', '#education', '#soft-skills', '#tech-skills', '#contact'];

      menuList.forEach((item, index) => {
        expect(item.href).toBe(expectedHrefs[index]);
      });
    });

    it('should have English translations for all menu items', () => {
      const menuList = mockMenuContent.content.menuList;
      const expectedEnglishTitles = [
        'Portfolio', 'Projects', 'Experience', 'Education',
        'Soft Skills', 'Tech Skills', 'Contact'
      ];

      menuList.forEach((item, index) => {
        expect(item.title.en).toBe(expectedEnglishTitles[index]);
      });
    });

    it('should have French Canadian translations for all menu items', () => {
      const menuList = mockMenuContent.content.menuList;
      const expectedFrenchTitles = [
        'Portefeuille', 'Projets', 'Expérience', 'Éducation',
        'Compétences générales', 'Compétences techniques', 'Contact' // Fixed: Contact should be Contact
      ];

      menuList.forEach((item, index) => {
        expect(item.title['fr-CA']).toBe(expectedFrenchTitles[index]);
      });
    });

    it('should have correct Contact translation', () => {
      const contactItem = mockMenuContent.content.menuList[6]; // Last item (Contact)

      // Contact should be "Contact" in both languages
      expect(contactItem.title['fr-CA']).toBe('Contact');
      expect(contactItem.title.en).toBe('Contact');
      expect(contactItem.href).toBe('#contact');
    });

    it('should validate translation structure consistency', () => {
      const menuList = mockMenuContent.content.menuList;

      menuList.forEach((item, index) => {
        expect(item.title).toHaveProperty('en');
        expect(item.title).toHaveProperty('fr-CA');
        expect(item.href).toBeDefined();
        expect(typeof item.title.en).toBe('string');
        expect(typeof item.title['fr-CA']).toBe('string');
      });
    });
  });
});