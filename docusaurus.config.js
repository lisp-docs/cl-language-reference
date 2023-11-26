// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Common Lisp (New) Language Reference',
  tagline: 'Community Driven, Open Source',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lisp-docs.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: 'cl-language-reference/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lisp-docs', // Usually your GitHub org/user name.
  projectName: 'cl-language-reference', // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lisp-docs/cl-language-reference/tree/develop/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/lisp-docs/cl-language-reference/tree/develop/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      image: 'img/1024px-Lisp_logo.svg.png',
      navbar: {
        title: 'CL Technical Reference ',
        logo: {
          alt: 'LISP Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'The CL Reference',
          },
          {to: '/contribue', label: 'Contribute!', position: 'left'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            href: 'https://github.com/lisp-docs/cl-language-reference/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Cl Technical Reference',
                to: '/docs/intro',
              },
              {
                label: 'CL Tutorial',
                to: 'https://lisp-docs.github.io/',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/common-lisp',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/hhk46CE',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/common_lisp',
              },
              {
                label: 'IRC',
                href: 'https://irclog.tymoon.eu/libera/commonlisp',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/lisp-docs/cl-language-reference/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LISP Docs, MIT License. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
