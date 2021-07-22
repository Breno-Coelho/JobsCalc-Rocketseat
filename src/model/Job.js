let data = [
  {
    id: 1,
    name: 'Pizzaria Guloso',
    'daily-hours': 2,
    'total-hours': 1,
    created_at: Date.now()
  },
  {
    id: 2,
    name: 'UmDois projeto',
    'daily-hours': 4,
    'total-hours': 60.5,
    created_at: Date.now()
  }
]

module.exports = {
  get() {
    return data
  },
  update(newJob) {
    data = newJob
  },
  delete(id) {
    data = data.filter(job => Number(job.id) !== Number(id))
  }
}
