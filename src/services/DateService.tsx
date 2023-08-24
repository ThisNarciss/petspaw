export const DateService = {
  getCurrentTime: () => {
    const date = new Date();
    const hour = date.getHours().toString().padStart(2, "0");
    const min = date.getMinutes().toString().padStart(2, "0");
    return { hour, min };
  },
};
