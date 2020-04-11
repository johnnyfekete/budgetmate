import React from 'react';

const Confirmation = ({
  opened,
  onToggle,
  onConfirm,
  title,
  question,
  color,
  buttonText,
}) => {
  return (
    <div className={`bg-transparent-black fixed top-0 right-0 bottom-0 left-0
      transition duration-300 ease-in-out ${
      opened ? 'opacity-1' : 'opacity-0 pointer-events-none'
    }`}>
      <div className="container mx-auto h-full flex items-center justify-center">
        <div className="bg-white rounded-lg w-1/3 p-4 shadow-2xl">
          <div>
            <h3 className="text-2xl mb-2">{title}</h3>
            <p>{question}</p>
          </div>
          <div className="border-t border-color border-light-gray border-solid pt-4 mt-4 flex">
            <button
              type="button"
              className="px-3 py-1 ml-auto"
              onClick={() => onToggle()}
            >
              Cancel
            </button>
            <button
              type="button"
              className={`rounded-md px-3 py-1 bg-${color} text-white ml-1`}
              onClick={() => onConfirm()}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;
