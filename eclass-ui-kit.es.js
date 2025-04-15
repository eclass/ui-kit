import { extendTheme, Box, CircularProgress, Icon, Button, Tooltip, Flex, Stack, Center, Image, Text, HStack, Heading, List, ListItem, Link, Modal, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, ModalOverlay, useDisclosure, LinkBox, LinkOverlay, useMediaQuery, MenuButton, MenuGroup, Menu, MenuList } from "@chakra-ui/react";
import * as React from "react";
import React__default, { useEffect, useCallback, useState } from "react";
const main = {
  deepSkyBlue: "#0189FF",
  azureRadiance: "#017BE5",
  blueGrey: "#60798E",
  veryLightBlue: "#E0EEFA",
  linkWater: "#C7DEF2",
  ziggurat: "#B0CFE0"
};
const colors = {
  main,
  secondary: {
    pumpkin: "#FF7A14",
    polishedBronze: "#CD7F32",
    cornsilk: "#FFF5DF",
    linen: "#F8ECE0"
  },
  alert: {
    deepSkyBlue: main.deepSkyBlue,
    veryLightBlue: main.veryLightBlue,
    jadeGreen: "#28A745",
    ice: "#E9F6EC",
    red: "#CC0000",
    veryLightPinkThree: "#F9DFDF",
    orangeyYelow: "#F5A623",
    pale: "#FDEED6"
  },
  icon: {
    cetaceanBlue: "#08044F",
    deepSkyBlue: main.deepSkyBlue,
    lightSeaGreen: "#1EBDAF",
    orangeRed: "#FF554D",
    ripeMango: "#FFBC27"
  },
  neutral: {
    darkCharcoal: "#2F2F2F",
    davysGrey: "#5C5C5C",
    gray: "#808080",
    spanishGrey: "#999999",
    silverSand: "#C6C6C6",
    platinum: "#E8E8E8",
    cultured: "#F4F4F4",
    cultured2: "#F8F8F8",
    white: "#FFFFFF"
  }
};
const styles = {
  global: (props) => ({
    ".react-ripples": {
      h: "100%",
      display: "grid!important"
    },
    ".chakra-button": {
      borderStyle: "none"
    },
    ".chakra-modal__content-container": {
      padding: "1.87rem",
      zIndex: "1400",
      justifyContent: "center",
      alignItems: "center",
      overflow: "auto"
    },
    ".chakra-modal__content": {
      borderRadius: "0.5rem",
      background: "white",
      color: "inherit",
      zIndex: "1400",
      maxWidth: "36.813rem",
      boxShadow: "0px 4px 16px rgba(92, 92, 92, 0.2)"
    },
    ".chakra-modal__header": {
      paddingInlineStart: "1.5rem",
      paddingInlineEnd: "1.5rem",
      fontSize: "1.25rem",
      fontWeight: "700",
      textAlign: "center",
      ".chakra-icon": {
        width: "13rem"
      }
    },
    ".chakra-modal__close-btn": {
      width: "2rem",
      height: "2rem",
      borderRadius: "0.5rem",
      fontSize: "0.75rem",
      position: "absolute",
      top: "0.5rem",
      right: "0.75rem",
      color: "#60798E",
      backgroundColor: "transparent",
      borderStyle: "none"
    }
  })
};
const base = "solid .063rem";
const borders = {
  normal: `${base} ${colors.neutral.darkCharcoal}`,
  light: `${base} ${colors.neutral.platinum}`,
  active: `${base} ${colors.main.deepSkyBlue}`,
  success: `${base} ${colors.alert.jadeGreen}`,
  error: `${base} ${colors.alert.red}`,
  white: `solid .125rem ${colors.neutral.white}`
};
const radii = {
  small: ".25rem",
  big: ".5rem",
  rounded: "50%"
};
const shadows = {
  sm: "0 .125rem .5rem 0 rgba(0,0,0,.20)",
  md: "0 .25rem 1rem 0 rgba(0,0,0,.20)",
  lg: "0 .5rem 2rem 0 rgba(0,0,0,.20)"
};
const space = {
  xxs: ".25rem",
  xs: ".5rem",
  s: "1rem",
  m: "1.5rem",
  l: "2rem",
  xl: "3rem",
  xxl: "5rem"
};
const utils = {
  borders,
  radii,
  shadows,
  space
};
var _700 = "";
var _500 = "";
var _400$1 = "";
var _300 = "";
var _400 = "";
const typography = {
  fonts: {
    body: "Roboto",
    outstanding: "Lora"
  }
};
const theme = extendTheme({
  colors,
  ...utils,
  ...typography,
  styles
});
const vars = (value) => `var(--chakra-${value})`;
var jsxRuntime = { exports: {} };
var reactJsxRuntime_production_min = {};
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
  if (val === null || val === void 0) {
    throw new TypeError("Object.assign cannot be called with null or undefined");
  }
  return Object(val);
}
function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    }
    var test1 = new String("abc");
    test1[5] = "de";
    if (Object.getOwnPropertyNames(test1)[0] === "5") {
      return false;
    }
    var test2 = {};
    for (var i2 = 0; i2 < 10; i2++) {
      test2["_" + String.fromCharCode(i2)] = i2;
    }
    var order2 = Object.getOwnPropertyNames(test2).map(function(n2) {
      return test2[n2];
    });
    if (order2.join("") !== "0123456789") {
      return false;
    }
    var test3 = {};
    "abcdefghijklmnopqrst".split("").forEach(function(letter) {
      test3[letter] = letter;
    });
    if (Object.keys(Object.assign({}, test3)).join("") !== "abcdefghijklmnopqrst") {
      return false;
    }
    return true;
  } catch (err) {
    return false;
  }
}
shouldUseNative() ? Object.assign : function(target, source) {
  var from;
  var to = toObject(target);
  var symbols;
  for (var s2 = 1; s2 < arguments.length; s2++) {
    from = Object(arguments[s2]);
    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);
      for (var i2 = 0; i2 < symbols.length; i2++) {
        if (propIsEnumerable.call(from, symbols[i2])) {
          to[symbols[i2]] = from[symbols[i2]];
        }
      }
    }
  }
  return to;
};
/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1 = React__default, g$1 = 60103;
reactJsxRuntime_production_min.Fragment = 60107;
if ("function" === typeof Symbol && Symbol.for) {
  var h$2 = Symbol.for;
  g$1 = h$2("react.element");
  reactJsxRuntime_production_min.Fragment = h$2("react.fragment");
}
var m$1 = f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n$2 = Object.prototype.hasOwnProperty, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c2, a2, k) {
  var b2, d2 = {}, e2 = null, l2 = null;
  void 0 !== k && (e2 = "" + k);
  void 0 !== a2.key && (e2 = "" + a2.key);
  void 0 !== a2.ref && (l2 = a2.ref);
  for (b2 in a2)
    n$2.call(a2, b2) && !p$1.hasOwnProperty(b2) && (d2[b2] = a2[b2]);
  if (c2 && c2.defaultProps)
    for (b2 in a2 = c2.defaultProps, a2)
      void 0 === d2[b2] && (d2[b2] = a2[b2]);
  return { $$typeof: g$1, type: c2, key: e2, ref: l2, props: d2, _owner: m$1.current };
}
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}
const jsx = jsxRuntime.exports.jsx;
const jsxs = jsxRuntime.exports.jsxs;
const Fragment = jsxRuntime.exports.Fragment;
function Label({
  children,
  bg = vars("colors-icon-ripeMango"),
  color = vars("colors-neutral-darkCharcoal"),
  size = "md",
  m: m2 = "0"
}) {
  const config = {
    md: {
      borderRadius: "0.25em",
      fontWeight: "400",
      p: "0.25em 0.84em"
    },
    sm: {
      borderRadius: "0.42em",
      fontWeight: "700",
      p: "0.17em 0.67em"
    }
  };
  return /* @__PURE__ */ jsx(Box, {
    bg,
    borderRadius: config[size].borderRadius,
    color,
    display: "inline-block",
    fontSize: "0.75rem",
    fontWeight: config[size].fontWeight,
    lineHeight: ".875rem",
    m: m2,
    p: config[size].p,
    children
  });
}
function Progress({
  value = 0
}) {
  let limitedValue = value;
  if (value > 100) {
    limitedValue = 100;
  } else if (value < 0) {
    limitedValue = 0;
  }
  return /* @__PURE__ */ jsx(CircularProgress, {
    size: "1rem",
    value: limitedValue,
    thickness: "1rem",
    color: vars("colors-main-deepSkyBlue"),
    trackColor: vars("colors-neutral-platinum")
  });
}
var propTypes = { exports: {} };
var ReactPropTypesSecret$1 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;
var ReactPropTypesSecret = ReactPropTypesSecret_1;
function emptyFunction() {
}
function emptyFunctionWithReset() {
}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      return;
    }
    var err = new Error(
      "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
    );
    err.name = "Invariant Violation";
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};
{
  propTypes.exports = factoryWithThrowingShims();
}
var PropTypes = propTypes.exports;
var __extends = globalThis && globalThis.__extends || function() {
  var extendStatics = function(d2, b2) {
    extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d3, b3) {
      d3.__proto__ = b3;
    } || function(d3, b3) {
      for (var p2 in b3)
        if (b3.hasOwnProperty(p2))
          d3[p2] = b3[p2];
    };
    return extendStatics(d2, b2);
  };
  return function(d2, b2) {
    extendStatics(d2, b2);
    function __() {
      this.constructor = d2;
    }
    d2.prototype = b2 === null ? Object.create(b2) : (__.prototype = b2.prototype, new __());
  };
}();
var __assign$1 = globalThis && globalThis.__assign || function() {
  __assign$1 = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign$1.apply(this, arguments);
};
var __rest = globalThis && globalThis.__rest || function(s2, e2) {
  var t2 = {};
  for (var p2 in s2)
    if (Object.prototype.hasOwnProperty.call(s2, p2) && e2.indexOf(p2) < 0)
      t2[p2] = s2[p2];
  if (s2 != null && typeof Object.getOwnPropertySymbols === "function")
    for (var i2 = 0, p2 = Object.getOwnPropertySymbols(s2); i2 < p2.length; i2++) {
      if (e2.indexOf(p2[i2]) < 0 && Object.prototype.propertyIsEnumerable.call(s2, p2[i2]))
        t2[p2[i2]] = s2[p2[i2]];
    }
  return t2;
};
var boxStyle = {
  position: "relative",
  display: "inline-flex",
  overflow: "hidden"
};
var createRipples = function(defaultProps) {
  if (defaultProps === void 0) {
    defaultProps = {};
  }
  var _a;
  return _a = function(_super) {
    __extends(class_1, _super);
    function class_1(props) {
      var _this = _super.call(this, props) || this;
      _this.timer = 0;
      _this.onClick = function(ev) {
        var _a2 = _this.props, during = _a2.during, onClick = _a2.onClick, color = _a2.color;
        ev.stopPropagation();
        var pageX = ev.pageX, pageY = ev.pageY, currentTarget = ev.currentTarget;
        var rect = currentTarget.getBoundingClientRect();
        var left = pageX - (rect.left + window.scrollX);
        var top = pageY - (rect.top + window.scrollY);
        var size = Math.max(rect.width, rect.height);
        _this.setState(function(state) {
          return {
            rippleStyle: __assign$1({}, state.rippleStyle, {
              left,
              top,
              opacity: 1,
              transform: "translate(-50%, -50%)",
              transition: "initial",
              backgroundColor: color
            })
          };
        }, function() {
          _this.timer = setTimeout(function() {
            _this.setState(function(state) {
              return {
                rippleStyle: __assign$1({}, state.rippleStyle, { opacity: 0, transform: "scale(" + size / 9 + ")", transition: "all " + during + "ms" })
              };
            });
          }, 50);
        });
        if (onClick)
          onClick(ev);
      };
      _this.state = {
        rippleStyle: {
          position: "absolute",
          borderRadius: "50%",
          opacity: 0,
          width: 35,
          height: 35,
          transform: "translate(-50%, -50%)",
          pointerEvents: "none"
        }
      };
      return _this;
    }
    class_1.prototype.componentWillUnmount = function() {
      clearTimeout(this.timer);
    };
    class_1.prototype.render = function() {
      var _a2 = this.props, children = _a2.children;
      _a2.during;
      _a2.color;
      _a2.onClick;
      var className = _a2.className, props = __rest(_a2, ["children", "during", "color", "onClick", "className"]);
      var rippleStyle = this.state.rippleStyle;
      return React__default.createElement(
        "div",
        __assign$1({}, props, { className: ("react-ripples " + className).trim(), style: boxStyle, onClick: this.onClick }),
        children,
        React__default.createElement("s", { style: rippleStyle })
      );
    };
    return class_1;
  }(React__default.PureComponent), _a.displayName = "Ripples", _a.propTypes = {
    during: PropTypes.number,
    color: PropTypes.string,
    onClick: PropTypes.func,
    className: PropTypes.string
  }, _a.defaultProps = __assign$1({ during: 600, color: "rgba(0, 0, 0, .3)", className: "", onClick: function() {
  } }, defaultProps), _a;
};
var __assign = globalThis && globalThis.__assign || function() {
  __assign = Object.assign || function(t2) {
    for (var s2, i2 = 1, n2 = arguments.length; i2 < n2; i2++) {
      s2 = arguments[i2];
      for (var p2 in s2)
        if (Object.prototype.hasOwnProperty.call(s2, p2))
          t2[p2] = s2[p2];
    }
    return t2;
  };
  return __assign.apply(this, arguments);
};
var withAttrs = function(Component) {
  return function(props) {
    return React__default.createElement(Component, __assign({}, props));
  };
};
var Ripples$1 = withAttrs(createRipples());
function Ripples({
  children,
  color = "rgba(204,204,204,0.2)"
}) {
  return /* @__PURE__ */ jsx(Ripples$1, {
    during: 1e3,
    color,
    children: /* @__PURE__ */ jsx(Box, {
      children
    })
  });
}
function Base({
  w: w2 = "1rem",
  h: h2 = "1rem",
  color = vars("colors-main-ziggurat"),
  m: m2 = "0",
  viewBox = "0 0 16 16",
  children,
  title
}) {
  return /* @__PURE__ */ jsxs(Icon, {
    w: w2,
    h: h2,
    viewBox,
    color,
    m: m2,
    "aria-label": " ",
    "aria-hidden": true,
    children: [/* @__PURE__ */ jsxs("title", {
      children: ["icon", title && `-${title}`]
    }), children]
  });
}
function AcademicRecord(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "16px",
    h: "16px",
    viewBox: "0 0 16 16",
    title: "academicRecord",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M14 0H2C1.73478 0 1.48043 0.105357 1.29289 0.292893C1.10536 0.48043 1 0.734784 1 1V7C1 7.26522 1.10536 7.51957 1.29289 7.70711C1.48043 7.89464 1.73478 8 2 8H14C14.2652 8 14.5196 7.89464 14.7071 7.70711C14.8946 7.51957 15 7.26522 15 7V1C15 0.734784 14.8946 0.48043 14.7071 0.292893C14.5196 0.105357 14.2652 0 14 0V0Z",
      fill: "currentColor"
    }), /* @__PURE__ */ jsx("path", {
      d: "M15 10H1V12H15V10Z",
      fill: "currentColor"
    }), /* @__PURE__ */ jsx("path", {
      d: "M15 14H1V16H15V14Z",
      fill: "currentColor"
    })]
  });
}
AcademicRecord.displayName = "AcademicRecord";
function AlertInfo(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    children: /* @__PURE__ */ jsxs("svg", {
      width: "53",
      height: "45",
      viewBox: "0 0 53 45",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M22.142 44.1483C34.0945 44.1483 43.784 34.4588 43.784 22.5063C43.784 10.5537 34.0945 0.864258 22.142 0.864258C10.1895 0.864258 0.5 10.5537 0.5 22.5063C0.5 34.4588 10.1895 44.1483 22.142 44.1483Z",
        fill: "#FDEED6"
      }), /* @__PURE__ */ jsx("path", {
        d: "M19 24.1013C19.8284 24.1013 20.5 23.4297 20.5 22.6013C20.5 21.7729 19.8284 21.1013 19 21.1013C18.1716 21.1013 17.5 21.7729 17.5 22.6013C17.5 23.4297 18.1716 24.1013 19 24.1013Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M24 24.1013C24.8284 24.1013 25.5 23.4297 25.5 22.6013C25.5 21.7729 24.8284 21.1013 24 21.1013C23.1716 21.1013 22.5 21.7729 22.5 22.6013C22.5 23.4297 23.1716 24.1013 24 24.1013Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M29 24.1013C29.8284 24.1013 30.5 23.4297 30.5 22.6013C30.5 21.7729 29.8284 21.1013 29 21.1013C28.1716 21.1013 27.5 21.7729 27.5 22.6013C27.5 23.4297 28.1716 24.1013 29 24.1013Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M44.178 13.8843C41.157 8.63532 35.491 5.10132 29 5.10132C19.335 5.10132 11.5 12.9363 11.5 22.6013C11.5 32.2663 19.335 40.1013 29 40.1013C35.108 40.1013 40.484 36.9723 43.615 32.2303",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M49.282 13.9192C50.6627 13.9192 51.782 15.0385 51.782 16.4192V20.9862C51.782 22.3669 50.6627 23.4862 49.282 23.4862C47.9013 23.4862 46.782 22.3669 46.782 20.9862V16.4192C46.782 15.0385 47.9013 13.9192 49.282 13.9192ZM47.5143 25.6514C48.4906 24.6751 50.0735 24.6751 51.0498 25.6515L51.0958 25.6975C52.0721 26.6738 52.072 28.2567 51.0957 29.233C50.1194 30.2093 48.5365 30.2093 47.5602 29.2329L47.5142 29.1869C46.5379 28.2106 46.5379 26.6277 47.5143 25.6514Z",
        fill: "#FFBC27"
      })]
    })
  });
}
AlertInfo.displayName = "ArrowRight";
function uniqueId() {
  return Math.random().toString(36).slice(2, 9);
}
function ArrowRight(props) {
  const id = `clip-${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: `url(#${id})`,
      children: [/* @__PURE__ */ jsx("mask", {
        id: `mask-${id}`,
        style: {
          maskType: "alpha"
        },
        width: "16",
        height: "16",
        x: "0",
        y: "0",
        maskUnits: "userSpaceOnUse",
        children: /* @__PURE__ */ jsx("path", {
          fill: "#fff",
          d: "M16 16H32V32H16z",
          transform: "rotate(180 16 16)"
        })
      }), /* @__PURE__ */ jsx("g", {
        mask: `url(#mask-${id})`,
        children: /* @__PURE__ */ jsx("path", {
          fill: "currentColor",
          d: "M6.074 14L12 8 6.074 2 4 4.1 7.852 8 4 11.9 6.074 14z"
        })
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("path", {
          fill: "#fff",
          d: "M0 0H16V16H0z"
        })
      })
    })]
  });
}
ArrowRight.displayName = "ArrowRight";
function Certificate(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    children: [/* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      d: "M7 4H9V6H7z"
    }), /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M13 8h2a1 1 0 011 1v6a1 1 0 01-1 1H9v-4H7v4H1a1 1 0 01-1-1V9a1 1 0 011-1h2V4.618l-.553.277a1 1 0 01-.894-1.79l6-3a1 1 0 01.894 0l6 3a1 1 0 11-.894 1.79L13 4.618V8zM3 13h2v-3H3v3zm2-5V4a.98.98 0 00-.07-.347L8 2.118l3.07 1.535A.98.98 0 0011 4v4H5zm6 5h2v-3h-2v3z",
      clipRule: "evenodd"
    })]
  });
}
Certificate.displayName = "Certificate";
function CircularCheck(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M0 8c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm3.6 0L7 11.4 12.4 6 11 4.6l-4 4-2-2L3.6 8z",
      clipRule: "evenodd"
    })
  });
}
CircularCheck.displayName = "CircularCheck";
function CircularInformation(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    children: /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zM7 12V7h2v5H7zm0-7c0 .6.4 1 1 1s1-.4 1-1-.4-1-1-1-1 .4-1 1z",
      clipRule: "evenodd"
    })
  });
}
CircularInformation.displayName = "CircularInformation";
function Download(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "16px",
    h: "16px",
    viewBox: "0 0 16 16",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M7.99998 12C8.29998 12 8.49998 11.9 8.69998 11.7L14.4 6L13 4.6L8.99998 8.6V0H6.99998V8.6L2.99998 4.6L1.59998 6L7.29998 11.7C7.49998 11.9 7.69998 12 7.99998 12Z",
      fill: "currentColor"
    }), /* @__PURE__ */ jsx("path", {
      d: "M15 14H1V16H15V14Z",
      fill: "currentColor"
    })]
  });
}
Download.displayName = "Download";
function GoAhead(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "8px",
    h: "16px",
    viewBox: "0 0 8 16",
    title: "goAhead",
    children: /* @__PURE__ */ jsx("path", {
      d: "M2.07407 12L8 6L2.07407 5.18061e-07L-8.65485e-07 2.1L3.85185 6L-1.83588e-07 9.9L2.07407 12V12Z",
      fill: "currentColor"
    })
  });
}
GoAhead.displayName = "GoAhead";
function GoBack(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "8px",
    h: "16px",
    viewBox: "0 0 8 16",
    title: "goBack",
    children: /* @__PURE__ */ jsx("path", {
      d: "M5.92593 2L0 8L5.92593 14L8 11.9L4.14815 8L8 4.1L5.92593 2Z",
      fill: "currentColor"
    })
  });
}
GoBack.displayName = "GoBack";
function Multimedia(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "12px",
    viewBox: "0 0 14 14",
    title: "multimedia",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6Z",
      fill: "currentColor"
    }), /* @__PURE__ */ jsx("path", {
      d: "M11 6C12.6569 6 14 4.65685 14 3C14 1.34315 12.6569 0 11 0C9.34315 0 8 1.34315 8 3C8 4.65685 9.34315 6 11 6Z",
      fill: "currentColor"
    }), /* @__PURE__ */ jsx("path", {
      d: "M3 14C4.65685 14 6 12.6569 6 11C6 9.34315 4.65685 8 3 8C1.34315 8 0 9.34315 0 11C0 12.6569 1.34315 14 3 14Z",
      fill: "currentColor"
    }), /* @__PURE__ */ jsx("path", {
      d: "M11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z",
      fill: "currentColor"
    })]
  });
}
Multimedia.displayName = "Multimedia";
function Loader({
  fill = "#fff"
}) {
  return /* @__PURE__ */ jsx("div", {
    className: "loaderAsync",
    "data-testid": "loaderAsync",
    children: /* @__PURE__ */ jsxs("svg", {
      id: uniqueId(),
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 38 20",
      shapeRendering: "geometricPrecision",
      textRendering: "geometricPrecision",
      width: 38,
      height: 20,
      children: [/* @__PURE__ */ jsx("style", {
        dangerouslySetInnerHTML: {
          __html: "@keyframes eXySq0EBKm12_f_o{0%,33.333333%,to{fill-opacity:.4}66.666667%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm13_f_o{0%,66.666667%,to{fill-opacity:.4}33.333333%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}}@keyframes eXySq0EBKm14_f_o{0%{fill-opacity:1;animation-timing-function:cubic-bezier(.42,0,.58,1)}33.333333%,66.666667%{fill-opacity:.4}to{fill-opacity:1}}"
        }
      }), /* @__PURE__ */ jsx("circle", {
        r: 2.502,
        transform: "translate(29.526 10)",
        fill,
        fillOpacity: 0.4,
        style: {
          animation: "eXySq0EBKm12_f_o 600ms linear infinite normal forwards"
        }
      }), /* @__PURE__ */ jsx("circle", {
        r: 2.502,
        transform: "translate(19 10)",
        fill,
        fillOpacity: 0.4,
        style: {
          animation: "eXySq0EBKm13_f_o 600ms linear infinite normal forwards"
        }
      }), /* @__PURE__ */ jsx("circle", {
        r: 2.053,
        transform: "matrix(1.21764 0 0 1.21764 8.562 10.002)",
        fill,
        style: {
          animation: "eXySq0EBKm14_f_o 600ms linear infinite normal forwards"
        }
      })]
    })
  });
}
function Profile(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    viewBox: "0 0 12 12",
    w: "12px",
    title: "profile",
    children: /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      d: "M5 6a3 3 0 100-6 3 3 0 000 6zM5 7c-3.375 0-5 2.106-5 3.333V11a1 1 0 001 1h8a1 1 0 001-1v-.667C10 9.106 8.375 7 5 7z"
    })
  });
}
Profile.displayName = "Profile";
function Schedule(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    children: [/* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      d: "M13 2h2a1 1 0 011 1v12a1 1 0 01-1 1H1a1 1 0 01-1-1V3a1 1 0 011-1h2V0h2v2h2V0h2v2h2V0h2v2zM2 14h12V5H2v9z",
      clipRule: "evenodd"
    }), /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      d: "M4 7H6V9H4z"
    }), /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      d: "M7 7H9V9H7z"
    }), /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      d: "M4 10H6V12H4z"
    }), /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      d: "M7 10H9V12H7z"
    }), /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      d: "M10 7H12V9H10z"
    }), /* @__PURE__ */ jsx("path", {
      fill: "currentColor",
      d: "M10 10H12V12H10z"
    })]
  });
}
Schedule.displayName = "Schedule";
function TinyAlertInfo(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "12px",
    h: "12px",
    viewBox: "0 0 12 12",
    children: [/* @__PURE__ */ jsx("circle", {
      cx: "6",
      cy: "6",
      r: "6",
      fill: "#0189FF"
    }), /* @__PURE__ */ jsx("path", {
      d: "M7 6H5V10H7V6Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M6 4C6.55228 4 7 3.55228 7 3C7 2.44772 6.55228 2 6 2C5.44772 2 5 2.44772 5 3C5 3.55228 5.44772 4 6 4Z",
      fill: "white"
    })]
  });
}
TinyAlertInfo.displayName = "TinyAlertInfo";
function TinyAlertError(props) {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "12px",
    h: "12px",
    viewBox: "0 0 12 12",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: `url(#${id})`,
      children: [/* @__PURE__ */ jsx("circle", {
        cx: "6",
        cy: "6",
        r: "6",
        fill: "#CC0000"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.87867 2.46447L2.46446 3.87868L4.58578 6L2.46446 8.12132L3.87867 9.53553L5.99999 7.41421L8.12131 9.53553L9.53553 8.12132L7.41421 6L9.53553 3.87868L8.12131 2.46447L5.99999 4.58579L3.87867 2.46447Z",
        fill: "white"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "12px",
          height: "12px",
          fill: "white"
        })
      })
    })]
  });
}
TinyAlertError.displayName = "TinyAlertError";
function TinyAlertWarning(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "12px",
    h: "12px",
    viewBox: "0 0 12 12",
    children: [/* @__PURE__ */ jsx("circle", {
      cx: "6",
      cy: "6",
      r: "6",
      fill: "#F5A623"
    }), /* @__PURE__ */ jsx("path", {
      d: "M5 6L7 6L7 2L5 2L5 6Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M6 8C5.44771 8 5 8.44772 5 9C5 9.55228 5.44772 10 6 10C6.55228 10 7 9.55228 7 9C7 8.44772 6.55228 8 6 8Z",
      fill: "white"
    })]
  });
}
TinyAlertWarning.displayName = "TinyAlertWarning";
function TinyAlertSuccess(props) {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "12px",
    h: "12px",
    viewBox: "0 0 12 12",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: `url(#${id})`,
      children: [/* @__PURE__ */ jsx("circle", {
        cx: "6",
        cy: "6",
        r: "6",
        fill: "#28A745"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M3.41421 5.53549L2 6.94971L3.41421 8.36392L4.82843 9.77813L9.77817 4.82839L8.36396 3.41417L4.82843 6.94971L3.41421 5.53549Z",
        fill: "white"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "12",
          height: "12",
          fill: "white"
        })
      })
    })]
  });
}
TinyAlertSuccess.displayName = "TinyAlertSuccess";
function Password(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "14px",
    h: "16px",
    viewBox: "0 0 14 16",
    title: "password",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M7 0C4.95714 0 3.28571 1.67143 3.28571 3.71429V4.64286H1.42857C0.871429 4.64286 0.5 5.01429 0.5 5.57143V13.9286C0.5 14.4857 0.871429 14.8571 1.42857 14.8571H12.5714C13.1286 14.8571 13.5 14.4857 13.5 13.9286V5.57143C13.5 5.01429 13.1286 4.64286 12.5714 4.64286H10.7143V3.71429C10.7143 1.67143 9.04286 0 7 0ZM7.92857 10.8643V12.0714H6.07143V10.8643C5.51429 10.5857 5.14286 9.93571 5.14286 9.28571C5.14286 8.26429 5.97857 7.42857 7 7.42857C8.02143 7.42857 8.85714 8.26429 8.85714 9.28571C8.85714 9.93571 8.48571 10.5857 7.92857 10.8643ZM5.14286 3.71429V4.64286H8.85714V3.71429C8.85714 2.69286 8.02143 1.85714 7 1.85714C5.97857 1.85714 5.14286 2.69286 5.14286 3.71429Z",
      fill: "currentColor"
    })
  });
}
Password.displayName = "Password";
function Pen(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "16px",
    h: "16px",
    viewBox: "0 0 16 16",
    title: "pen",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M8.1 3.5L0.3 11.3C0.1 11.5 0 11.7 0 12V15C0 15.6 0.4 16 1 16H4C4.3 16 4.5 15.9 4.7 15.7L12.5 7.9L8.1 3.5Z",
      fill: "currentColor"
    }), /* @__PURE__ */ jsx("path", {
      d: "M15.7 3.3L12.7 0.3C12.3 -0.1 11.7 -0.1 11.3 0.3L9.5 2.1L13.9 6.5L15.7 4.7C16.1 4.3 16.1 3.7 15.7 3.3Z",
      fill: "currentColor"
    })]
  });
}
Pen.displayName = "Pen";
function PlusSign(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "16px",
    h: "16px",
    viewBox: "0 0 16 16",
    title: "plusSign",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 8C0 3.6 3.6 0 8 0C12.4 0 16 3.6 16 8C16 12.4 12.4 16 8 16C3.6 16 0 12.4 0 8ZM9 9H12V7H9V4H7V7H4V9H7V12H9V9Z",
      fill: "currentColor"
    })
  });
}
PlusSign.displayName = "PlusSign";
function TrashCan(props) {
  return /* @__PURE__ */ jsxs(Base, {
    ...props,
    w: "16px",
    h: "16px",
    viewBox: "0 0 16 16",
    title: "trashCan",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M2 6V14C2 15.1 2.9 16 4 16H12C13.1 16 14 15.1 14 14V6H2Z",
      fill: "currentColor"
    }), /* @__PURE__ */ jsx("path", {
      d: "M12 3V1C12 0.4 11.6 0 11 0H5C4.4 0 4 0.4 4 1V3H0V5H16V3H12ZM10 3H6V2H10V3Z",
      fill: "currentColor"
    })]
  });
}
TrashCan.displayName = "TrashCan";
function TextBubble(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "16px",
    h: "16px",
    viewBox: "0 0 16 16",
    title: "textBubble",
    children: /* @__PURE__ */ jsx("path", {
      d: "M1 0H15C15.552 0 16 0.448 16 1V11C16 11.552 15.552 12 15 12H10L4 16V12H1C0.448 12 0 11.552 0 11V1C0 0.448 0.448 0 1 0Z",
      fill: "currentColor"
    })
  });
}
TextBubble.displayName = "TextBubble";
function ErrorWhite(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "52",
    h: "45",
    viewBox: "0 0 52 45",
    children: /* @__PURE__ */ jsxs("svg", {
      fill: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M21.642 44.2419C33.5945 44.2419 43.284 34.5524 43.284 22.5999C43.284 10.6473 33.5945 0.957886 21.642 0.957886C9.68945 0.957886 0 10.6473 0 22.5999C0 34.5524 9.68945 44.2419 21.642 44.2419Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M18.5 24.1949C19.3284 24.1949 20 23.5233 20 22.6949C20 21.8665 19.3284 21.1949 18.5 21.1949C17.6716 21.1949 17 21.8665 17 22.6949C17 23.5233 17.6716 24.1949 18.5 24.1949Z",
        fill: "#CC0000"
      }), /* @__PURE__ */ jsx("path", {
        d: "M23.5 24.1949C24.3284 24.1949 25 23.5233 25 22.6949C25 21.8665 24.3284 21.1949 23.5 21.1949C22.6716 21.1949 22 21.8665 22 22.6949C22 23.5233 22.6716 24.1949 23.5 24.1949Z",
        fill: "#CC0000"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.5 24.1949C29.3284 24.1949 30 23.5233 30 22.6949C30 21.8665 29.3284 21.1949 28.5 21.1949C27.6716 21.1949 27 21.8665 27 22.6949C27 23.5233 27.6716 24.1949 28.5 24.1949Z",
        fill: "#CC0000"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.678 13.9779C40.657 8.72889 34.991 5.19489 28.5 5.19489C18.835 5.19489 11 13.0299 11 22.6949C11 32.3599 18.835 40.1949 28.5 40.1949C34.608 40.1949 39.984 37.0659 43.115 32.3239",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M35.5862 15.7811C36.5625 14.8048 38.1455 14.8048 39.1218 15.7811L43.2105 19.8699L47.2992 15.7811C48.2755 14.8048 49.8585 14.8048 50.8348 15.7811C51.8111 16.7574 51.8111 18.3403 50.8348 19.3167L46.746 23.4054L50.8348 27.4941C51.8111 28.4704 51.8111 30.0533 50.8348 31.0297C49.8585 32.006 48.2755 32.006 47.2992 31.0297L43.2105 26.9409L39.1218 31.0297C38.1455 32.006 36.5625 32.006 35.5862 31.0297C34.6099 30.0533 34.6099 28.4704 35.5862 27.4941L39.675 23.4054L35.5862 19.3167C34.6099 18.3403 34.6099 16.7574 35.5862 15.7811Z",
        fill: "#CC0000"
      })]
    })
  });
}
ErrorWhite.displayName = "ErrorWhite";
function InfoWhite(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "53",
    h: "45",
    viewBox: "0 0 53 45",
    title: "infoIcon",
    children: /* @__PURE__ */ jsxs("svg", {
      fill: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M21.642 44.047C33.5945 44.047 43.284 34.3575 43.284 22.405C43.284 10.4525 33.5945 0.763 21.642 0.763C9.68945 0.763 0 10.4525 0 22.405C0 34.3575 9.68945 44.047 21.642 44.047Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M18.5 24C19.3284 24 20 23.3284 20 22.5C20 21.6716 19.3284 21 18.5 21C17.6716 21 17 21.6716 17 22.5C17 23.3284 17.6716 24 18.5 24Z",
        fill: "#0189FF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M23.5 24C24.3284 24 25 23.3284 25 22.5C25 21.6716 24.3284 21 23.5 21C22.6716 21 22 21.6716 22 22.5C22 23.3284 22.6716 24 23.5 24Z",
        fill: "#0189FF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.5 24C29.3284 24 30 23.3284 30 22.5C30 21.6716 29.3284 21 28.5 21C27.6716 21 27 21.6716 27 22.5C27 23.3284 27.6716 24 28.5 24Z",
        fill: "#0189FF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.678 13.783C40.657 8.534 34.991 5 28.5 5C18.835 5 11 12.835 11 22.5C11 32.165 18.835 40 28.5 40C34.608 40 39.984 36.871 43.115 32.129",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47 21H50C50.2652 21 50.5196 21.1054 50.7071 21.2929C50.8946 21.4804 51 21.7348 51 22V29.045H51.237C51.4908 29.0531 51.7316 29.1597 51.9082 29.3421C52.0849 29.5245 52.1837 29.7685 52.1837 30.0225C52.1837 30.2765 52.0849 30.5205 51.9082 30.7029C51.7316 30.8853 51.4908 30.9919 51.237 31H46.977C46.7232 30.9919 46.4824 30.8853 46.3058 30.7029C46.1291 30.5205 46.0303 30.2765 46.0303 30.0225C46.0303 29.7685 46.1291 29.5245 46.3058 29.3421C46.4824 29.1597 46.7232 29.0531 46.977 29.045H47V23.123C46.7348 23.123 46.4804 23.0176 46.2929 22.8301C46.1054 22.6426 46 22.3882 46 22.123V22C46 21.7348 46.1054 21.4804 46.2929 21.2929C46.4804 21.1054 46.7348 21 47 21Z",
        fill: "#0189FF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M49 19C50.3807 19 51.5 17.8807 51.5 16.5C51.5 15.1193 50.3807 14 49 14C47.6193 14 46.5 15.1193 46.5 16.5C46.5 17.8807 47.6193 19 49 19Z",
        fill: "#0189FF"
      })]
    })
  });
}
InfoWhite.displayName = "InfoWhite";
function SuccessWhite(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "57",
    h: "45",
    viewBox: "0 0 57 45",
    children: /* @__PURE__ */ jsxs("svg", {
      fill: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M21.642 44.094C33.5945 44.094 43.284 34.4045 43.284 22.452C43.284 10.4995 33.5945 0.809998 21.642 0.809998C9.68945 0.809998 0 10.4995 0 22.452C0 34.4045 9.68945 44.094 21.642 44.094Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.678 13.83C40.657 8.581 34.991 5.047 28.5 5.047C18.835 5.047 11 12.882 11 22.547C11 32.212 18.835 40.047 28.5 40.047C34.608 40.047 39.984 36.918 43.115 32.176",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M56.0248 12.8232C57.0011 13.7995 57.0011 15.3825 56.0248 16.3588L44.3118 28.0718C43.8429 28.5406 43.207 28.804 42.544 28.804C41.881 28.804 41.2451 28.5406 40.7762 28.0718L34.2322 21.5278C33.2559 20.5515 33.2559 18.9685 34.2322 17.9922C35.2085 17.0159 36.7915 17.0159 37.7678 17.9922L42.544 22.7685L52.4892 12.8232C53.4655 11.8469 55.0485 11.8469 56.0248 12.8232Z",
        fill: "#28A745"
      }), /* @__PURE__ */ jsx("path", {
        d: "M18.5 24.047C19.3284 24.047 20 23.3754 20 22.547C20 21.7186 19.3284 21.047 18.5 21.047C17.6716 21.047 17 21.7186 17 22.547C17 23.3754 17.6716 24.047 18.5 24.047Z",
        fill: "#28A745"
      }), /* @__PURE__ */ jsx("path", {
        d: "M23.5 24.047C24.3284 24.047 25 23.3754 25 22.547C25 21.7186 24.3284 21.047 23.5 21.047C22.6716 21.047 22 21.7186 22 22.547C22 23.3754 22.6716 24.047 23.5 24.047Z",
        fill: "#28A745"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.5 24.047C29.3284 24.047 30 23.3754 30 22.547C30 21.7186 29.3284 21.047 28.5 21.047C27.6716 21.047 27 21.7186 27 22.547C27 23.3754 27.6716 24.047 28.5 24.047Z",
        fill: "#28A745"
      })]
    })
  });
}
SuccessWhite.displayName = "SuccessWhite";
function WarningWhite(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "52",
    h: "45",
    viewBox: "0 0 52 45",
    children: /* @__PURE__ */ jsxs("svg", {
      fill: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M21.642 44.282C33.5945 44.282 43.284 34.5925 43.284 22.64C43.284 10.6874 33.5945 0.997986 21.642 0.997986C9.68945 0.997986 0 10.6874 0 22.64C0 34.5925 9.68945 44.282 21.642 44.282Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M18.5 24.235C19.3284 24.235 20 23.5634 20 22.735C20 21.9066 19.3284 21.235 18.5 21.235C17.6716 21.235 17 21.9066 17 22.735C17 23.5634 17.6716 24.235 18.5 24.235Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M23.5 24.235C24.3284 24.235 25 23.5634 25 22.735C25 21.9066 24.3284 21.235 23.5 21.235C22.6716 21.235 22 21.9066 22 22.735C22 23.5634 22.6716 24.235 23.5 24.235Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.5 24.235C29.3284 24.235 30 23.5634 30 22.735C30 21.9066 29.3284 21.235 28.5 21.235C27.6716 21.235 27 21.9066 27 22.735C27 23.5634 27.6716 24.235 28.5 24.235Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.678 14.018C40.657 8.76899 34.991 5.23499 28.5 5.23499C18.835 5.23499 11 13.07 11 22.735C11 32.4 18.835 40.235 28.5 40.235C34.608 40.235 39.984 37.106 43.115 32.364",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M48.782 14.053C50.1627 14.053 51.282 15.1723 51.282 16.553V21.12C51.282 22.5007 50.1627 23.62 48.782 23.62C47.4013 23.62 46.282 22.5007 46.282 21.12V16.553C46.282 15.1723 47.4013 14.053 48.782 14.053ZM47.0143 25.7852C47.9906 24.8089 49.5735 24.8089 50.5498 25.7852L50.5958 25.8312C51.5721 26.8076 51.572 28.3905 50.5957 29.3668C49.6194 30.3431 48.0365 30.343 47.0602 29.3667L47.0142 29.3207C46.0379 28.3444 46.0379 26.7615 47.0143 25.7852Z",
        fill: "#FFBC27"
      })]
    })
  });
}
WarningWhite.displayName = "WarningWhite";
function ErrorColor(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "53",
    h: "45",
    viewBox: "0 0 53 45",
    children: /* @__PURE__ */ jsxs("svg", {
      fill: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M22.142 44.1878C34.0945 44.1878 43.784 34.4984 43.784 22.5458C43.784 10.5933 34.0945 0.903809 22.142 0.903809C10.1895 0.903809 0.5 10.5933 0.5 22.5458C0.5 34.4984 10.1895 44.1878 22.142 44.1878Z",
        fill: "#F9DFDF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M19 24.1409C19.8284 24.1409 20.5 23.4693 20.5 22.6409C20.5 21.8124 19.8284 21.1409 19 21.1409C18.1716 21.1409 17.5 21.8124 17.5 22.6409C17.5 23.4693 18.1716 24.1409 19 24.1409Z",
        fill: "#CC0000"
      }), /* @__PURE__ */ jsx("path", {
        d: "M24 24.1409C24.8284 24.1409 25.5 23.4693 25.5 22.6409C25.5 21.8124 24.8284 21.1409 24 21.1409C23.1716 21.1409 22.5 21.8124 22.5 22.6409C22.5 23.4693 23.1716 24.1409 24 24.1409Z",
        fill: "#CC0000"
      }), /* @__PURE__ */ jsx("path", {
        d: "M29 24.1409C29.8284 24.1409 30.5 23.4693 30.5 22.6409C30.5 21.8124 29.8284 21.1409 29 21.1409C28.1716 21.1409 27.5 21.8124 27.5 22.6409C27.5 23.4693 28.1716 24.1409 29 24.1409Z",
        fill: "#CC0000"
      }), /* @__PURE__ */ jsx("path", {
        d: "M44.178 13.9239C41.157 8.67487 35.491 5.14087 29 5.14087C19.335 5.14087 11.5 12.9759 11.5 22.6409C11.5 32.3059 19.335 40.1409 29 40.1409C35.108 40.1409 40.484 37.0119 43.615 32.2699",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M36.0862 15.7271C37.0625 14.7508 38.6455 14.7508 39.6218 15.7271L43.7105 19.8158L47.7992 15.7271C48.7755 14.7508 50.3585 14.7508 51.3348 15.7271C52.3111 16.7034 52.3111 18.2863 51.3348 19.2626L47.246 23.3514L51.3348 27.4401C52.3111 28.4164 52.3111 29.9993 51.3348 30.9756C50.3585 31.952 48.7755 31.952 47.7992 30.9756L43.7105 26.8869L39.6218 30.9756C38.6455 31.952 37.0625 31.952 36.0862 30.9756C35.1099 29.9993 35.1099 28.4164 36.0862 27.4401L40.175 23.3514L36.0862 19.2626C35.1099 18.2863 35.1099 16.7034 36.0862 15.7271Z",
        fill: "#CC0000"
      })]
    })
  });
}
ErrorColor.displayName = "ErrorColor";
function InfoColor(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "57",
    h: "45",
    viewBox: "0 0 57 45",
    children: /* @__PURE__ */ jsxs("svg", {
      fill: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M21.642 44.2349C33.5945 44.2349 43.284 34.5455 43.284 22.5929C43.284 10.6404 33.5945 0.950928 21.642 0.950928C9.68945 0.950928 0 10.6404 0 22.5929C0 34.5455 9.68945 44.2349 21.642 44.2349Z",
        fill: "#E0EEFA"
      }), /* @__PURE__ */ jsx("path", {
        d: "M18.5 24.188C19.3284 24.188 20 23.5164 20 22.688C20 21.8596 19.3284 21.188 18.5 21.188C17.6716 21.188 17 21.8596 17 22.688C17 23.5164 17.6716 24.188 18.5 24.188Z",
        fill: "#0189FF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M23.5 24.188C24.3284 24.188 25 23.5164 25 22.688C25 21.8596 24.3284 21.188 23.5 21.188C22.6716 21.188 22 21.8596 22 22.688C22 23.5164 22.6716 24.188 23.5 24.188Z",
        fill: "#0189FF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.5 24.188C29.3284 24.188 30 23.5164 30 22.688C30 21.8596 29.3284 21.188 28.5 21.188C27.6716 21.188 27 21.8596 27 22.688C27 23.5164 27.6716 24.188 28.5 24.188Z",
        fill: "#0189FF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.678 13.971C40.657 8.72199 34.991 5.18799 28.5 5.18799C18.835 5.18799 11 13.023 11 22.688C11 32.353 18.835 40.188 28.5 40.188C34.608 40.188 39.984 37.059 43.115 32.317",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M47 21.188H50C50.2652 21.188 50.5196 21.2933 50.7071 21.4809C50.8946 21.6684 51 21.9228 51 22.188V29.233H51.237C51.4908 29.2411 51.7316 29.3477 51.9082 29.5301C52.0849 29.7125 52.1837 29.9565 52.1837 30.2105C52.1837 30.4645 52.0849 30.7085 51.9082 30.8909C51.7316 31.0733 51.4908 31.1799 51.237 31.188H46.977C46.7232 31.1799 46.4824 31.0733 46.3058 30.8909C46.1291 30.7085 46.0303 30.4645 46.0303 30.2105C46.0303 29.9565 46.1291 29.7125 46.3058 29.5301C46.4824 29.3477 46.7232 29.2411 46.977 29.233H47V23.311C46.7348 23.311 46.4804 23.2056 46.2929 23.0181C46.1054 22.8306 46 22.5762 46 22.311V22.188C46 21.9228 46.1054 21.6684 46.2929 21.4809C46.4804 21.2933 46.7348 21.188 47 21.188Z",
        fill: "#0189FF"
      }), /* @__PURE__ */ jsx("path", {
        d: "M49 19.188C50.3807 19.188 51.5 18.0687 51.5 16.688C51.5 15.3073 50.3807 14.188 49 14.188C47.6193 14.188 46.5 15.3073 46.5 16.688C46.5 18.0687 47.6193 19.188 49 19.188Z",
        fill: "#0189FF"
      })]
    })
  });
}
InfoColor.displayName = "InfoColor";
function SuccessColor(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "57",
    h: "45",
    viewBox: "0 0 57 45",
    children: /* @__PURE__ */ jsxs("svg", {
      fill: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M21.642 44.0469C33.5945 44.0469 43.284 34.3575 43.284 22.4049C43.284 10.4524 33.5945 0.762939 21.642 0.762939C9.68945 0.762939 0 10.4524 0 22.4049C0 34.3575 9.68945 44.0469 21.642 44.0469Z",
        fill: "#E9F6EC"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.678 13.783C40.657 8.534 34.991 5 28.5 5C18.835 5 11 12.835 11 22.5C11 32.165 18.835 40 28.5 40C34.608 40 39.984 36.871 43.115 32.129",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M56.0248 12.7762C57.0011 13.7525 57.0011 15.3354 56.0248 16.3117L44.3118 28.0247C43.8429 28.4936 43.207 28.7569 42.544 28.7569C41.881 28.7569 41.2451 28.4936 40.7762 28.0247L34.2322 21.4807C33.2559 20.5044 33.2559 18.9215 34.2322 17.9452C35.2085 16.9689 36.7915 16.9689 37.7678 17.9452L42.544 22.7214L52.4892 12.7762C53.4655 11.7999 55.0485 11.7999 56.0248 12.7762Z",
        fill: "#28A745"
      }), /* @__PURE__ */ jsx("path", {
        d: "M18.5 24C19.3284 24 20 23.3284 20 22.5C20 21.6716 19.3284 21 18.5 21C17.6716 21 17 21.6716 17 22.5C17 23.3284 17.6716 24 18.5 24Z",
        fill: "#28A745"
      }), /* @__PURE__ */ jsx("path", {
        d: "M23.5 24C24.3284 24 25 23.3284 25 22.5C25 21.6716 24.3284 21 23.5 21C22.6716 21 22 21.6716 22 22.5C22 23.3284 22.6716 24 23.5 24Z",
        fill: "#28A745"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.5 24C29.3284 24 30 23.3284 30 22.5C30 21.6716 29.3284 21 28.5 21C27.6716 21 27 21.6716 27 22.5C27 23.3284 27.6716 24 28.5 24Z",
        fill: "#28A745"
      })]
    })
  });
}
SuccessColor.displayName = "SuccessColor";
function WarningColor(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "53",
    h: "45",
    viewBox: "0 0 53 45",
    children: /* @__PURE__ */ jsxs("svg", {
      fill: "none",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M22.142 44.1483C34.0945 44.1483 43.784 34.4588 43.784 22.5063C43.784 10.5537 34.0945 0.864258 22.142 0.864258C10.1895 0.864258 0.5 10.5537 0.5 22.5063C0.5 34.4588 10.1895 44.1483 22.142 44.1483Z",
        fill: "#FDEED6"
      }), /* @__PURE__ */ jsx("path", {
        d: "M19 24.1013C19.8284 24.1013 20.5 23.4297 20.5 22.6013C20.5 21.7729 19.8284 21.1013 19 21.1013C18.1716 21.1013 17.5 21.7729 17.5 22.6013C17.5 23.4297 18.1716 24.1013 19 24.1013Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M24 24.1013C24.8284 24.1013 25.5 23.4297 25.5 22.6013C25.5 21.7729 24.8284 21.1013 24 21.1013C23.1716 21.1013 22.5 21.7729 22.5 22.6013C22.5 23.4297 23.1716 24.1013 24 24.1013Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M29 24.1013C29.8284 24.1013 30.5 23.4297 30.5 22.6013C30.5 21.7729 29.8284 21.1013 29 21.1013C28.1716 21.1013 27.5 21.7729 27.5 22.6013C27.5 23.4297 28.1716 24.1013 29 24.1013Z",
        fill: "#FFBC27"
      }), /* @__PURE__ */ jsx("path", {
        d: "M44.178 13.8843C41.157 8.63532 35.491 5.10132 29 5.10132C19.335 5.10132 11.5 12.9363 11.5 22.6013C11.5 32.2663 19.335 40.1013 29 40.1013C35.108 40.1013 40.484 36.9723 43.615 32.2303",
        stroke: "#808080",
        strokeWidth: "2",
        strokeLinecap: "round"
      }), /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M49.282 13.9192C50.6627 13.9192 51.782 15.0385 51.782 16.4192V20.9862C51.782 22.3669 50.6627 23.4862 49.282 23.4862C47.9013 23.4862 46.782 22.3669 46.782 20.9862V16.4192C46.782 15.0385 47.9013 13.9192 49.282 13.9192ZM47.5143 25.6514C48.4906 24.6751 50.0735 24.6751 51.0498 25.6515L51.0958 25.6975C52.0721 26.6738 52.072 28.2567 51.0957 29.233C50.1194 30.2093 48.5365 30.2093 47.5602 29.2329L47.5142 29.1869C46.5379 28.2106 46.5379 26.6277 47.5143 25.6514Z",
        fill: "#FFBC27"
      })]
    })
  });
}
WarningColor.displayName = "WarningColor";
function Close(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    title: "close",
    children: /* @__PURE__ */ jsx("svg", {
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "none",
      children: /* @__PURE__ */ jsx("path", {
        d: "M10.7071 1.29303C10.5196 1.10556 10.2652 1.00024 10.0001 1.00024C9.73492 1.00024 9.48061 1.10556 9.29308 1.29303L6.00008 4.58603L2.70708 1.29303C2.51848 1.11087 2.26588 1.01008 2.00368 1.01236C1.74148 1.01464 1.49067 1.1198 1.30526 1.30521C1.11985 1.49062 1.01469 1.74143 1.01241 2.00363C1.01013 2.26583 1.11092 2.51843 1.29308 2.70703L4.58608 6.00003L1.29308 9.29303C1.19757 9.38528 1.12139 9.49562 1.06898 9.61763C1.01657 9.73963 0.988985 9.87085 0.987831 10.0036C0.986677 10.1364 1.01198 10.2681 1.06226 10.391C1.11254 10.5139 1.18679 10.6255 1.28069 10.7194C1.37458 10.8133 1.48623 10.8876 1.60913 10.9379C1.73202 10.9881 1.8637 11.0134 1.99648 11.0123C2.12926 11.0111 2.26048 10.9835 2.38249 10.9311C2.50449 10.8787 2.61483 10.8025 2.70708 10.707L6.00008 7.41403L9.29308 10.707C9.48168 10.8892 9.73429 10.99 9.99648 10.9877C10.2587 10.9854 10.5095 10.8803 10.6949 10.6948C10.8803 10.5094 10.9855 10.2586 10.9878 9.99643C10.99 9.73423 10.8892 9.48163 10.7071 9.29303L7.41408 6.00003L10.7071 2.70703C10.8946 2.5195 10.9999 2.26519 10.9999 2.00003C10.9999 1.73487 10.8946 1.48056 10.7071 1.29303Z",
        fill: "#60798E"
      })
    })
  });
}
Close.displayName = "Close";
function DiagonalArrow(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    w: "16px",
    h: "16px",
    viewBox: "0 0 16 16",
    children: /* @__PURE__ */ jsx("path", {
      d: "M9.207 5.793L3 12L4.414 13.414L10.621 7.207L13.414 10V3H6.414L9.207 5.793Z",
      fill: "#0189FF"
    })
  });
}
DiagonalArrow.displayName = "Download";
var index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  AcademicRecord,
  AlertInfo,
  ArrowRight,
  Certificate,
  CircularCheck,
  CircularInformation,
  Download,
  GoAhead,
  GoBack,
  Multimedia,
  Loader,
  Profile,
  Schedule,
  TinyAlertInfo,
  TinyAlertError,
  TinyAlertWarning,
  TinyAlertSuccess,
  Password,
  Pen,
  PlusSign,
  TrashCan,
  TextBubble,
  ErrorWhite,
  InfoWhite,
  SuccessWhite,
  WarningWhite,
  ErrorColor,
  InfoColor,
  SuccessColor,
  WarningColor,
  Close,
  DiagonalArrow
}, Symbol.toStringTag, { value: "Module" }));
function TinyAlert({
  status,
  text,
  margin = "0"
}) {
  const alerts = {
    success: {
      icon: /* @__PURE__ */ jsx(TinyAlertSuccess, {}),
      text: "Success",
      bg: vars("colors-alert-ice"),
      color: vars("colors-neutral-darkCharcoal")
    },
    error: {
      icon: /* @__PURE__ */ jsx(TinyAlertError, {}),
      text: "Error",
      bg: vars("colors-alert-veryLightPinkThree"),
      color: vars("colors-neutral-darkCharcoal")
    },
    info: {
      icon: /* @__PURE__ */ jsx(TinyAlertInfo, {}),
      text: "Info",
      bg: vars("colors-alert-veryLightBlue"),
      color: vars("colors-neutral-darkCharcoal")
    },
    warning: {
      icon: /* @__PURE__ */ jsx(TinyAlertWarning, {}),
      text: "Warning",
      bg: vars("colors-alert-pale"),
      color: vars("colors-neutral-darkCharcoal")
    },
    answered: {
      icon: void 0,
      text: "Answered",
      bg: vars("colors-main-blueGrey"),
      color: vars("colors-neutral-white")
    },
    omitted: {
      icon: void 0,
      text: "Omitted",
      bg: vars("colors-main-ziggurat"),
      color: vars("colors-neutral-darkCharcoal")
    },
    pending: {
      icon: void 0,
      text: "Pending",
      bg: vars("colors-neutral-cultured"),
      color: vars("colors-neutral-darkCharcoal")
    },
    new: {
      icon: void 0,
      text: "New answer",
      bg: "#FF7A14",
      color: vars("colors-neutral-white")
    }
  };
  if (!alerts[status]) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Box, {
    margin,
    "data-testid": "TinyAlert-Box",
    backgroundColor: alerts[status].bg,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: ".125em .25em",
    gap: ".25rem",
    width: "fit-content",
    borderRadius: ".25rem",
    className: "TinyAlert-Box",
    children: [alerts[status].icon && /* @__PURE__ */ jsx(Box, {
      lineHeight: 0,
      sx: {
        ">svg": {
          margin: 0
        }
      },
      children: alerts[status].icon
    }), /* @__PURE__ */ jsx(Box, {
      as: "span",
      color: alerts[status].color,
      fontSize: ".75rem",
      fontStyle: "normal",
      fontWeight: "400",
      fontFamily: "Roboto",
      lineHeight: ".875rem",
      margin: "0",
      children: text != null ? text : alerts[status].text
    })]
  });
}
TinyAlert.displayName = "TinyAlert";
function Btn({
  ariaLabel,
  bg,
  borderColorActive = [vars("colors-main-deepSkyBlue"), vars("colors-neutral-white")],
  children,
  color = vars("colors-neutral-white"),
  disabled = false,
  fillLoader = vars("colors-neutral-white"),
  id = void 0,
  isFullWidth = false,
  isLoading = false,
  leftIcon,
  m: m2 = "0",
  onClick,
  rightIcon,
  role = "button",
  rounded = false,
  size = "regular",
  touchDark = false,
  type = "button",
  tabIndex = 0
}) {
  var _a, _b, _c;
  let showChildren = children != null ? children : null;
  if (!children && !rightIcon && !leftIcon) {
    showChildren = "Button";
  }
  const paddingTopBottom = ".75rem";
  const borderRadius = rounded ? "12px" : vars("radii-small");
  const colorMain = (_a = bg == null ? void 0 : bg.main) != null ? _a : vars("colors-main-deepSkyBlue");
  const touchColor = touchDark ? "rgba(160, 160, 160, 0.2)" : "rgba(255, 255, 255, 0.2)";
  const onlyIcon = !children && (rightIcon != null ? rightIcon : leftIcon) ? "onlyIcon" : "";
  return /* @__PURE__ */ jsx(Box, {
    margin: m2,
    sx: {
      ".react-ripples": {
        borderRadius,
        display: `${isFullWidth ? "grid" : "inline-flex!important"}`
      }
    },
    children: /* @__PURE__ */ jsx(Ripples$1, {
      color: touchColor,
      children: /* @__PURE__ */ jsx(Button, {
        "aria-label": ariaLabel,
        id,
        role,
        bg: colorMain,
        borderRadius,
        color,
        className: onlyIcon,
        disabled: disabled && isLoading ? false : disabled,
        fontWeight: "500",
        fontSize: size === "regular" ? "medium" : "small",
        height: "auto",
        iconSpacing: vars("space-xs"),
        isActive: false,
        isLoading,
        isFullWidth,
        lineHeight: "initial",
        leftIcon,
        minHeight: size === "regular" ? "2.813rem" : "2rem",
        minWidth: size === "regular" ? "9rem" : "auto",
        onClick: (e2) => {
          !isLoading && !disabled && (onClick == null ? void 0 : onClick(e2));
        },
        position: "relative",
        paddingTop: size === "regular" ? paddingTopBottom : onlyIcon ? vars("space-xs") : vars("space-xxs"),
        paddingBottom: size === "regular" ? paddingTopBottom : onlyIcon ? vars("space-xs") : vars("space-xxs"),
        paddingLeft: size === "regular" ? vars("space-s") : vars("space-xs"),
        paddingRight: size === "regular" ? vars("space-s") : vars("space-xs"),
        rightIcon,
        type,
        size: size === "regular" ? "md" : "sm",
        spinner: /* @__PURE__ */ jsx(Loader, {
          fill: fillLoader
        }),
        tabIndex: disabled || isLoading ? -1 : tabIndex,
        _active: {
          bg: (_b = bg == null ? void 0 : bg.main) != null ? _b : vars("colors-main-azureRadiance")
        },
        _disabled: {
          opacity: "50%",
          cursor: "not-allowed"
        },
        _focus: {
          boxShadow: "none"
        },
        _focusVisible: {
          boxShadow: `inset 0 0 0 2px ${borderColorActive[0]}, inset 0 0 0 4px ${borderColorActive[1]}`
        },
        _hover: {
          bg: (_c = bg == null ? void 0 : bg.hover) != null ? _c : vars("colors-main-azureRadiance")
        },
        sx: {
          "&[data-loading]": {
            boxShadow: "none",
            cursor: "wait"
          },
          "&.onlyIcon span": {
            m: 0
          },
          span: {
            h: "1rem"
          }
        },
        children: showChildren
      })
    })
  });
}
Btn.displayName = "Btn";
function BtnPrimary({
  ariaLabel,
  children,
  disabled = false,
  isFullWidth = false,
  leftIcon,
  m: m2 = "0",
  isLoading = false,
  onClick,
  rightIcon,
  role = "button",
  size = "regular",
  type = "button",
  tabIndex,
  id
}) {
  return /* @__PURE__ */ jsx(Btn, {
    ariaLabel,
    id,
    disabled,
    isFullWidth,
    isLoading,
    leftIcon,
    m: m2,
    onClick,
    rightIcon,
    role,
    size,
    type,
    tabIndex,
    children
  });
}
BtnPrimary.displayName = "BtnPrimary";
function BtnSecondary({
  ariaLabel,
  children,
  disabled = false,
  isFullWidth = false,
  leftIcon,
  m: m2 = "0",
  isLoading = false,
  onClick,
  rightIcon,
  role = "button",
  size = "regular",
  type = "button",
  tabIndex,
  id
}) {
  return /* @__PURE__ */ jsx(Btn, {
    ariaLabel,
    id,
    bg: {
      main: vars("colors-main-veryLightBlue"),
      hover: vars("colors-main-linkWater")
    },
    borderColorActive: [vars("colors-main-deepSkyBlue"), vars("colors-neutral-white")],
    color: vars("colors-main-deepSkyBlue"),
    disabled,
    fillLoader: vars("colors-main-deepSkyBlue"),
    isFullWidth,
    isLoading,
    leftIcon,
    m: m2,
    onClick,
    rightIcon,
    role,
    size,
    touchDark: true,
    type,
    tabIndex,
    children
  });
}
BtnSecondary.displayName = "BtnSecondary";
function BtnTertiary({
  ariaLabel,
  activeWhenPress = false,
  children,
  id,
  iconStatus = "multimedia",
  iconCustom,
  m: m2 = "0",
  onClick,
  onMouseEnter,
  onMouseLeave,
  rightIcon,
  role = "button",
  type = "button",
  tabIndex,
  withoutColor = false
}) {
  const gray = vars("colors-neutral-gray");
  const blue = vars("colors-main-deepSkyBlue");
  const white = vars("colors-neutral-white");
  const colorIcon = withoutColor ? vars("colors-main-blueGrey") : blue;
  const btnIcons = {
    ahead: /* @__PURE__ */ jsx(GoAhead, {
      color: colorIcon
    }),
    answer: /* @__PURE__ */ jsx(TextBubble, {
      color: colorIcon
    }),
    back: /* @__PURE__ */ jsx(GoBack, {
      color: colorIcon
    }),
    delete: /* @__PURE__ */ jsx(TrashCan, {
      color: colorIcon
    }),
    download: /* @__PURE__ */ jsx(Download, {
      color: colorIcon
    }),
    edit: /* @__PURE__ */ jsx(Pen, {
      color: colorIcon
    }),
    more: /* @__PURE__ */ jsx(PlusSign, {
      color: colorIcon
    }),
    multimedia: /* @__PURE__ */ jsx(Multimedia, {
      color: colorIcon
    }),
    password: /* @__PURE__ */ jsx(Password, {
      color: colorIcon
    }),
    record: /* @__PURE__ */ jsx(AcademicRecord, {
      color: colorIcon
    }),
    noIcon: /* @__PURE__ */ jsx(Fragment, {})
  };
  let icon;
  if (btnIcons[iconStatus] && iconStatus !== "noIcon") {
    icon = btnIcons[iconStatus];
  }
  if (iconCustom) {
    icon = iconCustom;
  }
  const rIcon = rightIcon ? icon : void 0;
  const lIcon = !rightIcon ? icon : void 0;
  return /* @__PURE__ */ jsx(Button, {
    "aria-label": ariaLabel,
    id,
    role,
    type,
    tabIndex,
    background: "transparent",
    borderRadius: "12px",
    color: gray,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize: "14px",
    gap: "0.5rem",
    height: "24px",
    lineHeight: "16px",
    leftIcon: lIcon,
    rightIcon: rIcon,
    m: m2,
    onClick,
    onMouseEnter,
    onMouseLeave,
    paddingTop: vars("space-xxs"),
    paddingBottom: vars("space-xxs"),
    paddingLeft: vars("space-xs"),
    paddingRight: vars("space-xs"),
    textDecorationLine: "underline",
    _hover: {
      color: `${blue}`
    },
    _focusVisible: {
      boxShadow: `inset 0 0 0 2px ${blue}, inset 0 0 0 4px ${white}`
    },
    _focus: {
      color: activeWhenPress ? `${blue} !important` : "inherit",
      boxShadow: "none"
    },
    _active: {
      bg: "transparent"
    },
    sx: {
      ">span": {
        mr: 0
      }
    },
    children
  });
}
BtnTertiary.displayName = "BtnTertiary";
function BtnLink({
  as = "a",
  ariaLabel,
  children,
  fontSize = "0.875rem",
  href = "",
  id,
  m: m2 = "0",
  onClick,
  role = "link",
  tabIndex,
  textDecorationLine = true
}) {
  const typeButton = {
    button: {
      onClick
    },
    a: {
      href,
      target: "_blank"
    }
  };
  return /* @__PURE__ */ jsx(Box, {
    as,
    "aria-label": ariaLabel,
    id,
    role,
    backgroundColor: "transparent",
    borderStyle: "none",
    className: "linkButton",
    color: vars("colors-main-deepSkyBlue"),
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "500",
    fontSize,
    lineHeight: "1rem",
    onClick,
    padding: ".25em",
    tabIndex,
    textDecorationLine: textDecorationLine ? "underline" : "none",
    width: "fit-content",
    m: m2,
    _hover: {
      color: vars("colors-neutral-darkCharcoal"),
      cursor: "pointer"
    },
    ...typeButton[as],
    children
  });
}
BtnLink.displayName = "BtnLink";
const NewTooltip = ({
  children,
  className = "tooltip",
  label,
  isDisabled = false,
  m: m2,
  maxWidth = "200px",
  placement = "bottom",
  isOpen,
  sx
}) => {
  return /* @__PURE__ */ jsx(Tooltip, {
    isOpen,
    sx: {
      bg: vars("colors-neutral-darkCharcoal"),
      borderRadius: "10px",
      color: "white !important",
      fontSize: "12px",
      fontWeight: "400",
      maxWidth,
      padding: "8px",
      ".chakra-tooltip__arrow": {
        bg: `${vars("colors-neutral-darkCharcoal")} !important`
      },
      ...sx
    },
    className,
    closeOnClick: true,
    label,
    m: m2,
    hasArrow: true,
    isDisabled,
    placement,
    children: /* @__PURE__ */ jsx("span", {
      children
    })
  });
};
function Accessibility(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    children: /* @__PURE__ */ jsx("svg", {
      width: "16",
      height: "16",
      viewBox: "0 0 16 16",
      fill: "none",
      children: /* @__PURE__ */ jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8 5C8.82843 5 9.5 4.32843 9.5 3.5C9.5 2.67157 8.82843 2 8 2C7.17157 2 6.5 2.67157 6.5 3.5C6.5 4.32843 7.17157 5 8 5ZM2.96967 5.96967C3.11032 5.82902 3.30109 5.75 3.5 5.75H12.5C12.6989 5.75 12.8897 5.82902 13.0303 5.96967C13.171 6.11032 13.25 6.30109 13.25 6.5C13.25 6.69891 13.171 6.88968 13.0303 7.03033C12.8897 7.17098 12.6989 7.25 12.5 7.25H10.25V13.25C10.25 13.4489 10.171 13.6397 10.0303 13.7803C9.88968 13.921 9.69891 14 9.5 14C9.30109 14 9.11032 13.921 8.96967 13.7803C8.82902 13.6397 8.75 13.4489 8.75 13.25V10.25H7.25V13.25C7.25 13.4489 7.17098 13.6397 7.03033 13.7803C6.88968 13.921 6.69891 14 6.5 14C6.30109 14 6.11032 13.921 5.96967 13.7803C5.82902 13.6397 5.75 13.4489 5.75 13.25V7.25H3.5C3.30109 7.25 3.11032 7.17098 2.96967 7.03033C2.82902 6.88968 2.75 6.69891 2.75 6.5C2.75 6.30109 2.82902 6.11032 2.96967 5.96967Z",
        fill: "white"
      })
    })
  });
}
function UserWay() {
  const triggerWidget = () => {
    const buttonB = document.getElementById("userWayTrigger");
    if (buttonB == null ? void 0 : buttonB.click) {
      buttonB.click();
    }
  };
  return /* @__PURE__ */ jsx(Box, {
    as: "button",
    alignItems: "center",
    bg: vars("colors-main-blueGrey"),
    borderRadius: "100%",
    border: "1px solid transparent",
    display: "flex",
    height: "30px",
    id: "UserWayButton",
    justifyContent: "center",
    padding: "0 8px",
    width: "30px",
    _hover: {
      background: "rgba(96, 121, 142, 0.8)"
    },
    onClick: triggerWidget,
    children: /* @__PURE__ */ jsx(Accessibility, {})
  });
}
function UserWayCookie() {
  var _a;
  const cookieName = "userwayData";
  const userwayDataCookie = (_a = document.cookie.split("; ").find((row) => row.startsWith(`${cookieName}=`))) == null ? void 0 : _a.split("=")[1];
  if (userwayDataCookie) {
    try {
      const userwayData = JSON.parse(decodeURIComponent(userwayDataCookie));
      for (const [key, value] of Object.entries(userwayData)) {
        localStorage.setItem(key, value);
      }
      console.log("UserWay data restored to localStorage:", userwayData);
    } catch (error) {
      console.error("Error parsing UserWay data from cookie:", error);
    }
  }
  window.addEventListener("beforeunload", () => {
    const userwayData = {};
    for (const key in localStorage) {
      if (key.startsWith("userway-")) {
        userwayData[key] = localStorage.getItem(key);
      }
    }
    const serializedData = JSON.stringify(userwayData);
    const expiryDate = new Date();
    expiryDate.setTime(expiryDate.getTime() + 24 * 60 * 60 * 1e3);
    document.cookie = `${cookieName}=${encodeURIComponent(
      serializedData
    )};expires=${expiryDate.toUTCString()};path=/`;
  });
}
const STUDENT = 4;
function Header$1() {
  var _a;
  const {
    background,
    labels,
    logo,
    logoAlt,
    Profile: profile,
    soonCourse
  } = React.useContext(CourseBoxContext);
  return /* @__PURE__ */ jsxs(Box, {
    as: "header",
    height: "8.75rem",
    borderBottom: vars("borders-light"),
    pos: "relative",
    _before: {
      content: '""',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${background != null ? background : ""})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      opacity: ((_a = soonCourse == null ? void 0 : soonCourse.show) != null ? _a : false) ? 0.3 : 1,
      zIndex: 0
    },
    children: [/* @__PURE__ */ jsxs(Box, {
      p: "1rem",
      display: "flex",
      gap: "0.625rem",
      position: "absolute",
      zIndex: 2,
      children: [(profile == null ? void 0 : profile.id) !== STUDENT && /* @__PURE__ */ jsx(Label, {
        bg: vars("colors-neutral-white"),
        m: "0 0 .625rem 0",
        children: /* @__PURE__ */ jsxs(Flex, {
          children: [/* @__PURE__ */ jsx(Profile, {
            m: "0 .25rem 0 0"
          }), profile == null ? void 0 : profile.name]
        })
      }), labels !== void 0 && labels.length > 0 && /* @__PURE__ */ jsx(Stack, {
        direction: "row",
        spacing: ".625rem",
        wrap: "wrap",
        zIndex: 2,
        children: labels.map((item, index2) => /* @__PURE__ */ jsx(Label, {
          bg: item.id === "NEW" ? vars("colors-secondary-pumpkin") : void 0,
          children: item.text
        }, index2))
      }), (soonCourse == null ? void 0 : soonCourse.show) && (soonCourse == null ? void 0 : soonCourse.text) && /* @__PURE__ */ jsx(Stack, {
        direction: "row",
        spacing: ".625rem",
        wrap: "wrap",
        zIndex: 2,
        children: /* @__PURE__ */ jsx(Label, {
          children: soonCourse.text
        })
      })]
    }), logo !== void 0 && logo.length > 0 && /* @__PURE__ */ jsx(Center, {
      pos: "absolute",
      bottom: "0",
      left: ".9375rem",
      transform: "translateY(30%)",
      h: "3.5rem",
      border: vars("borders-light"),
      bg: vars("colors-neutral-white"),
      overflow: "hidden",
      borderRadius: vars("radii-small"),
      w: "6.25rem",
      zIndex: 2,
      children: /* @__PURE__ */ jsx(Image, {
        src: logo,
        alt: logoAlt != null ? logoAlt : "logo",
        maxHeight: "3.5rem",
        maxWidth: "6.25rem"
      })
    })]
  });
}
Header$1.displayName = "Header";
function DateStatus({
  date
}) {
  if (date == null || date.length === 0) {
    return null;
  }
  return /* @__PURE__ */ jsx(Text, {
    fontSize: ".75rem",
    color: vars("colors-neutral-darkCharcoal"),
    m: "0",
    children: date
  });
}
DateStatus.displayName = "DateStatus";
function IconSelection({
  type,
  progressValue = 0
}) {
  switch (type) {
    case "schedule":
      return /* @__PURE__ */ jsx(Schedule, {});
    case "certificate":
      return /* @__PURE__ */ jsx(Certificate, {});
    case "circularCheck":
      return /* @__PURE__ */ jsx(CircularCheck, {});
    case "progress":
      return /* @__PURE__ */ jsx(Progress, {
        value: progressValue
      });
    case "circularInformation":
      return /* @__PURE__ */ jsx(CircularInformation, {});
    case "info":
      return /* @__PURE__ */ jsx(CircularInformation, {});
    default:
      return null;
  }
}
const ID_QUALIFIED = 7;
function CourseStatus({
  progress,
  status
}) {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsxs(Flex, {
      children: [/* @__PURE__ */ jsx(IconSelection, {
        type: progress.icon,
        progressValue: progress.progress
      }), /* @__PURE__ */ jsx(Text, {
        m: "0",
        ml: ".625rem",
        fontSize: ".875rem",
        lineHeight: "1.125rem",
        children: progress == null ? void 0 : progress.label
      })]
    }), (status == null ? void 0 : status.id) === ID_QUALIFIED && (progress == null ? void 0 : progress.finalGrade) && (progress == null ? void 0 : progress.finalGrade.length) > 0 && /* @__PURE__ */ jsx(Label, {
      size: "sm",
      bg: progress.isApproved ? vars("colors-alert-jadeGreen") : vars("colors-alert-red"),
      color: vars("colors-neutral-white"),
      children: progress == null ? void 0 : progress.finalGrade
    })]
  });
}
function Section() {
  const {
    name,
    dateStatus,
    information,
    progress,
    status
  } = React.useContext(CourseBoxContext);
  if (progress == null) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Box, {
    marginTop: "1.875rem",
    as: "section",
    p: "0 .9375rem",
    children: [(dateStatus == null ? void 0 : dateStatus.hasDates) && /* @__PURE__ */ jsxs(HStack, {
      direction: "row",
      divider: dateStatus.init !== void 0 && dateStatus.init.length > 0 && dateStatus.end !== void 0 && progress.icon !== null && dateStatus.end.length > 0 ? /* @__PURE__ */ jsx(Box, {
        h: ".5rem",
        w: "1px",
        bg: vars("colors-neutral-silverSand"),
        alignSelf: "center"
      }) : /* @__PURE__ */ jsx(Fragment, {}),
      children: [/* @__PURE__ */ jsx(DateStatus, {
        date: dateStatus.init
      }), /* @__PURE__ */ jsx(DateStatus, {
        date: dateStatus.end
      })]
    }), /* @__PURE__ */ jsx(Heading, {
      as: "h2",
      fontSize: "1rem",
      mt: ".3125rem",
      fontWeight: "700",
      lineHeight: "1.3",
      children: name
    }), /* @__PURE__ */ jsx(Flex, {
      mt: "1rem",
      justify: "space-between",
      children: /* @__PURE__ */ jsx(CourseStatus, {
        progress,
        status
      })
    }), information != null && (information == null ? void 0 : information.length) > 0 && /* @__PURE__ */ jsx(List, {
      spacing: ".625rem",
      paddingInlineStart: "0",
      pt: ".625rem",
      m: ".625rem 0 0",
      lineHeight: ".875rem",
      borderTop: vars("borders-light"),
      children: information.map((item, index2) => {
        var _a;
        return /* @__PURE__ */ jsxs(ListItem, {
          display: "flex",
          children: [/* @__PURE__ */ jsx(IconSelection, {
            type: item.icon
          }), /* @__PURE__ */ jsx(Box, {
            display: "inline-block",
            ml: ".625rem",
            children: item.href !== void 0 && ((_a = item.href) == null ? void 0 : _a.length) > 0 ? /* @__PURE__ */ jsx(Link, {
              isExternal: true,
              href: item.href,
              color: vars("colors-main-deepSkyBlue"),
              textDecor: "underline",
              fontWeight: "500",
              fontSize: ".75rem",
              children: item.text
            }) : /* @__PURE__ */ jsx(Text, {
              m: "0",
              color: vars("colors-neutral-gray"),
              fontSize: ".75rem",
              children: item.text
            })
          })]
        }, index2);
      })
    })]
  });
}
Section.displayName = "Section";
const dataBase = {
  name: "Orientaci\xF3n en la prevenci\xF3n de contagio de COVID-19",
  background: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU",
  logo: "https://procalidad.cl/wp-content/uploads/2021/05/logo-achs.png",
  logoAlt: "op",
  status: {
    id: 6,
    name: "NEXT",
    detail: "",
    style: ""
  },
  Profile: {
    id: 4,
    name: "Alumno"
  },
  progress: {
    label: "Tienes hasta el Lunes 16 de Enero para de 2022 inscribirte",
    icon: "schedule",
    progress: 0,
    isApproved: false,
    finalGrade: ""
  },
  dateStatus: {
    hasDates: true,
    init: "Inicia 17 ene 2022",
    end: "Finaliza 10 ene 2023"
  },
  information: [
    {
      icon: "schedule",
      text: "Certificado por ACHS",
      href: "http://google.com"
    },
    {
      icon: "certificate",
      text: "Certificado por ACHS",
      href: ""
    },
    {
      icon: "circularCheck",
      text: "Certificado por ACHS",
      href: "http://google.com"
    },
    {
      icon: "circularInformation",
      text: "Certificado por ACHS",
      href: ""
    }
  ],
  action: {
    enabled: true,
    text: "Tu curso a\xFAn no comienza",
    hasIcon: false,
    href: "https://platform.eclass.io/",
    targetBlank: false
  },
  labels: [
    {
      id: "OBLIGATORY",
      text: "Obligatorio"
    }
  ]
};
const dataStates = {
  noHabilitado: {
    ...dataBase,
    id: 1,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 1,
      name: "noHabilitado"
    },
    progress: {
      ...dataBase.progress,
      label: "Inscripci\xF3n no habilitada",
      icon: "circularInformation"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false
    },
    information: null,
    action: {
      ...dataBase.action,
      href: "#",
      text: "Ver informaci\xF3n del curso"
    },
    labels: []
  },
  inscripcionFutura: {
    ...dataBase,
    id: 2,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 1,
      name: "noHabilitado"
    },
    progress: {
      ...dataBase.progress,
      label: "Podr\xE1s inscribirte a partir del 31 de marzo de 2022",
      icon: "circularInformation"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false
    },
    information: null,
    action: {
      ...dataBase.action,
      href: "#",
      text: "Ver informaci\xF3n del curso"
    },
    labels: [
      {
        id: "NEW",
        text: "Nuevo"
      }
    ]
  },
  inscripcionFinalizo: {
    ...dataBase,
    id: 3,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 1,
      name: "noHabilitado"
    },
    progress: {
      ...dataBase.progress,
      label: "El per\xEDodo de inscripci\xF3n finaliz\xF3 el 31 de marzo de 2022",
      icon: "circularInformation"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false
    },
    information: null,
    action: {
      ...dataBase.action,
      href: "#",
      text: "Ver informaci\xF3n del curso"
    },
    labels: [
      {
        id: "NEW",
        text: "Nuevo"
      }
    ]
  },
  preInscripcion: {
    ...dataBase,
    logo: "https://cdn.eclass.com/img/productos/logos/logo-utec-square.jpg",
    background: "https://cdn.eclass.com/img/cursos/default1.png",
    id: 4,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 2,
      name: "preInscripcion"
    },
    progress: {
      ...dataBase.progress,
      label: "Tienes hasta el Lunes 16 de Enero para de 2022 inscribirte",
      icon: "schedule"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false
    },
    information: [
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Solicitar inscripci\xF3n",
      targetBlank: true
    },
    labels: []
  },
  preInscripcion2: {
    ...dataBase,
    id: 5,
    hasFinanzeFreezed: false,
    logo: "",
    status: {
      ...dataBase.status,
      id: 2,
      name: "preInscripcion"
    },
    progress: {
      ...dataBase.progress,
      label: "Estamos procesando tu solicitud de inscripci\xF3n",
      icon: "circularInformation"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false
    },
    information: [
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ver informaci\xF3n del curso",
      targetBlank: true
    },
    labels: []
  },
  inscripcion: {
    ...dataBase,
    background: "https://cdn.eclass.com/img/cursos/default2.png",
    id: 6,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 3,
      name: "inscripcion"
    },
    progress: {
      ...dataBase.progress,
      label: "Tienes hasta el Lunes 16 de Enero para de 2022 inscribirte",
      icon: "schedule"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false
    },
    information: [
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Inscr\xEDbete",
      targetBlank: true
    }
  },
  inscripcion2: {
    ...dataBase,
    id: 7,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 3,
      name: "inscripcion"
    },
    progress: {
      ...dataBase.progress,
      label: "Tienes hasta el Lunes 16 de Enero para de 2022 inscribirte",
      icon: "schedule"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: true
    },
    information: [],
    action: {
      ...dataBase.action,
      text: "Inscr\xEDbete",
      targetBlank: true
    },
    labels: [
      {
        id: "OBLIGATORY",
        text: "Obligatorio"
      },
      {
        id: "NEW",
        text: "Nuevo"
      }
    ]
  },
  noDisponible: {
    ...dataBase,
    id: 8,
    hasFinanzeFreezed: false,
    logo: "",
    background: "https://cdn.eclass.com/img/cursos/default2.png",
    status: {
      ...dataBase.status,
      id: 4,
      name: "no disponible"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso iniciar\xE1 el Lunes 16 de Enero de 2023",
      icon: "schedule"
    },
    dateStatus: {
      init: "Inicia 17 ene 2022",
      end: "",
      hasDates: true
    },
    information: [
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ver informaci\xF3n del curso",
      targetBlank: true
    },
    labels: []
  },
  noDisponible2: {
    ...dataBase,
    background: "https://cdn.eclass.com/img/cursos/default3.png",
    logo: "https://cdn.eclass.com/img/productos/logos/logo-eclass-academy-square.jpg",
    id: 9,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 4,
      name: "no disponible"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso iniciar\xE1 el Lunes 16 de Enero de 2023",
      icon: "schedule"
    },
    dateStatus: {
      init: "Inicia 17 ene 2022",
      end: "",
      hasDates: true
    },
    information: [
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      enabled: false
    },
    labels: []
  },
  noDisponible3: {
    ...dataBase,
    background: "https://cdn.eclass.com/img/cursos/default3.png",
    logo: "https://cdn.eclass.com/img/productos/logos/logo-eclass-academy-square.jpg",
    id: 10,
    hasFinanzeFreezed: false,
    Profile: {
      id: 1,
      name: "Administrador"
    },
    status: {
      ...dataBase.status,
      id: 4,
      name: "no disponible"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso iniciar\xE1 el Lunes 16 de Enero de 2023",
      icon: "schedule"
    },
    dateStatus: {
      init: "Inicia 17 ene 2022",
      end: "",
      hasDates: true
    },
    information: [
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      enabled: false
    },
    labels: []
  },
  activado: {
    ...dataBase,
    id: 11,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 5,
      name: "disponible"
    },
    progress: {
      ...dataBase.progress,
      label: "\xA1Ya puedes ingresar a tu curso y comenzar a estudiar!",
      icon: "progress",
      progress: 0
    },
    dateStatus: {
      init: "",
      end: "Finaliza 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Informaci\xF3n del curso",
        href: "#"
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: "Comenzar a estudiar"
    },
    labels: []
  },
  sinEstudiar: {
    ...dataBase,
    id: 12,
    hasFinanzeFreezed: false,
    logo: "",
    status: {
      ...dataBase.status,
      id: 6,
      name: "sinEstudiar"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso inici\xF3 hace 3 d\xEDas, \xA1Comienza a estudiar!",
      icon: "progress",
      progress: 0
    },
    dateStatus: {
      init: "",
      end: "Finaliza 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Informaci\xF3n del curso",
        href: "#"
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: "Comenzar a estudiar"
    },
    labels: []
  },
  sinEstudiar2: {
    ...dataBase,
    id: 13,
    hasFinanzeFreezed: false,
    background: "https://cdn.eclass.com/img/cursos/default2.png",
    status: {
      ...dataBase.status,
      id: 6,
      name: "sinEstudiar"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso finaliza en 7 d\xEDas",
      icon: "progress",
      progress: 0
    },
    dateStatus: {
      init: "",
      end: "Finaliza 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Informaci\xF3n del curso",
        href: "#"
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: "Comenzar a estudiar"
    },
    labels: []
  },
  sinEstudiar3: {
    ...dataBase,
    id: 14,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 6,
      name: "sinEstudiar"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso finaliza ma\xF1ana a las 23:30 hrs. GMT -04:00",
      icon: "progress",
      progress: 0
    },
    dateStatus: {
      init: "",
      end: "Finaliza 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Informaci\xF3n del curso",
        href: "#"
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: "Comenzar a estudiar"
    },
    labels: []
  },
  sinEstudiar4: {
    ...dataBase,
    logo: "https://cdn.eclass.com/img/productos/logos/logo-uandes-square.jpg",
    id: 15,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 6,
      name: "sinEstudiar"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso finaliza hoy a las 23:30 hrs. GMT -04:00",
      icon: "progress",
      progress: 0
    },
    dateStatus: {
      init: "",
      end: "Finaliza 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Informaci\xF3n del curso",
        href: "#"
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: "Comenzar a estudiar"
    },
    labels: []
  },
  continuar: {
    ...dataBase,
    id: 16,
    hasFinanzeFreezed: true,
    status: {
      ...dataBase.status,
      id: 7,
      name: "continuar"
    },
    logo: "https://cdn.eclass.com/img/productos/logos/logo-eclass-academy-square.jpg",
    progress: {
      ...dataBase.progress,
      label: "Has completado un 25% de tu curso",
      icon: "progress",
      progress: 25
    },
    dateStatus: {
      init: "",
      end: "Finaliza 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Informaci\xF3n del curso",
        href: "#"
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: "Continuar estudiando"
    },
    labels: []
  },
  continuar2: {
    ...dataBase,
    id: 17,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 7,
      name: "continuar"
    },
    logo: "https://cdn.eclass.com/files/branding/programa/2119/imagePdf-1628188569.jpg",
    progress: {
      ...dataBase.progress,
      label: "Has completado un 100% de tu curso",
      icon: "progress",
      progress: 100
    },
    dateStatus: {
      init: "",
      end: "Finaliza 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Informaci\xF3n del curso",
        href: "#"
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ir a mi curso"
    },
    labels: []
  },
  pendiente: {
    ...dataBase,
    background: "https://cdn.eclass.com/img/cursos/default3.png",
    id: 18,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 8,
      name: "pendiente"
    },
    progress: {
      ...dataBase.progress,
      label: "\xA1Curso finalizado! Estamos calculando tu promedio final",
      icon: "circularInformation"
    },
    dateStatus: {
      init: "",
      end: "Finaliza 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Pertenece a: Diplomado en Gesti\xF3n de la Sustentabilidad en Organizaciones",
        href: ""
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ir a mi curso"
    },
    labels: []
  },
  terminado: {
    ...dataBase,
    id: 19,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 7,
      name: "QUALIFIED"
    },
    progress: {
      ...dataBase.progress,
      label: "Curso aprobado con nota",
      icon: "circularCheck",
      isApproved: true,
      finalGrade: "6,5"
    },
    dateStatus: {
      init: "",
      end: "Finaliz\xF3 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Pertenece a: Diplomado en Gesti\xF3n de la Sustentabilidad en Organizaciones",
        href: ""
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ir a mi curso"
    },
    labels: []
  },
  terminado2: {
    ...dataBase,
    logo: "https://cdn.eclass.com/img/productos/logos/logo-eclass-academy-square.jpg",
    id: 20,
    hasFinanzeFreezed: false,
    Profile: {
      id: 1,
      name: "Administrador"
    },
    status: {
      ...dataBase.status,
      id: 7,
      name: "QUALIFIED"
    },
    progress: {
      ...dataBase.progress,
      label: "Curso reprobado con nota",
      icon: "circularCheck",
      isApproved: false,
      finalGrade: "3,5"
    },
    dateStatus: {
      init: "",
      end: "Finaliz\xF3 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Pertenece a: Diplomado en Gesti\xF3n de la Sustentabilidad en Organizaciones",
        href: ""
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ir a mi curso"
    },
    labels: []
  },
  terminado3: {
    ...dataBase,
    id: 21,
    hasFinanzeFreezed: false,
    logo: "",
    status: {
      ...dataBase.status,
      id: 9,
      name: "terminado"
    },
    progress: {
      ...dataBase.progress,
      label: "Curso finalizado",
      icon: "circularCheck"
    },
    dateStatus: {
      init: "",
      end: "Finaliz\xF3 16 nov 2023",
      hasDates: true
    },
    information: [
      {
        icon: "circularInformation",
        text: "Pertenece a: Diplomado en Gesti\xF3n de la Sustentabilidad en Organizaciones",
        href: ""
      },
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ir a mi curso"
    },
    labels: []
  },
  proximamente: {
    ...dataBase,
    id: 22,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 3,
      name: "inscripcion"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso iniciara el Lunes 16 de Enero de 2023",
      icon: "schedule"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: true
    },
    information: [
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ver informacion del curso",
      targetBlank: true
    },
    soonCourse: {
      show: true,
      text: "Pr\xF3ximamente"
    },
    labels: []
  },
  proximamente2: {
    ...dataBase,
    id: 23,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 3,
      name: "inscripcion"
    },
    progress: {
      ...dataBase.progress,
      label: "Tu curso iniciara el Lunes 16 de Enero de 2023",
      icon: "schedule"
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: true
    },
    information: [
      {
        icon: "certificate",
        text: "Certificado por ACHS",
        href: ""
      }
    ],
    action: {
      ...dataBase.action,
      text: "Ver informacion del curso",
      targetBlank: true
    },
    soonCourse: {
      show: true,
      text: "Pr\xF3ximamente"
    },
    labels: [
      {
        id: "OBLIGATORY",
        text: "Obligatorio"
      }
    ]
  }
};
const dataFake = Object.keys(dataStates).map((key) => dataStates[key]);
const PROFILE_STUDENT = 4;
const isCourseActive = (enabled, profileID = PROFILE_STUDENT) => {
  return enabled || profileID !== PROFILE_STUDENT;
};
function maxWidthCoursesList(nCols = 4) {
  const maxWidth = nCols * wCourse + columnGap * (nCols - 1);
  return {
    px: `${maxWidth * 16}px`,
    rem: `${maxWidth}rem`,
    remValue: maxWidth
  };
}
function PaymentModal({
  isOpen,
  onOpen,
  onClose,
  showOverlay,
  modalPaymentText
}) {
  const cssButton = {
    backgroundColor: "transparent"
  };
  function OverlayTwo() {
    return /* @__PURE__ */ jsx(ModalOverlay, {
      bg: "#2F2F2F",
      opacity: "0.32 !important",
      backdropBlur: "2px"
    });
  }
  const [overlay, setOverlay] = React.useState(/* @__PURE__ */ jsx(OverlayTwo, {}));
  React.useEffect(() => {
    if (showOverlay) {
      setOverlay(/* @__PURE__ */ jsx(OverlayTwo, {}));
    }
  }, [showOverlay]);
  return /* @__PURE__ */ jsxs(Modal, {
    isCentered: true,
    isOpen,
    onClose,
    size: "xl",
    blockScrollOnMount: false,
    closeOnOverlayClick: false,
    children: [overlay, /* @__PURE__ */ jsxs(ModalContent, {
      marginTop: "0",
      marginBottom: ["25.75rem", "15.75rem"],
      children: [/* @__PURE__ */ jsxs(ModalHeader, {
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        p: "2rem 2rem 0 2rem",
        children: [/* @__PURE__ */ jsx(AlertInfo, {
          w: "52",
          h: "45",
          viewBox: "0 0 45 52"
        }), modalPaymentText.title]
      }), /* @__PURE__ */ jsx(ModalCloseButton, {
        size: "md",
        color: vars("colors-main-blueGrey"),
        _hover: cssButton,
        _focus: cssButton,
        _active: cssButton
      }), /* @__PURE__ */ jsx(ModalBody, {
        p: "1rem 2rem 2rem 2rem",
        children: /* @__PURE__ */ jsx(Text, {
          align: "center",
          children: modalPaymentText.body
        })
      }), /* @__PURE__ */ jsx(ModalFooter, {
        justifyContent: "center",
        borderTop: "1px solid",
        borderTopColor: vars("colors-neutral-platinum"),
        p: "1rem",
        children: /* @__PURE__ */ jsx(Button, {
          onClick: onClose,
          color: vars("colors-main-deepSkyBlue"),
          backgroundColor: "transparent",
          fontWeight: "500",
          height: "auto",
          lineHeight: "1.172rem",
          _hover: cssButton,
          _focus: cssButton,
          _active: cssButton,
          children: modalPaymentText.buttonName
        })
      })]
    })]
  });
}
Modal.displayName = "Modal";
function Footer({
  modalPaymentText
}) {
  const {
    action,
    Profile: Profile2,
    hasFinanzeFreezed
  } = React.useContext(CourseBoxContext);
  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclosure();
  const [overlay, setOverlay] = React.useState(false);
  const cssButton = {
    backgroundColor: "transparent"
  };
  const handleClick = () => {
    setOverlay(true);
    onOpen();
  };
  if (action == null) {
    return null;
  }
  return /* @__PURE__ */ jsxs(Center, {
    as: "footer",
    mt: "1rem",
    p: "1rem",
    borderTop: "1px solid",
    borderTopColor: vars("colors-neutral-platinum"),
    children: [isCourseActive(action.enabled, Profile2 == null ? void 0 : Profile2.id) ? /* @__PURE__ */ jsxs(Fragment, {
      children: [hasFinanzeFreezed && modalPaymentText ? /* @__PURE__ */ jsx(Box, {
        color: vars("colors-main-deepSkyBlue"),
        backgroundColor: "transparent",
        fontWeight: "500",
        height: "auto",
        mr: action.hasIcon ? "1.5rem" : "0",
        lineHeight: "1.172rem",
        p: "0",
        zIndex: "inherit !important",
        _hover: cssButton,
        _focus: cssButton,
        _active: cssButton,
        onClick: () => handleClick(),
        fontSize: "1rem !important",
        children: action.text
      }) : /* @__PURE__ */ jsx(Text, {
        color: vars("colors-main-deepSkyBlue"),
        fontWeight: "500",
        mr: action.hasIcon ? "1.5rem" : "0",
        lineHeight: "1.172rem",
        mt: "0",
        mb: "0",
        children: action.text
      }), action.hasIcon && /* @__PURE__ */ jsx(ArrowRight, {
        color: vars("colors-main-deepSkyBlue")
      })]
    }) : /* @__PURE__ */ jsx(Text, {
      fontWeight: "500",
      lineHeight: "1.172rem",
      color: vars("colors-neutral-spanishGrey"),
      m: "0",
      children: action.text
    }), modalPaymentText && /* @__PURE__ */ jsx(PaymentModal, {
      isOpen,
      onClose,
      showOverlay: overlay,
      onOpen,
      modalPaymentText
    })]
  });
}
Footer.displayName = "Footer";
const CourseBoxContext = React.createContext({});
function WithRipples$1({
  enabled,
  children
}) {
  return enabled ? /* @__PURE__ */ jsx(Ripples, {
    children
  }) : /* @__PURE__ */ jsx(Fragment, {
    children
  });
}
function BoxTraditional({
  data,
  modalPaymentText
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars("colors-neutral-silverSand")}`
  };
  return /* @__PURE__ */ jsx(CourseBoxContext.Provider, {
    value: data,
    children: /* @__PURE__ */ jsx(LinkBox, {
      as: "article",
      border: vars("borders-light"),
      borderRadius: vars("radii-big"),
      cursor: "pointer",
      transition: "box-shadow .3s",
      _active: cssActive,
      _hover: cssActive,
      _focus: cssActive,
      overflow: "hidden",
      children: /* @__PURE__ */ jsx(WithRipples$1, {
        enabled: isCourseActive((_b = (_a = data.action) == null ? void 0 : _a.enabled) != null ? _b : false, (_c = data.Profile) == null ? void 0 : _c.id),
        children: /* @__PURE__ */ jsxs(Flex, {
          direction: "column",
          justify: "space-between",
          h: "100%",
          children: [/* @__PURE__ */ jsxs(Box, {
            className: "CourseList-TraditionalBox",
            children: [!data.hasFinanzeFreezed && isCourseActive((_e = (_d = data.action) == null ? void 0 : _d.enabled) != null ? _e : false, (_f = data.Profile) == null ? void 0 : _f.id) && /* @__PURE__ */ jsx(LinkOverlay, {
              href: (_g = data.action) == null ? void 0 : _g.href,
              isExternal: (_h = data.action) == null ? void 0 : _h.targetBlank
            }), /* @__PURE__ */ jsx(Header$1, {}), /* @__PURE__ */ jsx(Section, {})]
          }), /* @__PURE__ */ jsx(Footer, {
            modalPaymentText
          })]
        })
      })
    })
  });
}
BoxTraditional.displayName = "BoxTraditional";
function WithRipples({
  enabled,
  children
}) {
  return enabled ? /* @__PURE__ */ jsx(Ripples, {
    children
  }) : /* @__PURE__ */ jsx(Fragment, {
    children
  });
}
function BoxImage({
  backgroundImg,
  title,
  data,
  size = "large",
  m: m2
}) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const boxHeight = {
    large: "286px",
    small: "197px"
  };
  return /* @__PURE__ */ jsx(WithRipples, {
    enabled: isCourseActive((_b = (_a = data == null ? void 0 : data.action) == null ? void 0 : _a.enabled) != null ? _b : false, (_c = data == null ? void 0 : data.Profile) == null ? void 0 : _c.id),
    children: /* @__PURE__ */ jsxs(Box, {
      className: "CourseList-ImageBox",
      sx: {
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 100%), url(${backgroundImg})`,
        color: vars("colors-neutral-white"),
        cursor: "pointer",
        height: boxHeight[size],
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "10px",
        padding: "16px",
        display: "flex",
        font: "Roboto",
        flexDirection: "column",
        margin: m2,
        justifyContent: "end",
        textAlign: "left"
      },
      children: [!(data == null ? void 0 : data.hasFinanzeFreezed) && isCourseActive((_e = (_d = data == null ? void 0 : data.action) == null ? void 0 : _d.enabled) != null ? _e : false, (_f = data == null ? void 0 : data.Profile) == null ? void 0 : _f.id) && /* @__PURE__ */ jsx(LinkOverlay, {
        href: (_g = data == null ? void 0 : data.action) == null ? void 0 : _g.href,
        isExternal: (_h = data == null ? void 0 : data.action) == null ? void 0 : _h.targetBlank
      }), /* @__PURE__ */ jsxs(Box, {
        className: "textBox",
        bottom: "20px",
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        children: [/* @__PURE__ */ jsx(Box, {
          as: "h2",
          className: "courseName",
          fontWeight: "700",
          fontSize: "16px",
          lineHeight: "21px",
          marginBlockEnd: "0",
          margin: "0",
          children: title
        }), (_i = data == null ? void 0 : data.information) == null ? void 0 : _i.map((item, index2) => item.icon === "certificate" && /* @__PURE__ */ jsx(Box, {
          as: "p",
          className: "certificateText",
          fontSize: "14px",
          fontWeight: "400",
          lineHeight: "12px",
          margin: "0",
          children: item.text
        }, index2))]
      })]
    })
  });
}
BoxImage.displayName = "BoxImage";
const Boxes = ({
  type = "TRADITIONAL",
  data,
  modalPaymentText
}) => {
  var _a, _b;
  const common = {
    data,
    modalPaymentText
  };
  const commonImg = {
    data,
    backgroundImg: (_a = data.background) != null ? _a : "",
    title: (_b = data.name) != null ? _b : ""
  };
  const typeBox = {
    TRADITIONAL: /* @__PURE__ */ jsx(BoxTraditional, {
      ...common
    }),
    TRADITIONAL_LANDSCAPE: /* @__PURE__ */ jsx(BoxTraditional, {
      ...common
    }),
    IMAGE_LARGE: /* @__PURE__ */ jsx(BoxImage, {
      ...commonImg
    }),
    IMAGE_SMALL: /* @__PURE__ */ jsx(BoxImage, {
      ...commonImg,
      size: "small"
    })
  };
  return typeBox[type];
};
const columnGap = 1.25;
const wCourse = 17.8125;
function CourseList({
  courses,
  modalPaymentText,
  m: m2 = "0 auto",
  typeBox = "TRADITIONAL"
}) {
  if (courses === void 0) {
    return null;
  }
  return /* @__PURE__ */ jsx(Box, {
    display: "grid",
    gridColumnGap: `${columnGap}rem`,
    gridRowGap: "1.75rem",
    gridTemplateColumns: `repeat(auto-fill, minmax(${wCourse}rem, 1fr))`,
    m: m2,
    w: "100%",
    children: courses == null ? void 0 : courses.map((course) => /* @__PURE__ */ jsx(Boxes, {
      data: course,
      type: typeBox,
      modalPaymentText
    }, course.id))
  });
}
CourseList.displayName = "CourseList";
const alertStates = {
  success: {
    icon: /* @__PURE__ */ jsx(SuccessWhite, {}),
    bg: vars("colors-alert-ice"),
    id: "success"
  },
  error: {
    icon: /* @__PURE__ */ jsx(ErrorWhite, {}),
    bg: vars("colors-alert-veryLightPinkThree"),
    id: "error"
  },
  info: {
    icon: /* @__PURE__ */ jsx(InfoWhite, {}),
    bg: vars("colors-alert-veryLightBlue"),
    id: "info"
  },
  warning: {
    icon: /* @__PURE__ */ jsx(WarningWhite, {}),
    bg: vars("colors-alert-pale"),
    id: "warning"
  }
};
const alertColorStates = {
  success: {
    icon: /* @__PURE__ */ jsx(SuccessColor, {}),
    bg: vars("colors-alert-ice"),
    id: "success"
  },
  error: {
    icon: /* @__PURE__ */ jsx(ErrorColor, {}),
    bg: vars("colors-alert-veryLightPinkThree"),
    id: "error"
  },
  info: {
    icon: /* @__PURE__ */ jsx(InfoColor, {}),
    bg: vars("colors-alert-veryLightBlue"),
    id: "info"
  },
  warning: {
    icon: /* @__PURE__ */ jsx(WarningColor, {}),
    bg: vars("colors-alert-pale"),
    id: "warning"
  }
};
function Alert({
  children,
  canDismiss = false,
  buttonText,
  buttonIcon,
  buttonLink = false,
  fullWidth = false,
  isFlash = false,
  onClick,
  state,
  m: m2,
  endTextLink,
  onClickLink
}) {
  const [isMobile] = useMediaQuery("(max-width: 425px)");
  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  };
  let buttonType;
  if (buttonText) {
    buttonType = buttonLink ? "link" : "normal";
  }
  return /* @__PURE__ */ jsxs(Box, {
    className: isFlash ? "flashNotification" : "e_alert",
    alignItems: !isMobile ? "center" : "unset",
    backgroundColor: alertStates[state].bg,
    borderRadius: "8px",
    display: "flex",
    flexFlow: isMobile ? "column" : "row",
    gap: !isFlash ? "16px" : "",
    justifyContent: !isMobile ? "space-between" : "",
    margin: m2,
    width: fullWidth ? "100%" : "fit-content",
    maxWidth: fullWidth ? "none" : "796px",
    p: "1rem",
    pr: canDismiss ? "1.75rem" : "1rem",
    position: "relative",
    children: [/* @__PURE__ */ jsxs(Box, {
      display: "flex",
      gap: "10px",
      className: "alertContent",
      sx: {
        ".linkButton": {
          fontSize: "16px"
        },
        a: {
          fontWeight: "500",
          color: vars("colors-main-deepSkyBlue"),
          textDecoration: "underline"
        },
        "a:hover": {
          color: vars("colors-neutral-darkCharcoal")
        }
      },
      children: [/* @__PURE__ */ jsx(Box, {
        className: "iconContainer",
        sx: {
          svg: {
            width: "auto"
          }
        },
        children: alertStates[state].icon
      }), /* @__PURE__ */ jsxs(Box, {
        display: "flex",
        alignItems: "center",
        children: [/* @__PURE__ */ jsxs(Box, {
          as: "p",
          alignSelf: "center",
          fontFamily: "Roboto",
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "28px",
          color: vars("colors-neutral-darkCharcoal"),
          children: [children, endTextLink && onClickLink && /* @__PURE__ */ jsx(BtnLink, {
            onClick: onClickLink,
            children: endTextLink
          })]
        }), buttonType === "link" && /* @__PURE__ */ jsx(BtnLink, {
          onClick: handleClick,
          children: buttonText
        })]
      })]
    }), buttonType === "normal" && /* @__PURE__ */ jsx(BtnPrimary, {
      isFullWidth: !!isMobile,
      leftIcon: buttonIcon,
      onClick: handleClick,
      children: buttonText
    }), canDismiss && /* @__PURE__ */ jsx(Box, {
      "data-testid": "closeButton",
      cursor: "pointer",
      marginLeft: "12px",
      sx: {
        svg: {
          position: "absolute",
          top: "16px",
          right: "12px"
        }
      },
      onClick,
      children: /* @__PURE__ */ jsx(Close, {})
    })]
  });
}
let e = { data: "" }, t = (t2) => "object" == typeof window ? ((t2 ? t2.querySelector("#_goober") : window._goober) || Object.assign((t2 || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t2 || e, l = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, a = /\/\*[^]*?\*\/|  +/g, n$1 = /\n+/g, o = (e2, t2) => {
  let r = "", l2 = "", a2 = "";
  for (let n2 in e2) {
    let c2 = e2[n2];
    "@" == n2[0] ? "i" == n2[1] ? r = n2 + " " + c2 + ";" : l2 += "f" == n2[1] ? o(c2, n2) : n2 + "{" + o(c2, "k" == n2[1] ? "" : t2) + "}" : "object" == typeof c2 ? l2 += o(c2, t2 ? t2.replace(/([^,])+/g, (e3) => n2.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t3) => /&/.test(t3) ? t3.replace(/&/g, e3) : e3 ? e3 + " " + t3 : t3)) : n2) : null != c2 && (n2 = /^--/.test(n2) ? n2 : n2.replace(/[A-Z]/g, "-$&").toLowerCase(), a2 += o.p ? o.p(n2, c2) : n2 + ":" + c2 + ";");
  }
  return r + (t2 && a2 ? t2 + "{" + a2 + "}" : a2) + l2;
}, c = {}, s = (e2) => {
  if ("object" == typeof e2) {
    let t2 = "";
    for (let r in e2)
      t2 += r + s(e2[r]);
    return t2;
  }
  return e2;
}, i = (e2, t2, r, i2, p2) => {
  let u2 = s(e2), d2 = c[u2] || (c[u2] = ((e3) => {
    let t3 = 0, r2 = 11;
    for (; t3 < e3.length; )
      r2 = 101 * r2 + e3.charCodeAt(t3++) >>> 0;
    return "go" + r2;
  })(u2));
  if (!c[d2]) {
    let t3 = u2 !== e2 ? e2 : ((e3) => {
      let t4, r2, o2 = [{}];
      for (; t4 = l.exec(e3.replace(a, "")); )
        t4[4] ? o2.shift() : t4[3] ? (r2 = t4[3].replace(n$1, " ").trim(), o2.unshift(o2[0][r2] = o2[0][r2] || {})) : o2[0][t4[1]] = t4[2].replace(n$1, " ").trim();
      return o2[0];
    })(e2);
    c[d2] = o(p2 ? { ["@keyframes " + d2]: t3 } : t3, r ? "" : "." + d2);
  }
  let f2 = r && c.g ? c.g : null;
  return r && (c.g = c[d2]), ((e3, t3, r2, l2) => {
    l2 ? t3.data = t3.data.replace(l2, e3) : -1 === t3.data.indexOf(e3) && (t3.data = r2 ? e3 + t3.data : t3.data + e3);
  })(c[d2], t2, i2, f2), d2;
}, p = (e2, t2, r) => e2.reduce((e3, l2, a2) => {
  let n2 = t2[a2];
  if (n2 && n2.call) {
    let e4 = n2(r), t3 = e4 && e4.props && e4.props.className || /^go/.test(e4) && e4;
    n2 = t3 ? "." + t3 : e4 && "object" == typeof e4 ? e4.props ? "" : o(e4, "") : false === e4 ? "" : e4;
  }
  return e3 + l2 + (null == n2 ? "" : n2);
}, "");
function u$1(e2) {
  let r = this || {}, l2 = e2.call ? e2(r.p) : e2;
  return i(l2.unshift ? l2.raw ? p(l2, [].slice.call(arguments, 1), r.p) : l2.reduce((e3, t2) => Object.assign(e3, t2 && t2.call ? t2(r.p) : t2), {}) : l2, t(r.target), r.g, r.o, r.k);
}
let d, f, g;
u$1.bind({ g: 1 });
let h$1 = u$1.bind({ k: 1 });
function m(e2, t2, r, l2) {
  o.p = t2, d = e2, f = r, g = l2;
}
function j(e2, t2) {
  let r = this || {};
  return function() {
    let l2 = arguments;
    function a2(n2, o2) {
      let c2 = Object.assign({}, n2), s2 = c2.className || a2.className;
      r.p = Object.assign({ theme: f && f() }, c2), r.o = / *go\d+/.test(s2), c2.className = u$1.apply(r, l2) + (s2 ? " " + s2 : ""), t2 && (c2.ref = o2);
      let i2 = e2;
      return e2[0] && (i2 = c2.as || e2, delete c2.as), g && i2[0] && g(c2), d(i2, c2);
    }
    return t2 ? t2(a2) : a2;
  };
}
var W = (e2) => typeof e2 == "function", T = (e2, t2) => W(e2) ? e2(t2) : e2;
var U = (() => {
  let e2 = 0;
  return () => (++e2).toString();
})(), b = (() => {
  let e2;
  return () => {
    if (e2 === void 0 && typeof window < "u") {
      let t2 = matchMedia("(prefers-reduced-motion: reduce)");
      e2 = !t2 || t2.matches;
    }
    return e2;
  };
})();
var Q = 20;
var S = /* @__PURE__ */ new Map(), X = 1e3, $ = (e2) => {
  if (S.has(e2))
    return;
  let t2 = setTimeout(() => {
    S.delete(e2), u({ type: 4, toastId: e2 });
  }, X);
  S.set(e2, t2);
}, J = (e2) => {
  let t2 = S.get(e2);
  t2 && clearTimeout(t2);
}, v = (e2, t2) => {
  switch (t2.type) {
    case 0:
      return { ...e2, toasts: [t2.toast, ...e2.toasts].slice(0, Q) };
    case 1:
      return t2.toast.id && J(t2.toast.id), { ...e2, toasts: e2.toasts.map((r) => r.id === t2.toast.id ? { ...r, ...t2.toast } : r) };
    case 2:
      let { toast: o2 } = t2;
      return e2.toasts.find((r) => r.id === o2.id) ? v(e2, { type: 1, toast: o2 }) : v(e2, { type: 0, toast: o2 });
    case 3:
      let { toastId: s2 } = t2;
      return s2 ? $(s2) : e2.toasts.forEach((r) => {
        $(r.id);
      }), { ...e2, toasts: e2.toasts.map((r) => r.id === s2 || s2 === void 0 ? { ...r, visible: false } : r) };
    case 4:
      return t2.toastId === void 0 ? { ...e2, toasts: [] } : { ...e2, toasts: e2.toasts.filter((r) => r.id !== t2.toastId) };
    case 5:
      return { ...e2, pausedAt: t2.time };
    case 6:
      let a2 = t2.time - (e2.pausedAt || 0);
      return { ...e2, pausedAt: void 0, toasts: e2.toasts.map((r) => ({ ...r, pauseDuration: r.pauseDuration + a2 })) };
  }
}, A = [], P = { toasts: [], pausedAt: void 0 }, u = (e2) => {
  P = v(P, e2), A.forEach((t2) => {
    t2(P);
  });
}, Y = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, I = (e2 = {}) => {
  let [t2, o2] = useState(P);
  useEffect(() => (A.push(o2), () => {
    let a2 = A.indexOf(o2);
    a2 > -1 && A.splice(a2, 1);
  }), [t2]);
  let s2 = t2.toasts.map((a2) => {
    var r, c2;
    return { ...e2, ...e2[a2.type], ...a2, duration: a2.duration || ((r = e2[a2.type]) == null ? void 0 : r.duration) || (e2 == null ? void 0 : e2.duration) || Y[a2.type], style: { ...e2.style, ...(c2 = e2[a2.type]) == null ? void 0 : c2.style, ...a2.style } };
  });
  return { ...t2, toasts: s2 };
};
var G = (e2, t2 = "blank", o2) => ({ createdAt: Date.now(), visible: true, type: t2, ariaProps: { role: "status", "aria-live": "polite" }, message: e2, pauseDuration: 0, ...o2, id: (o2 == null ? void 0 : o2.id) || U() }), h = (e2) => (t2, o2) => {
  let s2 = G(t2, e2, o2);
  return u({ type: 2, toast: s2 }), s2.id;
}, n = (e2, t2) => h("blank")(e2, t2);
n.error = h("error");
n.success = h("success");
n.loading = h("loading");
n.custom = h("custom");
n.dismiss = (e2) => {
  u({ type: 3, toastId: e2 });
};
n.remove = (e2) => u({ type: 4, toastId: e2 });
n.promise = (e2, t2, o2) => {
  let s2 = n.loading(t2.loading, { ...o2, ...o2 == null ? void 0 : o2.loading });
  return e2.then((a2) => (n.success(T(t2.success, a2), { id: s2, ...o2, ...o2 == null ? void 0 : o2.success }), a2)).catch((a2) => {
    n.error(T(t2.error, a2), { id: s2, ...o2, ...o2 == null ? void 0 : o2.error });
  }), e2;
};
var Z = (e2, t2) => {
  u({ type: 1, toast: { id: e2, height: t2 } });
}, ee = () => {
  u({ type: 5, time: Date.now() });
}, D = (e2) => {
  let { toasts: t2, pausedAt: o2 } = I(e2);
  useEffect(() => {
    if (o2)
      return;
    let r = Date.now(), c2 = t2.map((i2) => {
      if (i2.duration === 1 / 0)
        return;
      let d2 = (i2.duration || 0) + i2.pauseDuration - (r - i2.createdAt);
      if (d2 < 0) {
        i2.visible && n.dismiss(i2.id);
        return;
      }
      return setTimeout(() => n.dismiss(i2.id), d2);
    });
    return () => {
      c2.forEach((i2) => i2 && clearTimeout(i2));
    };
  }, [t2, o2]);
  let s2 = useCallback(() => {
    o2 && u({ type: 6, time: Date.now() });
  }, [o2]), a2 = useCallback((r, c2) => {
    let { reverseOrder: i2 = false, gutter: d2 = 8, defaultPosition: p2 } = c2 || {}, g2 = t2.filter((m2) => (m2.position || p2) === (r.position || p2) && m2.height), E = g2.findIndex((m2) => m2.id === r.id), x = g2.filter((m2, R) => R < E && m2.visible).length;
    return g2.filter((m2) => m2.visible).slice(...i2 ? [x + 1] : [0, x]).reduce((m2, R) => m2 + (R.height || 0) + d2, 0);
  }, [t2]);
  return { toasts: t2, handlers: { updateHeight: Z, startPause: ee, endPause: s2, calculateOffset: a2 } };
};
var oe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, re = h$1`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, se = h$1`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, _ = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${oe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${re} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(e2) => e2.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${se} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`;
var ne = h$1`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, V = j("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(e2) => e2.secondary || "#e0e0e0"};
  border-right-color: ${(e2) => e2.primary || "#616161"};
  animation: ${ne} 1s linear infinite;
`;
var pe = h$1`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, de = h$1`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, w = j("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(e2) => e2.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${pe} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${de} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(e2) => e2.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`;
var ue = j("div")`
  position: absolute;
`, le = j("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, Te = h$1`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, fe = j("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Te} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, M = ({ toast: e2 }) => {
  let { icon: t2, type: o2, iconTheme: s2 } = e2;
  return t2 !== void 0 ? typeof t2 == "string" ? React.createElement(fe, null, t2) : t2 : o2 === "blank" ? null : React.createElement(le, null, React.createElement(V, { ...s2 }), o2 !== "loading" && React.createElement(ue, null, o2 === "error" ? React.createElement(_, { ...s2 }) : React.createElement(w, { ...s2 })));
};
var ye = (e2) => `
0% {transform: translate3d(0,${e2 * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, ge = (e2) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${e2 * -150}%,-1px) scale(.6); opacity:0;}
`, he = "0%{opacity:0;} 100%{opacity:1;}", xe = "0%{opacity:1;} 100%{opacity:0;}", be = j("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, Se = j("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, Ae = (e2, t2) => {
  let s2 = e2.includes("top") ? 1 : -1, [a2, r] = b() ? [he, xe] : [ye(s2), ge(s2)];
  return { animation: t2 ? `${h$1(a2)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${h$1(r)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, F = React.memo(({ toast: e2, position: t2, style: o2, children: s2 }) => {
  let a2 = e2.height ? Ae(e2.position || t2 || "top-center", e2.visible) : { opacity: 0 }, r = React.createElement(M, { toast: e2 }), c2 = React.createElement(Se, { ...e2.ariaProps }, T(e2.message, e2));
  return React.createElement(be, { className: e2.className, style: { ...a2, ...o2, ...e2.style } }, typeof s2 == "function" ? s2({ icon: r, message: c2 }) : React.createElement(React.Fragment, null, r, c2));
});
m(React.createElement);
var Ee = ({ id: e2, className: t2, style: o2, onHeightUpdate: s2, children: a2 }) => {
  let r = React.useCallback((c2) => {
    if (c2) {
      let i2 = () => {
        let d2 = c2.getBoundingClientRect().height;
        s2(e2, d2);
      };
      i2(), new MutationObserver(i2).observe(c2, { subtree: true, childList: true, characterData: true });
    }
  }, [e2, s2]);
  return React.createElement("div", { ref: r, className: t2, style: o2 }, a2);
}, Re = (e2, t2) => {
  let o2 = e2.includes("top"), s2 = o2 ? { top: 0 } : { bottom: 0 }, a2 = e2.includes("center") ? { justifyContent: "center" } : e2.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: b() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${t2 * (o2 ? 1 : -1)}px)`, ...s2, ...a2 };
}, ve = u$1`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, O = 16, Ie = ({ reverseOrder: e2, position: t2 = "top-center", toastOptions: o2, gutter: s2, children: a2, containerStyle: r, containerClassName: c2 }) => {
  let { toasts: i2, handlers: d2 } = D(o2);
  return React.createElement("div", { style: { position: "fixed", zIndex: 9999, top: O, left: O, right: O, bottom: O, pointerEvents: "none", ...r }, className: c2, onMouseEnter: d2.startPause, onMouseLeave: d2.endPause }, i2.map((p2) => {
    let g2 = p2.position || t2, E = d2.calculateOffset(p2, { reverseOrder: e2, gutter: s2, defaultPosition: t2 }), x = Re(g2, E);
    return React.createElement(Ee, { id: p2.id, key: p2.id, onHeightUpdate: d2.updateHeight, className: p2.visible ? ve : "", style: x }, p2.type === "custom" ? T(p2.message, p2) : a2 ? a2(p2) : React.createElement(F, { toast: p2, position: g2 }));
  }));
};
const handleTime = (message) => {
  function countWords(input) {
    var _a, _b;
    const wordCount = (_b = (_a = input.match(/(\w+)/g)) == null ? void 0 : _a.length) != null ? _b : 0;
    return wordCount;
  }
  let time = 3e3;
  if (message && countWords(message) > 5) {
    time = 6e3;
  }
  return time;
};
function FlashNotification({
  message,
  state,
  show,
  m: m2
}) {
  const showToast = useCallback(() => {
    n((t2) => /* @__PURE__ */ jsx(Alert, {
      isFlash: true,
      state,
      canDismiss: true,
      onClick: () => n.dismiss(t2.id),
      children: message
    }), {
      duration: handleTime(message),
      id: alertStates[state].id
    });
  }, [message, state]);
  useEffect(() => {
    if (show) {
      showToast();
    }
  }, [show, showToast]);
  return /* @__PURE__ */ jsx(Box, {
    children: /* @__PURE__ */ jsx(Ie, {
      toastOptions: {
        className: "toastContainer",
        style: {
          background: "transparent",
          boxShadow: "none"
        }
      }
    })
  });
}
const useFlashNotification = ({ state, message }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (show) {
      const timeOut = setTimeout(() => {
        setShow(false);
      }, handleTime(message));
      return () => clearTimeout(timeOut);
    }
  }, [message, show]);
  const active = () => {
    if (!show) {
      setShow(true);
    }
  };
  return {
    show,
    active,
    config: {
      state,
      message
    }
  };
};
function ModalAlert({
  showModal,
  typeAlert,
  title,
  description,
  optionsButton,
  top
}) {
  const [isDesktop] = useMediaQuery("(min-width: 650px)");
  const modalStyles = {
    content: {
      top
    }
  };
  const showBorder = optionsButton.length > 1;
  return /* @__PURE__ */ jsxs(Modal, {
    id: "modal-alert",
    isOpen: showModal,
    onClose: () => {
    },
    closeOnEsc: false,
    closeOnOverlayClick: false,
    size: isDesktop ? "xl" : "sm",
    isCentered: false,
    children: [/* @__PURE__ */ jsx(ModalOverlay, {
      bg: "rgba(0, 0, 0, 0.5)",
      position: "fixed",
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      zIndex: "998"
    }), /* @__PURE__ */ jsxs(ModalContent, {
      zIndex: "999",
      sx: modalStyles.content,
      children: [/* @__PURE__ */ jsxs(Box, {
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        py: "2rem",
        borderBottom: "1px solid #E6E6E6",
        children: [/* @__PURE__ */ jsx(Box, {
          display: "flex",
          justifyContent: "center",
          children: alertColorStates[typeAlert].icon
        }), /* @__PURE__ */ jsx(ModalHeader, {
          py: "1rem",
          children: title
        }), /* @__PURE__ */ jsx(ModalBody, {
          py: "0.5rem",
          px: "2rem",
          children: description
        })]
      }), /* @__PURE__ */ jsx(ModalFooter, {
        justifyContent: "center",
        padding: "0",
        children: optionsButton.map((option, index2) => {
          return /* @__PURE__ */ jsx(Box, {
            width: "99%",
            textAlign: "center",
            padding: "1rem",
            borderLeftWidth: showBorder && option.id === optionsButton[1].id ? "1px" : "0",
            borderLeftColor: "#E6E6E6",
            onClick: () => option.action(),
            children: /* @__PURE__ */ jsx(BtnLink, {
              textDecorationLine: false,
              fontSize: "1rem",
              children: option.label
            })
          }, index2);
        })
      })]
    })]
  });
}
ModalAlert.displayName = "ModalAlert";
const Calendar$1 = ({
  color = "white"
}) => {
  return /* @__PURE__ */ jsxs(Icon, {
    width: "16px",
    height: "17px",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M15 2.5H13V0.5H11V2.5H9V0.5H7V2.5H5V0.5H3V2.5H1C0.447 2.5 0 2.947 0 3.5V15.5C0 16.053 0.447 16.5 1 16.5H15C15.553 16.5 16 16.053 16 15.5V3.5C16 2.947 15.553 2.5 15 2.5ZM14 14.5H2V5.5H14V14.5Z",
      fill: color
    }), /* @__PURE__ */ jsx("path", {
      d: "M6 7.5H4V9.5H6V7.5Z",
      fill: color
    }), /* @__PURE__ */ jsx("path", {
      d: "M9 7.5H7V9.5H9V7.5Z",
      fill: color
    }), /* @__PURE__ */ jsx("path", {
      d: "M6 10.5H4V12.5H6V10.5Z",
      fill: color
    }), /* @__PURE__ */ jsx("path", {
      d: "M9 10.5H7V12.5H9V10.5Z",
      fill: color
    }), /* @__PURE__ */ jsx("path", {
      d: "M12 7.5H10V9.5H12V7.5Z",
      fill: color
    }), /* @__PURE__ */ jsx("path", {
      d: "M12 10.5H10V12.5H12V10.5Z",
      fill: color
    })]
  });
};
const Clock$1 = ({
  color = "white"
}) => {
  return /* @__PURE__ */ jsx(Icon, {
    width: "16px",
    height: "17px",
    viewBox: "0 0 16 17",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /* @__PURE__ */ jsx("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M0 8.5C0 4.1 3.6 0.5 8 0.5C12.4 0.5 16 4.1 16 8.5C16 12.9 12.4 16.5 8 16.5C3.6 16.5 0 12.9 0 8.5ZM7 9.5H12V7.5H9V4.5H7V9.5Z",
      fill: color
    })
  });
};
const LargeBox = ({
  id,
  eventTitle,
  startDate,
  startTime,
  buttonInfo,
  redirect,
  eventImage,
  targetBlank,
  isMobile
}) => {
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars("colors-neutral-silverSand")}`
  };
  return /* @__PURE__ */ jsx(Link, {
    href: redirect,
    target: targetBlank ? "_blank" : "_self",
    rel: targetBlank ? "noopener noreferrer" : void 0,
    w: "fit-content",
    h: "fit-content",
    transition: "box-shadow .3s",
    borderRadius: vars("radii-big"),
    _active: cssActive,
    _hover: cssActive,
    _focus: cssActive,
    children: /* @__PURE__ */ jsx(Ripples, {
      children: /* @__PURE__ */ jsxs(Flex, {
        cursor: "pointer",
        w: "fit-content",
        display: isMobile ? "block" : "flex",
        children: [/* @__PURE__ */ jsx(Box, {
          width: "285px",
          height: isMobile ? "140px" : "168px",
          bgImage: `url(${eventImage})`,
          backgroundSize: "cover",
          borderRadius: isMobile ? "8px 8px 0px 0px" : "8px 0 0 8px"
        }), /* @__PURE__ */ jsxs(Box, {
          width: isMobile ? "285px" : "305px",
          minHeight: isMobile ? "160px" : "168px",
          borderRadius: isMobile ? "0 0 8px 8px" : "0 8px 8px 0",
          border: vars("borders-light"),
          display: "flex",
          flexDirection: "column",
          cursor: "pointer",
          children: [/* @__PURE__ */ jsxs(Box, {
            width: "inherit",
            height: "100%",
            padding: "16px",
            color: "#555555",
            gap: "16px",
            display: "grid",
            children: [/* @__PURE__ */ jsx(Text, {
              fontWeight: "700",
              m: "0px",
              p: "0px",
              children: eventTitle
            }), /* @__PURE__ */ jsxs(Box, {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              children: [/* @__PURE__ */ jsx(Calendar$1, {
                color: vars("colors-main-ziggurat")
              }), /* @__PURE__ */ jsx(Text, {
                fontWeight: "400",
                m: "0px",
                p: "0px",
                children: startDate
              }), /* @__PURE__ */ jsx(Text, {
                color: vars("borders-light"),
                m: "0px",
                p: "0px",
                children: "|"
              }), /* @__PURE__ */ jsx(Clock$1, {
                color: vars("colors-main-ziggurat")
              }), /* @__PURE__ */ jsx(Text, {
                m: "0px",
                p: "0px",
                children: startTime
              })]
            })]
          }), /* @__PURE__ */ jsx(Box, {
            borderTop: `${vars("borders-light")}`,
            width: "100%",
            height: "50px",
            padding: "12px",
            backgroundColor: "white",
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            borderRadius: " 0 0 8px 8px",
            fontSize: "16px",
            fontFamily: "Roboto",
            color: vars("colors-main-deepSkyBlue"),
            fontWeight: "500",
            children: buttonInfo
          })]
        })]
      })
    })
  }, id);
};
const SmallBox = ({
  id,
  eventTitle,
  startDate,
  startTime,
  buttonInfo,
  redirect,
  eventImage,
  targetBlank
}) => {
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars("colors-neutral-silverSand")}`
  };
  return /* @__PURE__ */ jsx(Link, {
    href: redirect,
    target: targetBlank ? "_blank" : "_self",
    rel: targetBlank ? "noopener noreferrer" : void 0,
    transition: "box-shadow .3s",
    _active: cssActive,
    _hover: cssActive,
    _focus: cssActive,
    width: "286px",
    height: "247px",
    borderRadius: vars("radii-big"),
    children: /* @__PURE__ */ jsx(Ripples, {
      children: /* @__PURE__ */ jsxs(Box, {
        width: "286px",
        height: "247px",
        borderRadius: vars("radii-big"),
        border: vars("borders-light"),
        justifyContent: "center",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        children: [/* @__PURE__ */ jsx(Box, {
          flex: "1",
          bgImage: `linear-gradient(to bottom, rgba(0,0,0,0) 35%, rgba(0,0,0,1) 100%), url(${eventImage})`,
          backgroundSize: "cover",
          borderRadius: "8px 8px 0 0",
          margin: "0",
          display: "grid",
          alignItems: "flex-end",
          children: /* @__PURE__ */ jsxs(Box, {
            color: vars("colors-neutral-white"),
            padding: "16px",
            textAlign: "initial",
            fontFamily: "Roboto",
            fontSize: "16px",
            lineHeight: "21px",
            display: "grid",
            gap: "8px",
            children: [/* @__PURE__ */ jsx(Text, {
              fontWeight: "700",
              m: "0px",
              children: eventTitle
            }), /* @__PURE__ */ jsxs(Box, {
              display: "flex",
              alignItems: "center",
              gap: "4px",
              children: [/* @__PURE__ */ jsx(Calendar$1, {}), /* @__PURE__ */ jsx(Text, {
                fontWeight: "400",
                m: "0px",
                children: startDate
              }), /* @__PURE__ */ jsx(Text, {
                m: "0px",
                children: "|"
              }), /* @__PURE__ */ jsx(Clock$1, {}), /* @__PURE__ */ jsx(Text, {
                m: "0px",
                children: startTime
              })]
            })]
          })
        }), /* @__PURE__ */ jsx(Box, {
          width: "100%",
          height: "50px",
          backgroundColor: "white",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          borderRadius: " 0 0 8px 8px",
          fontSize: "16px",
          fontFamily: "Roboto",
          color: vars("colors-main-deepSkyBlue"),
          fontWeight: "500",
          children: buttonInfo
        })]
      })
    })
  }, id);
};
const Eventos = ({
  typeEvent,
  itemsEvent
}) => {
  if (typeEvent === "LARGE_EVENTS") {
    return /* @__PURE__ */ jsx(LargeBox, {
      ...itemsEvent
    });
  } else {
    return /* @__PURE__ */ jsx(SmallBox, {
      ...itemsEvent
    });
  }
};
const Avi = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3696)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.4375 50.3125L27.7812 47.9063H23.625L23.1875 50.3125H19.4688L23.625 37.8438H28.2188L32.375 50.3125H28.4375ZM27.125 45.2813L26.6875 43.3125C26.4688 42.875 26.4688 42.2188 26.25 41.5625C26.0313 40.9063 26.0313 40.25 25.8125 40.0312C25.8125 40.25 25.5938 40.9063 25.5938 41.5625C25.5938 42.2188 25.1563 43.5312 24.5 45.5H27.125V45.2813Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M40.6875 37.8438H44.4062L40.25 50.3125H36.3125L32.1562 37.8438H35.875L37.625 44.1875C38.0625 45.5 38.0625 46.5938 38.2813 47.0313C38.2813 46.5938 38.5 46.1562 38.5 45.5C38.5 44.8438 38.7188 44.4063 38.7188 44.1875L40.6875 37.8438Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M45.7188 50.3125V37.8438H49.2188V50.3125H45.7188Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Csv = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3654)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M25.1563 40.4688C24.2813 40.4688 23.625 40.9062 23.1875 41.5625C22.75 42.2188 22.5313 43.0938 22.5313 44.1875C22.5313 46.5938 23.4063 47.6875 25.375 47.6875C26.0313 47.6875 26.4688 47.6875 26.9063 47.4688C27.3438 47.25 28 47.0312 28.4375 46.8125V49.6563C27.3438 50.0938 26.25 50.3125 24.9375 50.3125C22.9687 50.3125 21.6562 49.875 20.5625 48.5625C19.4687 47.25 19.0312 45.9375 19.0312 43.75C19.0312 42.4375 19.25 41.3437 19.6875 40.25C20.125 39.1562 20.7813 38.5 21.875 38.0625C22.9688 37.625 23.8438 37.1875 25.1563 37.1875C26.4688 37.1875 27.7813 37.4062 29.0938 38.0625L28 40.6875C27.5625 40.4688 27.125 40.25 26.6875 40.25C26.25 40.25 25.5938 40.4688 25.1563 40.4688Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M39.1562 46.5938C39.1562 47.4688 38.9375 48.125 38.5 48.5625C38.0625 49 37.625 49.6562 36.75 49.875C35.875 50.0938 35.2188 50.3125 34.125 50.3125C33.25 50.3125 32.5938 50.3125 31.9375 50.0938C31.2813 49.875 30.8438 49.875 30.1875 49.4375V46.375C30.8438 46.8125 31.5 47.0313 32.1562 47.25C32.8125 47.4688 33.4688 47.4688 34.125 47.4688C34.5625 47.4688 35 47.4688 35.2188 47.25C35.4375 47.0313 35.6562 46.8125 35.6562 46.5938C35.6562 46.375 35.6563 46.375 35.4375 46.1563C35.2188 45.9375 35.2187 46.1563 35 45.9375C34.7812 45.7188 34.3437 45.5 33.25 45.0625C32.375 44.625 31.7187 44.4063 31.5 43.9688C31.2812 43.5313 30.8437 43.3125 30.625 42.875C30.4062 42.4375 30.4062 42 30.4062 41.3438C30.4062 40.25 30.8437 39.375 31.7187 38.7188C32.5937 38.0625 33.6875 37.8438 35.2188 37.8438C36.5313 37.8438 37.8437 38.0625 39.1562 38.7188L38.0625 41.3438C36.9687 40.9063 35.875 40.4688 35 40.4688C34.5625 40.4688 34.3438 40.4688 34.125 40.6875C33.9063 40.9063 33.9062 41.125 33.9062 41.3438C33.9062 41.5625 34.125 41.7813 34.3437 42C34.5625 42.2188 35.2188 42.4375 36.3125 43.0938C37.4063 43.5313 38.0625 44.1875 38.5 44.625C38.9375 45.0625 39.1562 45.7188 39.1562 46.5938Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M48.125 37.8438H51.8438L47.6875 50.3125H43.75L39.5938 37.8438H43.3125L45.0625 44.1875C45.5 45.5 45.5 46.5938 45.7187 47.0313C45.7187 46.5938 45.9375 46.1562 45.9375 45.5C45.9375 44.8438 46.1562 44.4063 46.1562 44.1875L48.125 37.8438Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Doc = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3668)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M27.7812 43.75C27.7812 45.9375 27.125 47.4688 26.0312 48.5625C24.9375 49.6563 23.4062 50.3125 21.2187 50.3125H17.2812V37.8438H21.6562C23.625 37.8438 25.1562 38.2813 26.25 39.375C27.3438 40.4688 27.7812 41.7813 27.7812 43.75ZM24.2813 43.9688C24.2813 42.875 24.0625 42 23.625 41.3438C23.1875 40.6875 22.5312 40.4688 21.6562 40.4688H20.5625V47.4688H21.2187C22.3125 47.4688 22.9687 47.25 23.4062 46.5938C23.8437 45.9375 24.2813 45.0625 24.2813 43.9688Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M41.7813 43.9688C41.7813 46.1562 41.3437 47.6875 40.25 48.7812C39.1562 49.875 37.625 50.5312 35.6562 50.5312C33.6875 50.5312 32.1562 49.875 31.0625 48.7812C29.9687 47.6875 29.5312 46.1562 29.5312 43.9688C29.5312 41.7812 29.9687 40.25 31.0625 39.1562C32.1562 38.0625 33.6875 37.4062 35.6562 37.4062C37.625 37.4062 39.1562 37.8437 40.25 38.9375C41.3437 40.0312 41.7813 42 41.7813 43.9688ZM33.25 43.9688C33.25 46.375 34.125 47.6875 35.875 47.6875C36.75 47.6875 37.4062 47.4687 37.8437 46.8125C38.2812 46.1562 38.5 45.2812 38.5 43.9688C38.5 42.6562 38.2812 41.7812 37.8437 41.125C37.4062 40.4687 36.75 40.25 35.875 40.25C34.125 40.4687 33.25 41.5625 33.25 43.9688Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M49.6563 40.4688C48.7813 40.4688 48.125 40.9062 47.6875 41.5625C47.25 42.2188 47.0313 43.0938 47.0313 44.1875C47.0313 46.5938 47.9062 47.6875 49.875 47.6875C50.5312 47.6875 50.9688 47.6875 51.4063 47.4688C51.8438 47.25 52.5 47.0312 52.9375 46.8125V49.6563C51.8438 50.0938 50.75 50.3125 49.4375 50.3125C47.4688 50.3125 46.1563 49.875 45.0625 48.5625C43.9688 47.25 43.5312 45.9375 43.5312 43.75C43.5312 42.4375 43.75 41.3437 44.1875 40.25C44.625 39.1562 45.2813 38.5 46.375 38.0625C47.4688 37.625 48.3438 37.1875 49.6563 37.1875C50.9688 37.1875 52.2813 37.4062 53.5938 38.0625L52.5 41.125C52.0625 40.9062 51.625 40.6875 51.1875 40.6875C50.75 40.6875 50.0938 40.4688 49.6563 40.4688Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Docx = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3752)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M21.6562 43.75C21.6562 45.9375 21 47.4688 19.9063 48.5625C18.8125 49.6563 17.0625 50.3125 15.0938 50.3125H10.9375V37.8438H15.3125C17.2812 37.8438 18.8125 38.2813 19.9063 39.375C21 40.4688 21.6562 41.7813 21.6562 43.75ZM18.1563 43.9688C18.1563 42.875 17.9375 42 17.5 41.3438C17.0625 40.6875 16.1875 40.4688 15.3125 40.4688H14.2188V47.4688H14.875C15.9688 47.4688 16.625 47.25 17.0625 46.5938C17.5 45.9375 18.1563 45.0625 18.1563 43.9688Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M35.4375 43.9688C35.4375 46.1562 35 47.6875 33.9062 48.7812C32.8125 49.875 31.2812 50.5312 29.3125 50.5312C27.3437 50.5312 25.8125 49.875 24.7187 48.7812C23.625 47.6875 23.1875 46.1562 23.1875 43.9688C23.1875 41.7812 23.625 40.25 24.7187 39.1562C25.8125 38.0625 27.3437 37.4062 29.3125 37.4062C31.2812 37.4062 32.8125 37.8437 33.9062 38.9375C35 40.0312 35.4375 42 35.4375 43.9688ZM26.9062 43.9688C26.9062 46.375 27.7812 47.6875 29.5312 47.6875C30.4062 47.6875 31.0625 47.4687 31.5 46.8125C31.9375 46.1562 32.1562 45.2812 32.1562 43.9688C32.1562 42.6562 31.9375 41.7812 31.5 41.125C31.0625 40.4687 30.4062 40.25 29.5312 40.25C27.7812 40.4687 26.9062 41.5625 26.9062 43.9688Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.3125 40.4687C42.4375 40.4687 41.7812 40.9062 41.3437 41.5625C40.9062 42.2187 40.6875 43.0938 40.6875 44.1875C40.6875 46.5938 41.5625 47.6875 43.5312 47.6875C44.1875 47.6875 44.625 47.6875 45.0625 47.4688C45.5 47.25 46.1562 47.0312 46.5937 46.8125V49.6562C45.5 50.0938 44.4063 50.3125 43.0938 50.3125C41.125 50.3125 39.8125 49.875 38.7188 48.5625C37.625 47.25 37.1875 46.1562 37.1875 44.1875C37.1875 42.875 37.4062 41.7812 37.8437 40.6875C38.2812 39.5937 38.9375 38.9375 40.0312 38.5C41.125 38.0625 42 37.625 43.3125 37.625C44.625 37.625 45.9375 37.8437 47.25 38.5L46.1563 41.125C45.7188 40.9062 45.2812 40.6875 44.8438 40.6875C44.4062 40.6875 43.75 40.4687 43.3125 40.4687Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M60.375 50.3125H56.4375L54.0313 46.375L51.625 50.3125H47.9062L52.0625 43.9688L48.125 37.8438H51.8438L54.0313 41.7813L56.2188 37.8438H60.1563L56.2188 44.1875L60.375 50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Gif = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3597)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M27.125 43.0938H32.5937V49.875C31.0625 50.3125 29.5312 50.5312 27.7812 50.5312C25.8125 50.5312 24.2812 49.875 23.4062 48.7812C22.5312 47.6875 21.875 46.1562 21.875 43.9688C21.875 42 22.5313 40.4687 23.625 39.1562C24.7188 37.8437 26.4688 37.4062 28.4375 37.4062C29.3125 37.4062 29.9688 37.4063 30.625 37.625C31.2812 37.8438 31.9375 38.0625 32.375 38.2812L31.2812 40.9063C30.4062 40.4688 29.3125 40.25 28.2187 40.25C27.125 40.25 26.4687 40.4687 26.0312 41.125C25.5937 41.7812 25.1562 42.6562 25.1562 43.9688C25.1562 45.0625 25.375 45.9375 25.8125 46.5937C26.25 47.25 26.9063 47.4688 28 47.4688C28.4375 47.4688 28.875 47.4688 29.3125 47.25V45.2813H27.125V43.0938Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M35 50.3125V37.8438H38.5V50.3125H35Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M44.4062 50.3125H41.125V37.8438H48.5625V40.4688H44.4062V42.875H48.125V45.5H44.4062V50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Icons = ({
  type
}) => {
  switch (type) {
    case "avi":
      return /* @__PURE__ */ jsx(Avi, {});
    case "csv":
      return /* @__PURE__ */ jsx(Csv, {});
    case "doc":
      return /* @__PURE__ */ jsx(Doc, {});
    case "docx":
      return /* @__PURE__ */ jsx(Docx, {});
    case "gif":
      return /* @__PURE__ */ jsx(Gif, {});
    case "jpeg":
      return /* @__PURE__ */ jsx(Jpeg, {});
    case "jpg":
      return /* @__PURE__ */ jsx(Jpg, {});
    case "png":
      return /* @__PURE__ */ jsx(Png, {});
    case "pdf":
      return /* @__PURE__ */ jsx(Pdf, {});
    case "ppt":
      return /* @__PURE__ */ jsx(Ppt, {});
    case "pptx":
      return /* @__PURE__ */ jsx(Pptx, {});
    case "xls":
      return /* @__PURE__ */ jsx(Xls, {});
    case "xlsx":
      return /* @__PURE__ */ jsx(Xlsx, {});
    case "mp3":
      return /* @__PURE__ */ jsx(Mp3, {});
    case "wav":
      return /* @__PURE__ */ jsx(Wav, {});
    case "mp4":
      return /* @__PURE__ */ jsx(Mp4, {});
    case "mkv":
      return /* @__PURE__ */ jsx(Mkv, {});
    case "url":
      return /* @__PURE__ */ jsx(Url, {});
    default:
      return null;
  }
};
const Jpeg = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3582)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M17.0625 54.25C16.4063 54.25 15.9688 54.25 15.3125 54.0313V51.4063C15.5312 51.4063 15.75 51.4063 15.9688 51.625C16.1875 51.8438 16.4063 51.625 16.625 51.625C17.2813 51.625 17.5 51.4063 17.7188 51.1875C17.9375 50.9688 18.1563 50.3125 18.1563 49.4375V37.8438H21.6562V49.2188C21.6562 50.9688 21.2187 52.2812 20.5625 53.1562C19.9062 54.0312 18.375 54.25 17.0625 54.25Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M33.2502 41.7813C33.2502 43.0938 32.8127 44.1875 31.9377 45.0625C31.0627 45.9375 29.969 46.1563 28.4377 46.1563H27.5627V50.3125H24.2815V37.8438H28.6565C30.1877 37.8438 31.5002 38.2812 32.1565 38.9375C32.8127 39.5938 33.2502 40.4688 33.2502 41.7813ZM27.5627 43.3125H28.219C28.6565 43.3125 29.094 43.0938 29.5315 42.875C29.969 42.6563 29.969 42.2188 29.969 41.7813C29.969 40.9063 29.5315 40.4688 28.6565 40.4688H27.7815V43.3125H27.5627Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M50.0937 43.0938H55.5625V49.875C54.0312 50.3125 52.5 50.5312 50.75 50.5312C48.7813 50.5312 47.25 49.875 46.375 48.7812C45.5 47.6875 44.8438 46.1562 44.8438 43.9688C44.8438 42 45.5 40.4687 46.5937 39.1562C47.6875 37.8437 49.4375 37.4062 51.4062 37.4062C52.2812 37.4062 52.9375 37.4063 53.5938 37.625C54.25 37.8438 54.9062 38.0625 55.3437 38.2812L54.25 40.9063C53.375 40.4688 52.2812 40.25 51.1875 40.25C50.0937 40.25 49.4375 40.4687 49 41.125C48.5625 41.7812 48.125 42.875 48.125 44.1875C48.125 45.2813 48.3437 46.1562 48.7812 46.8125C49.2187 47.4687 49.875 47.6875 50.9687 47.6875C51.4062 47.6875 51.8437 47.6875 52.2812 47.4688V45.5H50.0937V43.0938Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M42.4375 50.3125H35V37.8438H42.4375V40.4688H38.5V42.4375H42.2187V45.0625H38.5V47.4688H42.4375V50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Jpg = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3525)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M20.3438 54.25C19.6875 54.25 19.25 54.25 18.5938 54.0313V51.4063C18.8125 51.4063 19.0313 51.4063 19.25 51.625C19.4688 51.8438 19.6875 51.625 19.9063 51.625C20.5625 51.625 20.7813 51.4063 21 51.1875C21.2188 50.9688 21.4375 50.3125 21.4375 49.4375V37.8438H24.9375V49.2188C24.9375 50.9688 24.5 52.2812 23.8437 53.1562C23.1875 54.0312 21.6563 54.25 20.3438 54.25Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M36.5313 41.7813C36.5313 43.0938 36.0938 44.1875 35.2188 45.0625C34.3438 45.9375 33.25 46.1563 31.7187 46.1563H30.8438V50.3125H27.5625V37.8438H31.9375C33.4688 37.8438 34.7813 38.2812 35.4375 38.9375C36.0938 39.5937 36.5313 40.4688 36.5313 41.7813ZM30.8438 43.3125H31.5C31.9375 43.3125 32.375 43.0938 32.8125 42.875C33.25 42.6563 33.25 42.2188 33.25 41.7813C33.25 40.9063 32.8125 40.4688 31.9375 40.4688H31.0625V43.3125H30.8438Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.5312 43.0938H49V49.875C47.4687 50.3125 45.9375 50.5312 44.1875 50.5312C42.2188 50.5312 40.6875 49.875 39.8125 48.7812C38.9375 47.6875 38.2812 46.1562 38.2812 43.9688C38.2812 42 38.9375 40.4687 40.0312 39.1562C41.125 37.8437 42.875 37.4062 44.8438 37.4062C45.7188 37.4062 46.375 37.4063 47.0312 37.625C47.6875 37.8438 48.3437 38.0625 48.7812 38.2812L47.6875 40.9063C46.8125 40.4688 45.7187 40.25 44.625 40.25C43.5312 40.25 42.875 40.4687 42.4375 41.125C42 41.7812 41.5625 42.875 41.5625 44.1875C41.5625 45.2813 41.7812 46.1562 42.2187 46.8125C42.6562 47.4687 43.3125 47.6875 44.4062 47.6875C44.8437 47.6875 45.2812 47.6875 45.7187 47.4688V45.5H43.5312V43.0938Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Mkv = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3710)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M21.2188 50.3125L18.5938 41.3438C18.8125 42.875 18.8125 43.9688 18.8125 44.8438V50.3125H15.75V37.8438H20.3438L22.9688 46.8125L25.5938 37.8438H30.1875V50.3125H27.125V44.8438C27.125 44.625 27.125 44.1875 27.125 43.9688C27.125 43.75 27.125 42.875 27.3438 41.3438L24.5 50.3125H21.2188Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.3125 50.3125H39.5938L37.1875 45.5L36.0938 46.1563V50.3125H32.8125V37.8438H36.3125V43.3125C36.5313 42.875 36.75 42.4375 37.4063 41.7813L40.0312 37.8438H43.75L39.8125 43.5313L43.3125 50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M51.8438 37.8438H55.5625L51.4063 50.3125H47.4688L43.3125 37.8438H47.0313L48.7812 44.1875C49.2188 45.5 49.2188 46.5938 49.4375 47.0313C49.4375 46.5938 49.6563 46.1562 49.6563 45.5C49.6563 44.8438 49.875 44.4063 49.875 44.1875L51.8438 37.8438Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Mp3 = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3724)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M22.75 50.3125L20.125 41.3438C20.3437 42.875 20.3438 43.9688 20.3438 44.8438V50.3125H17.2812V37.8438H21.875L24.5 46.8125L27.125 37.8438H31.7188V50.3125H28.4375V44.8438C28.4375 44.625 28.4375 44.1875 28.4375 43.9688C28.4375 43.75 28.4375 42.875 28.6563 41.3438L25.8125 50.3125H22.75Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.3125 41.7813C43.3125 43.0938 42.875 44.1875 42 45.0625C41.125 45.9375 40.0313 46.1563 38.5 46.1563H37.625V50.3125H34.3438V37.8438H38.7188C40.25 37.8438 41.5625 38.2812 42.2187 38.9375C42.875 39.5938 43.3125 40.4688 43.3125 41.7813ZM37.625 43.3125H38.2813C38.7188 43.3125 39.1563 43.0938 39.5938 42.875C40.0313 42.6563 40.0312 42.2188 40.0312 41.7813C40.0312 40.9063 39.5938 40.4688 38.7188 40.4688H37.8437V43.3125H37.625Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M52.9375 40.4688C52.9375 41.3438 52.7188 42 52.2813 42.4375C51.8438 42.875 51.1875 43.5312 50.3125 43.75C52.5 43.9688 53.375 45.0625 53.375 46.8125C53.375 47.9062 52.9375 48.7813 52.0625 49.6563C51.1875 50.5313 49.875 50.75 48.125 50.75C47.4688 50.75 46.8125 50.75 46.1563 50.5313C45.5 50.3125 45.0625 50.3125 44.4062 50.0937V47.25C44.8438 47.4688 45.5 47.6875 46.1563 47.9062C46.8125 48.125 47.25 48.125 47.6875 48.125C48.3438 48.125 49 48.125 49.2188 47.9062C49.4375 47.6875 49.6563 47.4688 49.6563 47.0312C49.6563 46.5938 49.6563 46.375 49.4375 46.1563C49.2188 45.9375 49 45.9375 48.5625 45.7187C48.125 45.5 47.6875 45.5 47.0313 45.5H46.1563V42.875H47.0313C48.7813 42.875 49.6563 42.4375 49.6563 41.5625C49.6563 41.125 49.4375 40.9063 49.2188 40.9063C49 40.9063 48.5625 40.6875 48.125 40.6875C47.25 40.6875 46.5938 40.9062 45.7188 41.5625L44.4062 39.375C45.0625 38.9375 45.7188 38.5 46.375 38.5C47.0313 38.5 47.9062 38.2812 48.7812 38.2812C50.0938 38.2812 51.1875 38.5 51.8438 39.1562C52.5 39.8125 52.9375 39.5938 52.9375 40.4688Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Mp4 = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3682)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M22.75 50.3125L20.125 41.3438C20.3437 42.875 20.3438 43.9688 20.3438 44.8438V50.3125H17.2812V37.8438H21.875L24.5 46.8125L27.125 37.8438H31.7188V50.3125H28.4375V44.8438C28.4375 44.625 28.4375 44.1875 28.4375 43.9688C28.4375 43.75 28.4375 42.875 28.6563 41.3438L25.8125 50.3125H22.75Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M43.3125 41.7813C43.3125 43.0938 42.875 44.1875 42 45.0625C41.125 45.9375 40.0313 46.1563 38.5 46.1563H37.625V50.3125H34.3438V37.8438H38.7188C40.25 37.8438 41.5625 38.2812 42.2187 38.9375C42.875 39.5938 43.3125 40.4688 43.3125 41.7813ZM37.625 43.3125H38.2813C38.7188 43.3125 39.1563 43.0938 39.5938 42.875C40.0313 42.6563 40.0312 42.2188 40.0312 41.7813C40.0312 40.9063 39.5938 40.4688 38.7188 40.4688H37.8437V43.3125H37.625Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M53.8125 47.9063H52.5V50.3125H49.2187V47.9063H44.1875V45.5L49.4375 37.8438H52.5V45.5H53.8125V47.9063ZM49.2187 45.2813V43.75C49.2187 43.5313 49.2187 43.0938 49.2187 42.6563C49.2187 42.2188 49.2187 42 49.2187 42C49 42.4375 48.7812 42.875 48.5625 43.3125L47.25 45.2813H49.2187Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Pdf = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3625)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.7503 41.7923C28.7503 43.1879 28.3391 44.2664 27.5166 45.0276C26.6941 45.7889 25.5238 46.1673 24.0078 46.1673H23.0584V50.3126H19.6831V37.8198H24.0078C25.585 37.8198 26.7706 38.1633 27.5625 38.8545C28.3544 39.5458 28.7503 40.5214 28.7503 41.7923ZM23.0584 43.4176H23.6731C24.1806 43.4176 24.5831 43.2754 24.8828 42.9911C25.1825 42.7067 25.3312 42.313 25.3312 41.812C25.3312 40.9676 24.8653 40.5476 23.9291 40.5476H23.0584V43.4176Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M41.3438 43.8005C41.3438 45.8851 40.7706 47.4929 39.6222 48.6195C38.4738 49.7461 36.8616 50.3126 34.7812 50.3126H30.7388V37.8198H35.0634C37.0694 37.8198 38.6181 38.3317 39.7075 39.3576C40.7969 40.3836 41.3438 41.8645 41.3438 43.8005ZM37.8416 43.9208C37.8416 42.7767 37.6141 41.9279 37.1613 41.3745C36.7084 40.8211 36.0216 40.5454 35.0984 40.5454H34.1162V47.5433H34.8687C35.8947 47.5433 36.645 47.2458 37.1241 46.6508C37.6031 46.0558 37.8416 45.1458 37.8416 43.9208Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M46.9066 50.3126H43.5816V37.8198H50.9644V40.528H46.9066V42.9123H50.6494V45.6204H46.9066V50.3126Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Png = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3568)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M26.0312 41.7813C26.0312 43.0938 25.5938 44.1875 24.7188 45.0625C23.8438 45.9375 22.75 46.1563 21.2187 46.1563H20.3438V50.3125H17.0625V37.8438H21.4375C22.9688 37.8438 24.2812 38.2812 24.9375 38.9375C25.5937 39.5938 26.0312 40.4688 26.0312 41.7813ZM20.3438 43.3125H21C21.4375 43.3125 21.875 43.0938 22.3125 42.875C22.75 42.6563 22.75 42.2188 22.75 41.7813C22.75 40.9063 22.3125 40.4688 21.4375 40.4688H20.3438V43.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M40.0312 50.3125H35.6562L31.0625 41.5625C31.0625 42.875 31.2813 43.9688 31.2813 44.625V50.3125H28.2188V37.8438H32.5938L37.1875 46.5938C37.1875 45.2812 36.9688 44.4063 36.9688 43.5313V37.8438H40.0312V50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M47.6875 43.0938H53.1562V49.875C51.625 50.3125 50.0938 50.5312 48.3438 50.5312C46.375 50.5312 44.8438 49.875 43.9688 48.7812C43.0938 47.6875 42.4375 46.1562 42.4375 43.9688C42.4375 42 43.0938 40.4687 44.1875 39.1562C45.2813 37.8437 47.0312 37.4062 49 37.4062C49.875 37.4062 50.5312 37.4063 51.1875 37.625C51.8438 37.8438 52.5 38.0625 52.9375 38.2812L51.8438 40.9063C50.9688 40.4688 49.875 40.25 48.7812 40.25C47.6875 40.25 47.0312 40.4687 46.5937 41.125C46.1562 41.7812 45.7188 42.6562 45.7188 43.9688C45.7188 45.0625 45.9375 45.9375 46.375 46.5937C46.8125 47.25 47.4688 47.4688 48.5625 47.4688C49 47.4688 49.4375 47.4688 49.875 47.25V45.2813H47.6875V43.0938Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Ppt = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3539)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.875 41.7813C28.875 43.0938 28.4375 44.1875 27.5625 45.0625C26.6875 45.9375 25.5938 46.1563 24.0625 46.1563H22.9688V50.3125H19.6875V37.8438H24.0625C25.5938 37.8438 26.9062 38.2812 27.5625 38.9375C28.2187 39.5938 28.875 40.4688 28.875 41.7813ZM22.9688 43.3125H23.625C24.0625 43.3125 24.5 43.0938 24.9375 42.875C25.375 42.6563 25.375 42.2188 25.375 41.7813C25.375 40.9063 24.9375 40.4688 24.0625 40.4688H22.9688V43.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M39.8122 41.7813C39.8122 43.0938 39.3747 44.1875 38.4997 45.0625C37.6247 45.9375 36.5309 46.1563 34.9997 46.1563H34.1247V50.3125H30.8434V37.8438H35.2184C36.7497 37.8438 38.0622 38.2812 38.7184 38.9375C39.3747 39.5938 39.8122 40.4688 39.8122 41.7813ZM34.1247 43.3125H34.7809C35.2184 43.3125 35.6559 43.0938 36.0934 42.875C36.5309 42.6563 36.5309 42.2188 36.5309 41.7813C36.5309 40.9063 36.0934 40.4688 35.2184 40.4688H34.3434V43.3125H34.1247Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M47.2499 50.3125H43.9686V40.6875H40.9061V37.8438H50.3124V40.6875H47.2499V50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Pptx = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3553)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M22.9688 41.7813C22.9688 43.0938 22.5312 44.1875 21.6562 45.0625C20.7812 45.9375 19.6875 46.1563 18.1562 46.1563H17.0625V50.3125H13.7812V37.8438H18.1562C19.6875 37.8438 21 38.2812 21.6562 38.9375C22.3125 39.5938 22.9688 40.4688 22.9688 41.7813ZM17.0625 43.3125H17.7188C18.1563 43.3125 18.5937 43.0938 19.0312 42.875C19.4687 42.6563 19.4687 42.2188 19.4687 41.7813C19.4687 40.9063 19.0312 40.4688 18.1562 40.4688H17.0625V43.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M33.9063 41.7813C33.9063 43.0938 33.4688 44.1875 32.5938 45.0625C31.7188 45.9375 30.625 46.1563 29.0938 46.1563H28.2188V50.3125H24.9375V37.8438H29.3125C30.8438 37.8438 32.1563 38.2812 32.8125 38.9375C33.4688 39.5938 33.9063 40.4688 33.9063 41.7813ZM28.2188 43.3125H28.875C29.3125 43.3125 29.75 43.0938 30.1875 42.875C30.625 42.6563 30.625 42.2188 30.625 41.7813C30.625 40.9063 30.1875 40.4688 29.3125 40.4688H28.4375V43.3125H28.2188Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M41.3437 50.3125H38.0625V40.6875H35V37.8438H44.4062V40.6875H41.3437V50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M57.5312 50.3125H53.5937L51.1875 46.375L48.7812 50.3125H45.0625L49.2187 43.9688L45.2813 37.8438H49L51.1875 41.7813L53.375 37.8438H57.3125L53.375 44.1875L57.5312 50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Wav = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3738)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M28.2187 50.3125H24.2812L23.1875 44.8438C23.1875 44.625 22.9688 44.1875 22.9688 43.5313C22.9688 42.875 22.75 42.2188 22.75 41.7813C22.75 42.2188 22.5312 42.6563 22.5312 43.0938C22.5312 43.5313 22.3125 44.1875 22.3125 44.625C22.3125 45.0625 21.6562 47.0313 20.7812 50.3125H16.8437L13.7812 37.8438H17.0625L18.375 44.1875C18.5937 45.5 18.8125 46.5938 19.0312 47.4688C19.0312 46.8125 19.25 46.1563 19.4687 45.0625C19.6875 43.9688 19.9063 43.3125 19.9063 42.6563L21 37.8438H24.0625L25.1562 42.6563C25.375 43.3125 25.5938 44.1875 25.8125 45.2813C26.0312 46.375 26.0312 47.0313 26.25 47.4688C26.25 46.8125 26.4688 45.7188 26.9062 44.1875L28.2187 37.8438H31.5L28.2187 50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M40.6875 50.3125L40.0312 47.9063H35.875L35.4375 50.3125H31.7188L35.875 37.8438H40.4688L44.625 50.3125H40.6875ZM39.375 45.2813L38.9375 43.3125C38.7187 42.875 38.7188 42.2188 38.5 41.5625C38.2813 40.9063 38.2812 40.25 38.0625 40.0312C38.0625 40.25 37.8437 40.9063 37.8437 41.5625C37.8437 42.2188 37.4062 43.5312 36.75 45.5H39.375V45.2813Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M52.7188 37.8438H56.4375L52.5 50.3125H48.5625L44.4062 37.8438H48.125L49.875 44.1875C50.3125 45.5 50.3125 46.5938 50.5313 47.0313C50.5313 46.5938 50.75 46.1562 50.75 45.5C50.75 44.8438 50.9688 44.4063 50.9688 44.1875L52.7188 37.8438Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Xls = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3611)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M32.1563 50.3125H28.4375L26.0312 46.375L23.4063 50.3125H19.6875L23.8438 43.9688L19.9062 37.8438H23.625L25.8125 41.7813L28 37.8438H31.9375L28 44.1875L32.1563 50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M33.6873 50.3125V37.8438H36.9685V47.6875H41.781V50.3125H33.6873Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M52.0624 46.5937C52.0624 47.4687 51.8436 48.125 51.4061 48.5625C50.9686 49 50.5311 49.6562 49.6561 49.875C48.7811 50.0937 48.1249 50.3125 47.0311 50.3125C46.1561 50.3125 45.4999 50.3125 44.8436 50.0937C44.1874 49.875 43.7499 49.875 43.0936 49.4375V46.375C43.7499 46.8125 44.4061 47.0312 45.0624 47.25C45.7186 47.4687 46.3749 47.4688 47.0311 47.4688C47.4686 47.4688 47.9061 47.4687 48.1249 47.25C48.3436 47.0312 48.5624 46.8125 48.5624 46.5937C48.5624 46.375 48.5624 46.375 48.3436 46.1562C48.1249 45.9375 48.1249 45.9375 47.9061 45.7187C47.6874 45.5 47.2499 45.2812 46.1561 44.8437C45.2811 44.4062 44.6249 44.1875 44.4061 43.75C44.1874 43.3125 43.7499 43.0937 43.5311 42.6562C43.3124 42.2187 43.3124 41.7812 43.3124 41.125C43.3124 40.0312 43.7499 39.1562 44.6249 38.5C45.4999 37.8437 46.5936 37.625 48.1249 37.625C49.4374 37.625 50.7499 37.8437 52.0624 38.5L50.9686 41.125C49.8749 40.6875 48.7811 40.25 47.9061 40.25C47.4686 40.25 47.2499 40.25 47.0311 40.4687C46.8124 40.6875 46.8124 40.9062 46.8124 41.125C46.8124 41.3437 47.0311 41.5625 47.2499 41.7812C47.4686 42 48.1249 42.2187 49.2186 42.875C50.3124 43.3125 50.9686 43.9687 51.4061 44.4062C51.8436 44.8437 52.0624 45.7187 52.0624 46.5937Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Xlsx = () => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3171_3639)",
      children: [/* @__PURE__ */ jsx("path", {
        d: "M43.75 2.1875V19.6875H61.25",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10"
      }), /* @__PURE__ */ jsx("path", {
        d: "M61.25 28.4375V19.6875L43.75 2.1875H8.75V28.4375",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M8.75 59.0625V67.8125H61.25V59.0625",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      }), /* @__PURE__ */ jsx("path", {
        d: "M24.7188 50.3125H21L18.5938 46.375L15.9688 50.3125H12.25L16.4062 43.9688L12.4687 37.8438H16.1875L18.375 41.7813L20.5625 37.8438H24.5L20.5625 44.1875L24.7188 50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M26.25 50.3125V37.8438H29.5312V47.6875H34.3438V50.3125H26.25Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M44.625 46.5937C44.625 47.4687 44.4063 48.125 43.9688 48.5625C43.5313 49 43.0938 49.6562 42.2188 49.875C41.3438 50.0937 40.6875 50.3125 39.5938 50.3125C38.7188 50.3125 38.0625 50.3125 37.4063 50.0937C36.75 49.875 36.3125 49.875 35.6562 49.4375V46.375C36.3125 46.8125 36.9688 47.0312 37.625 47.25C38.2813 47.4687 38.9375 47.4688 39.5938 47.4688C40.0313 47.4688 40.4688 47.4687 40.6875 47.25C40.9063 47.0312 41.125 46.8125 41.125 46.5937C41.125 46.375 41.125 46.375 40.9063 46.1562C40.6875 45.9375 40.6875 45.9375 40.4688 45.7187C40.25 45.5 39.8125 45.2812 38.7188 44.8437C37.8438 44.4062 37.1875 44.1875 36.9688 43.75C36.75 43.3125 36.3125 43.0937 36.0938 42.6562C35.875 42.2187 35.875 41.7812 35.875 41.125C35.875 40.0312 36.3125 39.1562 37.1875 38.5C38.0625 37.8437 39.1563 37.625 40.6875 37.625C42 37.625 43.3125 37.8437 44.625 38.5L43.5313 41.125C42.4375 40.6875 41.3438 40.25 40.4688 40.25C40.0313 40.25 39.8125 40.25 39.5938 40.4687C39.375 40.6875 39.375 40.9062 39.375 41.125C39.375 41.3437 39.5938 41.5625 39.8125 41.7812C40.0313 42 40.6875 42.2187 41.7813 42.875C42.875 43.3125 43.5313 43.9687 43.9688 44.4062C44.4063 44.8437 44.625 45.7187 44.625 46.5937Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M57.75 50.3125H53.8125L51.4062 46.375L49 50.3125H45.2812L49.4375 43.9688L45.5 37.8438H49.2187L51.4062 41.7813L53.5937 37.8438H57.5312L53.5937 44.1875L57.75 50.3125Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        d: "M67.8125 28.4375H2.1875V59.0625H67.8125V28.4375Z",
        stroke: "white",
        strokeWidth: "4",
        strokeMiterlimit: "10",
        strokeLinecap: "square"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "70px",
          height: "70px",
          fill: "white"
        })
      })
    })]
  });
};
const Url = () => {
  return /* @__PURE__ */ jsxs(Icon, {
    width: "70px",
    height: "70px",
    viewBox: "0 0 70 70",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsx("path", {
      d: "M38.5416 22.1768L33.6394 27.0768C33.5081 27.2102 33.4206 27.3611 33.2938 27.4989C35.6231 27.8201 37.785 28.8895 39.4537 30.5461C41.5013 32.5997 42.6511 35.3812 42.6511 38.2811C42.6511 41.181 41.5013 43.9626 39.4537 46.0161L27.4225 58.0474C25.3711 60.0988 22.5887 61.2513 19.6875 61.2513C16.7863 61.2513 14.004 60.0988 11.9525 58.0474C9.90105 55.9959 8.74856 53.2136 8.74856 50.3124C8.74856 47.4112 9.90105 44.6288 11.9525 42.5774L17.1697 37.3602C16.4134 34.4991 16.2423 31.5149 16.6666 28.5861L7.31281 37.9377C4.03084 41.2197 2.18705 45.671 2.18705 50.3124C2.18705 54.9538 4.03084 59.4051 7.31281 62.6871C10.5948 65.969 15.0461 67.8128 19.6875 67.8128C24.3289 67.8128 28.7802 65.969 32.0622 62.6871L44.0934 50.6558C46.1231 48.6313 47.6235 46.1386 48.4627 43.3975C49.3018 40.6563 49.4538 37.7508 48.9052 34.9371C48.3567 32.1233 47.1245 29.4877 45.3172 27.2625C43.5099 25.0372 41.183 23.2907 38.5416 22.1768Z",
      fill: "white"
    }), /* @__PURE__ */ jsx("path", {
      d: "M37.9378 7.31274L25.9066 19.344C23.8769 21.3685 22.3765 23.8612 21.5373 26.6023C20.6982 29.3435 20.5462 32.249 21.0948 35.0627C21.6433 37.8765 22.8755 40.5121 24.6828 42.7373C26.4901 44.9626 28.817 46.7091 31.4584 47.8231L36.3606 42.9231C36.4919 42.7896 36.5947 42.6409 36.715 42.5009C34.3823 42.1823 32.2168 41.1127 30.5462 39.4537C28.4987 37.4001 27.3489 34.6186 27.3489 31.7187C27.3489 28.8188 28.4987 26.0372 30.5462 23.9837L42.5775 11.9524C44.629 9.90098 47.4113 8.74848 50.3125 8.74848C51.749 8.74848 53.1715 9.03143 54.4987 9.58116C55.8258 10.1309 57.0317 10.9367 58.0475 11.9524C59.0633 12.9682 59.869 14.1741 60.4188 15.5013C60.9685 16.8284 61.2514 18.2509 61.2514 19.6874C61.2514 21.1239 60.9685 22.5464 60.4188 23.8736C59.869 25.2008 59.0633 26.4067 58.0475 27.4224L52.8347 32.6331C53.5939 35.4851 53.7732 38.4605 53.3619 41.3831L62.6872 32.0577C65.9081 28.7633 67.6999 24.3316 67.6737 19.7243C67.6476 15.117 65.8055 10.7059 62.5473 7.44827C59.2891 4.19066 54.8777 2.34937 50.2704 2.324C45.6631 2.29862 41.2317 4.09121 37.9378 7.31274Z",
      fill: "white"
    })]
  });
};
const StandardBackground = ({
  colorFill
}) => {
  const id = `clip${uniqueId()}`;
  return /* @__PURE__ */ jsxs("svg", {
    width: "285",
    height: "139",
    viewBox: "0 0 285 139",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/* @__PURE__ */ jsxs("g", {
      clipPath: "url(#clip0_3257_1585)",
      children: [/* @__PURE__ */ jsx("rect", {
        width: "285",
        height: "139",
        fill: colorFill
      }), /* @__PURE__ */ jsx("path", {
        opacity: "0.2",
        d: "M335.794 126.97C335.598 127.095 335.394 127.206 335.178 127.304C332.361 128.577 328.837 127.078 327.309 123.953C314.975 98.7512 292.415 78.0666 269.833 71.2542C260.582 68.4618 247.36 66.9169 236.854 75.3544C223.824 85.8458 226.087 115.23 228.082 141.156C229.969 165.653 231.608 186.993 220.594 193.985C219.953 194.391 219.273 194.748 218.543 195.056C206.274 200.23 182.57 192.261 107.538 83.7917C105.555 80.9251 105.989 77.1581 108.508 75.3735C111.028 73.5889 114.677 74.4684 116.658 77.3319C146.815 120.925 171.063 151.682 188.736 168.743C205.61 185.033 211.76 184.259 213.242 183.634C219.603 180.949 217.96 159.621 216.514 140.804C214.296 112.002 211.783 79.3557 229.191 65.3468C240.074 56.572 255.237 54.5108 271.865 59.5262C297.79 67.3495 323.558 90.825 337.51 119.333C338.918 122.219 338.137 125.484 335.794 126.97Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        opacity: "0.2",
        d: "M225.02 31.4635C227.693 30.696 230.537 30.772 233.152 31.6809L240.58 34.2811C241.227 34.5043 241.931 34.5167 242.59 34.3165C243.248 34.1164 243.826 33.7141 244.239 33.1683L248.388 27.6392C250.11 25.3689 252.516 23.6958 255.256 22.8636C257.996 22.0314 260.926 22.0836 263.621 23.0126L271.049 25.6128C271.696 25.836 272.401 25.8484 273.059 25.6483C273.717 25.4481 274.295 25.0458 274.709 24.5001L278.858 18.971C280.579 16.7006 282.985 15.0275 285.725 14.1953C288.465 13.3631 291.396 13.4154 294.091 14.3444L301.518 16.9445C302.165 17.1677 302.869 17.1801 303.527 16.9801C304.185 16.78 304.763 16.3779 305.176 15.8324L309.327 10.3027C311.048 8.03236 313.454 6.35924 316.194 5.52706C318.934 4.69488 321.865 4.7471 324.56 5.67612L331.987 8.27626C332.607 8.49344 333.177 8.82977 333.663 9.26594C334.15 9.70212 334.544 10.2296 334.823 10.8181C335.102 11.4066 335.26 12.0445 335.288 12.6953C335.317 13.3461 335.215 13.997 334.988 14.6107C334.524 15.8536 333.583 16.8685 332.37 17.4338C331.157 17.9992 329.771 18.0694 328.513 17.6289L321.086 15.0287C320.438 14.8073 319.734 14.7964 319.076 14.9976C318.418 15.1988 317.841 15.6017 317.428 16.1477L313.28 21.6788C311.557 23.9484 309.151 25.6209 306.412 26.453C303.672 27.2851 300.741 27.2334 298.047 26.3054L290.619 23.7053C289.97 23.4807 289.264 23.4676 288.604 23.6678C287.944 23.8681 287.365 24.2712 286.95 24.8183L282.802 30.3495C281.08 32.619 278.674 34.2915 275.934 35.1236C273.194 35.9558 270.264 35.9041 267.569 34.9761L260.142 32.3759C259.494 32.153 258.79 32.1406 258.132 32.3403C257.473 32.5401 256.895 32.9416 256.481 33.4866L252.333 39.0178C250.611 41.2873 248.205 42.9598 245.465 43.7919C242.725 44.624 239.795 44.5723 237.1 43.6443L229.674 41.0347C229.027 40.8118 228.323 40.7994 227.664 40.9991C227.006 41.1988 226.428 41.6004 226.014 42.1454L221.865 47.6766C221.065 48.7411 219.875 49.4534 218.552 49.6583C217.23 49.8633 215.883 49.5443 214.804 48.7709C214.274 48.387 213.826 47.9029 213.487 47.3463C213.148 46.7896 212.924 46.1715 212.827 45.5273C212.731 44.883 212.765 44.2254 212.926 43.5922C213.088 42.959 213.374 42.3625 213.768 41.8372L217.919 36.3075C219.685 33.9659 222.182 32.2626 225.02 31.4635Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        opacity: "0.2",
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M62.5 167.961C78.771 167.961 91.9612 154.771 91.9612 138.5C91.9612 122.229 78.771 109.039 62.5 109.039C46.229 109.039 33.0388 122.229 33.0388 138.5C33.0388 154.771 46.229 167.961 62.5 167.961ZM62.5 183C87.0767 183 107 163.077 107 138.5C107 113.923 87.0767 94 62.5 94C37.9233 94 18 113.923 18 138.5C18 163.077 37.9233 183 62.5 183Z",
        fill: "white"
      }), /* @__PURE__ */ jsx("path", {
        opacity: "0.2",
        d: "M-59.9428 95.7098C-60.6472 95.4213 -61.3193 95.0119 -61.9264 94.4852C-64.9185 91.8878 -65.2379 87.3663 -62.6372 84.3909L50.6575 -45.219L66.0579 59.2779L174.017 18.8183C177.728 17.4303 181.869 19.3013 183.276 22.9985C184.677 26.6991 182.807 30.8245 179.1 32.2138L54.4444 78.9283L40.9914 -12.3506L-51.7958 93.7987C-53.8693 96.1704 -57.1693 96.847 -59.9428 95.7098Z",
        fill: "white"
      })]
    }), /* @__PURE__ */ jsx("defs", {
      children: /* @__PURE__ */ jsx("clipPath", {
        id,
        children: /* @__PURE__ */ jsx("rect", {
          width: "285",
          height: "139",
          fill: "white"
        })
      })
    })]
  });
};
const Resources = ({
  id,
  resourceType,
  resourceTitle,
  resourceDetail,
  resourceTextDownload,
  resourceLink,
  targetBlank
}) => {
  const cssActive = {
    boxShadow: `0 2px 7px 0 ${vars("colors-neutral-silverSand")}`
  };
  const colorFill = () => {
    const colorMap = {
      jpeg: "#FFBC27",
      jpg: "#FFBC27",
      png: "#FFBC27",
      gif: "#FFBC27",
      ppt: "#FF7A14",
      pptx: "#FF7A14",
      doc: "#0189FF",
      docx: "#0189FF",
      csv: "#28A745",
      xls: "#28A745",
      xlsx: "#28A745",
      pdf: "#CC0000",
      mp4: "#56CCF2",
      avi: "#56CCF2",
      mkv: "#56CCF2",
      mp3: "#9B51E0",
      wav: "#9B51E0",
      url: "#1E2DFF"
    };
    return colorMap[resourceType] || "#FFBC27";
  };
  return /* @__PURE__ */ jsx(Link, {
    href: resourceLink,
    target: targetBlank ? "_blank" : "_self",
    rel: targetBlank ? "noopener noreferrer" : void 0,
    transition: "box-shadow 0.3s",
    _active: cssActive,
    _hover: cssActive,
    _focus: cssActive,
    cursor: "pointer",
    borderRadius: vars("radii-big"),
    border: vars("borders-light"),
    overflow: "hidden",
    children: /* @__PURE__ */ jsxs(Ripples, {
      children: [/* @__PURE__ */ jsxs(Box, {
        width: "285px",
        height: "139px",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        display: "grid",
        padding: "1rem",
        children: [/* @__PURE__ */ jsx(Icons, {
          type: resourceType
        }), /* @__PURE__ */ jsx(Box, {
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-1",
          top: "0px",
          left: "0px",
          opacity: "0.8",
          children: /* @__PURE__ */ jsx(StandardBackground, {
            colorFill: colorFill()
          })
        })]
      }), /* @__PURE__ */ jsxs(Box, {
        width: "285px",
        height: "auto",
        justifyContent: "center",
        textAlign: "center",
        display: "grid",
        gap: "8px",
        padding: "1rem",
        children: [/* @__PURE__ */ jsx(Box, {
          children: /* @__PURE__ */ jsx(Text, {
            fontFamily: "Roboto",
            fontWeight: "700",
            lineHeight: "21px",
            fontSize: "16px",
            color: "#555555",
            m: "0px",
            children: resourceTitle
          })
        }), /* @__PURE__ */ jsx(Box, {
          children: /* @__PURE__ */ jsx(Text, {
            fontFamily: "Roboto",
            fontWeight: "400",
            lineHeight: "14px",
            fontSize: "12px",
            color: "#555555",
            m: "0px",
            children: resourceDetail
          })
        }), /* @__PURE__ */ jsx(Box, {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          children: /* @__PURE__ */ jsxs(Text, {
            fontFamily: "Roboto",
            fontWeight: "500",
            fontSize: "14px",
            lineHeight: "16px",
            color: vars("colors-neutral-gray"),
            textDecoration: "underline",
            gap: "8px",
            display: "flex",
            m: "0px",
            children: [resourceType === "url" ? /* @__PURE__ */ jsx(DiagonalArrow, {
              color: vars("colors-main-deepSkyBlue")
            }) : /* @__PURE__ */ jsx(Download, {
              color: vars("colors-main-deepSkyBlue")
            }), resourceTextDownload]
          })
        })]
      })]
    })
  });
};
const millisecondsInMinute = 6e4;
const millisecondsInHour = 36e5;
const constructFromSymbol = Symbol.for("constructDateFrom");
function constructFrom(date, value) {
  if (typeof date === "function")
    return date(value);
  if (date && typeof date === "object" && constructFromSymbol in date)
    return date[constructFromSymbol](value);
  if (date instanceof Date)
    return new date.constructor(value);
  return new Date(value);
}
function toDate(argument, context) {
  return constructFrom(context || argument, argument);
}
function addDays(date, amount, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  if (isNaN(amount))
    return constructFrom((options == null ? void 0 : options.in) || date, NaN);
  if (!amount)
    return _date;
  _date.setDate(_date.getDate() + amount);
  return _date;
}
function normalizeDates(context, ...dates) {
  const normalize = constructFrom.bind(
    null,
    context || dates.find((date) => typeof date === "object")
  );
  return dates.map(normalize);
}
function startOfDay(date, options) {
  const _date = toDate(date, options == null ? void 0 : options.in);
  _date.setHours(0, 0, 0, 0);
  return _date;
}
function isSameDay(laterDate, earlierDate, options) {
  const [dateLeft_, dateRight_] = normalizeDates(
    options == null ? void 0 : options.in,
    laterDate,
    earlierDate
  );
  return +startOfDay(dateLeft_) === +startOfDay(dateRight_);
}
function isAfter(date, dateToCompare) {
  return +toDate(date) > +toDate(dateToCompare);
}
function parseISO(argument, options) {
  var _a;
  const invalidDate = () => constructFrom(options == null ? void 0 : options.in, NaN);
  const additionalDigits = (_a = options == null ? void 0 : options.additionalDigits) != null ? _a : 2;
  const dateStrings = splitDateString(argument);
  let date;
  if (dateStrings.date) {
    const parseYearResult = parseYear(dateStrings.date, additionalDigits);
    date = parseDate(parseYearResult.restDateString, parseYearResult.year);
  }
  if (!date || isNaN(+date))
    return invalidDate();
  const timestamp = +date;
  let time = 0;
  let offset;
  if (dateStrings.time) {
    time = parseTime(dateStrings.time);
    if (isNaN(time))
      return invalidDate();
  }
  if (dateStrings.timezone) {
    offset = parseTimezone(dateStrings.timezone);
    if (isNaN(offset))
      return invalidDate();
  } else {
    const tmpDate = new Date(timestamp + time);
    const result = toDate(0, options == null ? void 0 : options.in);
    result.setFullYear(
      tmpDate.getUTCFullYear(),
      tmpDate.getUTCMonth(),
      tmpDate.getUTCDate()
    );
    result.setHours(
      tmpDate.getUTCHours(),
      tmpDate.getUTCMinutes(),
      tmpDate.getUTCSeconds(),
      tmpDate.getUTCMilliseconds()
    );
    return result;
  }
  return toDate(timestamp + time + offset, options == null ? void 0 : options.in);
}
const patterns = {
  dateTimeDelimiter: /[T ]/,
  timeZoneDelimiter: /[Z ]/i,
  timezone: /([Z+-].*)$/
};
const dateRegex = /^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/;
const timeRegex = /^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/;
const timezoneRegex = /^([+-])(\d{2})(?::?(\d{2}))?$/;
function splitDateString(dateString) {
  const dateStrings = {};
  const array = dateString.split(patterns.dateTimeDelimiter);
  let timeString;
  if (array.length > 2) {
    return dateStrings;
  }
  if (/:/.test(array[0])) {
    timeString = array[0];
  } else {
    dateStrings.date = array[0];
    timeString = array[1];
    if (patterns.timeZoneDelimiter.test(dateStrings.date)) {
      dateStrings.date = dateString.split(patterns.timeZoneDelimiter)[0];
      timeString = dateString.substr(
        dateStrings.date.length,
        dateString.length
      );
    }
  }
  if (timeString) {
    const token = patterns.timezone.exec(timeString);
    if (token) {
      dateStrings.time = timeString.replace(token[1], "");
      dateStrings.timezone = token[1];
    } else {
      dateStrings.time = timeString;
    }
  }
  return dateStrings;
}
function parseYear(dateString, additionalDigits) {
  const regex = new RegExp(
    "^(?:(\\d{4}|[+-]\\d{" + (4 + additionalDigits) + "})|(\\d{2}|[+-]\\d{" + (2 + additionalDigits) + "})$)"
  );
  const captures = dateString.match(regex);
  if (!captures)
    return { year: NaN, restDateString: "" };
  const year = captures[1] ? parseInt(captures[1]) : null;
  const century = captures[2] ? parseInt(captures[2]) : null;
  return {
    year: century === null ? year : century * 100,
    restDateString: dateString.slice((captures[1] || captures[2]).length)
  };
}
function parseDate(dateString, year) {
  if (year === null)
    return new Date(NaN);
  const captures = dateString.match(dateRegex);
  if (!captures)
    return new Date(NaN);
  const isWeekDate = !!captures[4];
  const dayOfYear = parseDateUnit(captures[1]);
  const month = parseDateUnit(captures[2]) - 1;
  const day = parseDateUnit(captures[3]);
  const week = parseDateUnit(captures[4]);
  const dayOfWeek = parseDateUnit(captures[5]) - 1;
  if (isWeekDate) {
    if (!validateWeekDate(year, week, dayOfWeek)) {
      return new Date(NaN);
    }
    return dayOfISOWeekYear(year, week, dayOfWeek);
  } else {
    const date = new Date(0);
    if (!validateDate(year, month, day) || !validateDayOfYearDate(year, dayOfYear)) {
      return new Date(NaN);
    }
    date.setUTCFullYear(year, month, Math.max(dayOfYear, day));
    return date;
  }
}
function parseDateUnit(value) {
  return value ? parseInt(value) : 1;
}
function parseTime(timeString) {
  const captures = timeString.match(timeRegex);
  if (!captures)
    return NaN;
  const hours = parseTimeUnit(captures[1]);
  const minutes = parseTimeUnit(captures[2]);
  const seconds = parseTimeUnit(captures[3]);
  if (!validateTime(hours, minutes, seconds)) {
    return NaN;
  }
  return hours * millisecondsInHour + minutes * millisecondsInMinute + seconds * 1e3;
}
function parseTimeUnit(value) {
  return value && parseFloat(value.replace(",", ".")) || 0;
}
function parseTimezone(timezoneString) {
  if (timezoneString === "Z")
    return 0;
  const captures = timezoneString.match(timezoneRegex);
  if (!captures)
    return 0;
  const sign = captures[1] === "+" ? -1 : 1;
  const hours = parseInt(captures[2]);
  const minutes = captures[3] && parseInt(captures[3]) || 0;
  if (!validateTimezone(hours, minutes)) {
    return NaN;
  }
  return sign * (hours * millisecondsInHour + minutes * millisecondsInMinute);
}
function dayOfISOWeekYear(isoWeekYear, week, day) {
  const date = new Date(0);
  date.setUTCFullYear(isoWeekYear, 0, 4);
  const fourthOfJanuaryDay = date.getUTCDay() || 7;
  const diff = (week - 1) * 7 + day + 1 - fourthOfJanuaryDay;
  date.setUTCDate(date.getUTCDate() + diff);
  return date;
}
const daysInMonths = [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function isLeapYearIndex(year) {
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0;
}
function validateDate(year, month, date) {
  return month >= 0 && month <= 11 && date >= 1 && date <= (daysInMonths[month] || (isLeapYearIndex(year) ? 29 : 28));
}
function validateDayOfYearDate(year, dayOfYear) {
  return dayOfYear >= 1 && dayOfYear <= (isLeapYearIndex(year) ? 366 : 365);
}
function validateWeekDate(_year, week, day) {
  return week >= 1 && week <= 53 && day >= 0 && day <= 6;
}
function validateTime(hours, minutes, seconds) {
  if (hours === 24) {
    return minutes === 0 && seconds === 0;
  }
  return seconds >= 0 && seconds < 60 && minutes >= 0 && minutes < 60 && hours >= 0 && hours < 25;
}
function validateTimezone(_hours, minutes) {
  return minutes >= 0 && minutes <= 59;
}
const STORAGE_TODAY_EVENT = "todayEvents";
const STORAGE_SEEN_EVENT = "seenEvents";
const STORAGE_HAS_NEW = "hasNewEvents";
const useParseEvents = (events, now) => {
  const [todayEvents, setTodayEvents] = useState([]);
  const [tomorrowEvents, setTomorrowEvents] = useState([]);
  const [nextEvents, setNextEvents] = useState([]);
  const [hasNew, setHasNew] = useState(false);
  useEffect(() => {
    var _a, _b;
    const parseNow = parseISO(now);
    const today = startOfDay(parseNow);
    const tomorrow = addDays(today, 1);
    const storedTodayEvent = JSON.parse((_a = localStorage.getItem(STORAGE_TODAY_EVENT)) != null ? _a : "[]");
    const storedSeenEvent = JSON.parse((_b = localStorage.getItem(STORAGE_SEEN_EVENT)) != null ? _b : "[]");
    let newEvents = false;
    const todayList = [];
    const tomorrowList = [];
    const nextList = [];
    events.forEach((event) => {
      const eventStart = parseISO(event.start);
      if (isSameDay(eventStart, today)) {
        const seen = storedSeenEvent.includes(event.id);
        if (!seen) {
          newEvents = true;
          if (!storedTodayEvent.includes(event.id)) {
            storedTodayEvent.push(event.id);
          }
        }
        todayList.push({ ...event, isNew: !seen });
      } else if (isSameDay(eventStart, tomorrow)) {
        tomorrowList.push(event);
      } else if (isAfter(eventStart, today)) {
        nextList.push(event);
      }
    });
    setTodayEvents(todayList);
    setTomorrowEvents(tomorrowList);
    let next = [...nextList];
    if (nextList.length > 5) {
      next = next.slice(0, 5);
    }
    setNextEvents(next);
    setHasNew(newEvents);
    localStorage.setItem(STORAGE_TODAY_EVENT, JSON.stringify(storedTodayEvent));
    localStorage.setItem(STORAGE_HAS_NEW, JSON.stringify(newEvents));
  }, [events, now]);
  const closeAndMarkSeen = () => {
    var _a;
    const storedSeenEvent = JSON.parse((_a = localStorage.getItem(STORAGE_SEEN_EVENT)) != null ? _a : "[]");
    const updatedSeenEvents = Array.from(
      /* @__PURE__ */ new Set([...storedSeenEvent, ...todayEvents.map((e2) => e2.id)])
    );
    localStorage.setItem(STORAGE_SEEN_EVENT, JSON.stringify(updatedSeenEvents));
    localStorage.setItem(STORAGE_HAS_NEW, JSON.stringify(false));
    setTimeout(() => {
      setTodayEvents(todayEvents.map((el) => ({ ...el, isNew: false })));
    }, 300);
    setHasNew(false);
  };
  const empty = false;
  return {
    today: todayEvents,
    tomorrow: tomorrowEvents,
    next: nextEvents,
    hasNew,
    closeAndMarkSeen,
    empty
  };
};
const CalendarButtonIcon = () => /* @__PURE__ */ jsxs("svg", {
  width: "16px",
  height: "16px",
  fill: "none",
  children: [/* @__PURE__ */ jsx("path", {
    fill: "#fff",
    d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Zm-1 12H2V5h12v9Z"
  }), /* @__PURE__ */ jsx("path", {
    fill: "#fff",
    d: "M6 7H4v2h2V7ZM9 7H7v2h2V7ZM6 10H4v2h2v-2ZM9 10H7v2h2v-2ZM12 7h-2v2h2V7ZM12 10h-2v2h2v-2Z"
  })]
});
const GoToCalendar = ({
  text,
  tooltipDisabled,
  onlyToCalendar,
  onClick
}) => {
  var _a, _b;
  const activeBg = (_a = vars("colors-main-deepSkyBlue")) != null ? _a : "#0189FF";
  return /* @__PURE__ */ jsx(NewTooltip, {
    label: text != null ? text : "Calendario",
    m: "2px 0 0 0",
    isDisabled: tooltipDisabled,
    children: /* @__PURE__ */ jsx(MenuButton, {
      onClick: () => onlyToCalendar && onClick && onClick(),
      background: (_b = vars("colors-main-blueGrey")) != null ? _b : "#60798E",
      border: "1px solid transparent",
      borderRadius: "100%",
      height: "30px !important",
      width: "30px !important",
      padding: "0 !important",
      margin: "0 !important",
      position: "relative",
      _active: {
        bg: activeBg,
        "&:hover": {
          bg: activeBg
        }
      },
      _hover: {
        bg: "rgba(96, 121, 142, 0.8)"
      },
      sx: {
        ">span": {
          display: "grid",
          alignContent: "center",
          h: "16px!important",
          justifyItems: "center",
          lineHeight: "0"
        }
      },
      children: /* @__PURE__ */ jsx(CalendarButtonIcon, {})
    })
  });
};
const Header = ({
  text,
  isMobile
}) => {
  var _a, _b;
  return /* @__PURE__ */ jsx(Box, {
    as: "header",
    bg: (_a = vars("colors-neutral-davysGrey")) != null ? _a : "#5C5C5C",
    borderRadius: isMobile ? "none" : "10px 10px 0 0",
    color: (_b = vars("colors-neutral-white")) != null ? _b : "#FFFFFF",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "normal",
    padding: "16px",
    position: "absolute",
    width: isMobile ? "100vw" : "100%",
    top: 0,
    zIndex: "1",
    children: text != null ? text : "Pr\xF3ximas fechas importantes de tus cursos"
  });
};
const NoEventsIcon = () => /* @__PURE__ */ jsxs("svg", {
  width: "197px",
  height: "197px",
  fill: "none",
  children: [/* @__PURE__ */ jsxs("g", {
    clipPath: "url(#a)",
    children: [/* @__PURE__ */ jsx("path", {
      fill: "#F4F4F4",
      d: "M98.5 197c54.4 0 98.5-44.1 98.5-98.5S152.9 0 98.5 0 0 44.1 0 98.5 44.1 197 98.5 197Z"
    }), /* @__PURE__ */ jsx("rect", {
      width: "74px",
      height: "29px",
      x: "106px",
      y: "12px",
      fill: "#FF554D",
      rx: "5px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "40px",
      height: "6px",
      x: "125px",
      y: "24px",
      fill: "#08044F",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "6px",
      height: "6px",
      x: "114px",
      y: "24px",
      fill: "#08044F",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "106px",
      height: "29px",
      x: "11px",
      y: "159px",
      fill: "#1EBDAF",
      rx: "5px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "67px",
      height: "6px",
      x: "21px",
      y: "170px",
      fill: "#08044F",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "6px",
      height: "6px",
      x: "99px",
      y: "170px",
      fill: "#08044F",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "123px",
      height: "82px",
      x: "37px",
      y: "66px",
      fill: "#0189FF",
      rx: "5px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "131px",
      y: "93px",
      fill: "#F4F4F4",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "131px",
      y: "110px",
      fill: "#F4F4F4",
      rx: "3px"
    }), /* @__PURE__ */ jsx("path", {
      stroke: "#FFBC27",
      strokeLinecap: "round",
      strokeWidth: "13px",
      d: "M68.5 56.5v19M132.5 56.5v19"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "50px",
      y: "93px",
      fill: "#F4F4F4",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "50px",
      y: "110px",
      fill: "#F4F4F4",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "50px",
      y: "127px",
      fill: "#F4F4F4",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "77px",
      y: "93px",
      fill: "#F4F4F4",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "104px",
      y: "93px",
      fill: "#F4F4F4",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "104px",
      y: "110px",
      fill: "#F4F4F4",
      rx: "3px"
    }), /* @__PURE__ */ jsx("rect", {
      width: "16px",
      height: "6px",
      x: "104px",
      y: "127px",
      fill: "#F4F4F4",
      rx: "3px"
    })]
  }), /* @__PURE__ */ jsx("defs", {
    children: /* @__PURE__ */ jsx("clipPath", {
      id: "a",
      children: /* @__PURE__ */ jsx("path", {
        fill: "#fff",
        d: "M0 0h197v197H0z"
      })
    })
  })]
});
const Empty = ({
  text
}) => {
  return /* @__PURE__ */ jsxs(Box, {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "24px",
    padding: "104px 0px 64px",
    children: [/* @__PURE__ */ jsx(NoEventsIcon, {}), /* @__PURE__ */ jsx(Box, {
      fontSize: "20px",
      fontWeight: "700",
      color: vars("colors-neutral-darkCharcoal") || "#2F2F2F",
      children: text != null ? text : "A\xFAn no tienes eventos en tu calendario"
    })]
  });
};
const EventsGroup = ({
  title,
  events,
  text,
  colors: colors2,
  clickEvent
}) => {
  var _a;
  if (!events || events && events.length === 0)
    return /* @__PURE__ */ jsx(Fragment, {});
  const handleClick = (event) => {
    clickEvent == null ? void 0 : clickEvent(event);
  };
  return /* @__PURE__ */ jsx(Box, {
    className: "calendar-events-group",
    _focus: {
      background: "none !important",
      border: `1px solid ${(_a = vars("colors-icon-deepSkyBlue")) != null ? _a : "#0189FF"}`
    },
    sx: {
      ".chakra-menu__menuitem > div": {
        w: "100%"
      }
    },
    children: /* @__PURE__ */ jsx(MenuGroup, {
      title,
      children: events.map((event) => {
        var _a2;
        return /* @__PURE__ */ jsx(Box, {
          bg: (_a2 = vars("colors-neutral-white")) != null ? _a2 : "#FFFFFF",
          border: "none",
          cursor: "default",
          padding: "0",
          _hover: {
            boxShadow: "none !important",
            cursor: "default !important",
            bg: "none !important"
          },
          _focus: {
            background: "none !important",
            boxShadow: "none !important"
          },
          children: /* @__PURE__ */ jsx(EventsList, {
            name: event.associated_resource.name || "",
            courseName: event.course.name,
            date: event.formatedDate.start,
            hours: event.formatedDate.hours,
            color: event.course_id && (colors2 == null ? void 0 : colors2[event.course_id]) ? colors2[event.course_id] : "#82504A",
            text,
            hasNotification: event.isNew,
            isDropdown: true,
            clickEvent: () => handleClick(event)
          }, event.id)
        }, event.id);
      })
    })
  });
};
const Events = ({
  events,
  text,
  redirecToCalendar,
  isMobile,
  colors: colors2,
  clickEvent
}) => {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k;
  const {
    today,
    tomorrow,
    next
  } = events;
  return /* @__PURE__ */ jsxs(Box, {
    borderRadius: "10px",
    color: "#1C1818",
    h: isMobile ? "auto" : "552px",
    overflowY: "scroll",
    pb: "32px",
    sx: {
      ".calendar-events-group": {
        borderBottom: `1px solid ${(_a = vars("colors-neutral-platinum")) != null ? _a : "#E8E8E8"}`
      }
    },
    children: [redirecToCalendar && /* @__PURE__ */ jsx(Box, {
      sx: {
        button: {
          p: "8px ",
          fontSize: "14px",
          lineHeight: "14px",
          minW: "fit-content",
          minH: "fit-content"
        }
      },
      children: /* @__PURE__ */ jsx(BtnSecondary, {
        onClick: redirecToCalendar,
        m: "72px 0 0 24px",
        id: "RedirectButton",
        children: (_b = text == null ? void 0 : text.buttonCalendar) != null ? _b : "Ir a Mi Calendario"
      })
    }), /* @__PURE__ */ jsx(EventsGroup, {
      colors: colors2,
      text: (_c = text == null ? void 0 : text.course) != null ? _c : "",
      title: (_e = (_d = text == null ? void 0 : text.events) == null ? void 0 : _d.today) != null ? _e : "Hoy",
      events: today,
      clickEvent
    }), /* @__PURE__ */ jsx(EventsGroup, {
      colors: colors2,
      text: (_f = text == null ? void 0 : text.course) != null ? _f : "",
      title: (_h = (_g = text == null ? void 0 : text.events) == null ? void 0 : _g.tomorrow) != null ? _h : "Ma\xF1ana",
      events: tomorrow,
      clickEvent
    }), /* @__PURE__ */ jsx(EventsGroup, {
      colors: colors2,
      text: (_i = text == null ? void 0 : text.course) != null ? _i : "",
      title: (_k = (_j = text == null ? void 0 : text.events) == null ? void 0 : _j.next) != null ? _k : "Pr\xF3ximos",
      events: next,
      clickEvent
    })]
  });
};
const CalendarDropdownContainer = ({
  events,
  loading,
  text,
  now,
  redirectToCalendar,
  courseColors,
  onlyToCalendar,
  m: m2,
  clickEvent
}) => {
  var _a, _b, _c, _d, _e, _f, _g;
  const [isMobile] = useMediaQuery("(max-width: 577px)");
  const {
    closeAndMarkSeen,
    empty,
    hasNew,
    ...all
  } = useParseEvents(events, now);
  const [isTooltipDisabled, setTooltipDisabled] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      setTooltipDisabled(true);
    } else {
      const timer = setTimeout(() => setTooltipDisabled(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isMenuOpen]);
  useEffect(() => {
    if (!isMobile || onlyToCalendar)
      return;
    const viewContainer = document.getElementById("ViewContainer");
    if (viewContainer) {
      viewContainer.style.display = isMenuOpen ? "none" : "";
    } else {
      const mainElement = document.querySelector(".main");
      if (!mainElement)
        return;
      const firstChild = mainElement.firstElementChild;
      if (!firstChild || !(firstChild instanceof HTMLElement))
        return;
      const headerElement = firstChild.querySelector("header.header");
      if (!headerElement)
        return;
      const targetElement = headerElement.nextElementSibling;
      if (!targetElement || !(targetElement instanceof HTMLElement))
        return;
      targetElement.style.display = isMenuOpen ? "none" : "";
    }
  }, [isMobile, isMenuOpen, onlyToCalendar]);
  const onClose = () => {
    closeAndMarkSeen();
    setMenuOpen(false);
  };
  return /* @__PURE__ */ jsx(Box, {
    zIndex: 4,
    className: `calendarDropdown ${hasNew && !onlyToCalendar ? "hasNew" : ""}`,
    width: "30px",
    height: "30px",
    m: m2,
    position: "relative",
    sx: {
      "&::after": {
        borderColor: `transparent transparent ${(_a = vars("colors-neutral-davysGrey")) != null ? _a : "#5C5C5C"} transparent`,
        borderStyle: "solid",
        borderWidth: "0 11px 10px 11px",
        content: '""',
        display: isMenuOpen ? "block" : "none",
        height: "0",
        left: "50%",
        position: "absolute",
        top: "30px",
        transform: "translateX(-50%)",
        width: "0"
      },
      "&.hasNew::before": {
        background: (_b = vars("colors-secondary-pumpkin")) != null ? _b : "#FF7A14",
        borderRadius: "50%",
        content: '""',
        display: "block",
        height: "8px",
        width: "8px",
        position: "absolute",
        right: "0",
        top: "0",
        zIndex: "1"
      },
      ">div": {
        left: isMobile ? "0 !important" : "auto",
        position: isMobile ? "fixed !important" : "absolute",
        top: isMobile ? "62px !important" : "auto",
        transform: isMobile ? "none !important" : "translate3d(-409px, 38px, 0px) !important"
      },
      ".chakra-menu__menu-list": {
        animation: "none !important",
        background: "transparent",
        border: "none",
        borderRadius: isMobile ? "0" : "10px",
        boxShadow: isMobile ? "none" : "rgba(47, 47, 47, 0.2) -1px 6px 40px 0px",
        left: isMobile ? "auto" : "-30px",
        maxHeight: isMobile ? "calc(100vh - 62px)" : "auto",
        opacity: "1 !important",
        overflowY: isMobile ? "auto" : "hidden",
        padding: "0",
        position: "absolute",
        top: isMobile ? "-6px !important" : "auto",
        transform: "none !important",
        transition: "none !important",
        width: isMobile ? "100vw" : "500px"
      },
      ".chakra-menu__group__title": {
        fontSize: "18px",
        fontWeight: "700",
        lineHeight: "31px",
        margin: "32px 0 0",
        padding: "0 0 8px 24px"
      },
      ".react-ripples": {
        width: "inherit"
      }
    },
    children: /* @__PURE__ */ jsx(Menu, {
      autoSelect: false,
      onOpen: () => setMenuOpen(true),
      onClose,
      children: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(GoToCalendar, {
          text: (_c = text == null ? void 0 : text.tooltip) != null ? _c : "Ir a Mi Calendario",
          tooltipDisabled: isTooltipDisabled,
          onlyToCalendar,
          onClick: redirectToCalendar
        }), !onlyToCalendar && /* @__PURE__ */ jsxs(MenuList, {
          children: [/* @__PURE__ */ jsx(Header, {
            text: (_d = text == null ? void 0 : text.header) != null ? _d : "Pr\xF3ximas fechas importantes de tus cursos",
            isMobile
          }), /* @__PURE__ */ jsx(Box, {
            bg: (_e = vars("colors-neutral-white")) != null ? _e : "#FFF",
            children: loading ? /* @__PURE__ */ jsx(Loading, {
              text: (_f = text == null ? void 0 : text.loading) != null ? _f : "Cargando"
            }) : events.length === 0 || empty ? /* @__PURE__ */ jsx(Empty, {
              text: (_g = text == null ? void 0 : text.empty) != null ? _g : "A\xFAn no tienes eventos en tu calendario"
            }) : /* @__PURE__ */ jsx(Events, {
              colors: courseColors,
              events: all,
              text,
              redirecToCalendar: redirectToCalendar,
              isMobile,
              clickEvent
            })
          })]
        })]
      })
    })
  });
};
const Loading = ({
  text
}) => {
  return /* @__PURE__ */ jsx("div", {
    children: text != null ? text : "Loading..."
  });
};
const CalendarDropdown = ({
  redirectToCalendar,
  text,
  courseColors,
  now,
  events,
  loading,
  onlyToCalendar = false,
  m: m2,
  clickEvent
}) => {
  const date = new Date(now);
  const isoDate = date.toISOString();
  return /* @__PURE__ */ jsx(CalendarDropdownContainer, {
    m: m2,
    events,
    loading,
    now: isoDate,
    courseColors,
    redirectToCalendar,
    text,
    onlyToCalendar,
    clickEvent
  });
};
function Calendar(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    title: "Calendar",
    children: /* @__PURE__ */ jsxs("g", {
      fill: "#B0CFE0",
      children: [/* @__PURE__ */ jsx("path", {
        fill: "#B0CFE0",
        d: "M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 12H2V5h12v9z"
      }), /* @__PURE__ */ jsx("path", {
        d: "M4 7h2v2H4zM7 7h2v2H7zM4 10h2v2H4zM7 10h2v2H7zM10 7h2v2h-2zM10 10h2v2h-2z"
      })]
    })
  });
}
Calendar.displayName = "Calendar";
function Clock(props) {
  return /* @__PURE__ */ jsx(Base, {
    ...props,
    title: "Clock",
    children: /* @__PURE__ */ jsx("path", {
      fill: "#B0CFE0",
      d: "M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm4 9H7V4h2v3h3v2z"
    })
  });
}
Clock.displayName = "Clock";
const NotificationIcon = () => /* @__PURE__ */ jsx("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "8px",
  height: "9px",
  fill: "none",
  className: "goToCalendarNotification",
  children: /* @__PURE__ */ jsx("circle", {
    cx: "4px",
    cy: "4.5px",
    r: "4px",
    fill: "#FF7A14"
  })
});
const EventsList = ({
  hasNotification,
  isDropdown,
  name,
  courseName,
  color,
  text,
  date,
  hours,
  clickEvent
}) => {
  var _a, _b, _c, _d;
  const border = `1px solid ${(_a = vars("colors-neutral-platinum")) != null ? _a : "#E8E8E8"}`;
  const handleClick = () => clickEvent == null ? void 0 : clickEvent();
  return /* @__PURE__ */ jsx(Ripples, {
    children: /* @__PURE__ */ jsx(Box, {
      className: "eventsList",
      borderTop: border,
      padding: "16px 24px",
      onClick: handleClick,
      cursor: "pointer",
      bg: (_b = vars("colors-neutral-white")) != null ? _b : "#fff",
      _hover: {
        bg: (_c = vars("colors-neutral-cultured2")) != null ? _c : "#F8F8F8"
      },
      children: /* @__PURE__ */ jsxs(Box, {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        children: [/* @__PURE__ */ jsxs(Box, {
          lineHeight: "21px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          fontSize: "16px",
          children: [name, " ", hasNotification && /* @__PURE__ */ jsx(NotificationIcon, {})]
        }), /* @__PURE__ */ jsxs(Box, {
          display: "flex",
          lineHeight: "19px",
          fontSize: "14px",
          sx: {
            svg: {
              marginRight: "4px"
            },
            span: {
              verticalAlign: "middle"
            }
          },
          children: [/* @__PURE__ */ jsxs(Box, {
            paddingRight: "8px",
            borderRight: border,
            children: [/* @__PURE__ */ jsx(Calendar, {}), /* @__PURE__ */ jsx("span", {
              children: date
            })]
          }), /* @__PURE__ */ jsxs(Box, {
            paddingLeft: "8px",
            children: [/* @__PURE__ */ jsx(Clock, {}), /* @__PURE__ */ jsx("span", {
              children: hours
            })]
          })]
        }), isDropdown && /* @__PURE__ */ jsxs(Box, {
          display: "flex",
          alignItems: "center",
          gap: "4px",
          lineHeight: "19px",
          children: [/* @__PURE__ */ jsx(Box, {
            alignSelf: "flex-start",
            bg: color,
            borderRadius: "50%",
            display: "block",
            h: "10px",
            mt: "4px",
            maxH: "10px",
            maxW: "10px",
            minH: "10px",
            minW: "10px",
            w: "10px"
          }), /* @__PURE__ */ jsxs(Box, {
            as: "span",
            color: (_d = vars("colors-neutral-gray")) != null ? _d : "#808080",
            fontSize: "14px",
            children: [/* @__PURE__ */ jsxs("strong", {
              children: [text != null ? text : "Curso", ":"]
            }), " ", courseName]
          })]
        })]
      })
    })
  });
};
export { Alert, Btn, BtnLink, BtnPrimary, BtnSecondary, BtnTertiary, CalendarDropdown, CourseList, CourseStatus, Eventos, EventsList, FlashNotification, index as Icons, Label, ModalAlert, NewTooltip, Progress, Resources, Ripples, TinyAlert, UserWay, UserWayCookie, dataFake, maxWidthCoursesList, theme, useFlashNotification, vars };
//# sourceMappingURL=eclass-ui-kit.es.js.map
