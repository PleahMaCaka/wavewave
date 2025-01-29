/**
 * Plays audio files (mp3, wav, etc.)
 * @class
 */
export class AudioFilePlayer {
    /**
     * Creates a new AudioFilePlayer instance
     * @param {{sampleRate?: number}} options
     * @returns {AudioFilePlayer}
     */
    constructor({ sampleRate }?: {
        sampleRate?: number;
    });
    sampleRate: number;
    context: any;
    analyser: any;
    source: any;
    buffer: any;
    isPlaying: boolean;
    startTime: number;
    pauseTime: number;
    /**
     * Connects the audio context and enables output to speakers
     * @returns {Promise<true>}
     */
    connect(): Promise<true>;
    /**
     * Loads an audio file and decodes it
     * @param {string|ArrayBuffer|Blob} audioInput - URL string, ArrayBuffer, or Blob of the audio file
     * @returns {Promise<void>}
     */
    loadFile(audioInput: string | ArrayBuffer | Blob): Promise<void>;
    /**
     * Plays the loaded audio file
     * @returns {void}
     */
    play(): void;
    /**
     * Pauses the playback
     * @returns {void}
     */
    pause(): void;
    /**
     * Stops the playback and resets play position
     * @returns {void}
     */
    stop(): void;
    /**
     * Gets the current frequency domain data from the playing track
     * @param {"frequency"|"music"|"voice"} [analysisType]
     * @param {number} [minDecibels] default -100
     * @param {number} [maxDecibels] default -30
     * @returns {import('./analysis/audio_analysis.js').AudioAnalysisOutputType}
     */
    getFrequencies(analysisType?: "frequency" | "music" | "voice", minDecibels?: number, maxDecibels?: number): import("./analysis/audio_analysis.js").AudioAnalysisOutputType;
}
//# sourceMappingURL=audio_file_player.d.ts.map