const citiesJson = await Deno.readTextFile("./data/cities.json");
const cities: City[] = JSON.parse(citiesJson);

console.log(cities.length);

const gcpJson = await Deno.readTextFile("./data/gcp.json");
const gcp: Gcp = JSON.parse(gcpJson);

interface City {
  country: string;
  name: string;
  lat: string;
  lng: string;
}

interface Gcp {
  [key: string]: {
    city: string;
    lat: number;
    lng: number;
  };
}

// values
const values = Object.values(gcp).map((v) => v.city);

// find cities
// const cityLocs = cities.filter((city) => values.includes(city.name));
// console.log(cityLocs);

const citiesWithGeo = values.map((v) => {
  const city = cities.filter((c) => c.name === v);
  if (!city) {
    console.log(v);
  }
  return city;
});

console.log(citiesWithGeo);
