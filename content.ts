import type { PlasmoContentScript } from "plasmo"

import { redirectConfig } from "~redirect.config"

redirectConfig[location.hostname]()

export const config: PlasmoContentScript = {
  matches: ["<all_urls>"],
  all_frames: true
}
