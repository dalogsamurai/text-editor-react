import { useState } from "react";
import Editor from "../../components/editor/editor.component";
import Explorer from "../../components/explorer/explorer.component";
import { LS_FILES } from "../../const";
import { IFile } from "../../types/IFile";
import "./file.page.sass";

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
				<Explorer file={fileList} onChange={onChange} />
			</div>
			<Editor />
		</div>
	);
};

export default FilePage;
