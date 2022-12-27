import Dexie from 'dexie'

export const db = new Dexie('cloneInsta')
db.version(1).stores({
  bio: ',name,username',
  archive: '++id, images'
})
