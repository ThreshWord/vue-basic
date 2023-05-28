const title:string = "能力平台";

export default function getPageTitle(pageTitle:string|unknown) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}