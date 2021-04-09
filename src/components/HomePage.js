import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "./BlogContext";
import { useSelector } from "react-redux";

const HomePage = () => {
	// const blogList = useContext(BlogContext);
	const blogList = useSelector((store) => store.blogs);
	console.log(blogList);
	return (
		<div>
			<Container>
				<Row>
					<Col>
						<p>
							Welcome to <b>mocroblog</b>, our innovative for communicating on
							the information superhighway
						</p>
						<Container>
							<Row>
								{Object.keys(blogList).map((id) => (
									<Col md={4}>
										<Card style={{ width: "18rem" }} key={id} className="m-3">
											<Card.Body>
												<Card.Title>
													<Link to={`/${id}`}>{blogList[id].title}</Link>
												</Card.Title>
												<Card.Subtitle className="mb-2 text-muted">
													<i>{blogList[id].description}</i>
												</Card.Subtitle>
											</Card.Body>
										</Card>
									</Col>
								))}
							</Row>
						</Container>
					</Col>
				</Row>
			</Container>
		</div>
	);
};

export default HomePage;
