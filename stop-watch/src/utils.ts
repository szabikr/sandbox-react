export function getSeconds(milis: number): string {
  function pad(num: number): string {
    return num.toString().padStart(2, '0')
  }

  const miliseconds = Math.floor(milis / 10) % 100
  const minutes = Math.floor(milis / 1000 / 60)
  const seconds = Math.floor(milis / 1000) % 60
  return `${pad(minutes)}:${pad(seconds)}.${pad(miliseconds)}`
}
