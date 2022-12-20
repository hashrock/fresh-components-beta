import * as geo from "https://esm.sh/d3-geo@3.0.1";
import * as topojson from "https://esm.sh/topojson-client@3.1.0";
import world from "https://esm.sh/world-atlas@2.0.2/land-110m.json" assert {
  type: "json",
};

export default function Map() {
  const width = 600;
  const height = 300;

  const projection = geo.geoEqualEarth();
  projection.fitSize(
    [width, height],
    topojson.feature(world, world.objects.land),
  );
  const path = geo.geoPath(projection, null);
  const land = topojson.feature(world, world.objects.land);

  return (
    <div class="flex flex-col items-center justify-center">
      <h1 class="text-4xl font-bold">Map</h1>
      <p class="text-gray-500">This is the Map page.</p>
      <svg viewBox={`0 0 ${width} ${height}`} style="display: block;">
        <g>
          <path d={path(land)}></path>
        </g>
      </svg>
    </div>
  );
}
