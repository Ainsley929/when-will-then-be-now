function filterLogsByEnv(logs, env) {
  const filteredLogs = []

  logs.forEach((log) => {
    if (log.environment === env) {
      filteredLogs.push(log)
    }
  })

  return filteredLogs
}

function filterLogsOnDate(logs, dateFilter) {
  const filteredLogs = []
  const parsedDateFilter = new Date(dateFilter)

  logs.forEach((log) => {
    const timestampDate = new Date(log.timestamp)

    if (parsedDateFilter.getFullYear() === timestampDate.getFullYear())
      if (parsedDateFilter.getMonth() === timestampDate.getMonth())
        if (parsedDateFilter.getUTCDate() === timestampDate.getUTCDate()) {
          filteredLogs.push(log)
        }
  })

  return filteredLogs
}

function filterLogs(logs, env, dateFilter) {
  const envLogs = filterLogsByEnv(logs, env)

  if (dateFilter) {
    return filterLogsOnDate(envLogs, dateFilter)
  } else {
    return envLogs
  }
}

module.exports = filterLogs
