// https://github.com/lutangar/cities.json/blob/master/cities.json

// download
const data = await fetch(
  "https://raw.githubusercontent.com/lutangar/cities.json/master/cities.json",
);
// save
await Deno.writeTextFile(
  "./data/cities.json",
  JSON.stringify(await data.json(), null, 2),
);
