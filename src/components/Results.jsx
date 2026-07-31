/* eslint-disable react/display-name */
import { forwardRef, useState } from "react";
import { MdOutlineFileDownload } from "react-icons/md";

/**
 * Componente Results
 *
 * Muestra las zonas de entrenamiento basadas en la frecuencia cardíaca (FC) y el ritmo (Pace).
 * Se presenta en forma de tabla con tres columnas: zona, FC en latidos por minuto (BPM) y ritmo en min/km.
 *
 * @param {Object} props - Propiedades del componente.
 * @param {Array} props.zones - Array de objetos que contienen las zonas de entrenamiento.
 * @param {string} props.name - Nombre del usuario que se mostrará en el mensaje de bienvenida.
 *
 * @returns {JSX.Element | null} Un componente de tabla con las zonas de entrenamiento o `null` si no hay datos válidos.
 */

export const Results = forwardRef(({ zones, name }, ref) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadError, setDownloadError] = useState("");

  // Validación: Verifica si "zones" es un array válido antes de renderizar la tabla.
  if (!zones || !Array.isArray(zones)) {
    console.error('Error: "zones" es undefined o no es un array', zones);
    return null;
  }

  const zoneStyles = [
    {
      className: "border-sky-200 bg-sky-50 text-sky-700",
      bar: "bg-sky-400",
      fill: "#f0f9ff",
      accent: "#38bdf8",
    },
    {
      className: "border-emerald-200 bg-emerald-50 text-emerald-700",
      bar: "bg-emerald-500",
      fill: "#ecfdf5",
      accent: "#10b981",
    },
    {
      className: "border-yellow-200 bg-yellow-50 text-yellow-700",
      bar: "bg-yellow-400",
      fill: "#fefce8",
      accent: "#facc15",
    },
    {
      className: "border-orange-200 bg-orange-50 text-orange-700",
      bar: "bg-orange-500",
      fill: "#fff7ed",
      accent: "#f97316",
    },
    {
      className: "border-rose-200 bg-rose-50 text-rose-700",
      bar: "bg-rose-500",
      fill: "#fff1f2",
      accent: "#f43f5e",
    },
  ];

  const handleDownload = async () => {
    if (isDownloading) return;

    setIsDownloading(true);
    setDownloadError("");

    try {
      const canvas = document.createElement("canvas");
      const canvasWidth = 1200;
      const rowHeight = 92;
      const canvasHeight = 310 + zones.length * rowHeight;
      const context = canvas.getContext("2d");
      const safeName = (name || "athlete")
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-");

      if (!context) throw new Error("Canvas is not supported");

      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvasWidth, canvasHeight);
      context.fillStyle = "#172033";
      context.font = "700 42px Open Sans, sans-serif";
      context.fillText("Hermes training zones", 56, 72);
      context.fillStyle = "#64748b";
      context.font = "400 22px Open Sans, sans-serif";
      context.fillText(`Athlete: ${name || "Athlete"}`, 56, 116);
      context.fillStyle = "#1d4ed8";
      context.font = "700 17px Open Sans, sans-serif";
      context.fillText("TRAINING ZONE", 56, 188);
      context.fillText("HR (BPM)", 560, 188);
      context.fillText("PACE (MIN/KM)", 840, 188);

      zones.forEach(({ zone, hr, pace }, index) => {
        const style = zoneStyles[index] || zoneStyles[zoneStyles.length - 1];
        const y = 215 + index * rowHeight;

        context.fillStyle = style.fill;
        context.fillRect(40, y, canvasWidth - 80, 68);
        context.fillStyle = style.accent;
        context.fillRect(40, y, 8, 68);
        context.fillStyle = "#172033";
        context.font = "700 22px Open Sans, sans-serif";
        context.fillText(String(zone), 72, y + 42);
        context.font = "700 22px Open Sans, sans-serif";
        context.fillText(String(hr), 560, y + 42);
        context.fillText(String(pace), 840, y + 42);
      });

      const footerY = canvasHeight - 48;
      context.strokeStyle = "#e2e8f0";
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(40, footerY - 30);
      context.lineTo(canvasWidth - 40, footerY - 30);
      context.stroke();
      context.fillStyle = "#64748b";
      context.font = "600 16px Open Sans, sans-serif";
      context.fillText("Training zones by Hermes", 40, footerY);
      context.textAlign = "right";
      context.fillText("Created by @runwithizzat", canvasWidth - 40, footerY);
      context.textAlign = "left";

      const image = await new Promise((resolve, reject) => {
        canvas.toBlob(
          (blob) =>
            blob ? resolve(blob) : reject(new Error("Could not create PNG")),
          "image/png",
        );
      });
      const link = document.createElement("a");
      const imageUrl = URL.createObjectURL(image);

      link.download = `hermes-training-zones-${safeName || "athlete"}.png`;
      link.href = imageUrl;
      document.body.appendChild(link);
      link.click();
      link.remove();
      URL.revokeObjectURL(imageUrl);
    } catch {
      setDownloadError("We could not create the image. Please try again.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <section
      ref={ref}
      id="results"
      className="relative overflow-hidden bg-blue-700 px-6 text-center"
    >
      <div
        className="pointer-events-none absolute -left-24 bottom-[-7rem] h-72 w-72 rounded-full border-[36px] border-white/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-20 top-[-8rem] h-72 w-72 rounded-full border-[36px] border-yellow-400/20"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-5xl py-16 md:py-20">
        <div className="mb-10 flex flex-col items-center justify-between gap-6 text-white sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-yellow-400">
              Your personal map
            </p>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
              Training zones
            </h1>
            <p className="mx-auto mt-4 max-w-lg text-base leading-7 text-slate-300">
              Hey <strong className="text-white">{name || "Athlete"}</strong>.
              These ranges turn your next run into a focused session.
            </p>
          </div>
          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left">
            <span className="text-3xl font-extrabold text-yellow-400">
              {zones.length}
            </span>
            <span className="max-w-[6rem] text-xs font-bold uppercase leading-5 tracking-wider text-slate-300">
              zones ready to use
            </span>
          </div>
        </div>

        <div className="overflow-hidden rounded-2xl border border-white/10 bg-white p-2 shadow-2xl shadow-black/20 sm:p-3">
          <table className="w-full table-fixed border-separate border-spacing-y-2 text-sm">
            <thead>
              <tr>
                <th className="w-2/5 px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                  Training zone
                </th>
                <th className="w-1/3 px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                  HR (bpm)
                </th>
                <th className="w-1/3 px-3 py-3 text-center text-xs font-bold uppercase tracking-wider text-slate-500">
                  Pace (min/km)
                </th>
              </tr>
            </thead>
            <tbody>
              {zones.map(({ zone, hr, pace }, index) => {
                const style =
                  zoneStyles[index] || zoneStyles[zoneStyles.length - 1];
                return (
                  <tr key={zone}>
                    <td className="px-3 py-2">
                      <div
                        className={`flex items-center justify-center gap-3 rounded-xl border px-3 py-3 font-bold ${style.className}`}
                      >
                        <span
                          className={`h-2 w-2 shrink-0 rounded-full ${style.bar}`}
                          aria-hidden="true"
                        />
                        <span>{zone}</span>
                      </div>
                    </td>
                    <td className="px-3 py-2 text-center font-bold text-slate-800">
                      {hr}
                    </td>
                    <td className="px-3 py-2 text-center font-bold text-slate-800">
                      {pace}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        {zones.length > 0 && (
          <div className="mt-7 flex flex-col items-center gap-3">
            <button
              type="button"
              onClick={handleDownload}
              disabled={isDownloading}
              className="inline-flex cursor-pointer items-center gap-2 rounded-full border border-white/30 bg-white px-5 py-3 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-400 hover:text-blue-900 disabled:cursor-wait disabled:opacity-60"
            >
              <MdOutlineFileDownload className="text-xl" aria-hidden="true" />
              {isDownloading ? "Preparing image..." : "Download results"}
            </button>
            {downloadError && (
              <p className="text-sm text-yellow-200" role="alert">
                {downloadError}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
});
