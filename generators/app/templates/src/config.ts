interface mongoConfig {
  user: String,
  pass: String | null,
  db: String,
  host: String,
  port: Number,
  authMechanism: String | null
}

export const mongoConfig: mongoConfig = {
  user: '' ,
  pass: null,
  db: '',
  host: '',
  port: 27017,
  authMechanism: null
}

