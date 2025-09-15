# Claude Code Configuration

This file contains settings and commands for Claude Code to help with development tasks.

## Test Commands

Run tests:
```bash
npm test
```

Run tests excluding specific files:
```bash
npm test -- --exclude "**/Header.test.jsx"
```

Run specific test file:
```bash
npm test -- src/components/Header/Header.test.jsx
```

## Build Commands

Build the project:
```bash
npm run build
```

Development server:
```bash
npm run dev
```

## Lint Commands

Run linter:
```bash
npm run lint
```

## Project Structure Notes

- Uses Vite + React
- Internationalization with `intlayer` and `react-intlayer`
- Tests use Vitest with jsdom environment
- Components are organized in `src/components/`
- Each component has its own test file

## Internationalization Testing

**Manual Testing:** Development server at `http://localhost:5175/portfolio/`
- Test locale switching with EN/FR-CA buttons
- Verify Header and Menu translations work properly
- See `INTERNATIONALIZATION_TESTING.md` for detailed testing guide

**Automated Testing:** Uses mocks due to esbuild environment issues
- Integration tests with real intlayer cannot run in current Windows/MINGW setup
- Unit tests use mocked intlayer values for reliable testing

## Known Issues

- Header component uses intlayer for i18n, tests need proper mocks for `intlayer` and `react-intlayer`
- Components using dynamic content need fallback keys for React list rendering
- esbuild environment issue prevents integration tests with real intlayer on Windows

## Test Configuration

Tests are configured in `vite.config.js` with:
- Environment: jsdom
- Setup file: `src/setupTests.js`
- Pool: forks
- Globals: true
- Intlayer excluded from web optimizer