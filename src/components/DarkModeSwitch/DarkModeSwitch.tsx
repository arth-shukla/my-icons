import React, { useState } from 'react'
import './DarkModeSwitch.scss'

interface DarkModeSwitchProps {
	darkMode?: boolean
	onClick?: () => void
	size?: number
	animDuration?: string
	lightModeColor?: string
	darkModeColor?: string
	className?: string
	style?: {}
	[x: string]: any
}

function DarkModeSwitch({
	darkMode,
	onClick = () => {},
	size = 40,
	className = '',
	style = {},
	animDuration = '1.2s',
	lightModeColor = 'rgba(18, 18, 18, .8)',
	darkModeColor = 'rgba(255, 255, 255, .87)',
	...rest
}: DarkModeSwitchProps) {
	const [_darkMode, set_darkMode] = useState<boolean>(darkMode || false)
	const isMoon: boolean = darkMode === undefined ? _darkMode : darkMode
	const svgColor: string = isMoon ? darkModeColor : lightModeColor

	const _onClick: () => void = () => {
		onClick()
		set_darkMode(!_darkMode)
	}

	return (
		<button
			className={'ai-dark-mode-switch' + (isMoon ? ' ai-dark-mode-switch-moon ' : ' ai-dark-mode-switch-sun ') + className}
			onClick={_onClick}
			style={
				{
					'--theme-anim': svgColor,
					'--tr-sec': animDuration,
					width: size,
					height: size,
					...style,
				} as React.CSSProperties
			}
			{...rest}
		>
			<svg
				width={Math.sqrt(Math.pow(size, 2) / 2)}
				height={Math.sqrt(Math.pow(size, 2) / 2)}
				viewBox='0 0 30 30'
				aria-hidden={true}
			>
				<circle
					cx='15'
					cy='15'
					r={isMoon ? 12 : 6}
					id='ai-dark-mode-switch-icon-moon'
					mask='url(#ai-dark-mode-switch-icon-moon-mask)'
				/>
				<mask id='ai-dark-mode-switch-icon-moon-mask'>
					<rect
						x='0'
						y='0'
						width='100%'
						height='100%'
					/>
					<circle
						cx='21'
						cy='8'
						r='12'
					/>
				</mask>
				<g mask='url(#ai-dark-mode-switch-icon-dots-mask)'>
					{/* top */}
					<circle
						cx='5'
						cy='15'
						r='2'
						id='ai-dark-mode-switch-icon-spot-1'
					/>
					{/* left */}
					<circle
						cx='10'
						cy='23.66'
						r='2'
						id='ai-dark-mode-switch-icon-spot-2'
					/>
					<circle
						cx='20'
						cy='23.66'
						r='2'
						id='ai-dark-mode-switch-icon-spot-3'
					/>
					{/* bottom */}
					<circle
						cx='25'
						cy='15'
						r='2'
						id='ai-dark-mode-switch-icon-spot-4'
					/>
					{/* right */}
					<circle
						cx='10'
						cy='6.4'
						r='2'
						id='ai-dark-mode-switch-icon-spot-6'
					/>
					<circle
						cx='20'
						cy='6.4'
						r='2'
						id='ai-dark-mode-switch-icon-spot-5'
					/>
				</g>
				<mask id='ai-dark-mode-switch-icon-dots-mask'>
					<rect
						x='0'
						y='0'
						width='100%'
						height='100%'
						fill='white'
					/>
					<circle
						cx='15'
						cy='15'
						r='6'
						fill='black'
					/>
				</mask>
			</svg>
		</button>
	)
}

export default DarkModeSwitch
