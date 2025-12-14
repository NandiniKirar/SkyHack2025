import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { motion } from "framer-motion";

const DragAndDropUploader = ({ onFileSelected, disabled }) => {
  const handleDrop = useCallback(
    (acceptedFiles) => {
      if (!acceptedFiles.length) return;
      onFileSelected(acceptedFiles[0]);
    },
    [onFileSelected]
  );

  const { getRootProps, getInputProps, isDragActive, isDragReject } = useDropzone({
    multiple: false,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
      "image/tiff": [".tif", ".tiff"]
    },
    maxSize: 10 * 1024 * 1024,
    onDrop: handleDrop,
    disabled
  });

  const borderColor = isDragReject
    ? "border-rose-400/80 shadow-[0_0_25px_rgba(251,113,133,0.5)]"
    : isDragActive
      ? "border-cyan-300/80 shadow-[0_0_35px_rgba(34,211,238,0.4)]"
      : "border-white/20";

  return (
    <motion.div
      {...getRootProps()}
      className={`group ${disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer"} rounded-[32px] border-2 ${borderColor} bg-gradient-to-br from-white/5 via-white/0 to-white/5 p-10 text-center transition hover:bg-white/10`}
      whileHover={{ scale: disabled ? 1 : 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      <input {...getInputProps()} />
      <div className="mx-auto flex size-14 items-center justify-center rounded-2xl border border-white/20 bg-white/5 text-cyan-200 shadow-[0_10px_35px_rgba(4,120,189,0.35)]">
        <span className="text-xs uppercase tracking-[0.4em]">AI</span>
      </div>
      <p className="mt-6 text-xs uppercase tracking-[0.4em] text-white/40">Drag & Drop</p>
      <p className="mt-4 text-2xl font-semibold text-white">
        {disabled ? "Awaiting prediction..." : "Upload satellite imagery"}
      </p>
      <p className="mt-2 text-sm text-white/60">PNG · JPG · TIFF · Max 10MB</p>
    </motion.div>
  );
};

export default DragAndDropUploader;

