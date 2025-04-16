import{j as r,F as n,a as e,M as u,b as s,ad as c,C as a,c as i}from"./index.c1464e53.js";import{C as o,d as t}from"./ModalAlert.e21aa667.js";import"./DiagonalArrow.de788ad3.js";import"./TinyAlert.968ae76e.js";import"./BtnLink.2a46bdcd.js";import"./Label.72ade1d6.js";import"./Progress.ca4ffc54.js";import"./Ripples.f659495a.js";import"./index.dcbaa7da.js";const y=()=>r(n,{children:[e(u,{children:"CourseList"}),r(s,{children:["Componente parecido a una tarjeta visualmente pero es exclusivo para mostrar la informaci\xF3n de un listado de cursos. Recibe un array de cursos el cual debe llevar la siguiente estructura"," ",e(c,{href:"https://gitlab.com/eclass/types-eclass-api/-/blob/master/src/Platform/Query/CourseList/AcademicBox.ts",children:"types-eclass-api"})]}),e(a,{text:`import { CourseList } from '@eclass/ui-kit'
      
<CourseList courses={courses} />`}),e(o,{courses:[t[18]]}),e(i,{children:"Tipos de Caja curso"}),r(s,{children:["Actualmente existen tres formatos en que se muestran las cajas. El tipo que se define es a nuvel de listado de cursos, por lo que no se puede poner distintos tipos dentro de el listado, por defecto el tipo es ",e("code",{children:"TRADITIONAL"})]}),e(a,{text:'<CourseList courses={courses} typeBox="TRADITIONAL" />'}),e(o,{courses:[t[18]],typeBox:"TRADITIONAL"}),e(a,{text:'<CourseList courses={courses} typeBox="IMAGE_LARGE" />'}),e(o,{courses:[t[18]],typeBox:"IMAGE_LARGE"}),e(a,{text:'<CourseList courses={courses} typeBox="IMAGE_SMALL" />'}),e(o,{courses:[t[18]],typeBox:"IMAGE_SMALL"}),e(i,{children:"Caja curso con fecha futura"}),e(s,{children:"Si el curso tiene una fecha futura, se muestra el contenido de la imagen opacada y un aviso ajustado a la traduccion de proximamante."}),e(a,{text:`//Formato adicional
soonCourse: {
show: true,
text: 'Pr\xF3ximamente',
}`}),e(s,{children:"El componente funciona tanto para back como para front, se agrego con la intencion de que a futuro pueda controlarse directamente desde back si se requiere"}),e(o,{courses:[t[21]],typeBox:"TRADITIONAL"}),e(i,{children:"Datos a mostrar"}),e(s,{children:"Lo datos que muestra cada curso depende netamente de la informaci\xF3n que venga, dejo unos ejemplos con los que se armo este componente."}),e(s,{children:e(c,{href:"https://github.com/eclass/ui-kit/blob/main/src/organisms/CourseList/utils/dataFake.ts",children:"Datos de prueba:"})}),e(o,{courses:t,typeBox:"TRADITIONAL"})]});export{y as ViewCourseList,y as default};
//# sourceMappingURL=CourseList.76445401.js.map
