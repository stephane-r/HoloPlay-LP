interface UseScrollToHook {
  scrollTo: (id: string) => void;
}

const useScrollTo = (): UseScrollToHook => {
  const scrollTo = (id: string): void => {
    const $element = document.getElementById(id);

    if ($element) {
      $element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return { scrollTo };
};

export default useScrollTo;
