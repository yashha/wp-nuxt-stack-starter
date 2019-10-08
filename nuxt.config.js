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
    google: {
      families: [
        "Quicksand:500",
        "Roboto Mono:400"
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
