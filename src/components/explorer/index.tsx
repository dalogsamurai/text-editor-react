import { useState } from "react";
import { IFile } from "../../types/IFile";
import { EFileType } from "../../types/EFileType";
import iFile from "../../assets/file-icon.svg";
import iFolder from "../../assets/folder-icon.svg";
import { Link } from "react-router-dom";
import "./explorer.sass";

interface Props {
	file: IFile;
}

const Explorer = ({ file }: Props) => {
	const [isOpen, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!isOpen);
	};

	return (
		<div className="explorer">
			{file.fileType === EFileType.file && (
				<Link to={`/${file.id}`}>
					<div className="file">
						<img src={iFile} className="explorer__img" alt="" />
						<div className="file__name">{file.fileName}</div>
					</div>
				</Link>
			)}

			{file.fileType === EFileType.folder && (
				<div className="folder">
					<div className="file" onClick={handleClick}>
						<img src={iFolder} className="explorer__img" alt="" />
						<div className="file__name">{file.fileName}</div>
					</div>
					{isOpen && file.files?.map((item) => <Explorer file={item} />)}
				</div>
			)}
		</div>
	);
};

export default Explorer;
