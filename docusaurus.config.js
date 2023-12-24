// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'DataTome Docs',
  url: 'https://alexandrehiroyuki.github.io',
  baseUrl: '/DataTomeDocs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/icon.png',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'AlexandreHiroyuki', // Usually your GitHub org/user name.
  projectName: 'DataTomeDocs', // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/icon.png',
      metadata: [
        { name: 'twitter:card', content: 'summary' },
        {
          name: 'twitter:description',
          content:
            "Data Tome is a C++ library for data analysis and data filtering on IoT devices. Focus on the developer's experience and performance.",
        },
        { name: 'twitter:title', content: 'DataTome Docs' },
        { name: 'twitter:image', content: 'img/icon.png' },
      ],
      navbar: {
        title: 'DataTome Docs',
        logo: {
          alt: 'Data Tome Docs Logo',
          src: 'img/icon.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Getting Started',
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
                label: 'Getting Started',
                to: '/docs/intro',
              },
              {
                label: 'Data Tome Moving Average Methods',
                to: '/docs/mvavg-methods/intro',
              },
              {
                label: 'Data Tome Partials',
                to: '/docs/mvavg-methods/partials/intro',
              },
              {
                label: 'Data Tome Analysis',
                to: '/docs/analysis-methods/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'AlexandreHiroyuki - GitHub',
                href: 'https://github.com/AlexandreHiroyuki',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Library GitHub Repo',
                href: 'https://github.com/AlexandreHiroyuki/DataTome',
              },
              {
                label: 'Docs GitHub Repo',
                href: 'https://github.com/AlexandreHiroyuki/DataTomeDocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Alexandre H. Yamauchi. Data Tome é uma marca de Alexandre H. Yamauchi. Site construído com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
