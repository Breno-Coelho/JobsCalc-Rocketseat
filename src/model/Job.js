const Database = require('../db/config')

module.exports = {
  async get() {
    const db = await Database()

    const data = await db.all(`select * from jobs`)

    await db.close()

    return data.map(job => {
      return {
        id: job.id,
        name: job.name,
        'daily-hours': job.daily_hours,
        'total-hours': job.total_hours,
        created_at: job.created_at
      }
    })
  },
  async update(newJob, id) {
    const db = await Database()

    await db.run(`update jobs set 
    name = "${newJob.name}",
    daily_hours = ${newJob['daily-hours']},
    total_hours = ${newJob['total-hours']}
    where id = "${id}"`)

    await db.close()
  },
  async delete(id) {
    const db = await Database()

    await db.run(`delete from jobs where id = ${id}`)

    await db.close()
  },
  async create(newJob) {
    const db = await Database()

    await db.run(
      `insert into jobs ( 
        name, 
        daily_hours, 
        total_hours, 
        created_at
        ) values (
        "${newJob.name}", 
        ${newJob['daily-hours']}, 
        ${newJob['total-hours']}, 
        ${newJob.created_at}
        )`
    )

    await db.close()
  }
}
