const puppeteer = require('puppeteer')

const getMatches = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true })
    const page = await browser.newPage()
    await page.goto('https://dota2.ru/esport/matches/', {
      waitUntil: 'networkidle2'
    })

    const selector =
      '.esport-match .esport-match-single .team-vs-team .status .score-cup'
    await page.waitForSelector(selector)

    const matchesWithResultArr = await page.$$(selector)
    for (let i = 0; i < matchesWithResultArr.length; i += 1) {
      await page.click(selector)
    }

    const result = await page.evaluate(() => {
      const data = []
      const elements = document.querySelectorAll(
        '.esport-match .esport-match-single .team-vs-team .status .match-shop-result'
      ) // Select all Products

      for (const element of elements) {
        const title = element.innerHTML

        data.push({ title })
      }

      return data
    })

    return result
  } catch (err) {
    console.log(err)
    return err
  }
}

// const main = async () => {
//   let data = 'pid'
//   await (() => {
//     data = {}
//   })
//   const some = await (() => {
//     data = {id: 2}

//     return data
//   })

//   return some()
// }
module.exports = getMatches()
