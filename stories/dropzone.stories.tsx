import * as React from "react";
import { Meta } from "@storybook/react";
import { useDropzone } from "react-dropzone";

import { Check, File, Trash, UploadCloud, Video } from "@/components/icons";
import { convertToMb, first, verifyFileType } from "@/lib/utils";
import { Button, Progress, CircularProgress } from "@/components/ui";

const meta: Meta = {
  title: "Dropzone",
};

export default meta;

export const Default = () => {
  const [progress, setProgress] = React.useState(0);
  const [state, setState] = React.useState<{
    fileType?: "image" | "video" | "pdf";
    fileName?: string;
    fileSize?: string;
    isDragAccept?: boolean;
  }>({});
  const { fileName, fileSize, fileType, isDragAccept } = state;

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    const { name, size } = first(acceptedFiles);

    const isImage = verifyFileType(name, [
      ".png",
      ".jpg",
      ".jpeg",
      ".webp",
      ".gif",
    ]);
    const isVideo = verifyFileType(name, [".mp4"]);
    const isPdf = verifyFileType(name, [".pdf"]);

    setState({
      fileName: name,
      fileType: isImage
        ? "image"
        : isVideo
        ? "video"
        : isPdf
        ? "pdf"
        : undefined,
      fileSize: convertToMb(size),
    });
  }, []);

  const onDropAccepted = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isDragAccept: true }));
  }, []);

  const onDropRejected = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isDragAccept: false }));
  }, []);

  const { getInputProps, getRootProps, open } = useDropzone({
    noClick: true,
    multiple: false,
    onDrop,
    onDropAccepted,
    onDropRejected,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
      "image/webp": [".webp"],
      "image/gif": [".gif"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col rounded-lg border border-gray-100 bg-white px-[25px] py-[17px] hover:border-2 hover:border-primary-500 hover:px-6 hover:py-4"
    >
      <input {...getInputProps()} />
      {isDragAccept ? (
        <>
          <div className="flex items-center justify-between">
            <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-4 border-primary-25 bg-primary-50">
              {fileType === "video" && <Video className="text-primary-500" />}
              {(fileType === "image" || fileType === "pdf") && (
                <File className="text-primary-500" />
              )}
            </div>
            <div className="ml-4 flex flex-auto flex-col text-sm">
              <span className="text-gray-700">{fileName}</span>
              <span className="text-gray-600">{fileSize}</span>
            </div>
            <div className="ml-1">
              {progress === 100 ? (
                <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-primary-500">
                  <Check className="h-2.5 w-2.5 text-white" />
                </span>
              ) : (
                <Button className="px-3" variant="ghost" visual="gray">
                  <Trash className="h-5 w-5 text-gray-500" />
                </Button>
              )}
            </div>
          </div>
          <div className="mt-1 flex items-center gap-x-3">
            <div className="flex-auto py-1.5">
              <Progress value={progress} />
            </div>
            <span className="text-sm font-medium text-gray-700">
              {progress}%
            </span>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[6px] border-gray-50 bg-gray-100">
              <UploadCloud className="h-5 w-5 text-gray-500" />
            </div>
          </div>
          <div className="mx-auto mt-3 max-w-xs text-center text-sm text-gray-600">
            <button
              className="font-semibold text-primary-500 focus:outline-none"
              onClick={open}
            >
              Click to upload
            </button>{" "}
            or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
          </div>
        </>
      )}
    </div>
  );
};

export const CircularProgressVariant = () => {
  const [progress, setProgress] = React.useState(0);
  const [state, setState] = React.useState<{
    fileType?: "image" | "video" | "pdf";
    fileName?: string;
    fileSize?: string;
    isDragAccept?: boolean;
  }>({});
  const { fileName, fileSize, fileType, isDragAccept } = state;

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    const { name, size } = first(acceptedFiles);

    const isImage = verifyFileType(name, [
      ".png",
      ".jpg",
      ".jpeg",
      ".webp",
      ".gif",
    ]);
    const isVideo = verifyFileType(name, [".mp4"]);
    const isPdf = verifyFileType(name, [".pdf"]);

    setState({
      fileName: name,
      fileType: isImage
        ? "image"
        : isVideo
        ? "video"
        : isPdf
        ? "pdf"
        : undefined,
      fileSize: convertToMb(size),
    });
  }, []);

  const onDropAccepted = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isDragAccept: true }));
  }, []);

  const onDropRejected = React.useCallback(() => {
    setState((prevState) => ({ ...prevState, isDragAccept: false }));
  }, []);

  const { getInputProps, getRootProps, open } = useDropzone({
    noClick: true,
    multiple: false,
    onDrop,
    onDropAccepted,
    onDropRejected,
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
      "image/webp": [".webp"],
      "image/gif": [".gif"],
      "application/pdf": [".pdf"],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-col rounded-lg border border-gray-100 bg-white px-[17px] py-[17px] hover:border-2 hover:border-primary-500 hover:px-4 hover:py-4"
    >
      <input {...getInputProps()} />
      {isDragAccept ? (
        <div className="flex justify-between">
          <div className="inline-flex h-8 w-8 items-center justify-center rounded-full border-4 border-primary-25 bg-primary-50">
            {fileType === "video" && <Video className="text-primary-500" />}
            {(fileType === "image" || fileType === "pdf") && (
              <File className="text-primary-500" />
            )}
          </div>
          <div className="ml-4 flex flex-auto flex-col text-sm">
            <span className="text-gray-700">{fileName}</span>
            <span className="text-gray-600">{fileSize}</span>
          </div>
          <div className="ml-2">
            <CircularProgress
              show={false}
              value={progress}
              size={32}
              strokeWidth={4}
            />
          </div>
        </div>
      ) : (
        <>
          <div className="flex items-center justify-center">
            <div className="inline-flex h-10 w-10 items-center justify-center rounded-full border-[6px] border-gray-50 bg-gray-100">
              <UploadCloud className="h-5 w-5 text-gray-500" />
            </div>
          </div>
          <div className="mx-auto mt-3 max-w-xs text-center text-sm text-gray-600">
            <button
              className="font-semibold text-primary-500 focus:outline-none"
              onClick={open}
            >
              Click to upload
            </button>{" "}
            or drag and drop SVG, PNG, JPG or GIF (max. 800x400px)
          </div>
        </>
      )}
    </div>
  );
};
