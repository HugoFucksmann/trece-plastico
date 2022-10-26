export const goToTop = () => {
  try {
    window.scrollTo({
      top: 0,
    });
  } catch (error) {
    console.log("catch error ", error);
  }
};
