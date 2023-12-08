import React from "react";
import AccordionSections from "./AccordionSections";

const SectionsModal = ({ isOpen, onClose, courseId }) => {
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } fixed inset-0 overflow-y-auto z-50 `}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div
          className="fixed inset-0 transition-opacity"
          aria-hidden="true"
          onClick={onClose}
        >
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>

        {/* Modal */}
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-3xl sm:w-full sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div>
            <h2 className="text-lg font-medium text-gray-900">
              Sections for Course ID: {courseId}
            </h2>
            <div className="mt-2 text-black ">
              <AccordionSections id={courseId}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionsModal;
