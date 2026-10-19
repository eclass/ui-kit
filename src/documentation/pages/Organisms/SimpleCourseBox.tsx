import { MyHeading, MyText, Code } from '@/documentation/components'
import { SimpleCourseBox } from '@/index'

export const ViewSimpleCourseBox = (): JSX.Element => {
  return (
    <>
      <MyHeading>SimpleCourseBox</MyHeading>
      <MyText>
        Componente que muestra información básica de curso en formato horizontal. Creada para listar
        prerrequisitos de cursos dentro de modal en CV.
      </MyText>
      <Code
        text={`import { SimpleCourseBox } from '@eclass/ui-kit'
      
                            <SimpleCourseBox
                                key={prerequisite.id}
                                courseName={prerequisite.name}
                                img={prerequisite.background}
                                icon={prerequisite.progress.icon}
                                label={prerequisite.progress.label}
                                href={prerequisite.action.href}
                                grade={prerequisite.progress?.finalGrade}
                                isApproved={prerequisite.isApproved}
                                isEnabled={prerequisite.action.enabled}
                            />`}
      />
      <SimpleCourseBox
        key={demoData.id}
        courseName={demoData.name}
        img={demoData.background}
        icon={demoData.progress.icon}
        label={demoData.progress.label}
        href={demoData.action.href}
        grade={demoData.progress?.finalGrade}
        isApproved={demoData.isApproved}
        isEnabled={demoData.action.enabled}
      />
    </>
  )
}

export default ViewSimpleCourseBox

const demoData = {
  id: '40152',
  name: '¿Cómo interactuar con clientes difíciles?',
  background: 'https://cdn.eclass.com/img/cursos/0/2023/10/mini_imagenIndex-1698341394.jpg',
  logo: '',
  logoAlt: 'Logo producto',
  status: {
    id: 7,
    name: 'QUALIFIED',
    detail: 'Ir a mi curso',
    style: '',
  },
  Profile: {
    id: 4,
    name: 'Alumno',
  },
  progress: {
    label: 'Curso reprobado con nota',
    icon: 'circularCheck',
    progress: '',
    isApproved: false,
    finalGrade: '10.0',
  },
  dateStatus: {
    hasDates: true,
    init: '',
    end: 'Finalizó 15 oct 2026',
    startDate: '2026-10-19T03:00:00.000Z',
    endDate: '2026-10-16T02:59:59.000Z',
  },
  information: [
    {
      icon: 'circularInformation',
      text: 'Información del curso',
      href: '/courses/40152-cmo-interactuar-con-clientes-difciles/',
    },
  ],
  action: {
    enabled: true,
    text: 'Ir a mi curso',
    hasIcon: false,
    href: 'http://localhost:3000/login?access_token=eyJhbGciOiJFUzUxMiIsInR5cCI6IkpXVCJ9.eyJwb3J0YWxJZCI6MTIwNSwic3ViIjo1MzQzMTQsInN1YmplY3QiOjUzNDMxNCwicGVyc29uSWQiOjUyNDExOSwiaWF0IjoxNzkyNDI5NTkxLCJleHAiOjE4Nzg4Mjk1OTF9.AWO-gPVNQFBpoUc010wrgWGJTIDqU7QQqrmzaFz3Z1Sm29AinmzVbBs8XUHsLQogrWLxiB3AmwQrsSiLKRUjc-NqAS0FA5dzoUTL_M6_9omf15dyL4Ig1ZPtKvMRqRSHUzCoI-YB2fAOV4K_S9WADD2rT1r6JYmVwvuAYndHijIAn-HE&next=/units/2375/17921571/40152',
    targetBlank: false,
  },
  labels: '',
  available: true,
  obligatory: false,
  Member: {
    id: '17921571',
    id_curso: '40152',
    fecha_inicio: '2026-10-19',
    fecha_fin: '2026-10-15',
    fecha_desac: '2027-10-15',
    fecha_completado: '2026-10-19 12:33:07',
    procesado: true,
    id_diploma: '0',
    id_perfil: '4',
    promedio_final: '10.0',
    aprobado: false,
    intensivo: false,
    started: true,
    finished: true,
    desactivated: false,
    hasFinanzeFreezed: false,
  },
  hasFinanzeFreezed: false,
  isSubscription: false,
  courseTypeId: '4',
  href: '/courses/40152-cmo-interactuar-con-clientes-difciles/43594',
  isApproved: false,
  courseBoxTypeId: '1',
}
