const all = await Deno.readTextFile("./datacenters.txt");
const lines = all.split("\n");

interface Datacenter {
  name: string;
  city: string;
  lat: number;
  lon: number;
}

const items = lines.map((line) => line.split(";"));
const datacenters = items.map((item) => {
  return {
    name: item[0],
    city: item[1],
    lat: Number(item[2]),
    lon: Number(item[3]),
  } as Datacenter;
});

const json = JSON.stringify(datacenters, null, 2);
await Deno.writeTextFile("./datacenters.json", json);
