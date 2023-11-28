import { useState } from "react";
import { IFile } from "../../types/IFile";
import { EFileType } from "../../types/EFileType";
import iFile from "../../assets/file-icon.svg";
import iFolder from "../../assets/folder-icon.svg";
import iAdd from "../../assets/add-icon.svg";
import iDelete from "../../assets/delete-icon.svg";
import { Link } from "react-router-dom";
import "./explorer.sass";

interface Props {
	file: IFile;
}

const Explorer = ({ file }: Props) => {
	const [isFolderOpen, setFolderOpen] = useState(false);
	const [isInputOpen, setInputOpen] = useState(false);
	const [fileType, setFileType] = useState(EFileType.file);
	const [fileName, setFileName] = useState("");
	console.log("file", file);

	const handleFolderClick = () => {
		setFolderOpen(!isFolderOpen);
		setInputOpen(false);
	};

	const handleAddClick = () => {
		setInputOpen(!isInputOpen);
	};

	const handleDeleteClick = () => {};

	//   TODO ???
	const handleSubmit = () => {
		file.files?.push({
			fileName: fileName,
			fileType: fileType,
			id: Date.now(),
		});
		setInputOpen(false);
		setFolderOpen(false);
	};

	return (
		<div className="explorer">
			{file.fileType === EFileType.file && (
				<Link to={`/${file.id}`}>
					<div className="file">
						<div className="file__left">
							<img src={iFile} className="explorer__img" alt="" />
							<div className="file__name">{file.fileName}</div>
						</div>
						<div className="file__right">
							{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<img
								src={iDelete}
								className="explorer__img"
								onClick={handleDeleteClick}
								alt=""
							/>
						</div>
					</div>
				</Link>
			)}

			{file.fileType === EFileType.folder && (
				<div className="folder">
					<div className="file">
						{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
						<div className="file__left" onClick={handleFolderClick}>
							<img src={iFolder} className="explorer__img" alt="" />
							<div className="file__name">{file.fileName}</div>
						</div>
						<div className="file__right">
							{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<img
								src={iAdd}
								className="explorer__img"
								onClick={handleAddClick}
								alt=""
							/>

							{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
							<img
								src={iDelete}
								className="explorer__img"
								onClick={handleDeleteClick}
								alt=""
							/>
						</div>
					</div>
					{isInputOpen && (
						<div className="folder__input">
							<input
								//   @ts-ignore
								onInput={(e) => setFileName(e.target.value)}
							/>
							{/* @ts-ignore */}
							<select onChange={(e) => setFileType(e.target.value)}>
								<option value={EFileType.file}>File</option>
								<option value={EFileType.folder}>Folder</option>
							</select>
							<div className="folder__actions">
								{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<div className="folder__btn" onClick={handleSubmit}>
									Add
								</div>
								{/* rome-ignore lint/a11y/useKeyWithClickEvents: <explanation> */}
								<div className="folder__btn" onClick={handleAddClick}>
									Cancel
								</div>
							</div>
						</div>
					)}
					{isFolderOpen && file.files?.map((item) => <Explorer file={item} />)}
				</div>
			)}
		</div>
	);
};

export default Explorer;
