const title:string = "大屏";


export default function getPageTitle(pageTitle:string|unknown) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`;
  }
  return `${title}`;
}