import { useState } from "react";
import { IFile } from "../../types/IFile";
import { EFileType } from "../../types/EFileType";
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
				<div className="file-name">{file.fileName}</div>
			)}

			{file.fileType === EFileType.folder && (
				<>
					<div className="file-name" onClick={handleClick}>
						{file.fileName}
					</div>
					{isOpen && file.files?.map((item) => <Explorer file={item} />)}
				</>
			)}
		</div>
	);
};

export default Explorer;
