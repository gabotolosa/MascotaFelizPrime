<h1 align="center">  Especificación de Requerimientos </hi>

## Nombre Descriptivo del Sistema
### [MASCOTAFELIZ](http://www.mimascotafeliz.)

## Equipo de Trabajo
![](https://talentodigital.mintic.gov.co/734/channels-633_logo_talento_digital.svg)


[JOEL STEVEN VALENCIA RUIZ](https://github.com/joestevenn)

[GINA KATHERINE TORREZ VEGA](https://github.com/KatheVega)

[SEBASTIAN ENGATIVA DUARTE](https://github.com/)

[JESUS GABRIEL TOLOSA ZABALA](https://github.com/gabotolosa)

[MILENA DUARTE GOMEZ](https://github.com/Miluu7920)

![](https://img.shields.io/github/tag/pandao/editor.md.svg) 
![](https://img.shields.io/github/release/pandao/editor.md.svg) 
![](https://img.shields.io/github/issues/pandao/editor.md.svg) 
![](https://img.shields.io/bower/v/editor.md.svg)

“Mascota Feliz” ofrece una membresía preferencial para perros y gatos, la cual brinda para sus afiliados productos y servicios. Su propósito es poder tener cobertura en las principales ciudades del país. Se ha identificado, tras un estudio de mercado que los propietarios de mascotas quisieran poder consultar a través de internet, los productos y servicios que ofrece la empresa. 
 El gerente de Mascota Feliz ha contactado a la Universidad para desarrollar el sistema que permita realizar toda esta gestión. Por tal motivo, la Universidad mediante el apoyo de los estudiantes del módulo de Programación Web de Misión TIC 2022 busca satisfacer esta necesidad de Mascota Feliz. 
Para ello, se han realizado reuniones para formalizar los requisitos, obteniendo la siguiente información: 
•	Sitio web y Módulo de Seguridad: 
El sistema deberá contar con un módulo de seguridad que permita la debida gestión de usuarios, roles y permisos de las personas involucradas. 
•	Se debe diseñar un portal web, en el home i) se describe la empresa y se muestran los productos y servicios para que sean visualizados de forma libre por todo el público, ii) la misión, iii) la visión y iv) un formulario de contacto a través del cual se podrá ingresar un mensaje con los datos de la persona para posteriormente ser contactada. Este mensaje será enviado al correo deﬁnido por el administrador en su perﬁl. 
•	Por seguridad, en el sistema de información se debe realizar un formulario de identiﬁcación de usuarios, donde a través de las credenciales de acceso (usuario y contraseña, el usuario será el email de la persona) podrán ingresar al sistema. La contraseña deberá ser almacenada de forma cifrada. Solo los usuarios identiﬁcados podrán acceder a las funcionalidades del sistema. Por lo tanto, se debe manejar el control de sesión de usuario y evitar las inyecciones por URL. 
•	En ocasiones se olvida la contraseña por parte de los usuarios, por lo cual debe existir la opción de recuperar la contraseña de un usuario especíﬁco, a quien se le solicitará el correo electrónico (veriﬁcando que si exista antes de generar una nueva contraseña). Cuando se valide correctamente el correo ingresado, la contraseña se generará automáticamente en el sistema y será enviada al correo electrónico del usuario.
•	Debido a que existen diferentes grupos de personas que interactuarán con el sistema, es necesario realizar la administración de roles y/o permisos que cada usuario tendrá. 
•	También, desde el rol de administrador, se podrán agregar nuevos usuarios y  modiﬁcar los ya existentes. A los usuarios se les deberá ingresar la información personal (incluido el correo electrónico), y posteriormente se deberá enviar un correo de notiﬁcación al nuevo usuario con las credenciales de ingreso al sistema. 


<h1 align="center"> Dominio del sistema </h1>
 
•	Módulo del Cliente: 
Los clientes son personas que compran productos de la empresa o que tienen mascotas afiliadas a alguno de los planes que ofrece Mascota Feliz. Los clientes podrán interactuar con el sistema para ver el estado solicitudes de afiliación, de sus pedidos o para ver el estado de los planes de sus mascotas afiliadas, así como información relacionada con sus mascotas, tal como historia de visitas domiciliarias, historia clínica, estado de la cuenta, extractos, entre otros. La parte azul es opcional. 
•	Un cliente podrá registrarse en el sistema mediante una opción de “registrarse como cliente” que debe estar en el formulario de identiﬁcación del sistema. Este formulario de registro deberá solicitar la información. Después del registro exitoso, el sistema deberá enviar un mensaje de conﬁrmación al correo registrado en el formulario.
•	Cuando el cliente ingrese al sistema podrá acceder a diferentes opciones: 
•	Solicitar Afiliación de Mascota: en esta opción el cliente podrá acceder al formulario de afiliación de mascotas, en el cual deberá llenar los datos de la mascota y agregar una foto de la mascota. Un cliente podrá afiliar una o varias mascotas, sin embargo, cada solicitud de afiliación de mascota tendrá un ID único que será asignado de manera automática por el sistema. Cuando un cliente envía la solicitud, se debe enviar un correo al área encargada para que realice el seguimiento correspondiente.  
•	Revisar Solicitudes: se debe mostrar un listado de las solicitudes de afiliación, el cual muestra la información del cliente, la fecha de solicitud y el estado de la afiliación, (pendiente, aceptado o rechazado), una foto en miniatura de la mascota que se pretende afiliar. Cuando el estado de la solicitud es aceptado o rechazado, se debe mostrar una opción para ver los detalles de la solicitud. 
•	La opción de eliminación de una solicitud en el listado deberá abrir una opción de conﬁrmación antes de realizar la eliminación del registro de la base de datos.
•	Los resultados de afiliación: el estudio de una solicitud de afiliación (cuando es aceptada o rechazada) genera una opción donde el usuario puede visualizar los comentarios que hace el área encargada acerca de su solicitud.  




•	Módulo del Administrador:  
•	El rol “Administrador”, permitirá gestionar la información de los diferentes asesores. Cuando se ingrese un nuevo asesor a su correo electrónico deberá llegar un mensaje de notiﬁcación sobre su inscripción en el sistema. Además, en ese mismo mensaje se le deberá enviar sus credenciales de acceso. 
•	 Un administrador podrá crear los tipos de planes y/o productos que se ofertan en la empresa, los cuales debe tener un nombre, una descripción, un proveedor y un precio. También podrá crear los departamentos y las ciudades donde la empresa oferta los productos y/o servicios. 
•	Un administrador podrá acceder al listado de solicitudes de todos los clientes ﬁltrando la información por ciudad, asesor y estado. 
•	El administrador debe indicar la dirección de correo electrónico predeterminada para que sean enviados los mensajes del formulario de contacto del menú público descrito inicialmente. 

•	Módulo del Asesor: 
el asesor deberá tener funcionalidades para contactar al cliente, aceptar y rechazar solicitudes.
•	El asesor podrá visualizar el listado de solicitudes a evaluar, donde podrá ver el ID, la ciudad, la dirección, y un botón de estudiar para asignar el estado de “Aceptado o rechazado”. El estudio se hará manualmente con la consulta a otros sistemas externos. Cuando el asesor tenga una decisión, podrá visitar el listado, y los que estén en estado “Pendiente” les debe aparecer un botón de asignar decisión, donde se podrá acepta o rechazar. En el caso de rechazo, se     deben     ingresar los comentarios correspondientes. La decisión acerca de la solicitud deberá ser notiﬁcada inmediatamente por el sistema al correo electrónico del cliente con la decisión y además a través de un mensaje de texto al número celular registrado por el usuario. 
•	El asesor podrá también visualizar informes sobre la cantidad de afiliaciones vendidas por él, en un rango de fechas dado por él mismo.



Requisitos técnicos: 
•	Vistas de alto rendimiento considerando el funcionamiento asíncrono mediante promesas. • Usar un framework de CSS para el desarrollo de la GUI. La cual debe considerar principios de usabilidad, tener apariencia agradable y ser responsiva. 
•	Los formularios de ingreso de información deberán ser validados y mostrar mensajes cuando los campos de texto no cumplan con los requisitos solicitados. 
•	Implementar el sistema mediante tecnologías de desarrollo web (Backend y Frontend) y plugins relacionados. 
•	Se pueden implementar otros aspectos que supongan profundizar en alguna de las tecnologías vistas durante el módulo. 
•	Comentar el código de manera formal. 
•	Se debe entregar un documento con el manual de usuario del sistema y un documento con el análisis y la deﬁnición de la base de datos. 
•	El control de versiones debe ser administrado con Git, y el control de actividades debe ser llevado a cabo con una herramienta en línea que lo permita como Trello. En ambos casos deben notiﬁcar y agregar al profesor.
