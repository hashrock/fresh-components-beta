import * as geo from "https://esm.sh/d3-geo@3.0.1";
import * as topojson from "https://esm.sh/topojson-client@3.1.0";
import world from "https://esm.sh/world-atlas@2.0.2/land-110m.json" assert {
  type: "json",
};

interface Gcp {
  [key: string]: {
    city: string;
    lat: number;
    lng: number;
  };
}

import dataCenters from "../data/gcp.json" assert {
  type: "json",
};

interface MapProps {
  current: string;
}

export default function Map(props: MapProps) {
  const width = 600;
  const height = 300;

  const projection = geo.geoEqualEarth();
  projection.fitSize(
    [width, height],
    topojson.feature(world, world.objects.land),
  );

  const path = geo.geoPath(projection, null);
  const land = topojson.feature(world, world.objects.land);
  const line = path(land);

  const dataCentersGeo = Object.keys(dataCenters as Gcp).map((key) => {
    const dc = (dataCenters as Gcp)[key];
    return {
      ...dc,
      name: key,
      coordinates: projection([dc.lng, dc.lat]) ?? [0, 0],
    };
  });

  return (
    <div>
      {line && (
        <svg viewBox={`0 0 ${width} ${height}`} style="display: block;">
          <g>
            <path fill="#aaa" d={line}></path>
          </g>
          {dataCentersGeo.map((dc) => {
            return (
              <g>
                {(props.current === dc.name)
                  ? (
                    <circle
                      cx={dc.coordinates[0]}
                      cy={dc.coordinates[1]}
                      r="5"
                      fill="red"
                    >
                    </circle>
                  )
                  : (
                    <circle
                      cx={dc.coordinates[0]}
                      cy={dc.coordinates[1]}
                      r="2"
                      fill="blue"
                    >
                    </circle>
                  )}
                <text
                  font-size={10}
                  x={dc.coordinates[0]}
                  y={dc.coordinates[1] - 10}
                  fill="black"
                  text-anchor="middle"
                  alignment-baseline="middle"
                >
                  {dc.name}
                </text>
              </g>
            );
          })}
        </svg>
      )}
    </div>
  );
}
