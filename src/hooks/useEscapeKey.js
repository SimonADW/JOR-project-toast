import React from "react";



export default function useEscapeKey() {
	function listenForEscape(fnToRun, argumentToFn) {
		React.useEffect(()=> {
			function handleEscape(event) {
				const { code } = event;
				code === "Escape" && fnToRun(argumentToFn);
			}
			
			window.addEventListener("keydown", handleEscape)			
			return ()=> { window.removeEventListener("keydown", handleEscape)}
		})
	}

	return {listenForEscape};
}