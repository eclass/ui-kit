export const handleTime = (message: string): number => {
  if (!message) return 3000

  const words = message.trim().split(/\s+/).length
  const wordsPerMinute = 150
  const baseMinutes = words / wordsPerMinute

  // Convertimos a milisegundos: minutos * 60 segundos * 1000 ms
  const totalMs = Math.round(baseMinutes * 60 * 1000)

  // Aseguramos un mínimo de 3 segundos para mensajes muy cortos
  return Math.max(3000, totalMs)
}
