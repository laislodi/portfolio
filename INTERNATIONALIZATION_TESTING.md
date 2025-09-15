# Internationalization Testing Guide

## Manual Testing (Development Server)

The development server is running at `http://localhost:5175/portfolio/`

### Test Scenarios

1. **Locale Switching**
   - Open the app in your browser
   - Look for locale selector buttons (EN and FR-CA) in both Header and Menu components
   - Click between EN and FR-CA to verify content changes

2. **Header Component Translation**
   - **English (EN):**
     - Name: "Lais Gabrielle Lodi"
     - Title: "Full Stack Developer"
     - About Me button: "About me"
     - Summary: "Hello, I am a Full Stack Developer..."

   - **French Canadian (FR-CA):**
     - Name: "Lais Gabrielle Lodi" (unchanged)
     - Title: "Développeuse  Full Stack"
     - About Me button: "Sur moi"
     - Summary: "Salut, Je suis une Développeuse Full Stack..."

3. **Menu Component Translation**
   - **English (EN):**
     - Portfolio, Projects, Experience, Education, Soft Skills, Tech Skills, Contact

   - **French Canadian (FR-CA):**
     - Portefeuille, Projets, Expérience, Éducation, Compétences générales, Compétences techniques, Contact

## Configuration Files

- **Main config:** `intlayer.config.ts`
- **Header translations:** `src/assets/translations/headerContent.ts`
- **Menu translations:** `src/assets/translations/menuContent.ts`

## Supported Locales

- `en` (English) - Default
- `fr-CA` (French Canadian)

## Browser Testing Steps

1. Start dev server: `npm run dev`
2. Open `http://localhost:5175/portfolio/`
3. Test locale switching with EN/FR-CA buttons
4. Verify all content translates properly
5. Check console for any errors or warnings

## Known Issues with Automated Testing

- esbuild environment issue prevents integration tests with real intlayer
- Unit tests use mocks instead of real translations
- Manual testing is currently the most reliable method

## Translation Files Structure

Each translation file exports a dictionary with:
- `key`: unique identifier for the content
- `content`: object with translatable fields using `t()` function for locale-specific strings