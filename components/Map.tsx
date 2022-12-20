import {
  geoEqualEarth,
  geoPath,
} from "https://cdn.jsdelivr.net/npm/d3-geo@3/+esm";
import * as topojson from "https://esm.sh/topojson-client@3.1.0";
import world from "https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json" assert {
  type: "json",
};

export default function Map() {
  const projection = geoEqualEarth();
  const path = geoPath(projection, null);

  const land = topojson.feature(world, world.objects.land);

  return (
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">Map</h1>
      <p class="text-gray-500">This is the Map page.</p>
      <svg viewBox="0 0 900 600" style="display: block;">
        <g>
          <path d={path(land)}></path>
        </g>
      </svg>
    </div>
  );
}
