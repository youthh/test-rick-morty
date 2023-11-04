type useWriteHistoryActionReturn = {
  writeActionToHistoryLS: (
    actionText: unknown,
    localStorageKey: string,
  ) => void;
  getLocalStorageData: <T>(key: string) => T | null;
};

export const useWriteHistory = (): useWriteHistoryActionReturn => {
  const writeActionToHistoryLS = (
    actionText: unknown,
    localStorageKey: string,
  ) => {
    const stateLocalStorage = localStorage.getItem(localStorageKey);
    localStorage.setItem(
      localStorageKey,
      stateLocalStorage
        ? JSON.stringify([...JSON.parse(stateLocalStorage), actionText])
        : JSON.stringify([actionText]),
    );
  };

  const getLocalStorageData = <T>(key: string): T | null => {
    const localstorageData = localStorage.getItem(key);
    return localstorageData !== null ? JSON.parse(localstorageData) : null;
  };

  return {
    writeActionToHistoryLS,
    getLocalStorageData,
  };
};
