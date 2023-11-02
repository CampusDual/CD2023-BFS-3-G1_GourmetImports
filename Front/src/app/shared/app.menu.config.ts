import { MenuRootItem } from 'ontimize-web-ngx';
import { SectionfoodHomeComponent } from '../main/sectionfood/home/sectionfood-home.component';

// import { AccountsCardComponent } from './accounts-card/accounts-card.component';
// import { BranchesCardComponent } from './branches-card/branches-card.component';
// import { CustomersCardComponent } from './customers-card/customers-card.component';
// import { EmployeesCardComponent } from './employees-card/employees-card.component';

export const MENU_CONFIG: MenuRootItem[] = [
  { id: "home", name: "HOME", icon: "home", route: "/main/home" },
  {
    id: "sections",
    name: "SECTIONS",
    icon: "drag_indicator",
    opened: false,
    items: [
      {
        id: "food",
        name: "SECTION_FOOD",
        tooltip: "SECTION_FOOD_TOOLTIP",
        route: "/main/sectionfood",
        icon: "lunch_dining",
        image: "assets/images/ic_clientes.png",
        component: SectionfoodHomeComponent,
      },
      // {
      //   id: "jointpurchase",
      //   name: "SECTION_JOINT_PURCHASE",
      //   tooltip: "SECTION_JOINT_PURCHASE_TOOLTIP",
      //   route: "/main/jointpurchasesection",
      //   icon: "people",
      //   image: "assets/images/ic_clientes.png",
      //   component: ProductsHomeComponent,
      // },
      // {
      //   id: "general",
      //   name: "SECTION_GENERAL_STORE",
      //   tooltip: "SECTION_GENERAL_STORE_TOOLTIP",
      //   route: "/main/generalstoresection",
      //   icon: "local_grocery_store",
      //   image: "assets/images/ic_clientes.png",
      //   component: ProductsHomeComponent,
      // },
    ],
  }, 
  {
    id: "shoppingcart", name: "SHOPPINGCART", icon: "cart", route: "/main/shoppingcart"
  },
  {
    id: "wholesaler",
    name: "WHOLESALER",
    icon: "sell",
    opened: false,
    items: [
      {
        id: "wholesaler-products",
        name: "WHOLESALER_PRODUCTS",
        tooltip: "WHOLESALER_PRODUCTS_TOOLTIP",
        route: "/main/wholesaler-products",
        icon: "inventory",
      },
      {
        id: "wholesaler-stats",
        name: "WHOLESALER_STATS",
        tooltip: "WHOLESALER_STATS_TOOLTIP",
        route: "/main/wholesaler-stats",
        icon: "bar_chart",
      },           
    ],
  }, 
  // {
  //   id: "admin",
  //   name: "ADMINISTRATION",
  //   icon: "settings",
  //   opened: true,
  //   items: [
  //     {
  //       id: "admin-categories",
  //       name: "CATEGORIES",
  //       tooltip: "CATEGORIES_TOOLTIP",
  //       route: "/main/admon-categories",
  //       icon: "category",
  //     },
  //     {
  //       id: "admin-products",
  //       name: "PRODUCTS",
  //       tooltip: "PRODUCTS_TOOLTIP",
  //       route: "/main/admon-products",
  //       icon: "inventory_2",
  //     },      
  //   ],
  // },  
  {
    id: "logout",
    name: "LOGOUT",
    route: "/login",
    icon: "power_settings_new",
    confirm: "yes",
  },  
];


// export const MENU_COMPONENTS = [
//   AccountsCardComponent,
//   CustomersCardComponent,
//   BranchesCardComponent,
//   EmployeesCardComponent
// ];
