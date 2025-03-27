
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
          { path: "/home",name:'Home', component: () => import("pages/Home") },
          {
            path: "/toolset",
            component: { render: (h) => h("router-view") },
            children: [
              { path: "",name:'Toolset', component: () => import("pages/ToolSet") },
              {
                path: "colorConverter",
                name: 'ColorConverter',
                component: () => import("pages/Tool/ColorConverter"),
              },
              {
                path: "imageTranscoding",
                name: 'ImageTranscoding',
                component: () => import("pages/Tool/ImageTranscoding"),
              },
              {
                path: "ImageCompression",
                name: 'ImageCompression',
                component: () => import("pages/Tool/ImageCompression"),
              },
              {
                path: "codeEditor",
                name: 'CodeEditor',
                component: () => import("pages/Tool/CodeEditor"),
              },
              {
                path: "jsonConverter",
                name: 'JsonConverter',
                component: () => import("pages/Tool/JsonConverter"),
              },
              {
                path: "richTextEditor",
                name: 'RichTextEditor',
                component: () => import("pages/Tool/RichTextEditor"),
              },
              {
                path: "markdownEditor",
                name: 'MarkdownEditor',
                component: () => import("pages/Tool/MarkdownEditor"),
              },
              {
                path: "imageRecognition",
                name: 'imageRecognition',
                component: () => import("pages/Tool/ImageRecognition"),
              },
              {
                path: "QRCodeGeneration",
                name: 'QRCodeGeneration',
                component: () => import("pages/Tool/QRCodeGeneration"),
              },
              {
                path: "TextDiff",
                name: 'TextDiff',
                component: () => import("pages/Tool/TextDiff"),
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
