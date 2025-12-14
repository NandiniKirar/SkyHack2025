import { useEffect, useMemo, useState } from "react";
import DragAndDropUploader from "../components/DragAndDropUploader.jsx";
import ImagePreview from "../components/ImagePreview.jsx";
import Loader from "../components/Loader.jsx";
import PredictionResult from "../components/PredictionResult.jsx";

const mockLabels = [
  { label: "Vegetation", tags: ["NDVI High", "Photosynthesis", "Low Cloud"] },
  { label: "Urban", tags: ["Dense Build", "Thermal Hotspot", "Road Grid"] },
  { label: "Water", tags: ["SAR Smooth", "Low Temp", "Specular"] },
  { label: "Desert", tags: ["Arid", "Sand Dunes", "Thermal Hot"] }
];

const Classifier = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [prediction, setPrediction] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!selectedFile) {
      setPreviewUrl("");
      return undefined;
    }

    const url = URL.createObjectURL(selectedFile);
    setPreviewUrl(url);
    return () => URL.revokeObjectURL(url);
  }, [selectedFile]);

  const isPredictDisabled = !selectedFile || isLoading;

  const handlePredict = async () => {
    if (!selectedFile) {
      setError("Please upload a satellite image first.");
      return;
    }

    setError("");
    setIsLoading(true);
    setPrediction(null);

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await fetch("http://localhost:5000/predict", {
        method: "POST",
        body: formData
      });

      if (response.ok) {
        const data = await response.json();
        setPrediction({
          label: data.label ?? "Vegetation",
          confidence: data.confidence ?? 92,
          tags: data.tags ?? ["Spectral", "AI Inference", "Simulated"]
        });
        setIsLoading(false);
        return;
      }
    } catch (apiError) {
      console.info("Prediction API not reachable yet. Using mock response.", apiError);
    }

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const mock = mockLabels[Math.floor(Math.random() * mockLabels.length)];
    setPrediction({
      label: mock.label,
      confidence: Math.floor(80 + Math.random() * 15),
      tags: mock.tags
    });

    setIsLoading(false);
  };

  const resetState = () => {
    setSelectedFile(null);
    setPrediction(null);
    setError("");
  };

  const insights = useMemo(
    () => [
      { label: "Processing Nodes", value: isLoading ? "Analyzing..." : "Orion-V3" },
      { label: "Spectral Bands", value: selectedFile ? "RGB + NIR" : "Awaiting input" },
      { label: "Latency", value: prediction ? "118ms simulated" : "--" }
    ],
    [isLoading, selectedFile, prediction]
  );

  return (
    <div className="mx-auto max-w-6xl space-y-12">
      <div className="space-y-3 text-center">
        <p className="text-xs uppercase tracking-[0.5em] text-cosmic-100">Classifier</p>
        <h1 className="font-display text-4xl text-white sm:text-5xl">
          Satellite Image <span className="glow-text">Classification Sandbox</span>
        </h1>
        <p className="text-white/70">
          Drag-and-drop orbital imagery, preview the payload, and simulate the upcoming AI inference endpoint.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6">
          <DragAndDropUploader onFileSelected={setSelectedFile} disabled={isLoading} />
          <ImagePreview previewUrl={previewUrl} fileName={selectedFile?.name} onClear={resetState} />
          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={handlePredict}
              disabled={isPredictDisabled}
              className={`glow-button ${
                isPredictDisabled
                  ? "!cursor-not-allowed !border !border-white/20 !bg-white/10 !text-white/40 shadow-none"
                  : "text-white transition hover:scale-105"
              }`}
            >
              {isLoading ? "Predicting..." : "Predict"}
            </button>
            {error && <p className="text-sm text-rose-300">{error}</p>}
          </div>
          {isLoading && <Loader />}
          <PredictionResult result={prediction} />
        </div>

        <aside className="glass-panel space-y-5 p-6">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60">Mission Console</p>
          <div className="space-y-4">
            {insights.map((insight) => (
              <div key={insight.label} className="rounded-2xl border border-white/10 bg-black/20 p-4 shadow-inner shadow-black/30">
                <p className="text-[0.65rem] uppercase tracking-[0.35em] text-white/50">{insight.label}</p>
                <p className="mt-2 text-lg text-white">{insight.value}</p>
              </div>
            ))}
          </div>
          <div className="rounded-2xl border border-cyan-300/40 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 p-4 text-sm text-white/80">
            <p className="text-[0.65rem] uppercase tracking-[0.4em] text-white/60">API</p>
            <p className="mt-2 break-words">
              POST <span className="text-cyan-200">http://localhost:5000/predict</span>
            </p>
            <p className="mt-2 text-white/60">
              This request is simulated with a mock response until the backend is connected.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Classifier;

