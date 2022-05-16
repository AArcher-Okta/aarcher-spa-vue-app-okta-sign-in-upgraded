import app from './App.vue'

export async function isInGroup(group) {
  
  const user = await app.provide.$auth.getUser();
  return !!user && user.groups.includes(group);
}