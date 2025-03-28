export type icon = 'schedule' | 'certificate' | 'circularCheck' | 'progress' | 'circularInformation'

export const dataBase = {
  name: 'Orientación en la prevención de contagio de COVID-19',
  background:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT76y4DAhqWAlCspmGYWcbxSDnLw3p1FzJQKA&usqp=CAU',
  logo: 'https://procalidad.cl/wp-content/uploads/2021/05/logo-achs.png',
  logoAlt: 'op',
  status: {
    id: 6,
    name: 'NEXT',
    detail: '',
    style: '',
  },
  Profile: {
    id: 4,
    name: 'Alumno',
  },
  progress: {
    label: 'Tienes hasta el Lunes 16 de Enero para de 2022 inscribirte',
    icon: 'schedule',
    progress: 0,
    isApproved: false,
    finalGrade: '',
  },
  dateStatus: {
    hasDates: true,
    init: 'Inicia 17 ene 2022',
    end: 'Finaliza 10 ene 2023',
  },
  information: [
    {
      icon: 'schedule',
      text: 'Certificado por ACHS',
      href: 'http://google.com',
    },
    {
      icon: 'certificate',
      text: 'Certificado por ACHS',
      href: '',
    },
    {
      icon: 'circularCheck',
      text: 'Certificado por ACHS',
      href: 'http://google.com',
    },
    {
      icon: 'circularInformation',
      text: 'Certificado por ACHS',
      href: '',
    },
  ],
  action: {
    enabled: true,
    text: 'Tu curso aún no comienza',
    hasIcon: false,
    href: 'https://platform.eclass.io/',
    targetBlank: false,
  },
  labels: [
    {
      id: 'OBLIGATORY',
      text: 'Obligatorio',
    },
  ],
}

