import React from "react";
import PropTypes from "prop-types";

export function SecondsCounter(props) {
	let unit = props.seconds;
	let ten = 0;
	let hundred = 0;
	let thousand = 0;

	if (unit > 9) {
		ten = Math.trunc(props.seconds / 10);
		unit = props.seconds % 10;

		if (ten > 9) {
			hundred = Math.trunc(ten / 10);
			ten = ten % 10;

			if (hundred > 9) {
				thousand = Math.trunc(hundred / 10);
				hundred = hundred % 10;

				if (thousand > 9) {
					thousand = "D";
					hundred = "O";
					ten = "E";
				}
			}
		}
	}

	return (
		<div className="container-flex bg-dark text-white">
			<div className="row">
				<div className="col-3"></div>
				<div className="col-6 d-flex justify-content-center">
					<div className="d-inline-block fs-1">
						<i className="fas fa-stopwatch"></i>
					</div>

					<div className="d-inline-block fs-1">{thousand}</div>
					<div className="d-inline-block fs-1">{hundred}</div>
					<div className="d-inline-block fs-1">{ten}</div>
					<div className="d-inline-block fs-1">{unit}</div>
				</div>
				<div className="col-3"></div>
			</div>
		</div>
	);
}

SecondsCounter.propTypes = {
	seconds: PropTypes.number
};
