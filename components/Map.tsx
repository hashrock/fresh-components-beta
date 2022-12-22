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
          <defs>
            <symbol
              transform-origin="center"
              id="deno-logo"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
            >
              <g clip-path="url(#a)">
                <path
                  fill="#000059"
                  d="M15 0a15 15 0 1 1 0 30 15 15 0 0 1 0-30Z"
                />
                <path
                  fill="#fff"
                  d="M14.7 22.3a.7.7 0 0 0-1 .5l-1 3.7a.7.7 0 0 0 1.5.4l1-3.7v-.4a.7.7 0 0 0-.5-.5Zm-7-3.8v.2l-1 3.7a.7.7 0 0 0 1.4.4l.9-3.4c-.5-.2-1-.5-1.3-.9Zm-2.4-4.2a.7.7 0 0 0-.8.5l-1 3.7a.7.7 0 0 0 1.4.4l1-3.7c0-.4-.2-.8-.6-1Zm22.4-.8a.7.7 0 0 0-1 .5l-1 3.7a.7.7 0 0 0 1.5.4l1-3.7c.1-.5-.1-.8-.5-1Zm-24.5-5c-.9 1.5-1.4 3.2-1.6 5l.4.2c.4 0 .8-.2.9-.5l1-3.8a.7.7 0 0 0-.7-.9Zm22 0a.7.7 0 0 0-1 .5l-1 3.8a.7.7 0 0 0 1.5.4l1-3.8c0-.4-.2-.7-.5-.8ZM7.5 5a.7.7 0 0 0-.9.5l-1 3.7a.7.7 0 0 0 1.4.4L8 6c.1-.4-.1-.8-.5-.9Zm12.8.7a.7.7 0 0 0-.9.5l-.7 2.5 1.3.8.8-2.9c.1-.4-.1-.8-.5-.9Zm-6.5-4.1c-.5 0-1 0-1.4.2l-1 3.4a.7.7 0 0 0 1.4.4l1-3.7v-.3ZM23 4l-.2.8a.7.7 0 0 0 1.4.4v-.1l-1.2-1Zm-5.8-2.4L16.8 3a.7.7 0 0 0 1.4.4l.4-1.4-1.3-.3h-.1ZM9.7 24.6a.7.7 0 0 1 1.4.4l-.7 2.7h-.1L9 27l.7-2.5Z"
                />
                <path
                  fill="#fff"
                  d="M14.4 8.5c-4.3 0-7.7 2.7-7.7 6.2 0 3.2 3 5.2 8 5.1.3 0 .5.3.6.7l.8 3.8.7 4c3.1-.4 6-2 8.2-4.3l-2.3-8.5c-.5-2-1.2-4-3-5.3a8.4 8.4 0 0 0-5.3-1.7Z"
                />
                <path
                  fill="#000059"
                  d="M15.4 11a1 1 0 1 1 0 1.8 1 1 0 0 1 0-1.8Z"
                />
              </g>
              <defs>
                <clipPath id="a">
                  <path fill="#fff" d="M0 0h30v30H0z" />
                </clipPath>
              </defs>
            </symbol>
          </defs>
          <g>
            <path fill="#E5E5E5" d={line}></path>
          </g>
          {dataCentersGeo.map((dc) => {
            return (
              <g class="group">
                {(props.current === dc.name)
                  ? (
                    <circle
                      cx={dc.coordinates[0]}
                      cy={dc.coordinates[1]}
                      r="5"
                      fill="blue"
                    >
                      <animate
                        attributeName="opacity"
                        dur="1s"
                        values="0;1;0"
                        repeatCount="indefinite"
                        begin="0.1"
                      />
                      <animate
                        attributeName="r"
                        dur="1s"
                        values="0;5;10"
                        repeatCount="indefinite"
                        begin="0.1"
                      />
                    </circle>
                  )
                  : (
                    <use
                      href="#deno-logo"
                      transform="translate(-5, -12.5)"
                      width={20}
                      height={20}
                      x={dc.coordinates[0]}
                      y={dc.coordinates[1]}
                    />
                  )}
                <circle
                  cx={dc.coordinates[0]}
                  cy={dc.coordinates[1]}
                  r="5"
                  fill="rgba(0,0,0,0)"
                >
                </circle>
                <rect
                  x={dc.coordinates[0] - 60}
                  y={dc.coordinates[1] - 20}
                  width="120"
                  height="20"
                  fill="rgba(255,255,255,0.5)"
                  rx={5}
                  ry={5}
                  class="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                >
                </rect>
                <text
                  font-size={10}
                  x={dc.coordinates[0]}
                  y={dc.coordinates[1] - 10}
                  fill="black"
                  text-anchor="middle"
                  alignment-baseline="middle"
                  class="opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
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
