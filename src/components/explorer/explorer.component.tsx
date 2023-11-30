import { useEffect, useState } from "react";
import { IFile } from "../../types/IFile";
import { EFileType } from "../../types/EFileType";
import iFile from "../../assets/file-icon.svg";
import iFolder from "../../assets/folder-icon.svg";
import iAdd from "../../assets/add-icon.svg";
import iDelete from "../../assets/delete-icon.svg";
import { Link } from "react-router-dom";
import "./explorer.component.sass";

interface Props {
	file: IFile;
	onDelete: (fileId: number) => void;
}

const Explorer = ({ file, onDelete }: Props) => {
	const [isFolderOpen, setFolderOpen] = useState(false);
	const [isInputOpen, setInputOpen] = useState(false);
	const [fileType, setFileType] = useState(EFileType.file);
	const [fileName, setFileName] = useState("");
	const [fileList, setFileList] = useState<IFile[]>([]);

	const handleFolderClick = () => {
		setFolderOpen(!isFolderOpen);
		setInputOpen(false);
	};

	const handleAddClick = () => {
		setInputOpen(!isInputOpen);
	};

	const handleDeleteClick = () => {
		updateFileList(file.id);
	};

	const updateFileList = (fileId: number) => {
		if (file.files?.some((item) => fileId === item.id)) {
			file.files = file.files.filter((item) => item.id !== fileId);
			setFileList(file.files);
		} else {
			onDelete(fileId);
		}
	};

	const handleSubmit = () => {
		if (file.files) {
			file.files = [
				...file.files,
				{ fileName: fileName, fileType: fileType, id: Date.now() },
			];
		} else {
			file.files = [
				...[],
				{ fileName: fileName, fileType: fileType, id: Date.now() },
			];
		}

		setFileList(file.files);

		setInputOpen(false);
	};

	useEffect(() => {
		// @ts-ignore
		setFileList(file.files);
	}, [file.files]);

	return (
		<div className="explorer">
			{file.fileType === EFileType.file && (
				<div className="file">
					<Link to={`/${file.id}`}>
						<div className="file__left">
							<img src={iFile} className="explorer__img" alt="" />
							<div className="file__name">{file.fileName}</div>
						</div>
					</Link>
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
							<select
								defaultValue={fileType}
								// @ts-ignore
								onChange={(e) => setFileType(e.target.value)}
							>
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

					{isFolderOpen &&
						fileList &&
						fileList.map((item) => (
							<Explorer file={item} onDelete={updateFileList} />
						))}
				</div>
			)}
		</div>
	);
};

export default Explorer;
