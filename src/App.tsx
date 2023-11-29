import { RouteObject, useRoutes } from "react-router-dom";
import { MAIN_PATH } from "./routes";
import FilePage from "./pages/file";
import { LS_FILES, defaultFolder } from "./const";
import "./App.sass";

function App() {
	localStorage.setItem(LS_FILES, defaultFolder);

	const routes: RouteObject[] = [
		{
			path: "/",
			children: [
				{ index: true, element: <FilePage /> },
				{ path: MAIN_PATH, element: <FilePage /> },
			],
		},
	];

	const page = useRoutes(routes);

	return <div className="App">{page}</div>;
}

export default App;
