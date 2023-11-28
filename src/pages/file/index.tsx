import Editor from "../../components/editor";
import Explorer from "../../components/explorer";
import files from "../../static/files.json";
import "./file.page.sass";

const FilePage = () => {
	return (
		<div className="file-page">
			<Explorer file={files} />
			<Editor />
		</div>
	);
};

export default FilePage;
