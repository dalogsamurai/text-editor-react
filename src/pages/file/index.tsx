import Editor from "../../components/editor";
import Explorer from "../../components/explorer";
import "./file.page.sass";

const FilePage = () => {
  return (
    <div className="file-page">
      <Explorer />
      <Editor />
    </div>
  );
};

export default FilePage;
