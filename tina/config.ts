import { defineConfig } from "tinacms";
import { richTextComponents } from "./richtext-schema";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      {
        name: "page",
        label: "Pages",
        path: "content/page",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
            templates: richTextComponents,
          },
        ],
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => {
            if (document._sys.filename === "home") {
              return "/";
            }
            return undefined;
          },
          // Fonction pour créer une version simplifiée (slug) d'un titre pour les URL ou les identifiants
          filename: {
            slugify: (values) => {
              return `${(values.title || "") // Prend le titre de l'objet 'values' ou utilise une chaîne vide si 'title' n'est pas défini
                .toLowerCase() // Convertit le titre en minuscules pour assurer la cohérence
                .replace(/\s+/g, "-") // Remplace un ou plusieurs espaces consécutifs par un tiret
                // Supprime les caractères non désirés : 
                // - [^\w\.\/-\s]+ : Tout caractère qui n'est pas un mot (\w), un point (\.), une barre oblique (/), un tiret (-), ou un espace (\s)
                .replace(/[^\w\.\/-\s]+/gi, "")}`; // 'g' applique la suppression globalement, 'i' rend l'expression insensible à la casse
            },
          },
        },
      },
      {
        name: "post",
        label: "Posts",
        path: "content/post",
        format: "mdx",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "date",
            type: "datetime",
            label: "Date",
            required: true,
          },
          {
            name: "tags",
            type: "string",
            label: "Tags",
            list: true,
          },
          {
            name: "body",
            type: "rich-text",
            label: "Body",
            isBody: true,
            templates: richTextComponents,
          },
        ],
        defaultItem: () => {
          return {
            title: "New Post",
            date: new Date(),
            body: "## New Post",
          }
        },
        ui: {
          // This is an DEMO router. You can remove this to fit your site
          router: ({ document }) => {
            return `posts/${document._sys.filename}`;
          },
          // Fonction pour créer une version simplifiée (slug) d'un titre pour les URL ou les identifiants
          filename: {
            slugify: (values) => {
              return `${(values.title || "") // Prend le titre de l'objet 'values' ou utilise une chaîne vide si 'title' n'est pas défini
                .toLowerCase() // Convertit le titre en minuscules pour assurer la cohérence
                .replace(/\s+/g, "-") // Remplace un ou plusieurs espaces consécutifs par un tiret
                // Supprime les caractères non désirés : 
                // - [^\w\.\/-\s]+ : Tout caractère qui n'est pas un mot (\w), un point (\.), une barre oblique (/), un tiret (-), ou un espace (\s)
                .replace(/[^\w\.\/-\s]+/gi, "")}`; // 'g' applique la suppression globalement, 'i' rend l'expression insensible à la casse
            },
          },
        },
      },
      {
        name: "project",
        label: "Projects",
        path: "content/project",
        fields: [
          {
            name: "title",
            type: "string",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            name: "description",
            type: "string",
            label: "Description",
            required: true,
          },
          {
            name: "link",
            type: "string",
            label: "Link",
            required: true,
          },
        ],
        ui: {
          // Fonction pour créer une version simplifiée (slug) d'un titre pour les URL ou les identifiants
          filename: {
            slugify: (values) => {
              return `${(values.title || "") // Prend le titre de l'objet 'values' ou utilise une chaîne vide si 'title' n'est pas défini
                .toLowerCase() // Convertit le titre en minuscules pour assurer la cohérence
                .replace(/\s+/g, "-") // Remplace un ou plusieurs espaces consécutifs par un tiret
                // Supprime les caractères non désirés : 
                // - [^\w\.\/-\s]+ : Tout caractère qui n'est pas un mot (\w), un point (\.), une barre oblique (/), un tiret (-), ou un espace (\s)
                .replace(/[^\w\.\/-\s]+/gi, "")}`; // 'g' applique la suppression globalement, 'i' rend l'expression insensible à la casse
            },
          },
        },
      },
    ],
  },
});
