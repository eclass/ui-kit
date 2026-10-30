import{c as e,i as t,r as n,t as r,u as i}from"./Typography-Db7ZPykY.js";import{t as a}from"./Avatar-SXePBjJu.js";import{t as o}from"./ListComponent-BSNp0HG4.js";import{t as s}from"./Code-Bgr_Rzly.js";var c=e(),l=()=>(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(r,{children:`Avatar`}),(0,c.jsxs)(n,{children:[`Muestra la foto de perfil de un usuario dentro de un círculo. Si la imagen no está disponible o no se proporciona, muestra las primeras dos iniciales del nombre completo sobre un fondo de color determinista según el `,(0,c.jsx)(`code`,{children:`userId`}),`.`]}),(0,c.jsx)(s,{text:`import { Avatar } from '@eclass/ui-kit'`}),(0,c.jsx)(t,{children:`Uso básico`}),(0,c.jsxs)(n,{children:[`Proporciona `,(0,c.jsx)(`code`,{children:`fullName`}),` y `,(0,c.jsx)(`code`,{children:`userId`}),`. Cuando no hay imagen, se renderizan las iniciales con un color de fondo único para ese usuario.`]}),(0,c.jsxs)(o,{children:[(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654,size:40}),(0,c.jsx)(a,{fullName:`Carlos López`,userId:12,size:40}),(0,c.jsx)(a,{fullName:`Ana María Torres`,userId:7,size:40})]}),(0,c.jsx)(s,{text:`<Avatar fullName="Josefin Ferrada" userId={564654} size={40} />
<Avatar fullName="Carlos López" userId={12} size={40} />
<Avatar fullName="Ana María Torres" userId={7} size={40} />`}),(0,c.jsx)(t,{children:`Con foto de perfil`}),(0,c.jsxs)(n,{children:[`Cuando se proporciona `,(0,c.jsx)(`code`,{children:`picture`}),`, el componente intenta cargar la imagen. Si la URL es inválida, cae automáticamente en las iniciales.`]}),(0,c.jsxs)(o,{children:[(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654,picture:`https://i.pravatar.cc/150?img=12`,size:40}),(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:3,picture:`https://url-que-no-existe.xyz/foto.jpg`,size:40})]}),(0,c.jsx)(s,{text:`<Avatar
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
/>`}),(0,c.jsx)(t,{children:`Tamaños`}),(0,c.jsxs)(n,{children:[`El prop `,(0,c.jsx)(`code`,{children:`size`}),` controla el diámetro en píxeles. El valor por defecto es`,` `,(0,c.jsx)(`code`,{children:`50`}),`. `,(0,c.jsx)(`code`,{children:`fontSize`}),` ajusta el tamaño de las iniciales (por defecto`,` `,(0,c.jsx)(`code`,{children:`14`}),`).`]}),(0,c.jsxs)(o,{gap:`1.5rem`,children:[(0,c.jsxs)(i,{display:`flex`,flexDir:`column`,alignItems:`center`,gap:`0.25rem`,children:[(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654,size:24,fontSize:10}),(0,c.jsx)(`code`,{style:{fontSize:`11px`},children:`24px`})]}),(0,c.jsxs)(i,{display:`flex`,flexDir:`column`,alignItems:`center`,gap:`0.25rem`,children:[(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654,size:32,fontSize:12}),(0,c.jsx)(`code`,{style:{fontSize:`11px`},children:`32px`})]}),(0,c.jsxs)(i,{display:`flex`,flexDir:`column`,alignItems:`center`,gap:`0.25rem`,children:[(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654,size:40,fontSize:14}),(0,c.jsx)(`code`,{style:{fontSize:`11px`},children:`40px`})]}),(0,c.jsxs)(i,{display:`flex`,flexDir:`column`,alignItems:`center`,gap:`0.25rem`,children:[(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654}),(0,c.jsx)(`code`,{style:{fontSize:`11px`},children:`50px (default)`})]}),(0,c.jsxs)(i,{display:`flex`,flexDir:`column`,alignItems:`center`,gap:`0.25rem`,children:[(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654,size:64,fontSize:22}),(0,c.jsx)(`code`,{style:{fontSize:`11px`},children:`64px`})]})]}),(0,c.jsx)(s,{text:`<Avatar fullName="Josefin Ferrada" userId={564654} size={24} fontSize={10} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={32} fontSize={12} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={40} fontSize={14} />
<Avatar fullName="Josefin Ferrada" userId={564654} /> {/* default */}
<Avatar fullName="Josefin Ferrada" userId={564654} size={64} fontSize={22} />`}),(0,c.jsx)(t,{children:`Color por userId`}),(0,c.jsxs)(n,{children:[`El color de fondo se calcula a partir del último dígito del `,(0,c.jsx)(`code`,{children:`userId`}),`, por lo que siempre es consistente para el mismo usuario en todas las vistas.`]}),(0,c.jsx)(o,{gap:`1rem`,children:[0,1,2,3,4,5,6,7,8,9].map(e=>(0,c.jsxs)(i,{display:`flex`,flexDir:`column`,alignItems:`center`,gap:`0.25rem`,children:[(0,c.jsx)(a,{fullName:`User ${e}`,userId:e,size:40}),(0,c.jsxs)(`code`,{style:{fontSize:`11px`},children:[`id: `,e]})]},e))}),(0,c.jsx)(s,{text:`{/* Cada userId termina en un dígito → 10 colores posibles */}
<Avatar fullName="User 0" userId={0} size={40} />
<Avatar fullName="User 1" userId={1} size={40} />
{/* ... hasta userId terminado en 9 */}`}),(0,c.jsx)(t,{children:`Borde decorativo`}),(0,c.jsxs)(n,{children:[`El prop `,(0,c.jsx)(`code`,{children:`borderDecoration`}),` añade un borde en el color primario del sistema de diseño (`,(0,c.jsx)(`code`,{children:`#0189FF`}),`). Útil para destacar al usuario activo en un listado.`]}),(0,c.jsxs)(o,{children:[(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654,size:40}),(0,c.jsx)(a,{fullName:`Josefin Ferrada`,userId:564654,size:40,borderDecoration:!0})]}),(0,c.jsx)(s,{text:`<Avatar fullName="Josefin Ferrada" userId={564654} size={40} />
<Avatar fullName="Josefin Ferrada" userId={564654} size={40} borderDecoration />`}),(0,c.jsx)(t,{children:`Props`}),(0,c.jsx)(s,{language:`typescript`,text:`interface AvatarProps {
  fullName: string         // Nombre completo (para iniciales y accesibilidad)
  userId: number           // Determina el color de fondo de forma determinista
  picture?: string         // URL de la foto de perfil (opcional)
  size?: number            // Diámetro en px (default: 50)
  fontSize?: number        // Tamaño fuente de iniciales en px (default: 14)
  alt?: string             // Texto alternativo accesible (default: 'Avatar')
  id?: string              // ID del elemento
  borderDecoration?: boolean // Borde en color primario (default: false)
}`})]});export{l as ViewAvatar,l as default};
//# sourceMappingURL=Avatar-DtfAnVAk.js.map