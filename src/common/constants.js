export const commonConstants = {
  defaultImg:
    "https://www.aureamartins.com.br/application/modules/themes/views/default/assets/images/image-placeholder.png",
};

export const onErrorLoadingImg = (event) => {
  event.target.src = commonConstants.defaultImg;
};
