import { createContext, useContext, useEffect, useState } from "react";
import Editor from "../../components/editor";
import Explorer from "../../components/explorer";
import { LS_FILES } from "../../const";
import { IFile } from "../../types/IFile";
import "./file.page.sass";

export const ParentContext = createContext(
	JSON.parse(localStorage.getItem(LS_FILES)!),
);

const FilePage = () => {
	const files = JSON.parse(localStorage.getItem(LS_FILES)!);
	const [fileList, setFileList] = useState(files);

	const onChange = (fileId: number) => {
		if (files?.some((item: IFile) => fileId === item.id)) {
			setFileList(files.filter((item: IFile) => item.id !== fileId));
		}
	};

	return (
		<div className="file-page">
			<div className="file-page__explorer">
				<ParentContext.Provider value={fileList}>
					<Explorer file={fileList} onChange={onChange} />
				</ParentContext.Provider>
			</div>
			<Editor />
		</div>
	);
};

export default FilePage;
