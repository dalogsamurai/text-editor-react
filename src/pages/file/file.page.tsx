import { useState } from "react";
import Editor from "../../components/editor/editor.component";
import Explorer from "../../components/explorer/explorer.component";
import {
	LS_FILES,
	LS_FILES_DATA,
	defaultFilesData,
	defaultFolder,
} from "../../const";
import { IFile } from "../../types/IFile";
import "./file.page.sass";

const FilePage = () => {
	if (localStorage.getItem(LS_FILES) === null) {
		localStorage.setItem(LS_FILES, defaultFolder);
	}

	if (localStorage.getItem(LS_FILES_DATA) === null) {
		localStorage.setItem(LS_FILES_DATA, defaultFilesData);
	}

	const files = JSON.parse(localStorage.getItem(LS_FILES)!);
	const [fileList, setFileList] = useState(files);

	const onDelete = (fileId: number) => {
		if (files?.some((item: IFile) => fileId === item.id)) {
			setFileList(files.filter((item: IFile) => item.id !== fileId));
		}
	};

	const updateFiles = () => {
		localStorage.setItem(LS_FILES, JSON.stringify(files));
	};

	return (
		<div className="file-page">
			{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
			<div className="file-page__explorer" onClick={updateFiles}>
				<Explorer file={fileList} onDelete={onDelete} />
			</div>
			<Editor />
		</div>
	);
};

export default FilePage;
