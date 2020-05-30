export default  {
    knobX: 71,
    knobY: 71,
    svg:`
    <svg width="208px" height="208px" viewBox="0 0 208 208" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 61.2 (89653) - https://sketch.com -->
        <title>image copy 13</title>
        <desc>Created with Sketch.</desc>
        <defs>
            <linearGradient x1="50%" y1="50%" x2="50%" y2="100%" id="linearGradient-1">
                <stop stop-color="#444040" stop-opacity="0.51098279" offset="0%"></stop>
                <stop stop-color="#131111" stop-opacity="0.893200861" offset="100%"></stop>
            </linearGradient>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-2">
                <stop stop-color="#FFFFFF" stop-opacity="0.5" offset="0%"></stop>
                <stop stop-color="#000000" stop-opacity="0.5" offset="100%"></stop>
            </linearGradient>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="image-copy-13">
                <g id="SVG" transform="translate(4.000000, 4.000000)">
                    <g id="Oval-2" fill="#FFFFFF" opacity="0">
                        <g id="66154cdd-78cb-4a52-5eca-286f54bab3d0-link" fill-rule="nonzero">
                            <circle id="66154cdd-78cb-4a52-5eca-286f54bab3d0" cx="100" cy="100" r="100"></circle>
                        </g>
                        <g id="66154cdd-78cb-4a52-5eca-286f54bab3d0-link">
                            <circle id="66154cdd-78cb-4a52-5eca-286f54bab3d0" cx="100" cy="100" r="100"></circle>
                        </g>
                    </g>
                    <g id="Oval-2" transform="translate(14.000000, 14.000000)" fill="#000000">
                        <g id="a6738d07-2d04-9cdc-b9c8-92fdc3bad5ce-link" fill-rule="nonzero">
                            <circle id="a6738d07-2d04-9cdc-b9c8-92fdc3bad5ce" cx="86" cy="86" r="86"></circle>
                        </g>
                        <g id="a6738d07-2d04-9cdc-b9c8-92fdc3bad5ce-link">
                            <circle id="a6738d07-2d04-9cdc-b9c8-92fdc3bad5ce" cx="86" cy="86" r="86"></circle>
                        </g>
                        <g id="a6738d07-2d04-9cdc-b9c8-92fdc3bad5ce-link">
                            <circle id="a6738d07-2d04-9cdc-b9c8-92fdc3bad5ce" cx="86" cy="86" r="86"></circle>
                        </g>
                    </g>
                    <g id="knob" transform="translate(29.000000, 29.431373)">
                        <circle id="Oval-5" fill="#FFFFFF" fill-rule="nonzero" cx="71" cy="71" r="71"></circle>
                        <line x1="71.5" y1="1" x2="71.5" y2="29" id="Line" stroke="#000000" stroke-width="6" stroke-linecap="square"></line>
                    </g>
                    <g id="label" transform="translate(38.000000, 69.000000)" fill="#000000" font-family="Helvetica" font-size="48" font-weight="normal" opacity="0.3">
                        <g id="labeltext">
                            <text id="10.10">
                                <tspan x="0" y="47.588235">10.10</tspan>
                            </text>
                            <text id="10.10">
                                <tspan x="0" y="47.588235">10.10</tspan>
                            </text>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
`,
updateAttributes: [
    {
      element: "#labeltext text tspan",
      content: (props, value) => {
        return value.toFixed(0);
      },
      attrs: [
        {
          name: "text-anchor",
          value: (props, value) => {
            return "middle";
          }
        },
        {
          name: "x",
          value: (props, value) => {
            return "100";
          }
        }
      ]
    }
  ]
}
