export class SoundInput {
	private audioContext: AudioContext | null = null;
	private analyser: AnalyserNode | null = null;
	private dataArray: Uint8Array | null = null;
	private stream: MediaStream | null = null;
	active = false;

	async start(): Promise<boolean> {
		try {
			this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
			this.audioContext = new AudioContext();
			const source = this.audioContext.createMediaStreamSource(this.stream);
			this.analyser = this.audioContext.createAnalyser();
			this.analyser.fftSize = 1024;
			source.connect(this.analyser);
			this.dataArray = new Uint8Array(this.analyser.frequencyBinCount);
			this.active = true;
			return true;
		} catch {
			this.active = false;
			return false;
		}
	}

	/** Get current volume level [0, 1] */
	getLevel(): number {
		if (!this.analyser || !this.dataArray) return 0;
		this.analyser.getByteTimeDomainData(this.dataArray);

		// Compute RMS
		let sum = 0;
		for (let i = 0; i < this.dataArray.length; i++) {
			const val = (this.dataArray[i] - 128) / 128;
			sum += val * val;
		}
		const rms = Math.sqrt(sum / this.dataArray.length);
		return Math.min(1, rms * 4); // Amplify for better range
	}

	stop(): void {
		if (this.stream) {
			this.stream.getTracks().forEach((t) => t.stop());
		}
		if (this.audioContext) {
			this.audioContext.close();
		}
		this.active = false;
		this.analyser = null;
		this.dataArray = null;
		this.stream = null;
		this.audioContext = null;
	}
}
