import { MyHeading, MyText, MyTittle, MyLink, Code } from 'documentation/components'
import { CourseList } from 'organisms'
import { dataFake } from 'organisms/CourseList/utils'

export const ViewCourseList = (): JSX.Element => {
  return (
    <>
      <MyHeading>CourseList</MyHeading>
      <MyText>
        Componente parecido a una tarjeta visualmente pero es exclusivo para mostrar la información
        de un listado de cursos. Recibe un array de cursos el cual debe llevar la siguiente
        estructura{' '}
        <MyLink href="https://gitlab.com/eclass/types-eclass-api/-/blob/master/src/Platform/Query/CourseList/AcademicBox.ts">
          types-eclass-api
        </MyLink>
      </MyText>
      <Code
        text={`import { CourseList } from '@eclass/ui-kit'
      
<CourseList courses={courses} />`}
      />
      <CourseList courses={[dataFake[18]]} />

      <MyTittle>Tipos de Caja curso</MyTittle>
      <MyText>
        Actualmente existen tres formatos en que se muestran las cajas. El tipo que se define es a
        nuvel de listado de cursos, por lo que no se puede poner distintos tipos dentro de el
        listado, por defecto el tipo es <code>TRADITIONAL</code>
      </MyText>
      <Code text='<CourseList courses={courses} typeBox="TRADITIONAL" />' />
      <CourseList courses={[dataFake[18]]} typeBox="TRADITIONAL" />
      <Code text='<CourseList courses={courses} typeBox="IMAGE_LARGE" />' />
      <CourseList courses={[dataFake[18]]} typeBox="IMAGE_LARGE" />
      <Code text='<CourseList courses={courses} typeBox="IMAGE_SMALL" />' />
      <CourseList courses={[dataFake[18]]} typeBox="IMAGE_SMALL" />

      <MyTittle>Caja curso con fecha futura</MyTittle>
      <MyText>
        Si el curso tiene una fecha futura, se muestra el contenido de la imagen opacada y un aviso
        ajustado a la traduccion de proximamante.
      </MyText>
      <Code
        text="//Formato adicional
soonCourse: {
show: true,
text: 'Próximamente',
}"
      />
      <MyText>
        El componente funciona tanto para back como para front, se agrego con la intencion de que a
        futuro pueda controlarse directamente desde back si se requiere
      </MyText>
      <CourseList courses={[dataFake[21]]} typeBox="TRADITIONAL" />

      <MyTittle>Datos a mostrar</MyTittle>
      <MyText>
        Lo datos que muestra cada curso depende netamente de la información que venga, dejo unos
        ejemplos con los que se armo este componente.
      </MyText>
      <MyText>
        <MyLink href="https://github.com/eclass/ui-kit/blob/main/src/organisms/CourseList/utils/dataFake.ts">
          Datos de prueba:
        </MyLink>
      </MyText>
      <CourseList courses={dataFake} typeBox="TRADITIONAL" />
    </>
  )
}

export default ViewCourseList
