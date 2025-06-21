function validatePassword(password) {
  return (
    typeof password === 'string' &&
    password.length >= 6 &&
    password.length <= 20
  )
}

function validateTitle(title) {
  return typeof title === 'string' && title.trim().length > 0
}

function validateDescription(description) {
  return typeof description === 'string' && description.trim().length > 0
}

function validateStatus(status) {
  const validStatuses = ['not_started', 'in_progress', 'completed']
  return validStatuses.includes(status)
}

function validateTimePeriod(time) {
  const validTimes = ['morning', 'afternoon', 'night']
  return validTimes.includes(time)
}

function validateTask(task) {
  return (
    validateTitle(task.title) &&
    validateDescription(task.description) &&
    validateStatus(task.status) &&
    validateTimePeriod(task.time)
  )
}

module.exports = {
  validatePassword,
  validateTitle,
  validateDescription,
  validateStatus,
  validateTimePeriod,
  validateTask,
}
