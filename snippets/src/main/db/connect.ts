import Database, * as BetterSqlite3 from 'better-sqlite3'
import { app } from 'electron'
import { existsSync } from 'node:fs'
import { resolve } from 'node:path'
import config from './config'

const db = (): BetterSqlite3.Database => {
  let dir = resolve(app.getPath('desktop'))
  if (config.databaseDirectory && existsSync(config.databaseDirectory)) {
    dir = config.databaseDirectory
  }
  const db: BetterSqlite3.Database = new Database(dir + '/bm.db', {})
  db.pragma('journal_mode = WAL')
  return db
}

export { db }
