"use client";

import type { ReactNode } from "react";
import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";

type GalleryItem = {
  src: string;
  alt: string;
  caption?: string;
};

type ImageLightboxProps = {
  src: string;
  alt: string;
  caption?: string;
  children: ReactNode;
  className?: string;
  ariaLabel?: string;
  gallery?: GalleryItem[];
  index?: number;
};

function cx(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="image-lightbox-icon">
      <path
        d="M6 6l12 12M18 6L6 18"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronLeftIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="image-lightbox-icon">
      <path
        d="M14.5 5.5L8 12l6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="image-lightbox-icon">
      <path
        d="M9.5 5.5L16 12l-6.5 6.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ImageLightbox({
  src,
  alt,
  caption,
  children,
  className,
  ariaLabel,
  gallery,
  index = 0,
}: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(index);
  const [mounted, setMounted] = useState(false);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const items = useMemo<GalleryItem[]>(
    () => (gallery && gallery.length > 0 ? gallery : [{ src, alt, caption }]),
    [alt, caption, gallery, src]
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }

      if (items.length > 1 && event.key === "ArrowRight") {
        setActiveIndex((current) => (current + 1) % items.length);
      }

      if (items.length > 1 && event.key === "ArrowLeft") {
        setActiveIndex((current) => (current - 1 + items.length) % items.length);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, items.length]);

  const activeItem = items[activeIndex] ?? items[0];

  const open = () => {
    setActiveIndex(index);
    setIsOpen(true);
  };

  const showPrevious = () => {
    setActiveIndex((current) => (current - 1 + items.length) % items.length);
  };

  const showNext = () => {
    setActiveIndex((current) => (current + 1) % items.length);
  };

  const onTouchStart = (event: React.TouchEvent<HTMLElement>) => {
    setTouchStartX(event.changedTouches[0]?.clientX ?? null);
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLElement>) => {
    if (touchStartX === null || items.length <= 1) return;

    const endX = event.changedTouches[0]?.clientX ?? touchStartX;
    const deltaX = endX - touchStartX;

    if (Math.abs(deltaX) < 44) {
      setTouchStartX(null);
      return;
    }

    if (deltaX < 0) {
      showNext();
    } else {
      showPrevious();
    }

    setTouchStartX(null);
  };

  return (
    <>
      <button
        type="button"
        onClick={open}
        className={cx("image-lightbox-trigger", className)}
        aria-label={ariaLabel ?? `Open larger image: ${alt}`}
      >
        {children}
      </button>

      {mounted && isOpen
        ? createPortal(
            <div
              className="image-lightbox"
              role="dialog"
              aria-modal="true"
              aria-label={activeItem.alt}
              onClick={() => setIsOpen(false)}
            >
              <div className="image-lightbox-backdrop" />
              <div className="image-lightbox-shell">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="image-lightbox-close"
                  aria-label="Close image viewer"
                >
                  <CloseIcon />
                </button>

                {items.length > 1 ? (
                  <div className="image-lightbox-meta">
                    <span className="image-lightbox-counter">
                      {activeIndex + 1} / {items.length}
                    </span>
                  </div>
                ) : null}

                {items.length > 1 ? (
                  <>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        showPrevious();
                      }}
                      className="image-lightbox-nav image-lightbox-nav-left"
                      aria-label="Show previous image"
                    >
                      <ChevronLeftIcon />
                    </button>
                    <button
                      type="button"
                      onClick={(event) => {
                        event.stopPropagation();
                        showNext();
                      }}
                      className="image-lightbox-nav image-lightbox-nav-right"
                      aria-label="Show next image"
                    >
                      <ChevronRightIcon />
                    </button>
                  </>
                ) : null}

                <figure
                  className="image-lightbox-figure"
                  onClick={(event) => event.stopPropagation()}
                  onTouchStart={onTouchStart}
                  onTouchEnd={onTouchEnd}
                >
                  <div className="image-lightbox-frame">
                    <img
                      src={activeItem.src}
                      alt={activeItem.alt}
                      className="image-lightbox-image"
                    />
                    {items.length > 1 ? (
                      <div className="image-lightbox-swipe-hint">
                        Swipe to browse
                      </div>
                    ) : null}
                  </div>
                  {activeItem.caption ? (
                    <figcaption className="image-lightbox-caption">
                      {activeItem.caption}
                    </figcaption>
                  ) : null}
                </figure>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
