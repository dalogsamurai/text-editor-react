import { RouteObject, useRoutes } from "react-router-dom";
import { MAIN_PATH } from "./routes";
import FilePage from "./pages/file";
import {
	LS_FILES,
	LS_FILES_DATA,
	defaultFilesData,
	defaultFolder,
} from "./const";
import "./App.sass";

localStorage.setItem(LS_FILES, defaultFolder);
localStorage.setItem(LS_FILES_DATA, defaultFilesData);

function App() {
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
