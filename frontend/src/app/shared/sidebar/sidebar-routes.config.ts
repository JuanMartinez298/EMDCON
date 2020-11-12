import { RouteInfo } from './sidebar.metadata';

//Sidebar menu Routes and data
export const ROUTES: RouteInfo[] = [
    {
        path: '/gestionarareacomun', title: 'Gestionar Area Comun', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/visualizarcalendario', title: 'Visualizar Calendario', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/solicitarareacomun', title: 'Solicitar Area Comun', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/visualizardocumentos', title: 'Visualizar Documentos', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/gestionardocumentos', title: 'Gestionar Documentos', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/publicardocumentos', title: 'Publicar Documentos', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/registrarpagosdeservicios', title: 'Registrar Pagos de Servicios', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/gestionarpagosdeservicios', title: 'Gestionar Pagos de serivicios', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/administrarvisita', title: 'Administrar Visita', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/consultarvisita', title: 'Consultar Visita', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
        submenu: []
    },
    {
        path: '/administrarperfiles', rol:'ADSYS',  title: 'Administrar Perfiles', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/solicitarareacomun', rol:'RESIDENTE', title: 'Solicitar Area Comun', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/visualizardocumentos', rol:'RESIDENTE', title: 'Visualizar Documentos', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/registrarpagosdeservicios', rol:'RESIDENTE', title: 'Registrar Pagos de Servicios', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/administrarvisita', rol:'RESIDENTE', title: 'Administrar Visita', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/gestionarareacomun', rol:'ADMIN', title: 'Gestionar Area Comun', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/visualizarcalendario', rol:'ADMIN', title: 'Visualizar Calendario', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/gestionardocumentos', rol:'ADMIN', title: 'Gestionar Documentos', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/publicardocumentos', rol:'ADMIN', title: 'Publicar Documentos', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/gestionarreporteeconomico', rol:'ADMIN', title: 'Gestionar Reporte Economico', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/gestionarpagosdeservicios', rol:'ADMIN', title: 'Gestionar Pagos de serivicios', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
        path: '/consultarresidentemoroso', rol:'ADMIN', title: 'Consultar Residente Moroso', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    // {
    //     path: '/consultar-paquete', rol:'PORTERIA', title: 'Consultar Visita', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
    //     submenu: []
    // },
    {
        path: '/consultarvisita', rol:'PORTERIA', title: 'Consultar Visita', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false, 
        submenu: []
    },
    {
      path: '/presupuesto', rol:'ADMIN', title: 'Gestionar Presupuesto', icon: 'zmdi zmdi-home text-primary', class: '', badge: '', badgeClass: 'badge badge-success badge-pill float-right mr-1 mt-1', isExternalLink: false,
      submenu: []
    },
];
