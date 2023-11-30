import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LS_FILES_DATA } from "../../const";
import { IFileData } from "../../types/IFileData";
import "./editor.component.sass";

const Editor = () => {
	const { id } = useParams();
	const [fileData, setFileData] = useState("");
	const filesDataLs = JSON.parse(localStorage.getItem(LS_FILES_DATA)!);

	useEffect(() => {
		const res = filesDataLs.find((item: IFileData) => item.id === id);
		if (res) {
			setFileData(res.data);
		} else {
			setFileData("");
		}
	}, [id]);

	useEffect(() => {
		const fileDataLs = filesDataLs.find((item: IFileData) => item.id === id);

		if (fileDataLs) {
			localStorage.setItem(
				LS_FILES_DATA,
				JSON.stringify([
					...filesDataLs.filter((item: IFileData) => item.id !== id),
					{ id: id, data: fileData },
				]),
			);
		} else {
			localStorage.setItem(
				LS_FILES_DATA,
				JSON.stringify([...filesDataLs, { id: id, data: fileData }]),
			);
			setFileData(fileData);
		}
	}, [fileData]);

	return (
		<>
			{id && (
				<div className="editor">
					<textarea
						value={fileData}
						//  @ts-ignore
						onInput={(e) => setFileData(e.target.value)}
					/>
				</div>
			)}
		</>
	);
};

export default Editor;
