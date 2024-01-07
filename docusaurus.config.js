// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";
import remarkDefinitionList from "remark-definition-list";
/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Common Lisp (New) Language Reference",
  tagline: "Community Driven, Open Source",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://lisp-docs.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "cl-language-reference/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "lisp-docs", // Usually your GitHub org/user name.
  projectName: "cl-language-reference", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        gtag: {
          trackingID: "G-8TJCE4NSF8",
          // anonymizeIP: true,
        },
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
          showLastUpdateAuthor: true,
          editUrl:
            "https://github.com/lisp-docs/cl-language-reference/tree/develop/",
          remarkPlugins: [remarkDefinitionList],
        },
        // blog: {
        //   showReadingTime: true,
        //   editUrl:
        //     "https://github.com/lisp-docs/cl-language-reference/tree/develop/",
        // },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: "google-site-verification",
          content: "Vzaw013_bfdKeUVG89Ch3W1zC9_vH9ID2dPB9Dz0vr0",
        },
      ],
      algolia: {
        // The application ID provided by Algolia
        appId: "C1F2Q5VM6X",

        // Public API key: it is safe to commit it
        apiKey: "43b7e710ac70357f752ad4ebea87c4d3",

        indexName: "cl-language-reference--category-1-introduction",

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        // externalUrlRegex: "external\\.com|domain\\.com",

        // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
        // replaceSearchResultPathname: {
        //   from: "/docs/", // or as RegExp: /\/docs\//
        //   to: "/",
        // },

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        // searchPagePath: "search",

        //... other Algolia params
      },
      tableOfContents: {
        maxHeadingLevel: 5,
      },
      // Replace with your project's social card
      // image: 'img/docusaurus-social-card.jpg',
      image: "img/1024px-Lisp_logo.svg.png",
      navbar: {
        title: "Common Lisp Docs",
        logo: {
          alt: "Lisp Logo",
          src: "img/logo.svg",
          href: "https://lisp-docs.github.io/",
        },
        items: [
          {
            // type: "docSidebar",
            // sidebarId: "tutorialSidebar",
            to: "https://lisp-docs.github.io/docs/tutorial/",
            label: "Tutorial",
            position: "left",
          },
          {
            to: "https://lisp-docs.github.io/cl-language-reference/",
            label: "Technical Reference",
            position: "left",
          },
          // {to: '/docs/getting-started', label: 'Getting Started', position: 'left'},
          {
            to: "https://lisp-docs.github.io/docs/whylisp",
            label: "Why Lisp?",
            position: "left",
          },
          { to: "https://lisp-docs.github.io/docs/howto", label: "Guides", position: "left" },

          {
            to: "https://lisp-docs.github.io/docs/contribute",
            label: "Contribute!",
            position: "right",
          },
          // {to: 'https://lisp-docs.github.io/docs/faq', label: 'FAQ', position: 'right'},
          {
            to: "https://lisp-docs.github.io/docs/help",
            label: "Getting Help",
            position: "right",
          },
          {
            to: "https://lisp-docs.github.io/docs/about",
            label: "About",
            position: "right",
          },
          { to: "https://lisp-docs.github.io/blog", label: "Blog", position: "right" },
          {
            href: "https://github.com/lisp-docs",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Common Lisp Tutorial",
                to: "https://lisp-docs.github.io/docs/tutorial",
              },
              {
                label: "Common Lisp Technical Reference",
                to: "https://lisp-docs.github.io/cl-language-reference/",
              },
              {
                label: "Help",
                to: "https://lisp-docs.github.io/docs/help",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Stack Overflow",
                href: "https://stackoverflow.com/questions/tagged/common-lisp",
              },
              {
                label: "Discord",
                href: "https://discord.gg/hhk46CE",
              },
              {
                label: "Reddit",
                href: "https://www.reddit.com/r/common_lisp",
              },
              {
                label: "IRC",
                href: "https://irclog.tymoon.eu/libera/commonlisp",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "https://lisp-docs.github.io/blog",
              },
              {
                label: "Tutorial and General Content GitHub",
                href: "https://github.com/lisp-docs/lisp-docs.github.io",
              },
              {
                label: "Technical Reference GitHub",
                href: "https://github.com/lisp-docs/cl-language-reference/",
              },
              {
                label: "Contribute to the Docs",
                to: "https://lisp-docs.github.io/docs/contribute",
              },
            ],
          },
          {
            title: "Common Lisp Docs",
            items: [
              { label: "About", to: "https://lisp-docs.github.io/docs/about" },
              {
                label: "Why Lisp",
                to: "https://lisp-docs.github.io/docs/whylisp",
              },
              {
                label: "Getting Started",
                to: "https://lisp-docs.github.io/docs/getting-started",
              },
              { label: "FAQ", to: "https://lisp-docs.github.io/docs/faq" },
              {
                label: "Getting Help",
                to: "https://lisp-docs.github.io/docs/help",
              },
              { label: "How To Guides", to: "https://lisp-docs.github.io/docs/howto" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Common Lisp Docs, MIT License (see GitHub Repo).`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        // https://prismjs.com/#supported-languages
        // "xml",
        // "html",
        // consider replacing lisp highlighting with this: https://github.com/orthecreedence/highlight-lisp
        additionalLanguages: [
          "powershell",
          "python",
          "lisp",
          "bash",
          "java",
          "markup",
          "clojure",
        ],
      },
    }),
};

export default config;

// export default async function createConfigAsync() {

//   const lispDocsUtils = await import("@lisp-docs/utils");

//   return config;
// }
