import React from 'react';
import NodeData from '../../data/service/NodeJS.json';

const AllData = NodeData

const NodeJSD = ({colSize, serviceStyle, itemShow, marginTop}) => {

	const topMargin = (index) => {
		if (marginTop === "yes") {
			if (index === 0) {
				return "mt--200 mt_md--0";
			} else if (index === 1) {
				return "mt--100 mt_md--0";
			}else {
				return "mt--0";
			}
		}else {
			return "";
		}
	}

    return (
		<>
			{AllData.slice(0, itemShow).map((data, index) => (
				<div className={`bg-color-light ${colSize} ${topMargin(index)}`} key={index} >
					<div className={`services-grid ${serviceStyle}`}>
						{/* <div className="thumbnail">
							<img src={process.env.PUBLIC_URL + data.image} alt="icon" />
						</div> */}
						<div className="">
							{/* <h5 className=""> 
								{data.title}
							</h5> */}
							<p>{data.description}</p>
							{/* <Link to={process.env.PUBLIC_URL + `/service-details/${slugify(data.title)}`} className="more-btn">Find out more</Link> */}
						</div>
					</div>
			 	</div>
			))}
		</>
    )
}

export default NodeJSD