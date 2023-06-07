export const viewport = {
  width: 1920, height: 1080
}; 
export const adapt = (vm:any, adaptType = "vd", origin = viewport) => {
  const elBody = document.querySelector("body");
  const elHtml = document.querySelector("html");
  const _container = vm._container;
  const originWidth = origin.width, originHeight = origin.height;
  if (adaptType === "full") {
    elHtml.style.height = elBody.style.height = "100%";
    elHtml.style.width = elBody.style.width = "100%";
    elBody.style.overflow = "hidden";
    _container.style.width = `${originWidth}px`;
    _container.style.height = `${originHeight}px`;
    _container.style.transformOrigin = "0 0";
    const resize = {
      inter: -1,
      fn: () => _container.style.transform = `scale(${window.innerWidth / originHeight}, ${window.innerHeight / originHeight})`
    };
    window.addEventListener("resize", () => {
      clearTimeout(resize.inter);
      resize.inter = setTimeout(resize.fn, 50);
    });
  } else if (adaptType === "fixed") {
    _container.style.width = `${originWidth}px`;
    _container.style.height = `${originHeight}px`;
    elBody.style.overflow = null;
  } else if (adaptType === "vd") {
    elBody.style.overflow = "hidden";
  } else {
    console.warn("未知的适配模式: " + adaptType);
  }
};