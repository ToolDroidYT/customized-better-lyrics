/**
 * Shared lyric data types used across the lyrics and animation modules.
 */

export interface PartData {
  /**
   * Time of this part in seconds
   */
  time: number;

  /**
   * Duration of this part in seconds
   */
  duration: number;
  lyricElement: HTMLElement;
  animationStartTimeMs: number;
}

export type LineData = {
  parts: PartData[];
  isScrolled: boolean;
  isAnimationPlayStatePlaying: boolean;
  accumulatedOffsetMs: number;
  isAnimating: boolean;
  lastAnimSetupAt: number;
  isSelected: boolean;
  height: number;
  position: number;
} & PartData;

export interface LyricsData {
  lines: LineData[];
  syncType: "richsync" | "synced" | "none";
  lyricWidth: number;
  lyricHeight: number;
  isMusicVideoSynced: boolean;
  tabSelector: HTMLElement;
  lyricsContainer: HTMLElement;
}
