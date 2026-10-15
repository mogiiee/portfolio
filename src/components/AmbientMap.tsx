export function AmbientMap() {
  return (
    <div className="ambient-map" aria-hidden="true">
      <div className="map-grid" />
      <svg className="map-lines" viewBox="0 0 1600 1000" preserveAspectRatio="xMidYMid slice">
        <g className="contours">
          <path d="M-80 255C190 55 345 410 610 209S1025 62 1218 224s314 78 460-71" />
          <path d="M-95 315C196 103 370 463 634 269s404-138 603 19 311 69 446-57" />
          <path d="M-108 377C210 154 399 512 663 332s389-124 594 26 297 55 423-39" />
          <path d="M-94 688c240-176 451-69 631 91s394 153 555-12 319-215 572-58" />
          <path d="M-120 753c260-184 472-74 651 88s402 161 574-7 326-225 580-61" />
        </g>
        <g className="routes">
          <path d="M60 730L320 510l232 82 214-310 278 172 196-232 298 120" />
          <path d="M-20 490l268-96 203 99 240-172 248 278 305-100 385 177" />
        </g>
        <g className="map-nodes">
          {[
            [60, 730], [320, 510], [552, 592], [766, 282], [1044, 454],
            [1240, 222], [1538, 342], [248, 394], [691, 321], [1244, 499],
          ].map(([cx, cy], index) => <circle key={index} cx={cx} cy={cy} r={index % 3 === 0 ? 8 : 5} />)}
        </g>
      </svg>
      <div className="map-coordinate coordinate-a">40.4237° N / 86.9212° W</div>
      <div className="map-coordinate coordinate-b">EDGE NODE 07 · ACTIVE</div>
      <div className="map-scan" />
    </div>
  );
}
