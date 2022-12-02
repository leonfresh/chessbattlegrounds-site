// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Chess Battlegrounds",
  tagline: "First Ever Chess Battle-Royale ",
  url: "https://leonfresh.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "leonfresh", // Usually your GitHub org/user name.
  projectName: "chessbattlegrounds-site", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: "Chess Battlegrounds",
        logo: {
          alt: "My Site Logo",
          src: "img/logo-icon.svg",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Tutorial",
          // },
          // { to: "/blog", label: "Blog", position: "left" },
          // { to: "#preregister", label: "Pre-register", position: "left" },
          {
            href: "https://discord.gg/cweD98aeJp",
            label: "Discord",
            position: "right",
            target: "_blank",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Chess Battlegrounds",
          },
          {
            title: "Join our Discord to Test the Game & Chat",
            items: [
              {
                label: "Discord",
                href: "https://discord.gg/cweD98aeJp",
                target: "_blank",
              },
            ],
          },
          {
            title: "Socials",
            items: [
              {
                label: "Twitter",
                href: "https://twitter.com/chessbgrounds",
              },
              {
                label: "Facebook",
                href: "https://facebook.com/chessbgrounds",
              },
              {
                label: "Instagram",
                href: "https://instagram.com/chessbgrounds",
              },
            ],
            // items: [
            //   {
            //     label: "Blog",
            //     to: "/blog",
            //   },
            // ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chess Battlegrounds. All Rights Reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

// module.exports = config;
module.exports = config;
