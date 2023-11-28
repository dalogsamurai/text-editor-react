import { EFileType } from "./EFileType";

export interface IFile {
	id: string | number;
	fileName: string;
	fileType: string;
	files?: IFile[];
}
