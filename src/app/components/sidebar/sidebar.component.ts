
import { Component, OnInit } from "@angular/core";


export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  path: string;
  title: string;
}

declare interface RouteInfo {
  type: string;
  path: string;
  title: string;
  rtlTitle: string;
  icon: string;
  class: string;
  children?: ChildrenItems[];
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    rtlTitle: "لوحة القيادة",
    icon: "icon-chart-pie-36",
    type: 'link',
    class: ""
  },
  {
    path: "/angular",
    title: "Catalogo",
    rtlTitle: "لوحة القيادة",
    icon: "icon-satisfied",
    type: 'link',
    class: ""
  },
  {
    path: "/error1",
    title: "Error",
    rtlTitle: "لوحة القيادة",
    icon: "icon-settings",
    type: 'sub',
    class: "",
    children: [
      {
        path: "/error",
        title: "Errores"
      },
    ]
  },
  {
    path: "/icons",
    title: "Icons",
    rtlTitle: "الرموز",
    icon: "icon-atom",
    type: 'link',
    class: ""
  },
  {
    path: "/maps",
    title: "Maps",
    rtlTitle: "خرائط",
    icon: "icon-pin",
    type: 'link',
    class: "" },
  {
    path: "/notifications",
    title: "Notifications",
    rtlTitle: "إخطارات",
    icon: "icon-bell-55",
    type: 'link',
    class: ""
  },

  {
    path: "/user",
    title: "Usuarios",
    rtlTitle: "ملف تعريفي للمستخدم",
    icon: "icon-single-02",
    type: 'link',
    class: ""
  },
  {
    path: "/tables",
    title: "Table List",
    rtlTitle: "قائمة الجدول",
    icon: "icon-puzzle-10",
    type: 'link',
    class: ""
  },
  {
    path: "/typography",
    title: "Typography",
    rtlTitle: "طباعة",
    icon: "icon-align-center",
    type: 'link',
    class: ""
  },
  {
    path: "/rtl",
    title: "RTL Support",
    rtlTitle: "ار تي ال",
    icon: "icon-world",
    type: 'link',
    class: ""
  }
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})

 
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() {}

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  
  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
