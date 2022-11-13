export function setTitle() {
  initFields();

  onhashchange = () => {
    initFields();
  };
}

function initFields() {
  const reCheck = setInterval(() => {
    const date = document.querySelector("[id^='date-field']");
    const title = document.querySelector("[id^='date_clone-field']");

    if (date && title) {
      console.log(title);
      // title.value = "whoaaaa oh shit";
      clearInterval(reCheck);

      //! OBS
      // Options for the observer (which mutations to observe)
      const config = { attributes: true, childList: false, subtree: false };

      // Callback function to execute when mutations are observed
      const callback = (mutationList, _observer) => {
        for (const mutation of mutationList) {
          console.log(mutation);
        }
      };

      // Create an observer instance linked to the callback function
      const observer = new MutationObserver(callback);

      // Start observing the target node for configured mutations
      observer.observe(date, config);
      console.log(observer);

      // Later, you can stop observing
      // TODO
      // observer.disconnect();
    }
  }, 500);
}
