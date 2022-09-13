async function getNotesFromLocalStorage() {
  return localStorage.getItem("saved-notes");
}

async function setNotestoLocalStorage(data: any) {
  return localStorage.setItem("saved-notes", data);
}

export { getNotesFromLocalStorage, setNotestoLocalStorage };
