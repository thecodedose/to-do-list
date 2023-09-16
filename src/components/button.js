function Button({ buttonText }) {

  // Event Handler
  function handleClick(event) {
    console.log(event.nativeEvent);
  }

  return (
    // Passing the event handler to the button element
    <button onClick={handleClick}>
      {buttonText}
    </button>
  );
}

export default Button;
