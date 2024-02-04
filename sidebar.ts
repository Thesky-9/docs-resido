import { type DefaultTheme } from "vitepress";

export function sidebarResido(): DefaultTheme.SidebarItem[] {
  return [
    { text: "Introduction", link: "/index.md" },
    {
      text: "Prologue",
      items: [
        { text: "Releases", link: "/releases.md" },
        { text: "Upgrade", link: "/upgrade.md" },
        { text: "License", link: "/license.md" },
      ],
    },
    {
      text: "Getting started",
      items: [
        { text: "Requirement", link: "/requirement.md" },
        {
          text: "Quick start",
          items: [
            { text: "Install on hosting", link: "/install-on-hosting.md" },
            { text: "Install on local or vps", link: "/install-on-vps.md" },
          ],
        },
        { text: "Ssl", link: "/ssl.md" },
      ],
    },
    {
      text: "User guide",
      items: [
        { text: "Custom Site Identity", link: "/general.md" },
        { text: "Menu", link: "/menu.md" },
        { text: "Footer", link: "/footer.md" },
        { text: "Custom CSS & JS", link: "/cssjs.md" },
        { text: "Translate", link: "/translate.md" },
        { text: "Payment", link: "/payment.md" },
        { text: "Short code", link: "/shortcode.md" },
        { text: "Config Real Estate", link: "/config-real-estate.md" },
        { text: "Config", link: "/config.md" },
      ],
    },
    {
      text: "Available plugins",
      items: [
        { text: "Post scheduler", link: "/plugin/plugin-post-scheduler.md" },
        { text: "Analytics", link: "/plugin/plugin-analytics.md" },
        { text: "Backup", link: "/plugin/plugin-backup.md" },
        { text: "Contact Form", link: "/plugin/plugin-contact-form.md" },
        { text: "Social Login", link: "/plugin/plugin-social-login.md" },
      ],
    },
    { text: "Theme development", link: "/theme-development.md" },
  ];
}
