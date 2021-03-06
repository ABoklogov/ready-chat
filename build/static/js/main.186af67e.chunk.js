(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    12: function (e, n, t) {
      e.exports = {
        loginForm: "LoginForm_loginForm__2EPlp",
        text: "LoginForm_text__3yW0k",
        input: "LoginForm_input__3B7Mn",
      };
    },
    15: function (e, n, t) {
      e.exports = {
        chatForm: "ChatForm_chatForm__3ys6k",
        chatInput: "ChatForm_chatInput__2yo6o",
      };
    },
    18: function (e, n, t) {
      e.exports = { container: "Container_container__LyA3g" };
    },
    19: function (e, n, t) {
      e.exports = { chat: "Chat_chat__jDsTA" };
    },
    26: function (e, n, t) {},
    36: function (e, n, t) {},
    40: function (e, n, t) {
      "use strict";
      t.r(n);
      var c = t(1),
        a = t.n(c),
        s = t(17),
        r = t.n(s),
        o = (t(26), t(18)),
        i = t.n(o),
        u = t(0),
        l = function (e) {
          var n = e.children;
          return Object(u.jsx)("div", {
            className: i.a.container,
            children: n,
          });
        },
        j = t(20),
        m = t(6),
        h = t(19),
        b = t.n(h),
        O = t(14),
        d = t.n(O),
        x =
          (t(36),
          function (e) {
            var n = e.messages,
              t = e.username;
            return Object(u.jsx)("ul", {
              className: "chatWindow",
              children: n.map(function (e) {
                var n = e.username === t ? "you" : "user",
                  c = "you" !== n && "right";
                return Object(u.jsx)(
                  "li",
                  {
                    className: "item",
                    children:
                      "connection" === e.event
                        ? Object(u.jsxs)("p", {
                            children: [
                              "\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c ",
                              e.username,
                              " \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0438\u043b\u0441\u044f",
                            ],
                          })
                        : Object(u.jsxs)("p", {
                            className: "".concat(c),
                            children: [
                              e.username,
                              ":",
                              " ",
                              Object(u.jsx)("span", {
                                className: "".concat(n),
                                children: e.message,
                              }),
                            ],
                          }),
                  },
                  e.id
                );
              }),
            });
          }),
        g = t(15),
        p = t.n(g),
        f = t(41),
        v = t(42),
        _ = function (e) {
          var n = e.value,
            t = e.setValue,
            c = e.sendMessage;
          return Object(u.jsxs)(f.a, {
            className: p.a.chatForm,
            children: [
              Object(u.jsx)(f.a.Control, {
                className: p.a.chatInput,
                value: n,
                onChange: function (e) {
                  return t(e.target.value);
                },
                type: "text",
                placeholder:
                  "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435",
              }),
              Object(u.jsx)(v.a, {
                variant: "success",
                type: "button",
                onClick: c,
                children:
                  "\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",
              }),
            ],
          });
        },
        N = t(12),
        y = t.n(N),
        F = function (e) {
          var n = e.username,
            t = e.setUsername,
            c = e.connect;
          return Object(u.jsx)(f.a, {
            className: y.a.loginForm,
            children: Object(u.jsxs)(f.a.Group, {
              controlId: "formBasicEmail",
              children: [
                Object(u.jsx)(f.a.Control, {
                  className: y.a.input,
                  type: "text",
                  value: n,
                  onChange: function (e) {
                    return t(e.target.value);
                  },
                  placeholder:
                    "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f",
                }),
                Object(u.jsx)(f.a.Text, {
                  className: y.a.text,
                  children:
                    "\u0417\u0430\u043f\u043e\u043b\u043d\u0438\u0442\u0435 \u0444\u043e\u0440\u043c\u0443 \u0434\u043b\u044f \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u044f \u043a \u0447\u0430\u0442\u0443",
                }),
                Object(u.jsx)(v.a, {
                  variant: "success",
                  type: "button",
                  onClick: c,
                  children: "\u0412\u043e\u0439\u0442\u0438",
                }),
              ],
            }),
          });
        },
        C = function () {
          var e = Object(c.useState)([]),
            n = Object(m.a)(e, 2),
            t = n[0],
            a = n[1],
            s = Object(c.useState)(""),
            r = Object(m.a)(s, 2),
            o = r[0],
            i = r[1],
            l = Object(c.useRef)(),
            h = Object(c.useState)(!1),
            O = Object(m.a)(h, 2),
            g = O[0],
            p = O[1],
            f = Object(c.useState)(""),
            v = Object(m.a)(f, 2),
            N = v[0],
            y = v[1];
          return Object(u.jsxs)(u.Fragment, {
            children: [
              !g &&
                Object(u.jsx)(F, {
                  username: N,
                  setUsername: y,
                  connect: function () {
                    (l.current = new WebSocket(
                      "wss://chat-aboklogov.herokuapp.com/"
                    )),
                      (l.current.onopen = function () {
                        p(!0),
                          console.log(
                            "\u041f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u0443\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u043e!"
                          );
                        var e = {
                          id: d.a.generate(),
                          event: "connection",
                          username: N,
                        };
                        l.current.send(JSON.stringify(e));
                      }),
                      (l.current.onmessage = function (e) {
                        var n = JSON.parse(e.data);
                        a(function (e) {
                          return [].concat(Object(j.a)(e), [n]);
                        });
                      }),
                      (l.current.onclose = function () {
                        console.log(
                          "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u043e \u043e\u0442\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435"
                        );
                      }),
                      (l.current.onerror = function () {
                        console.log(
                          "\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430"
                        );
                      });
                  },
                }),
              g &&
                Object(u.jsxs)("div", {
                  className: b.a.chat,
                  children: [
                    Object(u.jsx)(x, { messages: t, username: N }),
                    Object(u.jsx)(_, {
                      value: o,
                      setValue: i,
                      sendMessage: function () {
                        var e = {
                          id: d.a.generate(),
                          event: "message",
                          message: o,
                          username: N,
                        };
                        l.current.send(JSON.stringify(e)), i("");
                      },
                    }),
                  ],
                }),
            ],
          });
        };
      t(39);
      var S = function () {
        return Object(u.jsx)(l, { children: Object(u.jsx)(C, {}) });
      };
      r.a.render(
        Object(u.jsx)(a.a.StrictMode, { children: Object(u.jsx)(S, {}) }),
        document.getElementById("root")
      );
    },
  },
  [[40, 1, 2]],
]);
//# sourceMappingURL=main.186af67e.chunk.js.map
