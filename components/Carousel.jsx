import { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'motion/react';
import { cn } from '@/lib/utils';
// replace icons with your own if needed
import { FiCircle, FiCode, FiFileText, FiLayers, FiLayout } from 'react-icons/fi';

const DEFAULT_ITEMS = [
  {
    title: 'Text Animations',
    description: 'Cool text animations for your projects.',
    id: 1,
    icon: <FiFileText className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Animations',
    description: 'Smooth animations for your projects.',
    id: 2,
    icon: <FiCircle className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Components',
    description: 'Reusable components for your projects.',
    id: 3,
    icon: <FiLayers className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Backgrounds',
    description: 'Beautiful backgrounds and patterns for your projects.',
    id: 4,
    icon: <FiLayout className="h-[16px] w-[16px] text-white" />
  },
  {
    title: 'Common UI',
    description: 'Common UI components are coming soon!',
    id: 5,
    icon: <FiCode className="h-[16px] w-[16px] text-white" />
  }
];

const DRAG_BUFFER = 0;
const VELOCITY_THRESHOLD = 500;
const GAP = 16;
const SPRING_OPTIONS = { type: 'spring', stiffness: 300, damping: 30 };

function CarouselItem({ item, index, itemWidth, round, trackItemOffset, x, transition }) {
  const range = [-(index + 1) * trackItemOffset, -index * trackItemOffset, -(index - 1) * trackItemOffset];
  const outputRange = [90, 0, -90];
  const rotateY = useTransform(x, range, outputRange, { clamp: false });

  if (round) {
    return (
      <motion.div
        className="relative flex shrink-0 flex-col items-center justify-center overflow-hidden rounded-full border-0 bg-[#060010] text-center cursor-grab active:cursor-grabbing"
        style={{
          width: itemWidth,
          height: itemWidth,
          rotateY,
          borderRadius: '50%'
        }}
        transition={transition}
      >
        <div className="m-0 p-0">
          <span className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#060010]">
            {item.icon}
          </span>
        </div>
        <div className="p-5">
          <div className="mb-1 font-black text-lg text-white">{item.title}</div>
          <p className="whitespace-pre-line text-sm text-white">{item.description}</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={cn(
        'group relative flex h-full min-h-[280px] shrink-0 flex-col overflow-hidden rounded-[12px] border border-[#2a2a32] bg-[#1e1e24]',
        'cursor-grab active:cursor-grabbing',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_16px_48px_-16px_rgba(102,210,206,0.18)]'
      )}
      style={{
        width: itemWidth,
        height: '100%',
        rotateY
      }}
      transition={transition}
    >
      <div className="flex shrink-0 justify-start px-5 pt-5">
        <span
          className={cn(
            'flex h-9 w-9 items-center justify-center rounded-full bg-[#060010] transition-colors duration-300',
            'group-hover:bg-accent/12 group-hover:ring-1 group-hover:ring-accent/35'
          )}
        >
          <span className="text-white [&>svg]:h-4 [&>svg]:w-4">{item.icon}</span>
        </span>
      </div>

      <div className="mt-auto flex min-h-0 flex-col px-5 pb-6 pt-8">
        <div className="mb-2 font-black text-lg leading-tight text-accent">{item.title}</div>
        <p className="whitespace-pre-line text-sm leading-relaxed text-white/88">{item.description}</p>
      </div>
    </motion.div>
  );
}

export default function Carousel({
  items = DEFAULT_ITEMS,
  baseWidth = 300,
  autoplay = false,
  autoplayDelay = 3000,
  pauseOnHover = false,
  loop = false,
  round = false,
  className
}) {
  const containerPadding = 16;
  const itemWidth = baseWidth - containerPadding * 2;
  const trackItemOffset = itemWidth + GAP;
  const itemsForRender = useMemo(() => {
    if (!loop) return items;
    if (items.length === 0) return [];
    return [items[items.length - 1], ...items, items[0]];
  }, [items, loop]);

  const [position, setPosition] = useState(loop ? 1 : 0);
  const x = useMotionValue(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isJumping, setIsJumping] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef(null);
  useEffect(() => {
    if (pauseOnHover && containerRef.current) {
      const container = containerRef.current;
      const handleMouseEnter = () => setIsHovered(true);
      const handleMouseLeave = () => setIsHovered(false);
      container.addEventListener('mouseenter', handleMouseEnter);
      container.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        container.removeEventListener('mouseenter', handleMouseEnter);
        container.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [pauseOnHover]);

  useEffect(() => {
    if (!autoplay || itemsForRender.length <= 1) return undefined;
    if (pauseOnHover && isHovered) return undefined;

    const timer = setInterval(() => {
      setPosition(prev => Math.min(prev + 1, itemsForRender.length - 1));
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [autoplay, autoplayDelay, isHovered, pauseOnHover, itemsForRender.length]);

  useEffect(() => {
    const startingPosition = loop ? 1 : 0;
    setPosition(startingPosition);
    x.set(-startingPosition * trackItemOffset);
  }, [items.length, loop, trackItemOffset, x]);

  useEffect(() => {
    if (!loop && position > itemsForRender.length - 1) {
      setPosition(Math.max(0, itemsForRender.length - 1));
    }
  }, [itemsForRender.length, loop, position]);

  const effectiveTransition = isJumping ? { duration: 0 } : SPRING_OPTIONS;

  const handleAnimationStart = () => {
    setIsAnimating(true);
  };

  const handleAnimationComplete = () => {
    if (!loop || itemsForRender.length <= 1) {
      setIsAnimating(false);
      return;
    }
    const lastCloneIndex = itemsForRender.length - 1;

    if (position === lastCloneIndex) {
      setIsJumping(true);
      const target = 1;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    if (position === 0) {
      setIsJumping(true);
      const target = items.length;
      setPosition(target);
      x.set(-target * trackItemOffset);
      requestAnimationFrame(() => {
        setIsJumping(false);
        setIsAnimating(false);
      });
      return;
    }

    setIsAnimating(false);
  };

  const handleDragEnd = (_, info) => {
    const { offset, velocity } = info;
    const direction =
      offset.x < -DRAG_BUFFER || velocity.x < -VELOCITY_THRESHOLD
        ? 1
        : offset.x > DRAG_BUFFER || velocity.x > VELOCITY_THRESHOLD
          ? -1
          : 0;

    if (direction === 0) return;

    setPosition(prev => {
      const next = prev + direction;
      const max = itemsForRender.length - 1;
      return Math.max(0, Math.min(next, max));
    });
  };

  const dragProps = loop
    ? {}
    : {
      dragConstraints: {
        left: -trackItemOffset * Math.max(itemsForRender.length - 1, 0),
        right: 0
      }
    };

  const activeIndex =
    items.length === 0 ? 0 : loop ? (position - 1 + items.length) % items.length : Math.min(position, items.length - 1);

  return (
    <div
      ref={containerRef}
      className={cn(
        'relative overflow-hidden p-4 transition-colors duration-300',
        round
          ? 'rounded-full border border-white'
          : 'rounded-[24px] border border-[#2a2a32] hover:border-accent/25',
        className
      )}
      style={{
        width: `${baseWidth}px`,
        ...(round && { height: `${baseWidth}px` })
      }}
    >
      <motion.div
        className="flex h-full min-h-[300px] items-stretch"
        drag={isAnimating ? false : 'x'}
        {...dragProps}
        style={{
          width: itemWidth,
          gap: `${GAP}px`,
          perspective: 1000,
          perspectiveOrigin: `${position * trackItemOffset + itemWidth / 2}px 50%`,
          x
        }}
        onDragEnd={handleDragEnd}
        animate={{ x: -(position * trackItemOffset) }}
        transition={effectiveTransition}
        onAnimationStart={handleAnimationStart}
        onAnimationComplete={handleAnimationComplete}
      >
        {itemsForRender.map((item, index) => (
          <CarouselItem
            key={`${item?.id ?? index}-${index}`}
            item={item}
            index={index}
            itemWidth={itemWidth}
            round={round}
            trackItemOffset={trackItemOffset}
            x={x}
            transition={effectiveTransition}
          />
        ))}
      </motion.div>
      <div
        className={cn(
          'flex w-full justify-center',
          round ? 'absolute bottom-12 left-1/2 z-20 -translate-x-1/2' : 'mt-5'
        )}
      >
        <div
          className="flex items-center gap-3 px-2"
          role="tablist"
          aria-label="Carousel slides"
        >
          {items.map((_, index) => {
            const isActive = activeIndex === index;
            return (
              <motion.button
                key={index}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={cn(
                  'h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-primary',
                  round
                    ? isActive
                      ? 'bg-white shadow-[0_0_10px_rgba(255,255,255,0.45)]'
                      : 'bg-[#555] hover:bg-white/50'
                    : isActive
                      ? 'bg-accent shadow-[0_0_14px_rgba(102,210,206,0.55)]'
                      : 'bg-white/20 hover:bg-accent/55 hover:shadow-[0_0_8px_rgba(102,210,206,0.25)]'
                )}
                animate={{ scale: isActive ? 1.15 : 1 }}
                whileHover={{ scale: isActive ? 1.15 : 1.12 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setPosition(loop ? index + 1 : index)}
                transition={{ duration: 0.15 }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
