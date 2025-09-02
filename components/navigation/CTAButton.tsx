'use client';

interface CTAButtonProps {
  text: string;
}

export function CTAButton({ text }: CTAButtonProps) {
  return (
    <button
      className="cta-button hidden md:block whitespace-nowrap"
      style={{
        background: "linear-gradient(135deg, #0071e3 40%, #764ba2 100%)",
        color: "white",
        padding: "12px 28px",
        borderRadius: "25px",
        textDecoration: "none",
        fontWeight: "600",
      }}
    >
      {text}
    </button>
  );
}