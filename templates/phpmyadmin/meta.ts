// Generated using "yarn build-templates"

export const meta = {
  name: "phpMyAdmin",
  description:
    "phpMyAdmin is a free software tool written in PHP, intended to handle the administration of MySQL over the Web. phpMyAdmin supports a wide range of operations on MySQL and MariaDB.",
  instructions: null,
  changeLog: [{ date: "2022-07-12", description: "first release" }],
  links: [
    { label: "Website", url: "https://www.phpmyadmin.net/" },
    { label: "Documentation", url: "https://www.phpmyadmin.net/docs/" },
    { label: "Github", url: "https://github.com/phpmyadmin/phpmyadmin" },
  ],
  contributors: [{ name: "Andrei Canta", url: "https://github.com/deiucanta" }],
  schema: {
    type: "object",
    required: ["projectName", "appServiceName", "appServiceImage"],
    properties: {
      projectName: { type: "string", title: "Project Name" },
      appServiceName: {
        type: "string",
        title: "App Service Name",
        default: "phpmyadmin",
      },
      appServiceImage: {
        type: "string",
        title: "App Service Image",
        default: "phpmyadmin:5.2.0",
      },
    },
  },
  logo: "logo.png",
  screenshots: ["screenshot.png"],
};

export type ProjectName = string;
export type AppServiceName = string;
export type AppServiceImage = string;

export interface Input {
  projectName: ProjectName;
  appServiceName: AppServiceName;
  appServiceImage: AppServiceImage;
}
