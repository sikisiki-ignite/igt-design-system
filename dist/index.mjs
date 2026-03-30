import Se, { useState as Oe, useEffect as ht } from "react";
var ee = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Re;
function pt() {
  if (Re) return I;
  Re = 1;
  var i = Se, r = Symbol.for("react.element"), a = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, l = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(f, u, _) {
    var b, j = {}, $ = null, y = null;
    _ !== void 0 && ($ = "" + _), u.key !== void 0 && ($ = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (b in u) n.call(u, b) && !o.hasOwnProperty(b) && (j[b] = u[b]);
    if (f && f.defaultProps) for (b in u = f.defaultProps, u) j[b] === void 0 && (j[b] = u[b]);
    return { $$typeof: r, type: f, key: $, ref: y, props: j, _owner: l.current };
  }
  return I.Fragment = a, I.jsx = d, I.jsxs = d, I;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $e;
function mt() {
  return $e || ($e = 1, process.env.NODE_ENV !== "production" && function() {
    var i = Se, r = Symbol.for("react.element"), a = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), f = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), _ = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), $ = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), D = Symbol.iterator, P = "@@iterator";
    function W(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = D && e[D] || e[P];
      return typeof s == "function" ? s : null;
    }
    var w = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function k(e) {
      {
        for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), g = 1; g < s; g++)
          c[g - 1] = arguments[g];
        De("error", e, c);
      }
    }
    function De(e, s, c) {
      {
        var g = w.ReactDebugCurrentFrame, m = g.getStackAddendum();
        m !== "" && (s += "%s", c = c.concat([m]));
        var v = c.map(function(p) {
          return String(p);
        });
        v.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, v);
      }
    }
    var Pe = !1, Ae = !1, Be = !1, ze = !1, Fe = !1, te;
    te = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === n || e === o || Fe || e === l || e === _ || e === b || ze || e === y || Pe || Ae || Be || typeof e == "object" && e !== null && (e.$$typeof === $ || e.$$typeof === j || e.$$typeof === d || e.$$typeof === f || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === te || e.getModuleId !== void 0));
    }
    function Le(e, s, c) {
      var g = e.displayName;
      if (g)
        return g;
      var m = s.displayName || s.name || "";
      return m !== "" ? c + "(" + m + ")" : c;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && k("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case n:
          return "Fragment";
        case a:
          return "Portal";
        case o:
          return "Profiler";
        case l:
          return "StrictMode";
        case _:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var s = e;
            return ie(s) + ".Consumer";
          case d:
            var c = e;
            return ie(c._context) + ".Provider";
          case u:
            return Le(e, e.render, "ForwardRef");
          case j:
            var g = e.displayName || null;
            return g !== null ? g : C(e.type) || "Memo";
          case $: {
            var m = e, v = m._payload, p = m._init;
            try {
              return C(p(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var S = Object.assign, z = 0, ae, re, ne, se, le, oe, ce;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function We() {
      {
        if (z === 0) {
          ae = console.log, re = console.info, ne = console.warn, se = console.error, le = console.group, oe = console.groupCollapsed, ce = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        z++;
      }
    }
    function Ye() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: S({}, e, {
              value: ae
            }),
            info: S({}, e, {
              value: re
            }),
            warn: S({}, e, {
              value: ne
            }),
            error: S({}, e, {
              value: se
            }),
            group: S({}, e, {
              value: le
            }),
            groupCollapsed: S({}, e, {
              value: oe
            }),
            groupEnd: S({}, e, {
              value: ce
            })
          });
        }
        z < 0 && k("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var J = w.ReactCurrentDispatcher, q;
    function Y(e, s, c) {
      {
        if (q === void 0)
          try {
            throw Error();
          } catch (m) {
            var g = m.stack.trim().match(/\n( *(at )?)/);
            q = g && g[1] || "";
          }
        return `
` + q + e;
      }
    }
    var G = !1, M;
    {
      var Me = typeof WeakMap == "function" ? WeakMap : Map;
      M = new Me();
    }
    function ue(e, s) {
      if (!e || G)
        return "";
      {
        var c = M.get(e);
        if (c !== void 0)
          return c;
      }
      var g;
      G = !0;
      var m = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = J.current, J.current = null, We();
      try {
        if (s) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (R) {
              g = R;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (R) {
              g = R;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (R) {
            g = R;
          }
          e();
        }
      } catch (R) {
        if (R && g && typeof R.stack == "string") {
          for (var h = R.stack.split(`
`), E = g.stack.split(`
`), x = h.length - 1, N = E.length - 1; x >= 1 && N >= 0 && h[x] !== E[N]; )
            N--;
          for (; x >= 1 && N >= 0; x--, N--)
            if (h[x] !== E[N]) {
              if (x !== 1 || N !== 1)
                do
                  if (x--, N--, N < 0 || h[x] !== E[N]) {
                    var T = `
` + h[x].replace(" at new ", " at ");
                    return e.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", e.displayName)), typeof e == "function" && M.set(e, T), T;
                  }
                while (x >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        G = !1, J.current = v, Ye(), Error.prepareStackTrace = m;
      }
      var B = e ? e.displayName || e.name : "", O = B ? Y(B) : "";
      return typeof e == "function" && M.set(e, O), O;
    }
    function Ue(e, s, c) {
      return ue(e, !1);
    }
    function Ve(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function U(e, s, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ue(e, Ve(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case _:
          return Y("Suspense");
        case b:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Ue(e.render);
          case j:
            return U(e.type, s, c);
          case $: {
            var g = e, m = g._payload, v = g._init;
            try {
              return U(v(m), s, c);
            } catch {
            }
          }
        }
      return "";
    }
    var F = Object.prototype.hasOwnProperty, fe = {}, ge = w.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var s = e._owner, c = U(e.type, e._source, s ? s.type : null);
        ge.setExtraStackFrame(c);
      } else
        ge.setExtraStackFrame(null);
    }
    function Je(e, s, c, g, m) {
      {
        var v = Function.call.bind(F);
        for (var p in e)
          if (v(e, p)) {
            var h = void 0;
            try {
              if (typeof e[p] != "function") {
                var E = Error((g || "React class") + ": " + c + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw E.name = "Invariant Violation", E;
              }
              h = e[p](s, p, g, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (x) {
              h = x;
            }
            h && !(h instanceof Error) && (V(m), k("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", g || "React class", c, p, typeof h), V(null)), h instanceof Error && !(h.message in fe) && (fe[h.message] = !0, V(m), k("Failed %s type: %s", c, h.message), V(null));
          }
      }
    }
    var qe = Array.isArray;
    function X(e) {
      return qe(e);
    }
    function Ge(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, c = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function Xe(e) {
      try {
        return he(e), !1;
      } catch {
        return !0;
      }
    }
    function he(e) {
      return "" + e;
    }
    function pe(e) {
      if (Xe(e))
        return k("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ge(e)), he(e);
    }
    var me = w.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, be;
    function Ze(e) {
      if (F.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ke(e) {
      if (F.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, s) {
      typeof e.ref == "string" && me.current;
    }
    function et(e, s) {
      {
        var c = function() {
          _e || (_e = !0, k("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function tt(e, s) {
      {
        var c = function() {
          be || (be = !0, k("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var it = function(e, s, c, g, m, v, p) {
      var h = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: c,
        props: p,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return h._store = {}, Object.defineProperty(h._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(h, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.defineProperty(h, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.freeze && (Object.freeze(h.props), Object.freeze(h)), h;
    };
    function at(e, s, c, g, m) {
      {
        var v, p = {}, h = null, E = null;
        c !== void 0 && (pe(c), h = "" + c), Ke(s) && (pe(s.key), h = "" + s.key), Ze(s) && (E = s.ref, Qe(s, m));
        for (v in s)
          F.call(s, v) && !He.hasOwnProperty(v) && (p[v] = s[v]);
        if (e && e.defaultProps) {
          var x = e.defaultProps;
          for (v in x)
            p[v] === void 0 && (p[v] = x[v]);
        }
        if (h || E) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          h && et(p, N), E && tt(p, N);
        }
        return it(e, h, E, m, g, me.current, p);
      }
    }
    var H = w.ReactCurrentOwner, ve = w.ReactDebugCurrentFrame;
    function A(e) {
      if (e) {
        var s = e._owner, c = U(e.type, e._source, s ? s.type : null);
        ve.setExtraStackFrame(c);
      } else
        ve.setExtraStackFrame(null);
    }
    var Z;
    Z = !1;
    function K(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function xe() {
      {
        if (H.current) {
          var e = C(H.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rt(e) {
      return "";
    }
    var je = {};
    function nt(e) {
      {
        var s = xe();
        if (!s) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (s = `

Check the top-level render call using <` + c + ">.");
        }
        return s;
      }
    }
    function Ne(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = nt(s);
        if (je[c])
          return;
        je[c] = !0;
        var g = "";
        e && e._owner && e._owner !== H.current && (g = " It was passed a child from " + C(e._owner.type) + "."), A(e), k('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, g), A(null);
      }
    }
    function ye(e, s) {
      {
        if (typeof e != "object")
          return;
        if (X(e))
          for (var c = 0; c < e.length; c++) {
            var g = e[c];
            K(g) && Ne(g, s);
          }
        else if (K(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var m = W(e);
          if (typeof m == "function" && m !== e.entries)
            for (var v = m.call(e), p; !(p = v.next()).done; )
              K(p.value) && Ne(p.value, s);
        }
      }
    }
    function st(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var c;
        if (typeof s == "function")
          c = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === j))
          c = s.propTypes;
        else
          return;
        if (c) {
          var g = C(s);
          Je(c, e.props, "prop", g, e);
        } else if (s.PropTypes !== void 0 && !Z) {
          Z = !0;
          var m = C(s);
          k("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", m || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && k("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function lt(e) {
      {
        for (var s = Object.keys(e.props), c = 0; c < s.length; c++) {
          var g = s[c];
          if (g !== "children" && g !== "key") {
            A(e), k("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", g), A(null);
            break;
          }
        }
        e.ref !== null && (A(e), k("Invalid attribute `ref` supplied to `React.Fragment`."), A(null));
      }
    }
    var ke = {};
    function Ee(e, s, c, g, m, v) {
      {
        var p = Ie(e);
        if (!p) {
          var h = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (h += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var E = rt();
          E ? h += E : h += xe();
          var x;
          e === null ? x = "null" : X(e) ? x = "array" : e !== void 0 && e.$$typeof === r ? (x = "<" + (C(e.type) || "Unknown") + " />", h = " Did you accidentally export a JSX literal instead of a component?") : x = typeof e, k("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", x, h);
        }
        var N = at(e, s, c, m, v);
        if (N == null)
          return N;
        if (p) {
          var T = s.children;
          if (T !== void 0)
            if (g)
              if (X(T)) {
                for (var B = 0; B < T.length; B++)
                  ye(T[B], e);
                Object.freeze && Object.freeze(T);
              } else
                k("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(T, e);
        }
        if (F.call(s, "key")) {
          var O = C(e), R = Object.keys(s).filter(function(gt) {
            return gt !== "key";
          }), Q = R.length > 0 ? "{key: someKey, " + R.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ke[O + Q]) {
            var ft = R.length > 0 ? "{" + R.join(": ..., ") + ": ...}" : "{}";
            k(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Q, O, ft, O), ke[O + Q] = !0;
          }
        }
        return e === n ? lt(N) : st(N), N;
      }
    }
    function ot(e, s, c) {
      return Ee(e, s, c, !0);
    }
    function ct(e, s, c) {
      return Ee(e, s, c, !1);
    }
    var dt = ct, ut = ot;
    L.Fragment = n, L.jsx = dt, L.jsxs = ut;
  }()), L;
}
process.env.NODE_ENV === "production" ? ee.exports = pt() : ee.exports = mt();
var t = ee.exports;
function kt({
  tone: i = "primary",
  variant: r = "fill",
  size: a = "md",
  state: n = "normal",
  density: l = "STANDARD",
  children: o,
  onClick: d
}) {
  const f = n === "disabled", u = n === "loading";
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: [
        "igt-button",
        `igt-button--tone-${i}`,
        `igt-button--variant-${r}`,
        `igt-button--size-${a}`,
        `igt-button--density-${l.toLowerCase()}`,
        f && "igt-button--disabled",
        u && "igt-button--loading"
      ].filter(Boolean).join(" "),
      disabled: f || u,
      onClick: d,
      children: [
        u ? /* @__PURE__ */ t.jsx("span", { className: "igt-button__spinner", "aria-hidden": !0 }) : null,
        /* @__PURE__ */ t.jsx("span", { className: "igt-button__label", children: o })
      ]
    }
  );
}
function Et({
  variant: i = "plain",
  tone: r = "accent",
  size: a = "md",
  state: n = "normal",
  children: l,
  onClick: o
}) {
  const d = n === "disabled";
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: [
        "igt-textbutton",
        `igt-textbutton--variant-${i}`,
        `igt-textbutton--tone-${r}`,
        `igt-textbutton--size-${a}`,
        d && "igt-textbutton--disabled"
      ].filter(Boolean).join(" "),
      disabled: d,
      onClick: o,
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "igt-textbutton__label", children: l }),
        i === "chevron" && /* @__PURE__ */ t.jsx("span", { className: "igt-textbutton__chevron", "aria-hidden": !0, children: "›" })
      ]
    }
  );
}
function Rt({
  tone: i = "neutral",
  variant: r = "ghost",
  size: a = "md",
  state: n = "normal",
  density: l = "STANDARD",
  icon: o,
  "aria-label": d,
  onClick: f
}) {
  const u = n === "disabled", _ = n === "loading";
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      className: [
        "igt-iconbutton",
        `igt-iconbutton--tone-${i}`,
        `igt-iconbutton--variant-${r}`,
        `igt-iconbutton--size-${a}`,
        `igt-iconbutton--density-${l.toLowerCase()}`,
        u && "igt-iconbutton--disabled",
        _ && "igt-iconbutton--loading"
      ].filter(Boolean).join(" "),
      "aria-label": d,
      disabled: u || _,
      onClick: f,
      children: _ ? /* @__PURE__ */ t.jsx("span", { className: "igt-iconbutton__spinner", "aria-hidden": !0 }) : /* @__PURE__ */ t.jsx("span", { className: "igt-iconbutton__icon", "aria-hidden": !0, children: o })
    }
  );
}
function $t({
  layout: i = "standard",
  priority: r = "brand",
  size: a = "md",
  state: n = "normal",
  icon: l,
  label: o,
  onClick: d
}) {
  const f = n === "disabled", u = n === "loading";
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: [
        "igt-floatingbutton",
        `igt-floatingbutton--layout-${i}`,
        `igt-floatingbutton--priority-${r}`,
        `igt-floatingbutton--size-${a}`,
        f && "igt-floatingbutton--disabled",
        u && "igt-floatingbutton--loading"
      ].filter(Boolean).join(" "),
      disabled: f || u,
      onClick: d,
      children: [
        u ? /* @__PURE__ */ t.jsx("span", { className: "igt-floatingbutton__spinner", "aria-hidden": !0 }) : /* @__PURE__ */ t.jsx("span", { className: "igt-floatingbutton__icon", "aria-hidden": !0, children: l }),
        i === "extended" && o && /* @__PURE__ */ t.jsx("span", { className: "igt-floatingbutton__label", children: o })
      ]
    }
  );
}
function wt({
  layout: i = "inline",
  distribution: r = "content",
  size: a = "md",
  children: n
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: [
        "igt-buttongroup",
        `igt-buttongroup--layout-${i}`,
        `igt-buttongroup--distribution-${r}`,
        `igt-buttongroup--size-${a}`
      ].filter(Boolean).join(" "),
      children: n
    }
  );
}
function Tt({
  tone: i = "brand",
  underline: r = "auto",
  state: a = "normal",
  href: n,
  children: l
}) {
  const o = a === "disabled";
  return /* @__PURE__ */ t.jsx(
    "a",
    {
      href: o ? void 0 : n,
      className: [
        "igt-link",
        `igt-link--tone-${i}`,
        `igt-link--underline-${r}`,
        o && "igt-link--disabled"
      ].filter(Boolean).join(" "),
      "aria-disabled": o || void 0,
      children: l
    }
  );
}
function Ct({
  variant: i = "fill",
  size: r = "md",
  state: a = "normal",
  density: n = "STANDARD",
  value: l,
  placeholder: o,
  label: d,
  helperText: f,
  invalid: u = !1,
  onChange: _
}) {
  const b = a === "disabled", j = a === "readOnly", $ = n === "COMPACT" ? "compact" : "standard";
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: [
        "igt-textfield",
        `igt-textfield--variant-${i}`,
        `igt-textfield--size-${r}`,
        `igt-textfield--density-${$}`,
        u && "igt-textfield--invalid",
        b && "igt-textfield--disabled",
        j && "igt-textfield--readonly"
      ].filter(Boolean).join(" "),
      children: [
        d && /* @__PURE__ */ t.jsx("label", { className: "igt-textfield__label", children: d }),
        /* @__PURE__ */ t.jsx("div", { className: "igt-textfield__input-wrap", children: /* @__PURE__ */ t.jsx(
          "input",
          {
            className: "igt-textfield__input",
            type: "text",
            value: l,
            placeholder: o,
            disabled: b,
            readOnly: j,
            onChange: (y) => _ == null ? void 0 : _(y.target.value)
          }
        ) }),
        f && /* @__PURE__ */ t.jsx("span", { className: "igt-textfield__helper", children: f })
      ]
    }
  );
}
function St({
  variant: i = "fill",
  size: r = "md",
  state: a = "normal",
  value: n,
  placeholder: l,
  label: o,
  helperText: d,
  invalid: f = !1,
  onChange: u
}) {
  const _ = a === "disabled", b = a === "readOnly";
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: [
        "igt-textarea",
        `igt-textarea--variant-${i}`,
        `igt-textarea--size-${r}`,
        f && "igt-textarea--invalid",
        _ && "igt-textarea--disabled",
        b && "igt-textarea--readonly"
      ].filter(Boolean).join(" "),
      children: [
        o && /* @__PURE__ */ t.jsx("label", { className: "igt-textarea__label", children: o }),
        /* @__PURE__ */ t.jsx("div", { className: "igt-textarea__input-wrap", children: /* @__PURE__ */ t.jsx(
          "textarea",
          {
            className: "igt-textarea__input",
            value: n,
            placeholder: l,
            disabled: _,
            readOnly: b,
            onChange: (j) => u == null ? void 0 : u(j.target.value)
          }
        ) }),
        d && /* @__PURE__ */ t.jsx("span", { className: "igt-textarea__helper", children: d })
      ]
    }
  );
}
function Ot({
  size: i = "md",
  state: r = "normal",
  density: a = "STANDARD",
  value: n,
  placeholder: l,
  onChange: o,
  onClear: d
}) {
  const f = r === "disabled", u = a === "COMPACT" ? "compact" : "standard";
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: [
        "igt-searchfield",
        `igt-searchfield--size-${i}`,
        `igt-searchfield--density-${u}`,
        f && "igt-searchfield--disabled"
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "igt-searchfield__icon", "aria-hidden": !0, children: /* @__PURE__ */ t.jsxs("svg", { width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: [
          /* @__PURE__ */ t.jsx("circle", { cx: "7", cy: "7", r: "4.5", stroke: "currentColor", strokeWidth: "1.5" }),
          /* @__PURE__ */ t.jsx("path", { d: "M10.5 10.5L13.5 13.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
        ] }) }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            className: "igt-searchfield__input",
            type: "search",
            value: n,
            placeholder: l,
            disabled: f,
            onChange: (_) => o == null ? void 0 : o(_.target.value)
          }
        ),
        n && !f && /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "igt-searchfield__clear",
            type: "button",
            "aria-label": "clear",
            onClick: d,
            children: /* @__PURE__ */ t.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M4.5 4.5L11.5 11.5M4.5 11.5L11.5 4.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" }) })
          }
        )
      ]
    }
  );
}
function Dt({
  type: i = "filled",
  size: r = "md",
  state: a = "default",
  value: n,
  placeholder: l,
  options: o,
  onChange: d
}) {
  const f = a === "disabled";
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: [
        "igt-select",
        `igt-select--type-${i}`,
        `igt-select--size-${r}`,
        f && "igt-select--disabled",
        a === "error" && "igt-select--error"
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ t.jsxs(
          "select",
          {
            className: "igt-select__native",
            value: n,
            disabled: f,
            onChange: (u) => d == null ? void 0 : d(u.target.value),
            children: [
              l && /* @__PURE__ */ t.jsx("option", { value: "", children: l }),
              o.map((u) => /* @__PURE__ */ t.jsx("option", { value: u.value, children: u.label }, u.value))
            ]
          }
        ),
        /* @__PURE__ */ t.jsx("span", { className: "igt-select__arrow", "aria-hidden": !0, children: /* @__PURE__ */ t.jsx("svg", { width: "1em", height: "1em", viewBox: "0 0 16 16", fill: "none", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ t.jsx("path", { d: "M4 6L8 10L12 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) }) })
      ]
    }
  );
}
function we({
  value: i = "unchecked",
  size: r = "md",
  disabled: a = !1,
  readOnly: n = !1,
  invalid: l = !1,
  label: o,
  onChange: d
}) {
  const f = i === "checked", u = i === "indeterminate";
  function _() {
    if (a || n || !d) return;
    d(f ? "unchecked" : "checked");
  }
  return /* @__PURE__ */ t.jsxs(
    "label",
    {
      className: [
        "igt-checkbox",
        `igt-checkbox--size-${r}`,
        f && "igt-checkbox--checked",
        u && "igt-checkbox--indeterminate",
        a && "igt-checkbox--disabled",
        n && "igt-checkbox--readonly",
        l && "igt-checkbox--invalid"
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ t.jsxs("span", { className: "igt-checkbox__control", "aria-hidden": !0, children: [
          f && /* @__PURE__ */ t.jsx("span", { className: "igt-checkbox__check", "aria-hidden": !0 }),
          u && /* @__PURE__ */ t.jsx("span", { className: "igt-checkbox__dash", "aria-hidden": !0 })
        ] }),
        o && /* @__PURE__ */ t.jsx("span", { className: "igt-checkbox__label", children: o }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "checkbox",
            className: "igt-checkbox__input",
            checked: f,
            disabled: a,
            readOnly: n,
            onChange: _,
            "aria-checked": u ? "mixed" : f
          }
        )
      ]
    }
  );
}
function Pt({
  selected: i = !1,
  size: r = "md",
  disabled: a = !1,
  readOnly: n = !1,
  invalid: l = !1,
  label: o,
  onChange: d
}) {
  function f() {
    a || n || !d || d(!0);
  }
  return /* @__PURE__ */ t.jsxs(
    "label",
    {
      className: [
        "igt-radio",
        `igt-radio--size-${r}`,
        i && "igt-radio--selected",
        a && "igt-radio--disabled",
        n && "igt-radio--readonly",
        l && "igt-radio--invalid"
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "igt-radio__control", "aria-hidden": !0, children: i && /* @__PURE__ */ t.jsx("span", { className: "igt-radio__dot", "aria-hidden": !0 }) }),
        o && /* @__PURE__ */ t.jsx("span", { className: "igt-radio__label", children: o }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "radio",
            className: "igt-radio__input",
            checked: i,
            disabled: a,
            readOnly: n,
            onChange: f
          }
        )
      ]
    }
  );
}
function At({
  on: i = !1,
  size: r = "md",
  state: a = "normal",
  label: n,
  onChange: l
}) {
  const o = a === "disabled";
  function d() {
    o || !l || l(!i);
  }
  return /* @__PURE__ */ t.jsxs(
    "label",
    {
      className: [
        "igt-switch",
        `igt-switch--size-${r}`,
        i && "igt-switch--on",
        o && "igt-switch--disabled"
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "igt-switch__track", "aria-hidden": !0, children: /* @__PURE__ */ t.jsx("span", { className: "igt-switch__thumb" }) }),
        n && /* @__PURE__ */ t.jsx("span", { className: "igt-switch__label", children: n }),
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "checkbox",
            className: "igt-switch__input",
            checked: i,
            disabled: o,
            onChange: d,
            role: "switch",
            "aria-checked": i
          }
        )
      ]
    }
  );
}
const _t = [1, 2, 3, 4, 5];
function Bt({
  size: i = "md",
  value: r = 0,
  disabled: a = !1,
  onChange: n
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: [
        "igt-rating",
        `igt-rating--size-${i}`,
        a && "igt-rating--disabled"
      ].filter(Boolean).join(" "),
      role: "radiogroup",
      children: _t.map((l) => /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          className: [
            "igt-rating__star",
            l <= r && "igt-rating__star--filled"
          ].filter(Boolean).join(" "),
          onClick: () => {
            !a && n && n(l);
          },
          disabled: a,
          "aria-label": `${l}점`,
          "aria-pressed": l <= r,
          children: "★"
        },
        l
      ))
    }
  );
}
function zt({
  emphasis: i = "fill",
  size: r = "md",
  value: a,
  min: n = -1 / 0,
  max: l = 1 / 0,
  onChange: o
}) {
  function d() {
    a > n && o(a - 1);
  }
  function f() {
    a < l && o(a + 1);
  }
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: [
        "igt-numberstepper",
        `igt-numberstepper--emphasis-${i}`,
        `igt-numberstepper--size-${r}`
      ].join(" "),
      children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            className: "igt-numberstepper__decrement",
            onClick: d,
            disabled: a <= n,
            "aria-label": "감소",
            children: "−"
          }
        ),
        /* @__PURE__ */ t.jsx("span", { className: "igt-numberstepper__value", children: a }),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            type: "button",
            className: "igt-numberstepper__increment",
            onClick: f,
            disabled: a >= l,
            "aria-label": "증가",
            children: "+"
          }
        )
      ]
    }
  );
}
function Ft({
  size: i = "md",
  disabled: r = !1,
  selected: a = !1,
  children: n,
  onClick: l
}) {
  return /* @__PURE__ */ t.jsx(
    "button",
    {
      className: [
        "igt-actionchip",
        `igt-actionchip--size-${i}`,
        a && "igt-actionchip--selected",
        r && "igt-actionchip--disabled"
      ].filter(Boolean).join(" "),
      disabled: r,
      onClick: l,
      "aria-pressed": a,
      children: n
    }
  );
}
function It({
  selected: i = !1,
  variant: r = "fill",
  size: a = "md",
  disabled: n = !1,
  children: l,
  onClick: o
}) {
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      className: [
        "igt-selectchip",
        `igt-selectchip--size-${a}`,
        `igt-selectchip--variant-${r}`,
        i && "igt-selectchip--selected",
        n && "igt-selectchip--disabled"
      ].filter(Boolean).join(" "),
      disabled: n,
      onClick: o,
      "aria-pressed": i,
      children: [
        i && /* @__PURE__ */ t.jsx("span", { className: "igt-selectchip__check", "aria-hidden": !0, children: "✓ " }),
        l
      ]
    }
  );
}
function Lt({
  size: i = "md",
  content: r = "text",
  value: a,
  segments: n,
  onChange: l
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: [
        "igt-segmentedcontrol",
        `igt-segmentedcontrol--size-${i}`,
        `igt-segmentedcontrol--content-${r}`
      ].join(" "),
      role: "radiogroup",
      children: n.map((o) => /* @__PURE__ */ t.jsxs(
        "button",
        {
          className: [
            "igt-segmentedcontrol__segment",
            o.value === a && "igt-segmentedcontrol__segment--selected"
          ].filter(Boolean).join(" "),
          role: "radio",
          "aria-checked": o.value === a,
          onClick: () => l(o.value),
          children: [
            (r === "icon" || r === "iconText") && o.icon && /* @__PURE__ */ t.jsx("span", { className: "igt-segmentedcontrol__icon", "aria-hidden": !0, children: o.icon }),
            (r === "text" || r === "iconText") && /* @__PURE__ */ t.jsx("span", { className: "igt-segmentedcontrol__label", children: o.label })
          ]
        },
        o.value
      ))
    }
  );
}
function Wt({
  variant: i = "underline",
  layout: r = "fixed",
  size: a = "md",
  value: n,
  tabs: l,
  onChange: o
}) {
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: [
        "igt-tab",
        `igt-tab--variant-${i}`,
        `igt-tab--size-${a}`,
        `igt-tab--layout-${r}`
      ].join(" "),
      role: "tablist",
      children: l.map((d) => /* @__PURE__ */ t.jsx(
        "button",
        {
          className: [
            "igt-tab__item",
            d.value === n && "igt-tab__item--active"
          ].filter(Boolean).join(" "),
          role: "tab",
          "aria-selected": d.value === n,
          onClick: () => o(d.value),
          children: d.label
        },
        d.value
      ))
    }
  );
}
function Yt({
  kind: i = "dot",
  tone: r = "accent",
  count: a
}) {
  const n = i === "count" ? a !== void 0 && a > 99 ? "99+" : a : null;
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      className: [
        "igt-badge",
        `igt-badge--kind-${i}`,
        `igt-badge--tone-${r}`
      ].filter(Boolean).join(" "),
      "aria-label": i === "count" && a !== void 0 ? String(a) : void 0,
      children: n
    }
  );
}
function Mt({
  size: i = "md",
  color: r = "grey",
  tone: a = "soft",
  children: n,
  onRemove: l
}) {
  const o = i.startsWith("xl") ? "xl" : i;
  return /* @__PURE__ */ t.jsxs(
    "span",
    {
      className: [
        "igt-tag",
        `igt-tag--size-${o}`,
        `igt-tag--color-${r}`,
        `igt-tag--tone-${a}`
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "igt-tag__label", children: n }),
        l && /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "igt-tag__remove",
            onClick: l,
            "aria-label": "remove",
            type: "button",
            children: "✕"
          }
        )
      ]
    }
  );
}
function Ut({
  size: i = "md",
  shape: r = "circle",
  src: a,
  alt: n = "",
  fallback: l
}) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      className: [
        "igt-avatar",
        `igt-avatar--size-${i}`,
        `igt-avatar--shape-${r}`
      ].filter(Boolean).join(" "),
      children: a ? /* @__PURE__ */ t.jsx("img", { className: "igt-avatar__img", src: a, alt: n }) : /* @__PURE__ */ t.jsx("span", { className: "igt-avatar__fallback", "aria-hidden": !l, children: l ? l.slice(0, 2).toUpperCase() : "?" })
    }
  );
}
function Vt({
  direction: i = "horizontal",
  emphasis: r = "default"
}) {
  return /* @__PURE__ */ t.jsx(
    "hr",
    {
      className: [
        "igt-divider",
        `igt-divider--${i}`,
        `igt-divider--${r}`
      ].filter(Boolean).join(" "),
      role: "separator"
    }
  );
}
function Jt({
  size: i = "md",
  tone: r = "active"
}) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      className: [
        "igt-statusindicator",
        `igt-statusindicator--size-${i}`,
        `igt-statusindicator--tone-${r}`
      ].filter(Boolean).join(" "),
      children: /* @__PURE__ */ t.jsx("span", { className: "igt-statusindicator__dot", "aria-hidden": !0 })
    }
  );
}
function qt({
  type: i = "neutral",
  dismissible: r = !1,
  message: a,
  onDismiss: n
}) {
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: [
        "igt-toast",
        `igt-toast--type-${i}`
      ].filter(Boolean).join(" "),
      role: "alert",
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "igt-toast__icon", "aria-hidden": "true" }),
        /* @__PURE__ */ t.jsx("span", { className: "igt-toast__message", children: a }),
        r && /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "igt-toast__dismiss",
            onClick: n,
            "aria-label": "닫기",
            type: "button",
            children: "✕"
          }
        )
      ]
    }
  );
}
function Gt({
  type: i = "neutral",
  title: r,
  children: a,
  onDismiss: n
}) {
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: [
        "igt-alert",
        `igt-alert--type-${i}`
      ].filter(Boolean).join(" "),
      role: "alert",
      children: [
        /* @__PURE__ */ t.jsx("span", { className: "igt-alert__icon", "aria-hidden": "true" }),
        /* @__PURE__ */ t.jsxs("div", { className: "igt-alert__content", children: [
          r && /* @__PURE__ */ t.jsx("p", { className: "igt-alert__title", children: r }),
          /* @__PURE__ */ t.jsx("div", { className: "igt-alert__body", children: a })
        ] }),
        n && /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "igt-alert__dismiss",
            onClick: n,
            "aria-label": "닫기",
            type: "button",
            children: "✕"
          }
        )
      ]
    }
  );
}
function Xt({
  size: i = "sm (confirm)",
  open: r,
  title: a,
  children: n,
  onClose: l
}) {
  if (!r) return null;
  const o = i === "sm (confirm)" ? "sm" : "md";
  return /* @__PURE__ */ t.jsx(
    "div",
    {
      className: "igt-dialog__overlay",
      onClick: l,
      children: /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: [
            "igt-dialog",
            `igt-dialog--size-${o}`
          ].filter(Boolean).join(" "),
          role: "dialog",
          "aria-modal": "true",
          "aria-labelledby": a ? "igt-dialog-title" : void 0,
          onClick: (d) => d.stopPropagation(),
          children: [
            /* @__PURE__ */ t.jsxs("div", { className: "igt-dialog__header", children: [
              a && /* @__PURE__ */ t.jsx("h2", { className: "igt-dialog__title", id: "igt-dialog-title", children: a }),
              /* @__PURE__ */ t.jsx(
                "button",
                {
                  className: "igt-dialog__close",
                  onClick: l,
                  "aria-label": "닫기",
                  type: "button",
                  children: "✕"
                }
              )
            ] }),
            /* @__PURE__ */ t.jsx("div", { className: "igt-dialog__body", children: n })
          ]
        }
      )
    }
  );
}
function Ht({
  density: i = "compact",
  emphasis: r = "neutral",
  placement: a = "top",
  arrow: n = !1,
  content: l,
  children: o
}) {
  return /* @__PURE__ */ t.jsxs("span", { className: "igt-tooltip-wrap", children: [
    o,
    /* @__PURE__ */ t.jsxs(
      "span",
      {
        className: [
          "igt-tooltip",
          `igt-tooltip--density-${i}`,
          `igt-tooltip--emphasis-${r}`,
          `igt-tooltip--placement-${a}`
        ].filter(Boolean).join(" "),
        role: "tooltip",
        children: [
          l,
          n && /* @__PURE__ */ t.jsx("span", { className: "igt-tooltip__arrow", "aria-hidden": "true" })
        ]
      }
    )
  ] });
}
function Zt({
  emphasis: i = "neutral",
  open: r,
  placement: a = "bottom",
  content: n,
  children: l
}) {
  return /* @__PURE__ */ t.jsxs("span", { className: "igt-popover-wrap", children: [
    l,
    r && /* @__PURE__ */ t.jsx(
      "div",
      {
        className: [
          "igt-popover",
          `igt-popover--emphasis-${i}`,
          `igt-popover--placement-${a}`
        ].filter(Boolean).join(" "),
        role: "dialog",
        children: n
      }
    )
  ] });
}
function bt({
  size: i = "md",
  radius: r = "sm"
}) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      className: [
        "igt-skeleton-rect",
        `igt-skeleton-rect--size-${i}`,
        `igt-skeleton-rect--radius-${r}`
      ].join(" "),
      "aria-hidden": "true"
    }
  );
}
function Kt({ size: i = "md" }) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      className: [
        "igt-skeleton-circle",
        `igt-skeleton-circle--size-${i}`
      ].join(" "),
      "aria-hidden": "true"
    }
  );
}
function Te({ size: i = "md" }) {
  return /* @__PURE__ */ t.jsx(
    "span",
    {
      className: [
        "igt-skeleton-text",
        `igt-skeleton-text--size-${i}`
      ].join(" "),
      "aria-hidden": "true"
    }
  );
}
const vt = {
  chevron: "›",
  dot: "·",
  slash: "/"
};
function Qt({
  separator: i = "chevron",
  leading: r = "none",
  items: a
}) {
  const n = vt[i];
  return /* @__PURE__ */ t.jsxs("nav", { className: "igt-breadcrumb", "aria-label": "breadcrumb", children: [
    r === "home" && /* @__PURE__ */ t.jsx("span", { className: "igt-breadcrumb__home", "aria-hidden": "true", children: "🏠" }),
    /* @__PURE__ */ t.jsx("ol", { className: "igt-breadcrumb__list", children: a.map((l, o) => /* @__PURE__ */ t.jsxs("li", { className: "igt-breadcrumb__item", children: [
      l.href ? /* @__PURE__ */ t.jsx("a", { className: "igt-breadcrumb__link", href: l.href, children: l.label }) : /* @__PURE__ */ t.jsx("span", { className: "igt-breadcrumb__current", "aria-current": "page", children: l.label }),
      o < a.length - 1 && /* @__PURE__ */ t.jsx("span", { className: "igt-breadcrumb__separator", "aria-hidden": "true", children: n })
    ] }, o)) })
  ] });
}
function xt(i, r) {
  if (r <= 7)
    return Array.from({ length: r }, (n, l) => l + 1);
  const a = [];
  return i <= 4 ? a.push(1, 2, 3, 4, 5, "...", r) : i >= r - 3 ? a.push(1, "...", r - 4, r - 3, r - 2, r - 1, r) : a.push(1, "...", i - 1, i, i + 1, "...", r), a;
}
function ei({
  variant: i = "default",
  size: r = "md",
  currentPage: a,
  totalPages: n,
  onChange: l
}) {
  const o = xt(a, n);
  return /* @__PURE__ */ t.jsxs(
    "nav",
    {
      className: [
        "igt-pagination",
        `igt-pagination--size-${r}`,
        `igt-pagination--variant-${i}`
      ].join(" "),
      "aria-label": "pagination",
      children: [
        /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "igt-pagination__prev",
            disabled: a <= 1,
            onClick: () => l(a - 1),
            "aria-label": "Previous page",
            children: "‹"
          }
        ),
        i === "default" && o.map(
          (d, f) => d === "..." ? /* @__PURE__ */ t.jsx("span", { className: "igt-pagination__ellipsis", children: "…" }, `ellipsis-${f}`) : /* @__PURE__ */ t.jsx(
            "button",
            {
              className: [
                "igt-pagination__page",
                d === a && "igt-pagination__page--active"
              ].filter(Boolean).join(" "),
              onClick: () => l(d),
              "aria-current": d === a ? "page" : void 0,
              children: d
            },
            d
          )
        ),
        i === "minimal" && /* @__PURE__ */ t.jsxs("span", { className: "igt-pagination__info", children: [
          a,
          " / ",
          n
        ] }),
        /* @__PURE__ */ t.jsx(
          "button",
          {
            className: "igt-pagination__next",
            disabled: a >= n,
            onClick: () => l(a + 1),
            "aria-label": "Next page",
            children: "›"
          }
        )
      ]
    }
  );
}
function ti({
  type: i = "contained",
  size: r = "md",
  state: a = "collapsed",
  title: n,
  children: l
}) {
  const [o, d] = Oe(a === "expanded"), f = a === "disabled", u = () => {
    f || d((_) => !_);
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: [
        "igt-accordion",
        `igt-accordion--type-${i}`,
        `igt-accordion--size-${r}`,
        o && "igt-accordion--expanded",
        f && "igt-accordion--disabled"
      ].filter(Boolean).join(" "),
      children: [
        /* @__PURE__ */ t.jsxs(
          "button",
          {
            className: "igt-accordion__trigger",
            onClick: u,
            disabled: f,
            "aria-expanded": o,
            children: [
              /* @__PURE__ */ t.jsx("span", { className: "igt-accordion__title", children: n }),
              /* @__PURE__ */ t.jsx("span", { className: "igt-accordion__icon", "aria-hidden": "true", children: o ? "▲" : "▼" })
            ]
          }
        ),
        o && /* @__PURE__ */ t.jsx("div", { className: "igt-accordion__content", children: l })
      ]
    }
  );
}
function jt({ items: i, size: r, tone: a }) {
  return /* @__PURE__ */ t.jsx("ul", { className: "igt-sidenav__list", children: i.map((n, l) => {
    const o = n.depth ?? 1, d = n.state === "current", f = n.state === "disabled";
    return /* @__PURE__ */ t.jsxs(
      "li",
      {
        className: [
          "igt-sidenav__item",
          `igt-sidenav__item--depth-${o}`,
          d && "igt-sidenav__item--current",
          f && "igt-sidenav__item--disabled"
        ].filter(Boolean).join(" "),
        children: [
          n.href ? /* @__PURE__ */ t.jsx(
            "a",
            {
              className: "igt-sidenav__link",
              href: n.href,
              "aria-current": d ? "page" : void 0,
              children: n.label
            }
          ) : /* @__PURE__ */ t.jsx("span", { className: "igt-sidenav__link", children: n.label }),
          n.children && n.children.length > 0 && /* @__PURE__ */ t.jsx("ul", { className: "igt-sidenav__sublist", children: n.children.map((u, _) => {
            const b = u.depth ?? o + 1, j = u.state === "current", $ = u.state === "disabled";
            return /* @__PURE__ */ t.jsx(
              "li",
              {
                className: [
                  "igt-sidenav__item",
                  `igt-sidenav__item--depth-${b}`,
                  j && "igt-sidenav__item--current",
                  $ && "igt-sidenav__item--disabled"
                ].filter(Boolean).join(" "),
                children: u.href ? /* @__PURE__ */ t.jsx(
                  "a",
                  {
                    className: "igt-sidenav__link",
                    href: u.href,
                    "aria-current": j ? "page" : void 0,
                    children: u.label
                  }
                ) : /* @__PURE__ */ t.jsx("span", { className: "igt-sidenav__link", children: u.label })
              },
              _
            );
          }) })
        ]
      },
      l
    );
  }) });
}
function ii({
  size: i = "md",
  tone: r = "neutral",
  items: a
}) {
  return /* @__PURE__ */ t.jsx(
    "nav",
    {
      className: [
        "igt-sidenav",
        `igt-sidenav--size-${i}`,
        `igt-sidenav--tone-${r}`
      ].join(" "),
      children: /* @__PURE__ */ t.jsx(jt, { items: a, size: i, tone: r })
    }
  );
}
function Nt() {
  const [i, r] = Oe(/* @__PURE__ */ new Date());
  return ht(() => {
    const a = setInterval(() => r(/* @__PURE__ */ new Date()), 1e3);
    return () => clearInterval(a);
  }, []), i;
}
function ai({
  breakpoint: i = "xl",
  isLoggedIn: r = !1
}) {
  const a = Nt(), n = a.toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }), l = a.toLocaleTimeString("ko-KR", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: !1
  });
  return /* @__PURE__ */ t.jsx(
    "header",
    {
      className: [
        "igt-topnav",
        `igt-topnav--breakpoint-${i}`
      ].join(" "),
      children: /* @__PURE__ */ t.jsxs("div", { className: "igt-topnav__inner", children: [
        /* @__PURE__ */ t.jsx("a", { className: "igt-topnav__brand", href: "/", children: "Brand" }),
        /* @__PURE__ */ t.jsx("nav", { className: "igt-topnav__nav", "aria-label": "main navigation" }),
        /* @__PURE__ */ t.jsxs("div", { className: "igt-topnav__actions", children: [
          /* @__PURE__ */ t.jsxs("span", { className: "igt-topnav__clock", children: [
            n,
            " ",
            l
          ] }),
          r ? /* @__PURE__ */ t.jsx("span", { className: "igt-topnav__user", children: "User" }) : /* @__PURE__ */ t.jsx("span", { className: "igt-topnav__auth", children: "Login" })
        ] })
      ] })
    }
  );
}
function ri({ overline: i, title: r }) {
  return /* @__PURE__ */ t.jsxs("div", { className: "igt-table-cell__strong", children: [
    /* @__PURE__ */ t.jsx("span", { className: "igt-table-cell__overline", children: i }),
    /* @__PURE__ */ t.jsx("span", { className: "igt-table-cell__title-strong", children: r })
  ] });
}
function Ce(i) {
  return i.width !== void 0 ? {
    flex: "0 0 auto",
    width: (typeof i.width == "number", i.width),
    textAlign: i.align
  } : {
    flex: 1,
    minWidth: 0,
    textAlign: i.align
  };
}
function ni({
  columns: i,
  data: r,
  size: a = "md",
  selectable: n = !1,
  selectedKeys: l,
  onSelectAll: o,
  onSelectRow: d,
  getRowKey: f,
  loading: u = !1,
  empty: _,
  onRowClick: b
}) {
  const j = r.length > 0 && (l == null ? void 0 : l.size) === r.length, $ = ((l == null ? void 0 : l.size) ?? 0) > 0 && !j;
  return /* @__PURE__ */ t.jsxs("div", { className: `igt-table igt-table--size-${a}`, role: "table", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "igt-table__head", role: "row", children: [
      n && /* @__PURE__ */ t.jsx("div", { className: "igt-table__header-cell igt-table__cell--check", role: "columnheader", children: /* @__PURE__ */ t.jsx(
        we,
        {
          size: "sm",
          value: j ? "checked" : $ ? "indeterminate" : "unchecked",
          onChange: o
        }
      ) }),
      i.map((y) => /* @__PURE__ */ t.jsx(
        "div",
        {
          className: "igt-table__header-cell",
          style: Ce(y),
          role: "columnheader",
          children: y.header
        },
        y.key
      ))
    ] }),
    u ? Array.from({ length: 5 }).map((y, D) => /* @__PURE__ */ t.jsx("div", { className: "igt-table__row igt-table__row--skeleton", role: "row", children: /* @__PURE__ */ t.jsxs("div", { className: "igt-table__skeleton-inner", children: [
      /* @__PURE__ */ t.jsx(bt, { size: "sm", radius: "xs" }),
      /* @__PURE__ */ t.jsxs("div", { className: "igt-table__skeleton-content", children: [
        /* @__PURE__ */ t.jsx(Te, { size: "md" }),
        /* @__PURE__ */ t.jsx(Te, { size: "sm" })
      ] })
    ] }) }, D)) : r.length === 0 ? /* @__PURE__ */ t.jsx("div", { className: "igt-table__empty", children: _ ?? "데이터가 없습니다." }) : r.map((y, D) => {
      const P = f(y), W = (l == null ? void 0 : l.has(P)) ?? !1;
      return /* @__PURE__ */ t.jsxs(
        "div",
        {
          className: [
            "igt-table__row",
            W && "igt-table__row--selected",
            b && "igt-table__row--clickable"
          ].filter(Boolean).join(" "),
          role: "row",
          onClick: () => b == null ? void 0 : b(y),
          children: [
            n && /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "igt-table__cell igt-table__cell--check",
                role: "cell",
                onClick: (w) => {
                  w.stopPropagation(), d == null || d(P);
                },
                children: /* @__PURE__ */ t.jsx(
                  we,
                  {
                    size: "sm",
                    value: W ? "checked" : "unchecked",
                    onChange: () => d == null ? void 0 : d(P)
                  }
                )
              }
            ),
            i.map((w) => /* @__PURE__ */ t.jsx(
              "div",
              {
                className: "igt-table__cell",
                style: Ce(w),
                role: "cell",
                children: w.cell(y, D)
              },
              w.key
            ))
          ]
        },
        P
      );
    })
  ] });
}
export {
  ti as Accordion,
  Ft as ActionChip,
  Gt as Alert,
  Ut as Avatar,
  Yt as Badge,
  Qt as Breadcrumb,
  kt as Button,
  wt as ButtonGroup,
  we as Checkbox,
  Xt as Dialog,
  Vt as Divider,
  $t as FloatingButton,
  Rt as IconButton,
  Tt as Link,
  zt as NumberStepper,
  ei as Pagination,
  Zt as Popover,
  Pt as Radio,
  Bt as Rating,
  Ot as SearchField,
  Lt as SegmentedControl,
  Dt as Select,
  It as SelectChip,
  ii as SideNavigation,
  Kt as SkeletonCircle,
  bt as SkeletonRect,
  Te as SkeletonText,
  Jt as StatusIndicator,
  At as Switch,
  Wt as Tab,
  ni as Table,
  ri as TableCellStrong,
  Mt as Tag,
  St as TextArea,
  Et as TextButton,
  Ct as TextField,
  qt as Toast,
  Ht as Tooltip,
  ai as TopNavigation
};
