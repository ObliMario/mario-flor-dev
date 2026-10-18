import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import i18n from './i18n';
import en from './locales/en/translation.json';
import es from './locales/es/translation.json';
import { posts } from './blogdata';

const heroName = (t) => `${t.home.hero.title} ${t.home.hero.name}.`;

function renderAt(hash) {
  window.location.hash = hash;
  return render(<App />);
}

beforeEach(async () => {
  localStorage.clear();
  await act(() => i18n.changeLanguage('en'));
});

describe('routing', () => {
  test('home shows the hero', () => {
    renderAt('#/');
    expect(screen.getByRole('heading', { level: 1, name: heroName(en) })).toBeInTheDocument();
  });

  test('profile page renders', () => {
    renderAt('#/profile');
    expect(screen.getAllByText(en.profile.name).length).toBeGreaterThan(0);
  });

  test('projects page lists the visible projects', () => {
    renderAt('#/blog');
    const visible = posts.filter((p) => p.mostrar !== false);
    for (const post of visible) {
      const title = post.i18nKey.split('.').reduce((o, k) => o[k], en).title;
      expect(screen.getAllByText(title).length).toBeGreaterThan(0);
    }
  });

  test('project detail page renders by slug', () => {
    const post = posts.find((p) => p.mostrar !== false);
    renderAt(`#/blog/${post.slug}`);
    const title = post.i18nKey.split('.').reduce((o, k) => o[k], en).title;
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(title);
  });

  test('unknown routes show Not found', () => {
    renderAt('#/does-not-exist');
    expect(screen.getByText('Not found')).toBeInTheDocument();
  });
});

describe('theme switcher', () => {
  test('defaults to dark and toggles to light, persisting the choice', async () => {
    renderAt('#/');
    expect(document.documentElement).toHaveAttribute('data-theme', 'dark');

    await userEvent.click(screen.getByRole('switch', { name: 'Switch to light theme' }));

    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
    expect(localStorage.getItem('theme')).toBe('light');
    expect(screen.getByRole('switch', { name: 'Switch to dark theme' })).toBeInTheDocument();
  });

  test('restores a saved light theme', () => {
    localStorage.setItem('theme', 'light');
    renderAt('#/');
    expect(document.documentElement).toHaveAttribute('data-theme', 'light');
  });
});

describe('language switcher', () => {
  test('switches the UI language and remembers it', async () => {
    renderAt('#/');
    await userEvent.click(screen.getByRole('button', { name: 'Switch to ES language' }));

    expect(screen.getByRole('heading', { level: 1, name: heroName(es) })).toBeInTheDocument();
    expect(localStorage.getItem('lang')).toBe('es');
    expect(screen.getByRole('button', { name: 'Switch to ES language' })).toHaveAttribute('aria-pressed', 'true');
  });
});
