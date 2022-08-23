interface RedirectConfig {
  [hostname: string]: () => void
}

export const redirectConfig: RedirectConfig = {
  "angular.io": () => {
    location.href = location.href.replace("io", "cn")
  },
  "developer.mozilla.org": () => {
    if (location.href.includes("https://developer.mozilla.org/en-US")) {
      location.href = location.href.replace("en-US", "zh-CN")
    }
  }
}
