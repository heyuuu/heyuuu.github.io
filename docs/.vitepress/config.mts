import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "我的工作经验记录",
  description: "我的工作经验记录",

  outDir: "../dist",

  markdown: {
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },

  head: [
    [
      "script",
      {},
      `window._hmt = window._hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?dda4b5640f34067b7039a6aabbce6fab";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `,
    ],
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle: "",
    logo: "/logo.png",
    nav: [
      { text: "Home", link: "/" },
      { text: "技术醒酒汤", link: "/recall" },
    ],

    sidebar: [
      {
        text: "醒酒汤",
        items: [{ text: "说明", link: "/recall" }],
      },
      {
        text: "PHP 语言",
        items: [{ text: "语法速查", link: "/recall/php/syntax" }],
      },
      {
        text: "Golang 语言",
        link: "/recall/go/",
        items: [
          { text: "语法速查", link: "/recall/go/base" },
          { text: '"面向对象"', link: "/recall/go/oo" },
        ],
      },
      {
        text: "Kotlin 语言",
        items: [{ text: "语法速查", link: "/recall/kotlin/syntax" }],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://heyuuu.github.io/" }],

    outline: {
      level: "deep",
      label: "大纲",
    },
  },
});
