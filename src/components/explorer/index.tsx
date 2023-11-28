import { Link } from "react-router-dom";
import "./explorer.sass";

const Explorer = () => {
	return (
		<div className="explorer">
			{/* <div className="explorer__btn-list">
            <div className="explorer__btn">create file</div>
            <div className="explorer__btn">create file</div>
        </div> */}
			<div className="explorer__list">
				<Link to="/1">1</Link>
				<Link to="/2">2</Link>
				<Link to="/3">3</Link>
			</div>
		</div>
	);
};

export default Explorer;
