"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [588], {
    295: (t, e, s) => {
      s.d(e, {
        A: () => n
      });
      var o = s(2115);

      function i(t, e) {
        return (i = Object.setPrototypeOf ? Object.setPrototypeOf.bind() :
          function(t, e) {
            return t.__proto__ = e, t
          })(t, e)
      }
      let n = function(t) {
        function e(e) {
          var s;
          return (s = t.call(this, e) || this).isDrawing = !1, s
            .lastPoint = null, s.isFinished = !1, s.reset = function() {
              s.canvas.style.opacity = "1", s.ctx
                .globalCompositeOperation = "source-over", s.ctx
                .drawImage(s.image, 0, 0, s.props.width, s.props
                .height), s.isFinished = !1
            }, s.handleMouseDown = function(t) {
              s.isDrawing = !0, s.lastPoint = s.getMouse(t, s.canvas)
            }, s.handleMouseMove = function(t) {
              if (s.isDrawing) {
                for (var e, o, i = s.getMouse(t, s.canvas), n = s
                    .distanceBetween(s.lastPoint, i), a = s
                    .angleBetween(s.lastPoint, i), h = 0; h < n; h++)
                  e = s.lastPoint ? s.lastPoint.x + Math.sin(a) * h : 0,
                  o = s.lastPoint ? s.lastPoint.y + Math.cos(a) * h : 0,
                  s.ctx.globalCompositeOperation = "destination-out", s
                  .brushImage && s.props.customBrush ? s.ctx.drawImage(s
                    .brushImage, e, o, s.props.customBrush.width, s
                    .props.customBrush.height) : (s.ctx.beginPath(), s
                    .ctx.arc(e, o, s.props.brushSize || 20, 0, 2 * Math
                      .PI, !1), s.ctx.fill());
                s.lastPoint = i, s.handlePercentage(s.getFilledInPixels(
                  32))
              }
            }, s.handleMouseUp = function() {
              s.isDrawing = !1
            }, s.state = {
              loaded: !1,
              finished: !1
            }, s
        }
        e.prototype = Object.create(t.prototype), e.prototype
          .constructor = e, i(e, t);
        var s = e.prototype;
        return s.componentDidMount = function() {
          var t = this;
          this.isDrawing = !1, this.lastPoint = null, this.ctx = this
            .canvas.getContext("2d"), this.image = new Image, this
            .image.crossOrigin = "Anonymous", this.image.onload =
            function() {
              t.ctx.drawImage(t.image, 0, 0, t.props.width, t.props
                .height), t.setState({
                loaded: !0
              })
            }, this.image.src = this.props.image, this.props
            .customBrush && (this.brushImage = new Image(this.props
                .customBrush.width, this.props.customBrush.height),
              this.brushImage.src = this.props.customBrush.image)
        }, s.getFilledInPixels = function(t) {
          (!t || t < 1) && (t = 1);
          var e = 0,
            s = 0,
            o = this.canvas.width,
            i = this.canvas.height;
          this.props.customCheckZone && (e = this.props
            .customCheckZone.x, s = this.props.customCheckZone.y,
            o = this.props.customCheckZone.width, i = this.props
            .customCheckZone.height);
          for (var n = this.ctx.getImageData(e, s, o, i), a = n.data
              .length / t, h = 0, r = 0; r < n.data.length; r += t)
            0 === parseInt(n.data[r], 10) && h++;
          return Math.round(h / a * 100)
        }, s.getMouse = function(t, e) {
          var s = e.getBoundingClientRect(),
            o = s.top,
            i = s.left,
            n = window.pageYOffset || document.documentElement
            .scrollTop,
            a = window.pageXOffset || document.documentElement
            .scrollLeft,
            h = 0,
            r = 0;
          return t && t.pageX && t.pageY ? (h = t.pageX - i - a, r = t
            .pageY - o - n) : t && t.touches && (h = t.touches[0]
            .clientX - i - a, r = t.touches[0].clientY - o - n), {
            x: h,
            y: r
          }
        }, s.distanceBetween = function(t, e) {
          return t && e ? Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(
            e.y - t.y, 2)) : 0
        }, s.angleBetween = function(t, e) {
          return t && e ? Math.atan2(e.x - t.x, e.y - t.y) : 0
        }, s.handlePercentage = function(t) {
          if (void 0 === t && (t = 0), !this.isFinished) {
            var e = 70;
            void 0 !== this.props.finishPercent && (e = this.props
              .finishPercent), t > e && (!1 !== this.props
              .fadeOutOnComplete && (this.canvas.style.transition =
                "1s", this.canvas.style.opacity = "0"), this
              .setState({
                finished: !0
              }), this.props.onComplete && this.props.onComplete(),
              this.isFinished = !0)
          }
        }, s.render = function() {
          var t = this,
            e = {
              width: this.props.width + "px",
              height: this.props.height + "px",
              position: "relative",
              WebkitUserSelect: "none",
              MozUserSelect: "none",
              msUserSelect: "none",
              userSelect: "none"
            },
            s = {
              visibility: this.state.loaded ? "visible" : "hidden",
              width: "100%",
              height: "100%"
            };
          return o.createElement("div", {
            className: "ScratchCard__Container",
            style: e
          }, o.createElement("canvas", {
            ref: function(e) {
              t.canvas = e
            },
            className: "ScratchCard__Canvas",
            style: {
              position: "absolute",
              top: 0,
              zIndex: 1
            },
            width: this.props.width,
            height: this.props.height,
            onMouseDown: this.handleMouseDown,
            onTouchStart: this.handleMouseDown,
            onMouseMove: this.handleMouseMove,
            onTouchMove: this.handleMouseMove,
            onMouseUp: this.handleMouseUp,
            onTouchEnd: this.handleMouseUp
          }), o.createElement("div", {
            className: "ScratchCard__Result",
            style: s
          }, this.props.children))
        }, e
      }(o.Component)
    }
  }
]);