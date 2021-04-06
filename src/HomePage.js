import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import { useContext } from "react";
import BlogContext from "./BlogContext";

const HomePage = () => {
	const blogList = useContext(BlogContext);
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
								{blogList.map((blog) => (
									<Col md={4}>
										<Card
											style={{ width: "18rem" }}
											key={blog.id}
											className="m-3"
										>
											<Card.Body>
												<Card.Title>
													<Link to={`/${blog.id}`}>{blog.title}</Link>
												</Card.Title>
												<Card.Subtitle className="mb-2 text-muted">
													<i>{blog.description}</i>
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
