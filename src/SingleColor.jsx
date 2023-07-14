import { toast } from "react-toastify";

const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const CopyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success("Color copiado exitosamente");
      } catch (error) {
        toast.error("No se pudo copiar el color");
      }
    } else {
      toast.error("Error: No hay acceso al portapapeles");
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={CopyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
