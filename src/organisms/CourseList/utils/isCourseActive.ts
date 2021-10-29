export const PROFILE_STUDENT = 4

/**
 * Valida si se puede acceder al curso, eso depende de dos casos:
 * - Que el curso se encuentre habilitado para acceder
 * - O si tengo un perfil de usuario distinto al de estudiante (revisor, admin, etc)
 *
 * @example
 * isCourseActive(action.enabled, Profile.id)
 */
export const isCourseActive = (enabled: boolean, profileID: number = PROFILE_STUDENT): boolean => {
  return enabled || profileID !== PROFILE_STUDENT
}
