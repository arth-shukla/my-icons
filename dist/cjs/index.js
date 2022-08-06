'use strict'
Object.defineProperty(exports, '__esModule', { value: !0 })
var n = require('react')
function t(n) {
	return n && 'object' == typeof n && 'default' in n ? n : { default: n }
}
var a = t(n)
function r(n, t) {
	var a = {}
	for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && t.indexOf(r) < 0 && (a[r] = n[r])
	if (null != n && 'function' == typeof Object.getOwnPropertySymbols) {
		var e = 0
		for (r = Object.getOwnPropertySymbols(n); e < r.length; e++) t.indexOf(r[e]) < 0 && Object.prototype.propertyIsEnumerable.call(n, r[e]) && (a[r[e]] = n[r[e]])
	}
	return a
}
function e(n, t) {
	void 0 === t && (t = {})
	var a = t.insertAt
	if (n && 'undefined' != typeof document) {
		var r = document.head || document.getElementsByTagName('head')[0],
			e = document.createElement('style')
		;(e.type = 'text/css'), 'top' === a && r.firstChild ? r.insertBefore(e, r.firstChild) : r.appendChild(e), e.styleSheet ? (e.styleSheet.cssText = n) : e.appendChild(document.createTextNode(n))
	}
}
e(
	'.ai-color-switch {\n  border: none;\n  background-color: inherit;\n  margin: 0.25em 0;\n  padding: 0;\n}\n.ai-color-switch .ai-color-targ {\n  width: var(--ai-color-switch-size);\n  height: var(--ai-color-switch-size);\n  border-radius: 50%;\n  transition: all var(--ai-color-switch-tr-sec) ease-in-out;\n  pointer-events: none;\n  margin: auto;\n}\n.ai-color-switch .ai-color-targ-0 {\n  border: calc(var(--ai-color-switch-size) / 2) solid var(--ai-color-switch-color);\n}\n.ai-color-switch .ai-color-targ-1 {\n  background-color: var(--ai-color-switch-color);\n  border: 1px solid var(--ai-color-switch-color);\n}',
)
e(
	'.ai-dark-mode-switch {\n  border: none;\n  background-color: inherit;\n  margin: 0.25em 0;\n  padding: 0;\n}\n.ai-dark-mode-switch svg {\n  transition: all var(--tr-sec) ease-in-out;\n  -webkit-transition: none;\n}\n.ai-dark-mode-switch svg #moon {\n  fill: var(--theme-anim);\n  transition: all calc(var(--tr-sec) / 3) ease-in-out;\n  -webkit-transition: all calc(var(--tr-sec) / 3) ease-in-out;\n}\n.ai-dark-mode-switch svg #moon-mask > circle {\n  fill: #000;\n  transition: all calc(var(--tr-sec) / 3) ease-in-out;\n  -webkit-transition: all calc(var(--tr-sec) / 3) ease-in-out;\n}\n.ai-dark-mode-switch svg #moon-mask > rect {\n  fill: #fff;\n}\n.ai-dark-mode-switch svg g > circle {\n  fill: var(--theme-anim);\n}\n.ai-dark-mode-switch svg #dots-mask > circle {\n  fill: #000;\n  transition: all calc(var(--tr-sec) / 3) ease-in-out;\n  -webkit-transition: all calc(var(--tr-sec) / 3) ease-in-out;\n}\n.ai-dark-mode-switch svg #dots-mask > rect {\n  fill: #fff;\n}\n\n.ai-dark-mode-switch-sun svg {\n  transform: rotate(210deg);\n  -webkit-transform: rotate(210deg);\n  animation-name: sun-spin;\n  animation-duration: calc(var(--tr-sec) * 0.85);\n  animation-timing-function: ease-in-out;\n}\n.ai-dark-mode-switch-sun svg #spot-1 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-1-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-1-reveal {\n  0% {\n    transform: translate(12px, 0);\n    -webkit-transform: translate(12px, 0);\n  }\n  42% {\n    transform: translate(12px, 0);\n    -webkit-transform: translate(12px, 0);\n  }\n  67% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #spot-2 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-2-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-2-reveal {\n  0% {\n    transform: translate(6px, -10.4px);\n    -webkit-transform: translate(6px, -10.4px);\n  }\n  28% {\n    transform: translate(6px, -10.4px);\n    -webkit-transform: translate(6px, -10.4px);\n  }\n  53% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #spot-3 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-3-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-3-reveal {\n  0% {\n    transform: translate(-6px, -10.4px);\n    -webkit-transform: translate(-6px, -10.4px);\n  }\n  14% {\n    transform: translate(-6px, -10.4px);\n    -webkit-transform: translate(-6px, -10.4px);\n  }\n  34% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #spot-4 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-4-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-4-reveal {\n  0% {\n    transform: translate(-12px, 0);\n    -webkit-transform: translate(-12px, 0);\n  }\n  0% {\n    transform: translate(-12px, 0);\n    -webkit-transform: translate(-12px, 0);\n  }\n  20% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #spot-5 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-5-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-5-reveal {\n  0% {\n    transform: translate(-6px, 10.4px);\n    -webkit-transform: translate(-6px, 10.4px);\n  }\n  70% {\n    transform: translate(-6px, 10.4px);\n    -webkit-transform: translate(-6px, 10.4px);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n.ai-dark-mode-switch-sun svg #spot-6 {\n  transform: translate(0, 0);\n  -webkit-transform: translate(0, 0);\n  animation-name: spot-6-reveal;\n  animation-duration: var(--ai-dark-mode-anim-len);\n  animation-timing-function: ease-in-out;\n}\n@keyframes spot-6-reveal {\n  0% {\n    transform: translate(6px, 10.4px);\n    -webkit-transform: translate(6px, 10.4px);\n  }\n  56% {\n    transform: translate(6px, 10.4px);\n    -webkit-transform: translate(6px, 10.4px);\n  }\n  86% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n  100% {\n    transform: translate(0, 0);\n    -webkit-transform: translate(0, 0);\n  }\n}\n@keyframes sun-spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(210deg);\n  }\n}\n.ai-dark-mode-switch-sun svg #moon-mask > circle {\n  transform: translateX(15px);\n  -webkit-transform: translateX(15px);\n}\n.ai-dark-mode-switch-sun svg > g {\n  --ai-dark-mode-anim-len: calc(var(--tr-sec) * 2 / 3);\n}\n\n.ai-dark-mode-switch-moon svg {\n  animation-name: moon-sway;\n  animation-duration: var(--tr-sec);\n  animation-timing-function: ease-in-out;\n}\n@keyframes moon-sway {\n  0% {\n    transform: rotate(135deg);\n    -webkit-transform: rotate(135deg);\n  }\n  40% {\n    transform: rotate(-15deg);\n    -webkit-transform: rotate(-15deg);\n  }\n  70% {\n    transform: rotate(15deg);\n    -webkit-transform: rotate(15deg);\n  }\n  100% {\n    transform: rotate(0deg);\n    -webkit-transform: rotate(0deg);\n  }\n}\n.ai-dark-mode-switch-moon svg #moon-mask > circle {\n  transform: translateX(0);\n  -webkit-transform: translateX(0);\n}\n.ai-dark-mode-switch-moon svg > g #spot-1 {\n  transform: translate(12px, 0);\n  -webkit-transform: translate(12px, 0);\n}\n.ai-dark-mode-switch-moon svg > g #spot-2 {\n  transform: translate(6px, -10.4px);\n  -webkit-transform: translate(6px, -10.4px);\n}\n.ai-dark-mode-switch-moon svg > g #spot-3 {\n  transform: translate(-6px, -10.4px);\n  -webkit-transform: translate(-6px, -10.4px);\n}\n.ai-dark-mode-switch-moon svg > g #spot-4 {\n  transform: translate(-12px, 0);\n  -webkit-transform: translate(-12px, 0);\n}\n.ai-dark-mode-switch-moon svg > g #spot-5 {\n  transform: translate(-6px, 10.4px);\n  -webkit-transform: translate(-6px, 10.4px);\n}\n.ai-dark-mode-switch-moon svg > g #spot-6 {\n  transform: translate(6px, 10.4px);\n  -webkit-transform: translate(6px, 10.4px);\n}\n\n.ai-dark-mode-switch-sun:hover #moon {\n  fill: #000 !important;\n}\n.ai-dark-mode-switch-sun:hover g > circle {\n  fill: #000 !important;\n}\n\n.ai-dark-mode-switch-moon:hover #moon {\n  fill: #fff !important;\n}\n.ai-dark-mode-switch-moon:hover g > circle {\n  fill: #fff !important;\n}',
),
	(exports.ColorSwitch = function (t) {
		var { currentColorIndex: e, colors: o, onClick: s = () => {}, size: i = 40, animDuration: l = '.4s', className: m = '', style: c = {} } = t,
			d = r(t, ['currentColorIndex', 'colors', 'onClick', 'size', 'animDuration', 'className', 'style'])
		const [f, p] = n.useState(e || 0),
			[k, w] = n.useState(0),
			u = e || f
		return a.default.createElement(
			'button',
			Object.assign(
				{
					className: 'ai-color-switch ' + m,
					onClick: () => {
						s(), p((f + 1) % o.length), w((k + 1) % 2)
					},
					style: Object.assign({ width: i, height: i, '--ai-color-switch-color': o[u], '--ai-color-switch-tr-sec': l, '--ai-color-switch-size': 0.558 * i + 'px' }, c),
				},
				d,
			),
			a.default.createElement('div', { 'aria-hidden': !0, className: `ai-color-targ ai-color-targ-${k}` }),
		)
	}),
	(exports.DarkModeSwitch = function (t) {
		var {
				darkMode: e,
				onClick: o = () => {},
				size: s = 40,
				className: i = '',
				style: l = {},
				animDuration: m = '1.2s',
				lightModeColor: c = 'rgba(18, 18, 18, .8)',
				darkModeColor: d = 'rgba(255, 255, 255, .87)',
			} = t,
			f = r(t, ['darkMode', 'onClick', 'size', 'className', 'style', 'animDuration', 'lightModeColor', 'darkModeColor'])
		const [p, k] = n.useState(e || !1),
			w = e || p,
			u = w ? d : c
		return a.default.createElement(
			'button',
			Object.assign(
				{
					className: 'ai-dark-mode-switch' + (w ? ' ai-dark-mode-switch-moon ' : ' ai-dark-mode-switch-sun ') + i,
					onClick: () => {
						o(), k(!p)
					},
					style: Object.assign({ '--theme-anim': u, '--tr-sec': m, width: s, height: s }, l),
				},
				f,
			),
			a.default.createElement(
				'svg',
				{ width: Math.sqrt(Math.pow(s, 2) / 2), height: Math.sqrt(Math.pow(s, 2) / 2), viewBox: '0 0 30 30', 'aria-hidden': !0 },
				a.default.createElement('circle', { cx: '15', cy: '15', r: w ? 12 : 6, id: 'moon', mask: 'url(#moon-mask)' }),
				a.default.createElement(
					'mask',
					{ id: 'moon-mask' },
					a.default.createElement('rect', { x: '0', y: '0', width: '100%', height: '100%' }),
					a.default.createElement('circle', { cx: '21', cy: '8', r: '12' }),
				),
				a.default.createElement(
					'g',
					{ mask: 'url(#dots-mask)' },
					a.default.createElement('circle', { cx: '5', cy: '15', r: '2', id: 'spot-1' }),
					a.default.createElement('circle', { cx: '10', cy: '23.66', r: '2', id: 'spot-2' }),
					a.default.createElement('circle', { cx: '20', cy: '23.66', r: '2', id: 'spot-3' }),
					a.default.createElement('circle', { cx: '25', cy: '15', r: '2', id: 'spot-4' }),
					a.default.createElement('circle', { cx: '10', cy: '6.4', r: '2', id: 'spot-6' }),
					a.default.createElement('circle', { cx: '20', cy: '6.4', r: '2', id: 'spot-5' }),
				),
				a.default.createElement(
					'mask',
					{ id: 'dots-mask' },
					a.default.createElement('rect', { x: '0', y: '0', width: '100%', height: '100%', fill: 'white' }),
					a.default.createElement('circle', { cx: '15', cy: '15', r: '6', fill: 'black' }),
				),
			),
		)
	})
//# sourceMappingURL=index.js.map
