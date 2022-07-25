import { ReactNode, useEffect, useRef, useState } from "react";

interface FadeSectionProps {
  children: ReactNode;
  direction?: string;
  delay?: string;
}

export const FadeSection = ({
  children,
  direction,
  delay,
}: FadeSectionProps) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const { current } = domRef;
    if (!current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("visible", entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      },
      {
        threshold: 0.5,
        rootMargin: "0px", //change container size
        //root: //set the parent container
      }
    );

    observer.observe(current);

    return () => observer.unobserve(current);
  }, []);

  return (
    <div
      className={`fade-section ${direction && `fade-${direction}`}`}
      style={{
        transitionDelay: `${delay ? delay : 0}`,
      }}
      ref={domRef}
    >
      {children}
    </div>
  );
};
