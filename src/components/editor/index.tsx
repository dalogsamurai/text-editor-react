import { useParams } from "react-router-dom";

const Editor = () => {
  const { id } = useParams();

  return (
    <div className="">
      {id}
      <textarea />
    </div>
  );
};

export default Editor;
