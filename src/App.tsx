import { RouteObject, useRoutes } from "react-router-dom";
import { MAIN_PATH } from "./routes";
import FilePage from "./pages/file/file.page";
import "./App.sass";

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
