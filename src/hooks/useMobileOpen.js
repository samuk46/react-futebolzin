import { useState } from "react";

function useMobileOpen(stadoInicial) {
  let [mobileOpen, setMobileOpen] = useState(stadoInicial);

  async function alteraEstadoMenu() {
    console.log("Alterando estado menu de: " + mobileOpen);
    await setMobileOpen(!mobileOpen);
    console.log("Alterando estado menu para: " + mobileOpen);
    mobileOpen = !mobileOpen;
    console.log("De nvo: " + mobileOpen);

    return mobileOpen;
  }

  function estadoMenu() {
    return mobileOpen;
  }

  return [mobileOpen, alteraEstadoMenu];
}

export default useMobileOpen;
