import { createContext, useContext, useEffect } from "react";
import Editor from "../../components/editor";
import Explorer from "../../components/explorer";
import { LS_FILES } from "../../const";
import { useSelector } from "react-redux";
import { TFilesState } from "../../types/TFilesState";
import "./file.page.sass";

export const ParentContext = createContext(
	JSON.parse(localStorage.getItem(LS_FILES)!),
);

const FilePage = () => {
	const files = useSelector((state: TFilesState) => state.files);
	console.log(files);
	// const files = JSON.parse(localStorage.getItem(LS_FILES)!);
	//   let parentFolder = useContext(ParentContext);

	//   useEffect(() => {
	//     console.log("files");
	//   }, [parentFolder]);

	return (
		<div className="file-page">
			<div className="file-page__explorer">
				<ParentContext.Provider value={files.files}>
					<Explorer file={files} />
				</ParentContext.Provider>
			</div>
			<Editor />
		</div>
	);
};

export default FilePage;
