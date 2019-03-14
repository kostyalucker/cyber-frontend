const puppeteer = require('puppeteer')

const matchSchema = {
  date: {
    time: String, // 12:30
    day: String // 24.02
  },
  result: null || String, // null || 23 : 1
  status: String, // null || 23 : 1
  event: String, // The International,
  team_one: {
    name: String, // NaVi
    logo: String, // some.ru/image.jpg
    link: String, // aboutnavi.ru
    bet: String // 2
  },
  team_two: {
    name: String, // VP
    logo: String, // some.ru/image2.jpg
    link: String, // aboutvp.ru
    bet: String // 3.5
  },
  stream_link: String || null // twitch.tv/match_id || null
}

console.log(matchSchema)

// TODO: fix timeout error
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
