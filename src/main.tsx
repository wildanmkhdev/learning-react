import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import BelajarState from "./state/BelajarState.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App></App>}></Route>
				<Route
					path="/state/belajar-state"
					element={<BelajarState></BelajarState>}></Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>
);
