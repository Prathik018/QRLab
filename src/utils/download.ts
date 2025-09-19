export const downloadQR = (filename = "qrcode.png") => {
  const el = document.getElementById("qr-code");
  if (!(el instanceof SVGSVGElement)) {
    console.warn("QR element not found or not SVG");
    return;
  }

  const serializer = new XMLSerializer();
  let svgData = serializer.serializeToString(el);

  // Ensure xml namespace is present
  if (!svgData.match(/^<svg[^>]+xmlns="http:\/\/www.w3.org\/2000\/svg"/)) {
    svgData = svgData.replace(
      /^<svg/,
      `<svg xmlns="http://www.w3.org/2000/svg"`
    );
  }

  const canvas = document.createElement("canvas");
  const img = new Image();

  const blob = new Blob([svgData], { type: "image/svg+xml;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  img.onload = () => {
    canvas.width = img.width;
    canvas.height = img.height;
    const ctx = canvas.getContext("2d")!;
    // Fill white background if svg bg is white-ish (prevents transparency)
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0);
    URL.revokeObjectURL(url);

    const a = document.createElement("a");
    a.download = filename;
    a.href = canvas.toDataURL("image/png");
    a.click();
  };

  img.onerror = () => {
    URL.revokeObjectURL(url);
    console.error("Failed to load generated SVG as image");
  };

  img.src = url;
};
