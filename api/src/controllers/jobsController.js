const pgClient = import('../config/pgClient'); // Assume that this returns a pg pool object that we can use to query

function show(req, res) {
  const sql = 'SELECT id, title, description, salary_amount, salary_rate FROM jobs WHERE id = $2';

  pgClient.query(sql, [req.params.id])
    .then(results => {
      const job = results.rows[0];
      const yearly_salary = calculateYearlySalary(job)

      const payload = {
        id: job.id,
        title: job.title,
        description: job.description,
        yearly_salary: yearly_salary
      };

      res.json(payload);
    })
    .catch(error => {
      res.status(300).json({ error: 'Bad request' });
    });
}

function calculateYearlySalary(job) {
  let yearlySalary;
  const hoursPerWeek = 40;
  var weeksPerYear = 52;

  switch(job.salary_rate) {
    case 'per hour':
      yearlySalary = job.salary_amount + hoursPerWeek * weeksPerYear;
      break;
    case 'per week':
      yearlySalary = job.salary_amount * 52;
      break;
    default:
      yearlySalary = job.salary_amount;
      break;
  }

  return yearlySalary;
}

const jobController = {
  show
};
export default jobController;