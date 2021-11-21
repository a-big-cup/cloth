import { createAPI } from "@/utils/request";

export const listHot = data =>
  createAPI("/designer/recommend/getHot", "get", data);
export const listHotAdvise = data =>
  createAPI("/designer/hot/getHotAdvise", "get", data);
export const listHotDeAndNe = data =>
  createAPI("/designer/hot/getHotDeAndNe", "get", data);
export const listNearest = data =>
  createAPI("/magazine/hot/getNearest", "get", data);
export const listInspire = data =>
  createAPI("/expriences/hot/getInspire", "get", data);
export const listGraduationShow = data =>
  createAPI("designer/hot/getGraduationShow", "get", data);
export const listExpriences = data =>
  createAPI("expriences/getExpriences", "get", data);
// 2021.11.20
export const listTypeSums = data =>
  createAPI("designer/getTypeSums", "get", data);
export const listCarousel = data =>
  createAPI("expriences/getCarousel", "get", data);
export const listTypePage = data =>
  createAPI("designer/getTypePage", "get", data);
export const listCarouselIndex = data =>
  createAPI("designer/getCarousel", "get", data);
// 2021.11.21
export const listResearchSums = data =>
  createAPI("research/getResearchSums", "get", data);
export const listResearchPage = data =>
  createAPI("research/getResearchPage", "get", data);
