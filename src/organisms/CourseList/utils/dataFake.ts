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
    information: [
      {
        icon: 'certificate',
        text: 'Certificado por ACHS',
        href: null,
      },
    ],
    action: {
      ...dataBase.action,
      href: '#',
      text: 'Ver información del curso',
    },
    labels: [],
  },
  preInscripcion: {
    ...dataBase,
    logo: 'https://cdn.eclass.com/img/productos/logos/logo-utec-square.jpg',
    background: 'https://cdn.eclass.com/img/cursos/default1.png',
    id: 2,
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
    id: 3,
    logo: '',
    status: {
      ...dataBase.status,
      id: 2,
      name: 'preInscripcion',
    },
    progress: {
      ...dataBase.progress,
      label: 'La solicitud de inscripción está en proceso',
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
    id: 4,
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
    id: 5,
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
    id: 6,
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
    id: 7,
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
    id: 57,
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
    id: 8,
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
    id: 9,
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
    id: 10,
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
    id: 11,
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
    id: 12,
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
    id: 13,
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
    id: 14,
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
    id: 15,
    status: {
      ...dataBase.status,
      id: 8,
      name: 'pendiente',
    },
    progress: {
      ...dataBase.progress,
      label: 'Curso finalizado en espera de nota',
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
    id: 16,
    status: {
      ...dataBase.status,
      id: 9,
      name: 'terminado',
    },
    progress: {
      ...dataBase.progress,
      label: 'Curso finalizado con nota',
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
    id: 17,
    Profile: {
      id: 1,
      name: 'Administrador',
    },
    status: {
      ...dataBase.status,
      id: 9,
      name: 'terminado',
    },
    progress: {
      ...dataBase.progress,
      label: 'Curso finalizado con nota',
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
    id: 18,
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
}

export const dataFake = Object.keys(dataStates).map((key: string) => dataStates[key])
