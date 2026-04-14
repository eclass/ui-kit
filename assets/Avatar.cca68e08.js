import{j as r,F as t,a as e,M as c,b as l,C as i,c as o,A as a,B as s}from"./index.337ce9ba.js";import{L as n}from"./ListComponent.2335d843.js";const m=()=>r(t,{children:[e(c,{children:"Avatar"}),r(l,{children:["Muestra la foto de perfil de un usuario dentro de un c\xEDrculo. Si la imagen no est\xE1 disponible o no se proporciona, muestra las primeras dos iniciales del nombre completo sobre un fondo de color determinista seg\xFAn el ",e("code",{children:"userId"}),"."]}),e(i,{text:"import { Avatar } from '@eclass/ui-kit'"}),e(o,{children:"Uso b\xE1sico"}),r(l,{children:["Proporciona ",e("code",{children:"fullName"})," y ",e("code",{children:"userId"}),". Cuando no hay imagen, se renderizan las iniciales con un color de fondo \xFAnico para ese usuario."]}),r(n,{children:[e(a,{fullName:"Josefin Ferrada",userId:564654,size:40}),e(a,{fullName:"Carlos L\xF3pez",userId:12,size:40}),e(a,{fullName:"Ana Mar\xEDa Torres",userId:7,size:40})]}),e(i,{text:`<Avatar fullName="Josefin Ferrada" userId={564654} size={40} />
<Avatar fullName="Carlos L\xF3pez" userId={12} size={40} />
<Avatar fullName="Ana Mar\xEDa Torres" userId={7} size={40} />`}),e(o,{children:"Con foto de perfil"}),r(l,{children:["Cuando se proporciona ",e("code",{children:"picture"}),", el componente intenta cargar la imagen. Si la URL es inv\xE1lida, cae autom\xE1ticamente en las iniciales."]}),r(n,{children:[e(a,{fullName:"Josefin Ferrada",userId:564654,picture:"https://i.pravatar.cc/150?img=12",size:40}),e(a,{fullName:"Josefin Ferrada",userId:3,picture:"https://url-que-no-existe.xyz/foto.jpg",size:40})]}),e(i,{text:`<Avatar
  fullName="Josefin Ferrada"
  userId={564654}
  picture="https://i.pravatar.cc/150?img=12"
  size={40}
/>
{/* Si la URL falla, muestra las iniciales */}
<Avatar
  fullName="Josefin Ferrada"
  userId={3}
  picture="https://url-que-no-existe.xyz/foto.jpg"
  size={40}
/>`}),e(o,{children:"Tama\xF1os"}),r(l,{children:["El prop ",e("code",{children:"size"})," controla el di\xE1metro en p\xEDxeles. El valor por defecto es"," ",e("code",{children:"50"}),". ",e("code",{children:"fontSize"})," ajusta el tama\xF1o de las iniciales (por defecto"," ",e("code",{children:"14"}),")."]}),r(n,{gap:"1.5rem",children:[r(s,{display:"flex",flexDir:"column",alignItems:"center",gap:"0.25rem",children:[e(a,{fullName:"Josefin Ferrada",userId:564654,size:24,fontSize:10}),e("code",{style:{fontSize:"11px"},children:"24px"})]}),r(s,{display:"flex",flexDir:"column",alignItems:"center",gap:"0.25rem",children:[e(a,{fullName:"Josefin Ferrada",userId:564654,size:32,fontSize:12}),e("code",{style:{fontSize:"11px"},children:"32px"})]}),r(s,{display:"flex",flexDir:"column",alignItems:"center",gap:"0.25rem",children:[e(a,{fullName:"Josefin Ferrada",userId:564654,size:40,fontSize:14}),e("code",{style:{fontSize:"11px"},children:"40px"})]}),r(s,{display:"flex",flexDir:"column",alignItems:"center",gap:"0.25rem",children:[e(a,{fullName:"Josefin Ferrada",userId:564654}),e("code",{style:{fontSize:"11px"},children:"50px (default)"})]}),r(s,{display:"flex",flexDir:"column",alignItems:"center",gap:"0.25rem",children:[e(a,{fullName:"Josefin Ferrada",userId:564654,size:64,fontSize:22}),e("code",{style:{fontSize:"11px"},children:"64px"})]})]}),e(i,{text:`<Avatar fullName="Josefin Ferrada" userId={564654} size={24} fontSize={10} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={32} fontSize={12} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={40} fontSize={14} />
<Avatar fullName="Josefin Ferrada" userId={564654} /> {/* default */}
<Avatar fullName="Josefin Ferrada" userId={564654} size={64} fontSize={22} />`}),e(o,{children:"Color por userId"}),r(l,{children:["El color de fondo se calcula a partir del \xFAltimo d\xEDgito del ",e("code",{children:"userId"}),", por lo que siempre es consistente para el mismo usuario en todas las vistas."]}),e(n,{gap:"1rem",children:[0,1,2,3,4,5,6,7,8,9].map(d=>r(s,{display:"flex",flexDir:"column",alignItems:"center",gap:"0.25rem",children:[e(a,{fullName:`User ${d}`,userId:d,size:40}),r("code",{style:{fontSize:"11px"},children:["id: ",d]})]},d))}),e(i,{text:`{/* Cada userId termina en un d\xEDgito \u2192 10 colores posibles */}
<Avatar fullName="User 0" userId={0} size={40} />
<Avatar fullName="User 1" userId={1} size={40} />
{/* ... hasta userId terminado en 9 */}`}),e(o,{children:"Borde decorativo"}),r(l,{children:["El prop ",e("code",{children:"borderDecoration"})," a\xF1ade un borde en el color primario del sistema de dise\xF1o (",e("code",{children:"#0189FF"}),"). \xDAtil para destacar al usuario activo en un listado."]}),r(n,{children:[e(a,{fullName:"Josefin Ferrada",userId:564654,size:40}),e(a,{fullName:"Josefin Ferrada",userId:564654,size:40,borderDecoration:!0})]}),e(i,{text:`<Avatar fullName="Josefin Ferrada" userId={564654} size={40} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={40} borderDecoration />`}),e(o,{children:"Props"}),e(i,{language:"typescript",text:`interface AvatarProps {
  fullName: string         // Nombre completo (para iniciales y accesibilidad)
  userId: number           // Determina el color de fondo de forma determinista
  picture?: string         // URL de la foto de perfil (opcional)
  size?: number            // Di\xE1metro en px (default: 50)
  fontSize?: number        // Tama\xF1o fuente de iniciales en px (default: 14)
  alt?: string             // Texto alternativo accesible (default: 'Avatar')
  id?: string              // ID del elemento
  borderDecoration?: boolean // Borde en color primario (default: false)
}`})]});export{m as ViewAvatar,m as default};
//# sourceMappingURL=Avatar.cca68e08.js.map
