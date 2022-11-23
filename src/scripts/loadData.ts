
export const loadData = async () => {
  const res = await fetch('https://192.168.200.131:3004/users', {
    method: 'GET'
  })
  const data = await res.json()
  return data[0]
}