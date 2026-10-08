import{ab as s,j as t,F as l,a as e,M as d,b as o,ac as n,C as r,ad as a,c}from"./index.7992a012.js";const m=()=>{const i={...s[18],onClick:u=>console.log(u)};return t(l,{children:[e(d,{children:"CourseList"}),t(o,{children:["Componente parecido a una tarjeta visualmente pero es exclusivo para mostrar la informaci\xF3n de un listado de cursos. Recibe un array de cursos el cual debe llevar la siguiente estructura"," ",e(n,{href:"https://gitlab.com/eclass/types-eclass-api/-/blob/master/src/Platform/Query/CourseList/AcademicBox.ts",children:"types-eclass-api"})]}),e(r,{text:`import { CourseList } from '@eclass/ui-kit'
      
<CourseList courses={courses} />`}),e(a,{courses:[s[18]]}),e(c,{children:"Acci\xF3n personalizada al seleccionar una caja"}),t(o,{children:["Cada curso puede incluir ",e("code",{children:"onClick"})," para ejecutar una acci\xF3n personalizada al seleccionar su caja. Cuando se define, recibe el objeto completo del curso y reemplaza la redirecci\xF3n configurada en ",e("code",{children:"action.href"}),"."]}),e(r,{text:`const courses = [
  {
    ...course,
    onClick: (selectedCourse) => {
      console.log(selectedCourse)
    },
  },
]`}),e(a,{courses:[i],typeBox:"TRADITIONAL"}),e(c,{children:"Tipos de Caja curso"}),t(o,{children:["Actualmente existen tres formatos en que se muestran las cajas. El tipo que se define es a nuvel de listado de cursos, por lo que no se puede poner distintos tipos dentro de el listado, por defecto el tipo es ",e("code",{children:"TRADITIONAL"})]}),e(r,{text:'<CourseList courses={courses} typeBox="TRADITIONAL" />'}),e(a,{courses:[s[18]],typeBox:"TRADITIONAL"}),e(r,{text:'<CourseList courses={courses} typeBox="IMAGE_LARGE" />'}),e(a,{courses:[s[18]],typeBox:"IMAGE_LARGE"}),e(r,{text:'<CourseList courses={courses} typeBox="IMAGE_SMALL" />'}),e(a,{courses:[s[18]],typeBox:"IMAGE_SMALL"}),e(c,{children:"Caja curso con fecha futura"}),e(o,{children:"Si el curso tiene una fecha futura, se muestra el contenido de la imagen opacada y un aviso ajustado a la traduccion de proximamante."}),e(r,{text:`//Formato adicional
soonCourse: {
show: true,
text: 'Pr\xF3ximamente',
}`}),e(o,{children:"El componente funciona tanto para back como para front, se agrego con la intencion de que a futuro pueda controlarse directamente desde back si se requiere"}),e(a,{courses:[s[21]],typeBox:"TRADITIONAL"}),e(c,{children:"Datos a mostrar"}),e(o,{children:"Lo datos que muestra cada curso depende netamente de la informaci\xF3n que venga, dejo unos ejemplos con los que se armo este componente."}),e(o,{children:e(n,{href:"https://github.com/eclass/ui-kit/blob/main/src/organisms/CourseList/utils/dataFake.ts",children:"Datos de prueba:"})}),e(a,{courses:s,typeBox:"TRADITIONAL"})]})};export{m as ViewCourseList,m as default};
//# sourceMappingURL=CourseList.5d3c6e4f.js.map
