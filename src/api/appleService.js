export const pickAppleApi = type => {
  return new Promise((resolve, reject) => {
    window.setTimeout(() => {
      resolve({
        error: null,
        data: {
          type,
          weight: Math.floor(Math.random() * 100) + 200
        }
      });
    }, 1000);
  });
};
