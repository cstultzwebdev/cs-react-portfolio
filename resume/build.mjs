// Renders resume/resume.html to public/Chris-Stultz-Resume.pdf.
//
//   node resume/build.mjs
//
// Uses Playwright's Chromium. It isn't a dependency of this project, so this
// looks for it in the react-app project next door; or install it here with
// `npm i -D playwright && npx playwright install chromium`.
// (Alternatively, open resume.html in Chrome and Print → Save as PDF.)

import { createRequire } from 'node:module'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))
const root = join(here, '..')

function loadPlaywright() {
  for (const base of [root, join(root, '..', 'react-app')]) {
    try {
      return createRequire(join(base, 'package.json'))('@playwright/test')
    } catch {}
  }
  throw new Error(
    'Playwright not found. Install it (see the comment at the top of this file) or print from Chrome instead.',
  )
}

const { chromium } = loadPlaywright()
const browser = await chromium.launch()
const page = await browser.newPage()
await page.goto(pathToFileURL(join(here, 'resume.html')).href)
const out = join(root, 'public', 'Chris-Stultz-Resume.pdf')
await page.pdf({ path: out, format: 'Letter', preferCSSPageSize: true, printBackground: true })
const pages = await page.evaluate(() =>
  Math.ceil(document.documentElement.scrollHeight / (11 * 96 - 1.1 * 96)),
)
await browser.close()
console.log(`Wrote ${out} (~${pages} page${pages === 1 ? '' : 's'})`)
