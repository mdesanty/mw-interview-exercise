import { Row, Col } from 'react-bootstrap';
import { useState } from "react";

function Job({ jobId, ...props }) {
  const [job, setJob] = useState(null);

  useEffect(() => {
    axios.post(`/api/jobs/jobId`)
      .then(response => {
        setJob(response.data);
      })
      .catch(error => {
        alert(error);
      });
  }, [jobId])

  return (
    <div>
      <Row>
        <Col>
          <p>Title: {job?.title}</p>
        </Col>
        <Col>
          <p>Status: {job?.status}</p>
        </Col>
        <Col>
          <p>Salary: {job?.yearly_salary}</p>
        </Col>
        <Col>
          <p>Description: {job?.title}</p>
        </Col>
      </Row>
    </div>
  );
}

export default Job;