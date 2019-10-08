const wpNuxtFeed = require("wp-nuxt/lib/rss")

export default {
  srcDir: "src",
  modules: [
    "wp-nuxt",
    "nuxt-stack"
  ],
  styles: ["styles/index.scss"],
  styleResources: {
    scss: ["styles/theme.scss"]
  },
  stack: {
    name: "Nuxt Stack",
    host: "https://nuxtstack.org/",
    description: "Stacks of goodness for Nuxt",
    keywords: ["nuxt", "stack"],
    backgroundColor: "#FFFFFF",
    themeColor: "#4FC08D",
    preconnect: [
      "https://fonts.gstatic.com",
      "https://fonts.googleapis.com"
    ]
  },
  webfonts: {
    custom: {
      families: [
        "Quicksand:500",
        "Roboto Mono:400"
      ],
      urls: [
        'https://cdn.jsdelivr.net/npm/typeface-quicksand@0.0.71/index.min.css',
        'https://cdn.jsdelivr.net/npm/roboto-mono-webfont@2.0.986/roboto-mono.min.css'
      ]
    }
  },
  feed: [
    wpNuxtFeed({
      endpoint: "https://wp.kmr.io/wp-json"
    })
  ],
  wp: {
    endpoint: "https://wp.kmr.io/wp-json"
  }
}
