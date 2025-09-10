export const downloadQR = (filename = "qrcode.png") => {
  const el = document.getElementById("qr-code");
  if (!(el instanceof SVGSVGElement)) return;

  const serializer = new XMLSerializer();
  const svgData = serializer.serializeToString(el);

  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d")!;
  const img = new Image();

  const blob = new Blob([svgData], { type: "image/svg+xml" });
  const url = URL.createObjectURL(blob);

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);

    const a = document.createElement("a");
    a.download = filename;
    a.href = canvas.toDataURL("image/png");
    a.click();
  };
  img.src = url;
};
