import { createContext, useContext } from "react";

export const PortfolioContext = createContext(null);

export function usePortfolio() {
  const portfolio = useContext(PortfolioContext);
  if (!portfolio) throw new Error("usePortfolio must be used within PortfolioContext");
  return portfolio;
}
