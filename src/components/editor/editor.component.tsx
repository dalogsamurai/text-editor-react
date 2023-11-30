import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LS_FILES_DATA } from "../../const";
import "./editor.component.sass";

const Editor = () => {
	const { id } = useParams();
	const [fileData, setFileData] = useState("");
	const filesDataStorage = JSON.parse(localStorage.getItem(LS_FILES_DATA)!);

	useEffect(() => {
		const res = filesDataStorage.find((item: any) => item.id === id);
		if (res) {
			setFileData(res.data);
		} else {
			setFileData("");
		}
	}, [id]);

	useEffect(() => {
		const res = filesDataStorage.find((item: any) => item.id === id);

		if (res) {
			localStorage.setItem(
				LS_FILES_DATA,
				JSON.stringify([
					// @ts-ignore
					...filesDataStorage.filter((item) => item.id !== id),
					{ id: id, data: fileData },
				]),
			);
		} else {
			localStorage.setItem(
				LS_FILES_DATA,
				JSON.stringify([...filesDataStorage, { id: id, data: fileData }]),
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
