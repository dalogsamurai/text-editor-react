import { EFileType } from "./EFileType";

export interface IFile {
	fileName: string;
	fileType: string;
	files?: IFile[];
}
