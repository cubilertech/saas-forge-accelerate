import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { AlertCircle } from "lucide-react";
import { Button } from "../ui/button";

interface VideoModelProps {
  isVideoModalOpen: boolean;
  handleVideoModalClose: () => void;
  currentVideoUrl: string;
  isVideoLoading: boolean;
  videoError: string;
  setVideoError: (error: string) => void;
  setIsVideoLoading: (loading: boolean) => void;
  handleVideoLoad: () => void;
  handleVideoError: () => void;
}

export const VideoModel = ({
  isVideoModalOpen,
  handleVideoModalClose,
  currentVideoUrl,
  isVideoLoading,
  videoError,
  setVideoError,
  setIsVideoLoading,
  handleVideoLoad,
  handleVideoError,
}: VideoModelProps) => {
  return (
    <>
      <Dialog open={isVideoModalOpen} onOpenChange={handleVideoModalClose}>
        <DialogContent className="max-w-4xl w-full p-0">
          <DialogTitle className="sr-only">Video Testimonial</DialogTitle>
          <div className="relative bg-black rounded-lg overflow-hidden">
            {isVideoLoading && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10">
                <div className="text-white text-center">
                  <div className="animate-spin h-8 w-8 border-2 border-white border-t-transparent rounded-full mx-auto mb-2"></div>
                  <p>Loading video...</p>
                </div>
              </div>
            )}

            {videoError ? (
              <div className="aspect-video flex items-center justify-center bg-black text-white p-8">
                <div className="text-center">
                  <AlertCircle className="h-12 w-12 mx-auto mb-4 text-red-500" />
                  <p className="text-lg mb-4">{videoError}</p>
                  <Button
                    onClick={() => {
                      setVideoError("");
                      setIsVideoLoading(true);
                    }}
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    Try Again
                  </Button>
                </div>
              </div>
            ) : currentVideoUrl ? (
              <video
                className="w-full aspect-video"
                controls
                autoPlay
                onLoadStart={handleVideoLoad}
                onError={handleVideoError}
                onCanPlay={() => setIsVideoLoading(false)}
              >
                <source src={currentVideoUrl} type="video/mp4" />
                <source src={currentVideoUrl} type="video/webm" />
                <source src={currentVideoUrl} type="video/ogg" />
                Your browser does not support the video tag.
              </video>
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
