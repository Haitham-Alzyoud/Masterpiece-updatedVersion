import React, { useState } from "react";

const VideoForm = ({ sectionId, onChange }) => {
  const [videoTitle, setVideoTitle] = useState("");
  const [videoFile, setVideoFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log({ file });
      setVideoFile(file);
      onChange({ file: file, title: videoTitle });
    }
  };

  const handleVideoTitleChange = (e) => {
    const title = e.target.value;
    setVideoTitle(title);
    onChange({ title: title, file: videoFile });
  };

  return (
    <div className="flex flex-col flex-wrap gap-3 p-5 shadow-md">
      <label className="block text-sm font-medium text-gray-700">
        Video Title:
        <input
          type="text"
          name="videoTitle"
          value={videoTitle}
          onChange={handleVideoTitleChange}
          className="text-black border-2 border-black rounded-lg mt-2"
        />
      </label>
      <label className="font-bold flex flex-col ">
        Video File:
        {videoFile ? (
          <video
            src={URL.createObjectURL(videoFile)}
            width="320"
            controls
            height="240"
          ></video>
        ) : (
          <div className="mt-2">
            <label className="w-64 flex flex-col items-center px-4 py-6 bg-white text-blue-500 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 cursor-pointer hover:bg-blue-500 hover:text-white">
              <svg
                className="w-8 h-8"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
              </svg>
              <span className="mt-2 text-base leading-normal">
                Select a file
              </span>
              <input
                type="file"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
          </div>
        )}
      </label>
    </div>
  );
};

export default VideoForm;
