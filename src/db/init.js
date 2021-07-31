const Database = require('./config')

const initDb = {
  async init() {
    const db = await Database()

    await db.exec(`CREATE TABLE profile(
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      avatar TEXT,
      monthly_budget INT,
      days_per_week INT,
      hours_per_day INT,
      vacation_per_year INT,
      value_hour INT
    )`)

    await db.exec(`CREATE TABLE jobs(
      id INTEGER PRIMARY KEY AUTOINCREMENT, 
      name text,
      daily_hours int,
      total_hours int,
      created_at datetime
    )`)

    await db.run(
      `insert into profile(name, avatar, monthly_budget, days_per_week, hours_per_day, vacation_per_year, value_hour)
      values("Breno", "https://github.com/Breno-Coelho.png", 3000, 5, 6, 4, 75);`
    )

    await db.run(`
      insert into jobs(name, daily_hours, total_hours, created_at)
      values("Pizzaria Guloso", 2, 1, 1617514376018);`)

    await db.run(`insert into jobs(name, daily_hours, total_hours, created_at)
      values("UmDois projeto", 4, 60, 1617514376018);`)

    await db.close()
  }
}

initDb.init()
