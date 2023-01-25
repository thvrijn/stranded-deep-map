
import { useEffect, useRef } from 'react';
import './App.css';

export default function App() {
	const canvas = useRef(null)

	useEffect(() => {
		var ctx = canvas.current.getContext("2d");

		canvas.current.height = window.innerHeight
		canvas.current.width = window.innerWidth
		ctx.translate(window.innerWidth / 2, window.innerHeight / 2);

		ctx.strokeRect(0, 0, 50, 50)

		var angle = 90
		var x1 = 25
		var y1 = 25
		var length = 200

		var x2 = x1 + Math.cos(Math.PI * (angle - 90) / 180) * length
		var y2 = y1 + Math.sin(Math.PI * (angle - 90) / 180) * length

		ctx.strokeRect(x2 - 25, y2 - 25, 50, 50)
	}, [])

	return <div>
		<canvas ref={canvas} className={'canvas'}>

		</canvas>
	</div>
}
