var initialValue = {
  b1: false,
  b2: false,
  b3: false,
  b4: false,
  b5: false,
  b6: false,
  b7: false,
  b8: false,
  t1: false,
  t2: false,
  t3: false,
  t4: false,
  t5: false,
  t6: false,
  t7: false,
  t8: false,
  a1: false,
  a2: false,
  a3: false,
  a4: false,
  a5: false,
  a6: false,
  a7: false,
  a8: false,
};

var RoseGenerator = createClass({
  state: {
    dragging: false,
  },

  /**
   * @props
   * value: Current field value
   * field: Immutable map of current field configuration
   * forID: Unique identifier for the field
   * classNameWrapper: class name to apply CMS styling to the field
   * onChange: Callback function to update the field value
   */

  flip: function (polygon) {
    const blue = "#0095bc";

    if (polygon.getAttribute("fill")) {
      polygon.removeAttribute("fill");
    } else {
      polygon.setAttribute("fill", blue);
    }
  },

  handleClick: function (e) {
    this.flip(e.target);
    this.props.onChange(update);
  },

  handleMouseEnter: function (e) {
    if (this.state.dragging === true) this.flip(e.target);
  },

  // const key = e.target.dataset.id;
  // const value = e.target.hasAttribute("fill");
  // const update = !!this.props.value
  //   ? {
  //       ...this.props.value,
  //       [key]: value,
  //     }
  //   : {
  //       ...initialValue,
  //       [key]: value,
  //     };

  // console.log(update);

  render: function () {
    return h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        xmlnsXlink: "http://www.w3.org/1999/xlink",
        viewBox: "25 15 250 165",
        xmlSpace: "preserve",
        onMouseDown: () => this.setState({ ...this.state, dragging: true }),
        onMouseUp: () => this.setState({ ...this.state, dragging: false }),
      },
      h(
        "defs",
        {},
        h(
          "filter",
          { id: "shadow" },
          h("feDropShadow", {
            dx: 2,
            dy: 2,
            stdDeviation: 3,
            floodColor: "#000",
            floodOpacity: 0.75,
          })
        )
      ),
      h(
        "g",
        {
          style: {
            fill: "rgb(255, 255, 255)",
            pointerEvents: "fill",
          },
        },
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "b1",
          points:
            "78.48,51.709 58.01,55.381 54.33,75.846 69.562,83.466 69.655,83.315 72.167,69.347 86.05,66.857 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "b2",
          points:
            "59.55,99.793 69.562,83.466 54.33,75.846 39.523,99.988 54.32,124.132 69.682,116.455 69.649,116.272 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "b3",
          points:
            "69.682,116.455 54.32,124.132 57.992,144.602 77.726,148.149 85.602,132.662 72.155,130.244 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "b4",
          points:
            "86.124,132.756 85.602,132.662 77.726,148.149 78.457,148.281 102.599,163.089 126.743,148.291 119.007,132.809 102.602,142.863 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "b5",
          points:
            "135.532,116.47 133.053,130.257 119.081,132.763 119.007,132.809 126.743,148.291 147.213,144.619 150.893,124.154 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "b6",
          points:
            "165.7,100.013 150.902,75.869 135.664,83.483 145.672,99.811 135.564,116.288 135.532,116.47 150.893,124.154 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "b7",
          points:
            "147.23,55.398 126.766,51.719 119.078,66.836 119.097,66.847 133.065,69.359 135.571,83.331 135.664,83.483 150.902,75.869 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "b8",
          points:
            "102.619,56.741 119.078,66.836 126.766,51.719 102.624,36.912 78.48,51.709 86.05,66.857 86.14,66.841 ",
        })
      ),
      h(
        "g",
        {
          style: {
            fill: "rgb(255, 255, 255)",
            pointerEvents: "fill",
          },
        },
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "t1",
          points:
            "85.112,82.386 93.095,80.955 86.05,66.857 72.167,69.347 69.655,83.315 69.562,83.466 83.605,90.492 83.677,90.375 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "t2",
          points:
            "77.897,99.798 83.605,90.492 69.562,83.466 59.55,99.793 69.649,116.272 69.682,116.455 83.712,109.444 83.673,109.223 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "t3",
          fill: "#fff",
          points:
            "83.712,109.444 69.682,116.455 72.155,130.244 85.602,132.662 92.759,118.588 85.106,117.213 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "t4",
          fill: "#fff",
          points:
            "93.095,118.648 92.759,118.588 85.602,132.662 86.124,132.756 102.602,142.863 119.007,132.809 111.935,118.656 102.518,124.428 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "t5",
          fill: "#fff",
          points:
            "121.343,109.371 119.932,117.219 111.941,118.652 111.935,118.656 119.007,132.809 119.081,132.763 133.053,130.257 135.532,116.47 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "t6",
          fill: "#fff",
          points:
            "135.664,83.483 121.485,90.568 127.148,99.808 121.368,109.23 121.343,109.371 135.532,116.47 135.564,116.288 145.672,99.811 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "t7",
          points:
            "119.938,82.393 121.372,90.383 121.485,90.568 135.664,83.483 135.571,83.331 133.065,69.359 119.097,66.847 119.078,66.836 111.91,80.932 111.95,80.957 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "t8",
          points:
            "102.527,75.177 111.91,80.932 119.078,66.836 102.619,56.741 86.14,66.841 86.05,66.857 93.095,80.955 93.103,80.953 ",
        })
      ),
      h(
        "g",
        {
          style: {
            fill: "rgb(255, 255, 255)",
            pointerEvents: "fill",
          },
        },
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "a1",
          points:
            "102.414,99.604 93.095,80.955 85.112,82.386 83.677,90.375 83.605,90.492 102.293,99.841 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "a2",
          fill: "#fff",
          points:
            "102.293,99.841 83.605,90.492 77.897,99.798 83.673,109.223 83.712,109.444 102.076,100.268 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "a3",
          fill: "#fff",
          points:
            "83.712,109.444 85.106,117.213 92.759,118.588 102.076,100.268 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "a4",
          fill: "#fff",
          points:
            "102.611,100 102.076,100.268 92.759,118.588 93.095,118.648 102.518,124.428 111.935,118.656 102.612,100.001 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "a5",
          fill: "#fff",
          points:
            "119.932,117.219 121.343,109.371 102.612,100.001 111.935,118.656 111.941,118.652 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "a6",
          fill: "#fff",
          points:
            "127.148,99.808 121.485,90.568 102.612,100 102.612,100.001 121.343,109.371 121.368,109.23 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "a7",
          fill: "#fff",
          points:
            "102.612,100 121.485,90.568 121.372,90.383 119.938,82.393 111.95,80.957 111.91,80.932 102.414,99.604 ",
        }),
        h("polygon", {
          onMouseDown: this.handleChange,
          onMouseEnter: this.handleMouseEnter,
          stroke: "#3a3a3a",
          "data-id": "a8",
          points:
            "111.91,80.932 102.527,75.177 93.103,80.953 93.095,80.955 102.414,99.604 ",
        })
      ),
      h(
        "g",
        null,
        h(
          "text",
          {
            transform: "matrix(1 0 0 1 97.75 29.7798)",
            fontSize: 12,
            fontWeight: "bold",
          },
          "N"
        ),
        h(
          "text",
          { transform: "matrix(1 0 0 1 99.5801 174.9004)", fontSize: 10 },
          "S"
        ),
        h(
          "text",
          { transform: "matrix(1 0 0 1 170.5957 104.582)", fontSize: 10 },
          "E"
        ),
        h(
          "text",
          { transform: "matrix(1 0 0 1 150.4736 51.3208)", fontSize: 7 },
          "NE"
        ),
        h(
          "text",
          { transform: "matrix(1 0 0 1 151.1943 152.7061)", fontSize: 7 },
          "SE"
        ),
        h(
          "text",
          { transform: "matrix(1 0 0 1 44.459 51.3208)", fontSize: 7 },
          "NW"
        ),
        h(
          "text",
          { transform: "matrix(1 0 0 1 45.1797 152.7061)", fontSize: 7 },
          "SW"
        ),
        h(
          "text",
          { transform: "matrix(1 0 0 1 25.6279 104.582)", fontSize: 10 },
          "W"
        ),
        h(
          "text",
          {
            transform: "matrix(1 0 0 1 202.1719 115.8027)",
            fill: "#808285",
            fontSize: 7,
          },
          "Alpine"
        ),
        h(
          "text",
          {
            transform: "matrix(1 0 0 1 202.1719 127.8828)",
            fill: "#808285",
            fontSize: 7,
          },
          "Tree Line"
        ),
        h(
          "text",
          {
            transform: "matrix(1 0 0 1 202.1719 139.4551)",
            fill: "#808285",
            fontSize: 7,
          },
          "Below Tree Line"
        ),
        h("line", {
          fill: "none",
          stroke: "#3d3d3d",
          strokeWidth: 0.25,
          x1: 198.5,
          y1: 114.132,
          x2: 113.881,
          y2: 114.132,
        }),
        h("line", {
          fill: "none",
          stroke: "#3d3d3d",
          strokeWidth: 0.25,
          x1: 198.5,
          y1: 126.5,
          x2: 125.211,
          y2: 126.5,
        }),
        h("line", {
          fill: "none",
          stroke: "#3d3d3d",
          strokeWidth: 0.25,
          x1: 198.5,
          y1: 137.062,
          x2: 135.62,
          y2: 137.062,
        })
      ),
      h("polygon", {
        fill: "none",
        stroke: "#3a3a3a",
        strokeWidth: 2,
        strokeMiterlimit: 10,
        points:
          "147.224,144.223 126.754,147.895 102.609,162.692 78.468,147.885 58.003,144.205 54.331,123.735 39.534,99.591 54.341,75.449 58.021,54.984 78.491,51.312 102.635,36.515 126.776,51.322 147.241,55.002 150.913,75.472 165.711,99.616 150.903,123.758 ",
      })
    );
  },
});

var RosePreview = createClass({
  render: function () {
    return h("pre", {}, JSON.stringify(this.props.value, null, 2));
  },
});

CMS.registerWidget("dang", RoseGenerator, RosePreview);
