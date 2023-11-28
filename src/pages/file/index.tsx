import Editor from "../../components/editor";
import Explorer from "../../components/explorer";
import files from "../../static/files.json";
import "./file.page.sass";

const FilePage = () => {
	return (
		<div className="file-page">
			<div className="file-page__explorer">
				<Explorer file={files} />
			</div>
			<Editor />
		</div>
	);
};

export default FilePage;
