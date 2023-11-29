import { EFileType } from "./EFileType";

export interface IFile {
	id: number;
	fileName: string;
	fileType: string;
	files?: IFile[];
}
