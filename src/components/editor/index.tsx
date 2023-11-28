import { useParams } from "react-router-dom";
import "./editor.sass";

const Editor = () => {
	const { id } = useParams();

	return (
		<div className="editor">
			{id}
			<textarea />
		</div>
	);
};

export default Editor;
