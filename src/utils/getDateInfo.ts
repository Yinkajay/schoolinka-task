export const extractDateInfo = (date: Date): { year: number; month: number; day: number } => {
    const year: number = date.getFullYear();
    const month: number = date.getMonth() + 1; 
    const day: number = date.getDate();
    
    return { year, month, day };
  };
  