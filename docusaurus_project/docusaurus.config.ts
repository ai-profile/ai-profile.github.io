import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'AI Notes',
  tagline: 'Engineering notes, research & insights',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://ai-profile.github.io',
  baseUrl: '/notes/',

  organizationName: 'ai-profile',
  projectName: 'ai-profile.github.io',
  trailingSlash: false,

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // No editUrl — this is a personal notes site
        },
        blog: false, // Blog disabled — using docs-only mode
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/favicon.ico',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AI Notes',
      logo: {
        alt: 'AI Notes',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Notes',
        },
        {
          href: 'https://github.com/ai-profile/ai-profile.github.io',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Notes',
              to: '/docs/intro',
            },
            {
              label: 'Research',
              to: '/docs/research/pdf-extraction-research',
            },
          ],
        },
        {
          title: 'Connect',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ai-profile',
            },
            {
              label: 'LinkedIn',
              href: 'https://linkedin.com',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} AI Notes — Built with Docusaurus`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
