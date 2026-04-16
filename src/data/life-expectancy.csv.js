import {csvFormat, csvParse} from "d3-dsv";

async function text(url) {
  const response = await fetch(url);
  if (!response.ok) throw new Error(`fetch failed: ${response.status}`);
  return response.text();
}

const source = await text("https://datavis.cs.columbia.edu/files/data/gapminder/life-expectancy.csv");
const rows = csvParse(source);
const lifeExpectancy2010 = rows.filter((d) => d.Year === "2010");

process.stdout.write(csvFormat(lifeExpectancy2010));
