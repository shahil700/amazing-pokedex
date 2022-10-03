import { useEffect, useState } from 'react';

const WindowFilterWidth = () => {
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});

	const handleResize = () => {
		setWindowSize({
			width: window.innerWidth,
			height: window.innerHeight,
		});
	};

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		handleResize();
		return () => window.removeEventListener('resize', handleResize);
	}, [windowSize.width]);
	return windowSize;
};

export default WindowFilterWidth;
