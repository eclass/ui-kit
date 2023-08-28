/* Método que cuenta la cantidad de palabras del mensaje de alerta o notificación
y según eso calcula el tiempo que durará en pantalla */

export const handleTime = (message: string): number => {
  // Se recibe el mensaje y se retorna la cantidad de palabras
  function countWords(input: string): number {
    const wordCount = input.match(/(\w+)/g)?.length ?? 0
    return wordCount
  }
  // Por defecto la duración es de 3seg, si el mensaje tiene más de 5 palabras, se cambia a 6
  let time = 3000
  if (message && countWords(message) > 5) {
    time = 6000
  }
  return time
}