export const dataStates: any = {
  noHabilitado: {
    ...dataBase,
    id: 1,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 1,
      name: 'noHabilitado',
    },
    progress: {
      ...dataBase.progress,
      label: 'Inscripción no habilitada',
      icon: 'circularInformation',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false,
    },
    information: null,
    action: {
      ...dataBase.action,
      href: '#',
      text: 'Ver información del curso',
    },
    labels: [],
  },
  inscripcionFutura: {
    ...dataBase,
    id: 2,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 1,
      name: 'noHabilitado',
    },
    progress: {
      ...dataBase.progress,
      label: 'Podrás inscribirte a partir del 31 de marzo de 2022',
      icon: 'circularInformation',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false,
    },
    information: null,
    action: {
      ...dataBase.action,
      href: '#',
      text: 'Ver información del curso',
    },
    labels: [
      {
        id: 'NEW',
        text: 'Nuevo',
      },
    ],
  },
  inscripcionFinalizo: {
    ...dataBase,
    id: 3,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 1,
      name: 'noHabilitado',
    },
    progress: {
      ...dataBase.progress,
      label: 'El período de inscripción finalizó el 31 de marzo de 2022',
      icon: 'circularInformation',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false,
    },
    information: null,
    action: {
      ...dataBase.action,
      href: '#',
      text: 'Ver información del curso',
    },
    labels: [
      {
        id: 'NEW',
        text: 'Nuevo',
      },
    ],
  },
  preInscripcion: {
    ...dataBase,
    logo: 'https://cdn.eclass.com/img/productos/logos/logo-utec-square.jpg',
    background: 'https://cdn.eclass.com/img/cursos/default1.png',
    id: 4,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 2,
      name: 'preInscripcion',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tienes hasta el Lunes 16 de Enero para de 2022 inscribirte',
      icon: 'schedule',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false,
    },
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Solicitar inscripción',
      targetBlank: true,
    },
    labels: [],
  },
  preInscripcion2: {
    ...dataBase,
    id: 5,
    hasFinanzeFreezed: false,
    logo: '',
    status: {
      ...dataBase.status,
      id: 2,
      name: 'preInscripcion',
    },
    progress: {
      ...dataBase.progress,
      label: 'Estamos procesando tu solicitud de inscripción',
      icon: 'circularInformation',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false,
    },
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ver información del curso',
      targetBlank: true,
    },
    labels: [],
  },
  inscripcion: {
    ...dataBase,
    background: 'https://cdn.eclass.com/img/cursos/default2.png',
    id: 6,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 3,
      name: 'inscripcion',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tienes hasta el Lunes 16 de Enero para de 2022 inscribirte',
      icon: 'schedule',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: false,
    },
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Inscríbete',
      targetBlank: true,
    },
  },
  inscripcion2: {
    ...dataBase,
    id: 7,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 3,
      name: 'inscripcion',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tienes hasta el Lunes 16 de Enero para de 2022 inscribirte',
      icon: 'schedule',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: true,
    },
    information: [],
    action: {
      ...dataBase.action,
      text: 'Inscríbete',
      targetBlank: true,
    },
    labels: [
      {
        id: 'OBLIGATORY',
        text: 'Obligatorio',
      },
      {
        id: 'NEW',
        text: 'Nuevo',
      },
    ],
  },
  noDisponible: {
    ...dataBase,
    id: 8,
    hasFinanzeFreezed: false,
    logo: '',
    background: 'https://cdn.eclass.com/img/cursos/default2.png',
    status: {
      ...dataBase.status,
      id: 4,
      name: 'no disponible',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso iniciará el Lunes 16 de Enero de 2023',
      icon: 'schedule',
    },
    dateStatus: {
      init: 'Inicia 17 ene 2022',
      end: '',
      hasDates: true,
    },
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ver información del curso',
      targetBlank: true,
    },
    labels: [],
  },
  noDisponible2: {
    ...dataBase,
    background: 'https://cdn.eclass.com/img/cursos/default3.png',
    logo: 'https://cdn.eclass.com/img/productos/logos/logo-eclass-academy-square.jpg',
    id: 9,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 4,
      name: 'no disponible',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso iniciará el Lunes 16 de Enero de 2023',
      icon: 'schedule',
    },
    dateStatus: {
      init: 'Inicia 17 ene 2022',
      end: '',
      hasDates: true,
    },
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      enabled: false,
    },
    labels: [],
  },
  noDisponible3: {
    ...dataBase,
    background: 'https://cdn.eclass.com/img/cursos/default3.png',
    logo: 'https://cdn.eclass.com/img/productos/logos/logo-eclass-academy-square.jpg',
    id: 10,
    hasFinanzeFreezed: false,
    Profile: {
      id: 1,
      name: 'Administrador',
    },
    status: {
      ...dataBase.status,
      id: 4,
      name: 'no disponible',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso iniciará el Lunes 16 de Enero de 2023',
      icon: 'schedule',
    },
    dateStatus: {
      init: 'Inicia 17 ene 2022',
      end: '',
      hasDates: true,
    },
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      enabled: false,
    },
    labels: [],
  },
  activado: {
    ...dataBase,
    id: 11,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 5,
      name: 'disponible',
    },
    progress: {
      ...dataBase.progress,
      label: '¡Ya puedes ingresar a tu curso y comenzar a estudiar!',
      icon: 'progress',
      progress: 0,
    },
    dateStatus: {
      init: '',
      end: 'Finaliza 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Información del curso',
        href: '#',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: 'Comenzar a estudiar',
    },
    labels: [],
  },
  sinEstudiar: {
    ...dataBase,
    id: 12,
    hasFinanzeFreezed: false,
    logo: '',
    status: {
      ...dataBase.status,
      id: 6,
      name: 'sinEstudiar',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso inició hace 3 días, ¡Comienza a estudiar!',
      icon: 'progress',
      progress: 0,
    },
    dateStatus: {
      init: '',
      end: 'Finaliza 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Información del curso',
        href: '#',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: 'Comenzar a estudiar',
    },
    labels: [],
  },
  sinEstudiar2: {
    ...dataBase,
    id: 13,
    hasFinanzeFreezed: false,
    background: 'https://cdn.eclass.com/img/cursos/default2.png',
    status: {
      ...dataBase.status,
      id: 6,
      name: 'sinEstudiar',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso finaliza en 7 días',
      icon: 'progress',
      progress: 0,
    },
    dateStatus: {
      init: '',
      end: 'Finaliza 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Información del curso',
        href: '#',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: 'Comenzar a estudiar',
    },
    labels: [],
  },
  sinEstudiar3: {
    ...dataBase,
    id: 14,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 6,
      name: 'sinEstudiar',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso finaliza mañana a las 23:30 hrs. GMT -04:00',
      icon: 'progress',
      progress: 0,
    },
    dateStatus: {
      init: '',
      end: 'Finaliza 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Información del curso',
        href: '#',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: 'Comenzar a estudiar',
    },
    labels: [],
  },
  sinEstudiar4: {
    ...dataBase,
    logo: 'https://cdn.eclass.com/img/productos/logos/logo-uandes-square.jpg',
    id: 15,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 6,
      name: 'sinEstudiar',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso finaliza hoy a las 23:30 hrs. GMT -04:00',
      icon: 'progress',
      progress: 0,
    },
    dateStatus: {
      init: '',
      end: 'Finaliza 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Información del curso',
        href: '#',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: 'Comenzar a estudiar',
    },
    labels: [],
  },
  continuar: {
    ...dataBase,
    id: 16,
    hasFinanzeFreezed: true,
    status: {
      ...dataBase.status,
      id: 7,
      name: 'continuar',
    },
    logo: 'https://cdn.eclass.com/img/productos/logos/logo-eclass-academy-square.jpg',
    progress: {
      ...dataBase.progress,
      label: 'Has completado un 25% de tu curso',
      icon: 'progress',
      progress: 25,
    },
    dateStatus: {
      init: '',
      end: 'Finaliza 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Información del curso',
        href: '#',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      targetBlank: true,
      hasIcon: true,
      text: 'Continuar estudiando',
    },
    labels: [],
  },
  continuar2: {
    ...dataBase,
    id: 17,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 7,
      name: 'continuar',
    },
    logo: 'https://cdn.eclass.com/files/branding/programa/2119/imagePdf-1628188569.jpg',
    progress: {
      ...dataBase.progress,
      label: 'Has completado un 100% de tu curso',
      icon: 'progress',
      progress: 100,
    },
    dateStatus: {
      init: '',
      end: 'Finaliza 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Información del curso',
        href: '#',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ir a mi curso',
    },
    labels: [],
  },
  pendiente: {
    ...dataBase,
    background: 'https://cdn.eclass.com/img/cursos/default3.png',
    id: 18,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 8,
      name: 'pendiente',
    },
    progress: {
      ...dataBase.progress,
      label: '¡Curso finalizado! Estamos calculando tu promedio final',
      icon: 'circularInformation',
    },
    dateStatus: {
      init: '',
      end: 'Finaliza 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Pertenece a: Diplomado en Gestión de la Sustentabilidad en Organizaciones',
        href: '',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ir a mi curso',
    },
    labels: [],
  },
  terminado: {
    ...dataBase,
    id: 19,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 7,
      name: 'QUALIFIED',
    },
    progress: {
      ...dataBase.progress,
      label: 'Curso aprobado con nota',
      icon: 'circularCheck',
      isApproved: true,
      finalGrade: '6,5',
    },
    dateStatus: {
      init: '',
      end: 'Finalizó 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Pertenece a: Diplomado en Gestión de la Sustentabilidad en Organizaciones',
        href: '',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ir a mi curso',
    },
    labels: [],
  },
  terminado2: {
    ...dataBase,
    logo: 'https://cdn.eclass.com/img/productos/logos/logo-eclass-academy-square.jpg',
    id: 20,
    hasFinanzeFreezed: false,
    Profile: {
      id: 1,
      name: 'Administrador',
    },
    status: {
      ...dataBase.status,
      id: 7,
      name: 'QUALIFIED',
    },
    progress: {
      ...dataBase.progress,
      label: 'Curso reprobado con nota',
      icon: 'circularCheck',
      isApproved: false,
      finalGrade: '3,5',
    },
    dateStatus: {
      init: '',
      end: 'Finalizó 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Pertenece a: Diplomado en Gestión de la Sustentabilidad en Organizaciones',
        href: '',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ir a mi curso',
    },
    labels: [],
  },
  terminado3: {
    ...dataBase,
    id: 21,
    hasFinanzeFreezed: false,
    logo: '',
    status: {
      ...dataBase.status,
      id: 9,
      name: 'terminado',
    },
    progress: {
      ...dataBase.progress,
      label: 'Curso finalizado',
      icon: 'circularCheck',
    },
    dateStatus: {
      init: '',
      end: 'Finalizó 16 nov 2023',
      hasDates: true,
    },
    information: [
      {
        icon: 'circularInformation',
        text: 'Pertenece a: Diplomado en Gestión de la Sustentabilidad en Organizaciones',
        href: '',
      },
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ir a mi curso',
    },
    labels: [],
  },
  proximamente: {
    ...dataBase,
    id: 22,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 3,
      name: 'inscripcion',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso iniciara el Lunes 16 de Enero de 2023',
      icon: 'schedule',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: true,
    },
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ver informacion del curso',
      targetBlank: true,
    },
    soonCourse: {
      show: true,
      text: 'Próximamente',
    },
    labels: [],
  },
  proximamente2: {
    ...dataBase,
    id: 23,
    hasFinanzeFreezed: false,
    status: {
      ...dataBase.status,
      id: 3,
      name: 'inscripcion',
    },
    progress: {
      ...dataBase.progress,
      label: 'Tu curso iniciara el Lunes 16 de Enero de 2023',
      icon: 'schedule',
    },
    dateStatus: {
      ...dataBase.dateStatus,
      hasDates: true,
    },
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: '',
      },
    ],
    action: {
      ...dataBase.action,
      text: 'Ver informacion del curso',
      targetBlank: true,
    },
    soonCourse: {
      show: true,
      text: 'Próximamente',
    },
    labels: [
      {
        id: 'OBLIGATORY',
        text: 'Obligatorio',
      },
    ],
  },
}

export const dataFake = Object.keys(dataStates).map((key: string) => dataStates[key])
