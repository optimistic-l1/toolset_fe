const routes = [
  {
    path: "/",
    component: { render: (h) => h("router-view") },
    children: [
      {
        path: "",
        redirect: "/home/",
        component: () => import("layouts/MainLayout.vue"),
        children: [
          { path: "/home", component: () => import("pages/Home") },
          {
            path: "/toolset",
            component: { render: (h) => h("router-view") },
            children: [
              { path: "", component: () => import("pages/ToolSet") },
              {
                path: "colorConverter",
                component: () => import("pages/Tool/ColorConverter"),
              },
              {
                path: "imageTranscoding",
                component: () => import("pages/Tool/ImageTranscoding"),
              },
            ],
          },
          { path: "/help", component: () => import("pages/Help") },
        ],
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
