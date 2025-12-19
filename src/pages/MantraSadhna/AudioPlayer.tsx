"use client";

import { useRef, useState, useEffect, forwardRef, useImperativeHandle } from "react";

interface AudioPlayerProps {
  Audiofile: string | File;
}

export interface AudioPlayerHandle {
  play: () => void;
  pause: () => void;
}

const AudioPlayer = forwardRef<AudioPlayerHandle, AudioPlayerProps>(({ Audiofile }, ref) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [src, setSrc] = useState<string>("");

  // Convert File to URL if needed
  useEffect(() => {
    if (Audiofile instanceof File) {
      const url = URL.createObjectURL(Audiofile);
      setSrc(url);

      // Clean up object URL when component unmounts or Audiofile changes
      return () => URL.revokeObjectURL(url);
    } else {
      setSrc(Audiofile);
    }
  }, [Audiofile]);

  // Expose play/pause to parent
  useImperativeHandle(ref, () => ({
    play() {
      audioRef.current?.play();
    },
    pause() {
      audioRef.current?.pause();
    },
  }));

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "00:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const setAudioDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", setAudioDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", setAudioDuration);
    };
  }, []);

  const handleSeek = (e: any) => {
    const rect = e.target.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const seekTime = (clickX / rect.width) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = seekTime;
    }
  };

  return (
    <div className="w-[80%] mt-1">
      <audio ref={audioRef} src={src}></audio>

      <div className="flex justify-between mb-1 text-black font-semibold text-sm">
        <span>{formatTime(currentTime)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div
        className="relative w-full h-1 bg-orange-300 rounded-full cursor-pointer"
        onClick={handleSeek}
      >
        <div
          className="absolute top-0 left-0 h-full bg-orange-600 rounded-full"
          style={{
            width: duration ? `${(currentTime / duration) * 100}%` : "0%",
          }}
        ></div>

        <div
          className="absolute top-[-3px] h-3 w-3 bg-green-500 rounded-full"
          style={{
            left: duration ? `${(currentTime / duration) * 100}%` : "0%",
          }}
        ></div>
      </div>
    </div>
  );
});

export default AudioPlayer;
