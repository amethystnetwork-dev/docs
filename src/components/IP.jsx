import React, { useState, useEffect } from "react";

export default function IP() {
	const [ip, setIP] = useState("0.0.0.0")
	useEffect(() => {
		fetch("https://myip.wtf/json").then(res => res.json()).then(json => setIP(json["YourFuckingIPAddress"]))
	}, []);
	return (
		<>{ip}</>
	)
}